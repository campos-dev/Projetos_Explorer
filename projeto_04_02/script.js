let studentList = [
  {
    name: "Paul",
    firstGrade: 7,
    secondGrade: 6,
  },
  {
    name: "Mary",
    firstGrade: 8,
    secondGrade: 7,
  },
  {
    name: "Phillip",
    firstGrade: 4,
    secondGrade: 3,
  },
];

function gradeAverage(firstGrade, secondGrade) {
  let average = ((firstGrade + secondGrade) / 2).toFixed(1);
  return average;
}

for (student of studentList) {
  let studentAverage = gradeAverage(student.firstGrade, student.secondGrade);

  if (studentAverage >= 7) {
    alert(
      `${student.name}'s average grade is: ${studentAverage}

Congratulations ${student.name}, you are approved!
        `
    );
  } else {
    alert(
      `${student.name}'s average grade is: ${studentAverage}

Unfortunatelly you didn't reached the minimum score. 
You need to retake the final exam, ${student.name}. 
        `
    );
  }
}
