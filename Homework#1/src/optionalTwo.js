const studentName = document.getElementById('first-name');
const studentLastName = document.getElementById('last-name');
const studentAge = document.getElementById('age');
const studentEmail = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

let student = {
    firstName: '',
    lastName: '',
    age: '',
    email: ''
};

submitBtn.addEventListener('click', () => {
 
    student.firstName = studentName.value;
    console.log(student.firstName);
    student.lastName = studentLastName.value;
    student.age = studentAge.value;
    student.email = studentEmail.value;

    if (!studentName.value) {
        console.log('You must enter a name!');
        return;
    }
    if (!studentLastName.value) {
        console.log('You must enter last name!');
        return;
    }
    if (!studentAge.value) {
        console.log('You must enter age!');
        return;
    }
    if(!studentEmail.value) {
        console.log('You must enter an email!');
    } else {
        console.log(student);  
        return student;
    }
   
    

    studentName.value = '';
    studentLastName.value = '';
    studentAge.value = '';
    studentEmail.value = '';

});
