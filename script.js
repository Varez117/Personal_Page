let menuVisible = false;
//funcion que oculta muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true
    }
}
//oculto el menu selecciona una opcion
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false
}
//animaciones a las barras de progreso
function efectohabilidades(){
    var skillls = document.getElementById("Skills");
    var distancia_skills = window.innerHeight - skillls.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("cplusplus");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("office");
        habilidades[4].classList.add("obs");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("pmger");

    }
}

//detectar el scrolling de la animacion
window.onscroll=function(){
    efectohabilidades();
}