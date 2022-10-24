//primeiro preciso tagar todos elementos q devem ter um event listener

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// console.log(form, username, email, password) //bumbou :)

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInputs();
})

function checkInputs() {
    //pegar os values dos inputs 
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === '') {
        //mostrar erro
        //adicionar error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        //adicionar success class
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'email cannot be blank')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'password cannot be blank')
    } else {
        setSuccessFor(password)
    }
    if(password2Value === '') {
        setErrorFor(password2, 'password check cannot be blank')
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');
    
    //adicionar error message dentro do small
    small.innerText = message

    //adicionar error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //form-control
    formControl.className = 'form-control success'
}