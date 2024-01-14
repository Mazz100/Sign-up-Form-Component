const sign_form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.querySelector('#lastname');
const emailAddress = document.querySelector('#email');
const password = document.querySelector('#password');
const claimedText = document.querySelector('#claimed-text');
//Error messages
const firstnameError = document.querySelector('#firstname-error');
const lastnameError = document.querySelector('#lastname-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');


//Regex for email
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;

// Email regex vaidation
function EmailValidate(){
    if (emailAddress.value.trim() == '' || !emailRegex.test(emailAddress.value)) {
        emailAddress.style.borderColor = 'hsl(0, 100%, 74%)';
        emailError.innerHTML = 'Looks like this is not an email';
        emailAddress.classList.add('error-icon');
    }
}

sign_form.addEventListener("submit", submission => {
    submission.preventDefault();


    //Validate Test
    EmailValidate();

    if (firstName.value.trim() == '') {
        firstName.style.borderColor = 'hsl(0, 100%, 74%)';
        firstnameError.innerHTML = 'First Name cannot be empty';
        firstName.classList.add('error-icon');
    }

    if (lastName.value.trim() == '') {
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
        lastnameError.innerHTML = 'Last Name cannot be empty';
        lastName.classList.add('error-icon');
    }

    if (password.value.trim() == '') {
        password.style.borderColor = 'hsl(0, 100%, 74%)';
        passwordError.innerHTML = 'Password cannot be empty';
        password.classList.add('error-icon');
    }

})


sign_form.addEventListener("input", input => {
    //Remove errors when user insert data
    if (firstName.value.trim() !== '') {
        firstnameError.innerHTML = '';
        firstName.classList.remove('error-icon');
        firstName.style.borderColor = 'hsla(0, 0%, 75%, 0.7)';;
    }

    if (lastName.value.trim() !== '') {
        lastnameError.innerHTML = '';
        lastName.classList.remove('error-icon');
        lastName.style.borderColor = 'hsla(0, 0%, 75%, 0.7)';
    }

    if (password.value.trim() !== '') {
        passwordError.innerHTML = '';
        password.classList.remove('error-icon');
        password.style.borderColor = 'hsla(0, 0%, 75%, 0.7)';
    }

    if (emailAddress.value.trim() !== '') {
        emailError.innerHTML = '';
        emailAddress.style.borderColor = 'hsla(0, 0%, 75%, 0.7)';
        emailAddress.classList.remove('error-icon');
    }

})