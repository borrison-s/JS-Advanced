function students() {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
  .then(response => response.json())
  .then(data => {
    // all female student names with an average grade of 5

    const femaleWithAverageGradeOf5 = data
        .filter(student => student.gender === 'Female' && student.averageGrade === 5)
        .map(student => `Name: ${student.firstName} Last name: ${student.lastName}`);

    // All male student full names who live in Skopje and are over 18 years old

    const maleFromSkopje18 = data
        .filter(student => student.city === 'Skopje' && student.age >= 18)
        .map(student => `Name: ${student.firstName} lastName: ${student.lastName}`);

    // Get all female students over the age of 24

    const femaleOver24 = data.filter(student => student.gender === 'Female' && student.age > 24);

    // Calculate the average grade of the female students over the age of 24

    const averageGradesOver24 = femaleOver24.length === 0 
      ? 0 
      : femaleOver24.reduce((sum, student) => sum + student.averageGrade, 0) / femaleOver24.length;

    // Sort the students according to Last name (ascending)

    const sortedByLastName = data.sort((a, b) => a.lastName.localeCompare(b.lastName));



  
    console.log("Female with averrage grade of 5:");
    console.log(femaleWithAverageGradeOf5);
    console.log("Male from Skopje over 18 years old");
    console.log(maleFromSkopje18);
    console.log("All female students over the age of 24:");
    console.log(femaleOver24);
    console.log("===========");
    console.log(`Average grades: ${averageGradesOver24}`);
    console.log("Sorted by last name:");
    console.log(sortedByLastName);
  });

}
console.log(students());
// const wantedStudents = students();
// console.log(wantedStudents);

