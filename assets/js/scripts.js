const buttonAdicionar = document.getElementById("container__button-adicionar");
const itensAdicionados = document.getElementById("container__form-itens--adicionar");
const textoTarefa = document.getElementsByClassName("container__input-adicionar");
    

buttonAdicionar.addEventListener('click', addItem);

var strTarefa
var contadorItens = 0
function addItem() {
    strTarefa = textoTarefa[0].value
    console.log("passei por aqui")
    itensAdicionados.innerHTML += "<li id = '" + strTarefa + "' class='container__itens hide'><input type='checkbox' id='" + strTarefa + "' class='container__input-itens'><label for='" + strTarefa + "' class='container__label-itens'>" + strTarefa + "</label></li>";
    console.log("passei por aqui")
    var item = document.getElementById(strTarefa)
    //.classList.add("show")
    console.log(item)
    contadorItens += 1;
};