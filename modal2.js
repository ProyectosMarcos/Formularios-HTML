const btnAbrirModal2 = 
document.querySelector("#btn-abrir-modal");
const btnCerrarModal2 =
document.querySelector("#btn-cerrar-modal");
const modal2 = 
document.querySelector("#modal2");

btnAbrirModal2.addEventListener("click",()=>{
    modal2.showModal();


})
btnCerrarModal2.addEventListener("click",()=>{
    modal2.close();
})

