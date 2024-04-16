// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const surnameInput = document.getElementById('surname');
// const emailInput = document.getElementById('email');
// const dateInput = document.getElementById('date');
// const timeInput = document.getElementById('time');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInput();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInput = () => {
//     const nameValue = nameInput.value.trim();
//     const surnameValue = surnameInput.value.trim();
//     const emailValue = emailInput.value.trim();
//     const dateValue = dateInput.value.trim();
//     const timeValue = timeInput.value.trim();

//     if (nameValue === '') {
//         setError(nameInput, 'Firstname is required');
//     } else {
//         setSuccess(nameInput);
//     }

//     if (surnameValue === '') {
//         setError(surnameInput, 'Lastname is required');
//     } else {
//         setSuccess(surnameInput);
//     }

//     if (emailValue === '') {
//         setError(emailInput, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(emailInput, 'Provide a valid email address');
//     } else {
//         setSuccess(emailInput);
//     }

//     if (dateValue === '') {
//         setError(dateInput, 'Date is required');
//     } else {
//         setSuccess(dateInput);
//     }

//     if (timeValue === '') {
//         setError(timeInput, 'Time is required');
//     } else {
//         setSuccess(timeInput);
//     }
// }
