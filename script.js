let dia = 1;
let mes = 8;
let anno = new Date().getFullYear();

function cumple(){
    let hoy = new Date();
    let fecha_cumple = new Date(anno,mes,dia);
    let fecha_prueba = new Date("2024-09-02");
    let diferencia = fecha_cumple - fecha_prueba;
    let dias = diferencia / (1000 * 60 * 60 * 24);
    let rendondeado = Math.ceil(dias)
    if(rendondeado == 0){

    }
    else{
        if (rendondeado<0){
            rendondeado = rendondeado * -1;
        }
        console.log(rendondeado);
        let elemento = document.getElementById("fecha");
        elemento.innerHTML = rendondeado + " días restantes";
    }
}

cumple()