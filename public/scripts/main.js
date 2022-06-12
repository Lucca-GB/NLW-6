import Modal from './modal.js'

const modal = Modal()

//pegar todos os botoes que existe com a classe CHECK
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
        //adicionar a 'escuta'
        button.addEventListener("click", event => {
                //abrir modal
                modal.open()
        })
})



//quando delete for pressionado -> abre modal
const deleteButton  = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
        button.addEventListener("click", event => {
                modal.open()
        })
})