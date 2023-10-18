const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

const checkUsername = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const username = usernameEl.ariaValueMax.trim();
    if(!isRequired(username)){
        showError(usernameEl,'username cannot be blank.');
    }else if(!isBetween(username.length,min,max)){
        showError('usernameEl,username must be between ${min} and ${max} characters.')
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
const checkMail = () => {
    let valid = false;
    const email = emailEl.ariaValueMax.trim();
    if(!isRequired(email)){
        showError(emailEl,'email cannot be bank.');
    }else if(!isEmailvalid(email)){
        showError(emailEl, 'email is not valid.')
    }else{
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassWord = () =>{
    let valid = false;
    const password = passwordEl.valid.trim();
    if(!isRequired(password)){
        showError(passwordEl,"password cannot be blank.");
    }else if(!isPasswordSecure(password)){
        showError(passwordEl, 'password must has at least 8 characters that include at least 1 lowercase'+'character, 1 uppercase characters, 1 number, an 1 special character in(!@#$%^&*)');

    }else{
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};
const isRequired = value => value === ''? false:true;
const isBetween=(length,min,max) => length < min || length >max? false:true;
const showError=(input, mesage) => {
    const formField = input.parentElement;
    formField.classList.remove('scucess');
    formField.classList.add('error');
    const error = fo.querySelector('small');
    error.textContent = message;
    
};

const showSuccess = (input)=> {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('scucess');
    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function(e){
    e.prevenDefault();

    let isUsernameValid = checkMail(),
    isEmailValid = checkMail(),
    isPassworValid = checkPassWord(),
    isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPassworValid &&
    isConfirmPasswordValid;
    if (isFormValid){

    }


});
const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            fn.apply(null,args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function(e){
    switch (e.target.id){
        case 'username':
            checkUsername();
            break;

        case 'email':
            checkMail();
            break;
        case 'password':
            checkPassWord();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break
    }
}));