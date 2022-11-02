let hamburgerButton = document.querySelector('#hamburgerMenu');
let menu = document.querySelector('#menu');
let reservaButton = document.querySelector('#submitButtonReserva');
let deliveryButton = document.querySelector('#submitButtonDelivery');
let isShowed = false;

let errorNombreDiv = document.querySelector('#nameError');
let errorComensalesDiv = document.querySelector('#comensalesError');
let errorDireccionDiv = document.querySelector('#direccionError');
let errorDiaDiv = document.querySelector('#diaError');
let errorHoraDiv = document.querySelector('#horaError');

showOrHideMenu = () =>{
    if(!isShowed){
        menu.classList.add('showed');
        isShowed = true;
    } else{
        menu.classList.remove('showed');
        isShowed = false;
    }
}

validateReserveForm = () =>{
    errorNombreDiv.classList.remove('showed');
    errorComensalesDiv.classList.remove('showed');
    errorDiaDiv.classList.remove('showed');
    errorHoraDiv.classList.remove('showed');

    let nombre = document.getElementById('nombre').value;

    let comensales = document.getElementById('comensales').value;
    let dia = document.getElementById('dia').value;
    let hora = document.getElementById('hora').value;

    let errors = false;
    if(nombre == ''){
        errorNombreDiv.classList.add('showed');
        errors = true;
    }
    if(comensales == '' || comensales < 0){
        errorComensalesDiv.classList.add('showed');
        errors = true;
    }
    if(dia == ''){
        errorDiaDiv.classList.add('showed');
        errors = true;
    }
    if(hora == ''){
        errorHoraDiv.classList.add('showed');
        errors = true;
    }
    if(errors){
        event.preventDefault();
    } else{
        return true;
    }
}

const food = {
    "0" : {
        "name" : "Galletas",
        "description" : "Galletas de chocolate",
        "precio" : '3€',
        "urlImagen" : './assets/galletas.jpeg',
    },
    "1" : {
        "name" : "Galletas",
        "description" : "Galletas de chocolate",
        "precio" : '3€',
        "urlImagen" : './assets/galletas.jpeg',
    },
    "2" : {
        "name" : "Galletas",
        "description" : "Galletas de chocolate",
        "precio" : '3€',
        "urlImagen" : './assets/galletas.jpeg',
    },
    "3" : {
        "name" : "Galletas",
        "description" : "Galletas de chocolate",
        "precio" : '3€',
        "urlImagen" : './assets/galletas.jpeg',
    },
}

createSlider = () =>{
    let sliderContainer = document.querySelector('#slider');
    for(let i in food){
        let card = document.createElement("div");
        card.classList.add("commandCard");

        let cardImage = document.createElement("img");
        cardImage.src = food[i].urlImagen;

        let cardTitle = document.createElement("h5");
        let titleText = document.createTextNode(`${food[i].name}`);
        cardTitle.appendChild(titleText);

        let cardBody = document.createElement("p");
        let bodyText = document.createTextNode(food[i].description);
        cardBody.appendChild(bodyText);

        let commandprize = document.createElement("p");
        let prizeText = document.createTextNode(food[i].precio);
        commandprize.appendChild(prizeText);

        let commandButton = document.createElement("div");
        commandButton.classList.add('commandButton')
        let buttonText = document.createTextNode("Pedir");
        commandButton.appendChild(buttonText);
        commandButton.addEventListener('click', addToCommand(i))

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        card.appendChild(commandprize);
        card.appendChild(commandButton);
        sliderContainer.appendChild(card)
    }
}

let addToCommand = (id) =>{
    console.log(id);
}

validateDeliveryForm = () =>{
    errorNombreDiv.classList.remove('showed');
    errorDireccionDiv.classList.remove('showed');
    errorDiaDiv.classList.remove('showed');
    errorHoraDiv.classList.remove('showed');

    let nombre = document.getElementById('nombre').value;

    let direccion = document.getElementById('direccion').value;
    let dia = document.getElementById('dia').value;
    let hora = document.getElementById('hora').value;

    let errors = false;
    if(nombre == ''){
        errorNombreDiv.classList.add('showed');
        errors = true;
    }
    if(direccion == ''){
        errorDireccionDiv.classList.add('showed');
        errors = true;
    }
    if(dia == ''){
        errorDiaDiv.classList.add('showed');
        errors = true;
    }
    if(hora == ''){
        errorHoraDiv.classList.add('showed');
        errors = true;
    }
    if(errors){
        event.preventDefault();
    } else{
        return true;
    }
}

window.onload = () => {
    hamburgerButton.addEventListener('click', showOrHideMenu);
    if(reservaButton != null)
        reservaButton.addEventListener('click', validateReserveForm);
    if(deliveryButton != null){
        deliveryButton.addEventListener('click', validateDeliveryForm);
        createSlider();
    }

}
