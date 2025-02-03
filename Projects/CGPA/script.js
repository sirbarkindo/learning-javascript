function addCourse() {
  const courseInputs = document.getElementById("courseInputs");

  const courseDiv = document.createElement("div");
  courseDiv.className = "course";

  const creditUnitInput = document.createElement("input");
  creditUnitInput.type = "number";
  creditUnitInput.placeholder = "Credit Unit";
  creditUnitInput.required = true;

  const gradeSelect = document.createElement("select");
  gradeSelect.required = true;
  const grades = ["A", "B", "C", "D", "E", "F"];
  grades.forEach((grade) => {
    const option = document.createElement("option");
    option.value = grade;
    option.text = grade;
    gradeSelect.appendChild(option);
  });

  courseDiv.appendChild(creditUnitInput);
  courseDiv.appendChild(gradeSelect);
  courseInputs.appendChild(courseDiv);
}

function calculateCGPA() {
  const courses = document.querySelectorAll(".course");
  let totalCreditUnits = 0;
  let totalGradePoints = 0;

  courses.forEach((course) => {
    const creditUnit = parseFloat(course.querySelector("input").value);
    const grade = course.querySelector("select").value;

    let gradePoint;
    switch (grade) {
      case "A":
        gradePoint = 5;
        break;
      case "B":
        gradePoint = 4;
        break;
      case "C":
        gradePoint = 3;
        break;
      case "D":
        gradePoint = 2;
        break;
      case "E":
        gradePoint = 1;
        break;
      case "F":
        gradePoint = 0;
        break;
      default:
        gradePoint = 0;
    }

    totalCreditUnits += creditUnit;
    totalGradePoints += creditUnit * gradePoint;
  });

  const cgpa = totalGradePoints / totalCreditUnits;
  document.getElementById("result").innerText = `Your CGPA is: ${cgpa.toFixed(
    2
  )}`;
}
