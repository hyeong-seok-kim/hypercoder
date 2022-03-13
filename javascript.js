document.addEventListener('DOMContentLoaded',() => {
    const inputId = document.querySelector('#inputId');
    const inputPassword1 = document.querySelector('#password1')
    const inputPassword2 = document.querySelector('#password2')
    const idHide = document.querySelectorAll('.hide')

    inputId.addEventListener('keyup',()=>{
        if(inputId.value.length <= 4) {
            idHide[0].classList.remove('hide');
        } else {
            idHide[0].classList.add('hide');
        }
    })
    inputPassword2.addEventListener('keyup',()=>{
        if(inputPassword1.value === inputPassword2.value) {
            console.log('a');
            idHide[1].classList.add('hide');
        } else {
            idHide[1].classList.remove('hide');
        }
    })
})