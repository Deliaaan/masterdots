//Inicializacion de objetos
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

//Funciones de evento 
function comprobarForm(event){
    //Comprobar
    if (nickInput.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText = "Tu nick no puede comenzar con un numero";
        return false;
    }else if (tamanoInput.value == "0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar un tamano de panel";
        return false;
    }
    return false;
}

//Inicion de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);