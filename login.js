const myForm = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(emailInput.value === '' || passwordInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);


    } else{
        alert('success');
    }
}
