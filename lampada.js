const turnOn = document.getElementById('turnOn');
const turnOff = docment.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = 'img/ligada.jpg';
}

turnOn.addEventListener('click', lampOn);