const form=document.querySelector('#form')
const userName=document.querySelector('#userName')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const passwordAgain=document.querySelector('#passwordAgain')

userName.addEventListener('input',validateUserName);
password.addEventListener('input',validatePassword);
email.addEventListener('input',validateEmail);
passwordAgain.addEventListener('input',validatePasswordAgain);

function validatePassword(){
    if(password.value===''){
        setError(password,'Password cant be empty!');
    }
    else if(password.value.length<8){
        setError(password,'Password must be of 8 character');
    }
    else{
        setSuccess(password);
        return true;
    }
    validatePasswordAgain();
}
function validateUserName(){
    if(userName.value===''){
        setError(userName,'Username is required!');
    }
    else{
        setSuccess(userName);
        return true;
    }
}
function validatePasswordAgain(){
    if(password.value===''){
        if(passwordAgain!==''){
            setError(passwordAgain,'Enter a password first!')
        }
    }
    else if(passwordAgain.value===''){
        setError(passwordAgain,'Please re-enter the password')
    }
    else if(password.value!==passwordAgain.value){
        setError(passwordAgain,'Password didnt match!')
    }
    else{
        setSuccess(passwordAgain);
        return true;
    }
}
function validateEmail(){
    if(email.value===''){
        setError(email,'Email cant be empty!');
    }
    else if(!validateEmailRegx(email.value)){
        setError(email,'Invalid email!');
    }
    else{
        setSuccess(email);
        return true;
    }
}


form.addEventListener('submit',(e)=>{
    if(!validateForm()){
        e.preventDefault()
    }
})

function setError(element,message){
    const inputControl=element.parentElement;//returns parent element
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
}
function setSuccess(element){
    const inputControl=element.parentElement;
    const success=inputControl.querySelector('.error');
    success.innerText='';
}
function validateEmailRegx(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(){
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordAgainValid = validatePasswordAgain();
    const isUserNameValid = validateUserName();
    if(isEmailValid && isPasswordValid && isPasswordAgainValid && isUserNameValid){
        return true;
    }
}