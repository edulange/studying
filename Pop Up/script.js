// a exibição do popup depende de um click no botão
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = "block"
})


popup.addEventListener('click', (e) => {
    console.log(e.target)
    //popup.style.display = 'none'
})

