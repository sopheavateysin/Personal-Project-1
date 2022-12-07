const openZero = document.querySelector('.closed');
const openFirst = document.querySelector('.open-1');
const openSecond = document.querySelector('.open-2');
const openThird = document.querySelector('.open-3');
const openFourth = document.querySelector('.open-4');
const openFifth = document.querySelector('.open-5');

//add event listener

openZero.addEventListener('click', () => {
    if(openFirst.classList.contains('open-1')) {
        openFirst.classList.add('active');
        openZero.classList.remove('active');
    }
})


openFirst.addEventListener('click', () => {
    if(openSecond.classList.contains('open-2')) {
        openSecond.classList.add('active');
        openFirst.classList.remove('active');
    }
    
})

openSecond.addEventListener('click', () => {
    if(openThird.classList.contains('open-3')) {
        openThird.classList.add('active');
        openSecond.classList.remove('active');
    }
})

openThird.addEventListener('click', () => {
    if(openFourth.classList.contains('open-4')) {
        openFourth.classList.add('active');
        openThird.classList.remove('active');
    }
})
openFourth.addEventListener('click', () => {
    if(openFifth.classList.contains('open-5')) {
        openFifth.classList.add('active');
        openFourth.classList.remove('active');
    }
})



