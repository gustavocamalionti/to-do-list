const buttonAdicionar = document.getElementById("container__button-adicionar");
const itensAdicionados = document.getElementById("container__form-itens--adicionar");
const textoTarefa = document.getElementsByClassName("container__input-adicionar");
    

buttonAdicionar.addEventListener('click', addItem);

var contadorItens = 0
var strTarefa
function addItem() {
    strTarefa = textoTarefa[0].value.trim()
    if (strTarefa != "") {
        textoTarefa[0].value ="";
        itensAdicionados.innerHTML = "<li id = '" + contadorItens + "LI' + class='container__itens hide'><input type='checkbox' id='" + contadorItens + "' class='container__input-itens'><label for='" + contadorItens + "' class='container__label-itens'>" + strTarefa + "</label></li>" + itensAdicionados.innerHTML;
        var item = document.getElementById(contadorItens + "LI");
        
        item.classList.remove("hide");
        item.classList.add("show");
        buttonAdicionar.disabled = true;
        setTimeout(function() {
            item.classList.remove("show");
            buttonAdicionar.disabled = false;
        }, 1100)

        contadorItens += 1
        } 
    
};