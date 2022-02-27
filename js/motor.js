var estado = 'apagado';
var sonido = document.getElementById("blender-sound");
var btn = document.getElementById("blender-button-sound");
var licuadora =  document.getElementById("blender");

function controlarLicuadora(){
    if(estado == 'apagado'){
        estado = 'encendido';
        licuadora.classList.add("active");
        ruido();
    } else {
        estado = 'apagado';
        licuadora.classList.remove("active");
        ruido();
    }
}

function ruido(){
    if(sonido.paused){
        sonido.play();
        btn.play();
    }else{
        btn.play();
        sonido.pause();
        sonido.currentTime = 0;
    }
}

