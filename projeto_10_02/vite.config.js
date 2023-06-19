import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//set vite to localhost
// import dns from "dns";
// dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //set port
  // server: {
  //   port: 3000,
  // },
});
