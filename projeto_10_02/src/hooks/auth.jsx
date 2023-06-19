import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("It's not possible to connect");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      setData({ user, token: data.token });

      alert("Profile updated");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("It's not possible to update");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
