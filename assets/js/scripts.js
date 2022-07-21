const buttonAdicionar = document.getElementById("container__button-adicionar");
const itensAdicionados = document.getElementById("container__form-itens--adicionar");
const textoTarefa = document.getElementsByClassName("container__input-adicionar");
    

buttonAdicionar.addEventListener('click', addItem);

var contadorItens = 0
var strTarefa
function addItem() {
    strTarefa = textoTarefa[0].value
    console.log(strTarefa)
    itensAdicionados.innerHTML = "<li id = '" + strTarefa + "LI' + class='container__itens hide'><input type='checkbox' id='" + strTarefa + "' class='container__input-itens'><label for='" + strTarefa + "' class='container__label-itens'>" + strTarefa + "</label></li>" + itensAdicionados.innerHTML;
    var item = document.getElementById(strTarefa + "LI");
    item.classList.remove("hide");
    item.classList.add("show");
    buttonAdicionar.disabled = true;
    setTimeout(function() {
        
        item.classList.remove("show");
        buttonAdicionar.disabled = false;
    }, 1100)
    console.log(item)
};