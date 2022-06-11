nombreFamilias = ["LIMONERO", "MANZANO", "NARANJO", "CEREZO", "MANDARINO", "DURAZNERO"]



    
function agregarPlanta(){
    const familiaIngresada = document.getElementById("nombreComun").value.toUpperCase()
    const formularioPlanta = document.querySelector('#formularioPlanta')
    const formularioFamilia = document.querySelector('#formularioFamilia')
    const ingresoCorrectoPlanta = document.querySelector('#ingresoCorrectoPlanta')

    if(nombreFamilias.includes(familiaIngresada)){
        alert("Se ingresó correctamente la planta")
        ingresoCorrectoPlanta.style.display = ''
    }
    else{
        alert("La familia " + familiaIngresada + " no existe, ingrese la familia, por favor")
        formularioPlanta.style.display = 'none'
        formularioFamilia.style.display = ''
    }
}

function agregarFamilia(){
    const familiaIngresada = document.getElementById("nombreFamilia").value.toUpperCase()
    const ingresoCorrectoFamilia = document.querySelector('#ingresoCorrectoFamilia')
    const formularioFamilia = document.querySelector('#formularioFamilia')
    const formularioPlanta = document.querySelector('#formularioPlanta')

    if(familiaIngresada == '' || nombreFamilias.includes(familiaIngresada)){
        alert("Nombre de familia incorrecto")
    }
    else{
        ingresoCorrectoFamilia.style.display = ''
        formularioFamilia.style.display = 'none'
        formularioPlanta.style.display = ''
    }

}
