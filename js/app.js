
const suma = (numero_uno, numero_dos) => {
    return numero_uno + numero_dos;
}


const resta = (numero_uno, numero_dos) => {
    return numero_uno - numero_dos;
}

const multiplicacion=(numero_uno,numero_dos)=>{
    return numero_uno*numero_dos;
}
const division=(numero_uno,numero_dos)=>{
    return numero_uno/numero_dos;
}
const raiz=(num)=>{
    return Math.sqrt(num)
}
const potencia=(numero_uno,numero_dos)=>{
    return numero_uno**numero_dos
}
const porcentaje=(numero_uno,numero_dos)=>{
    return numero_dos*(numero_uno/100)
}
const binario=(decimal)=> {
    if (isNaN(decimal) || decimal < 0 || !Number.isInteger(decimal)) {
        return "Número no válido";
    }

    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}
const decimal=(numero)=>{
    return parseInt(numero,2)
}


document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll("input[type='button']");
    pantalla = document.querySelector(".text");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valorBoton = boton.value;
            if (valorBoton === "=") {
                const contenido = pantalla.value;
                if (contenido.includes("+")) {
                    const numeros = contenido.split("+");
                    let numero_uno = parseInt(numeros[0]);
                    let numero_dos = parseInt(numeros[1]);
                    const resultado = suma(numero_uno, numero_dos);
                    pantalla.value = resultado;
                } else if (contenido.includes("-")) {
                    const numeros = contenido.split("-");
                    let numero_uno = parseInt(numeros[0]);
                    let numero_dos = parseInt(numeros[1]);
                    const resultado = resta(numero_uno, numero_dos);
                    pantalla.value = resultado;
                }else if (contenido.includes("x")) {
                    const numeros = contenido.split("x");
                    let numero_uno = parseInt(numeros[0]); 
                    let numero_dos = parseInt(numeros[1]); 
                    const resultado = multiplicacion(numero_uno, numero_dos); 
                    pantalla.value = resultado; 
                }else if (contenido.includes("÷")) {
                    const numeros = contenido.split("÷");
                    let numero_uno = parseInt(numeros[0]); 
                    let numero_dos = parseInt(numeros[1]); 
                    const resultado = division(numero_uno, numero_dos); 
                    pantalla.value = resultado; 
                }else if(contenido.includes("√")){
                    const numero = contenido.substring(1);
                    const num = parseFloat(numero);
                    const resultado = raiz(num);
                    pantalla.value = resultado;
                }else if(contenido.includes("sin")) {
                    const numero = parseFloat(contenido.replace("sin", ""));
                    const resultado = Math.sin((numero));
                    pantalla.value = resultado;
                }else if(contenido.includes("cos")) {
                    const numero = parseFloat(contenido.replace("cos", ""));
                    const resultado = Math.cos((numero));
                    pantalla.value = resultado;
                }else if(contenido.includes("tan")) {
                    const numero = parseFloat(contenido.replace("tan", ""));
                    const resultado = Math.tan((numero));
                    pantalla.value = resultado;
                }else if (contenido.includes("^")) {
                    const numeros = contenido.split("^");
                    let numero_uno = parseInt(numeros[0]); 
                    let numero_dos = parseInt(numeros[1]); 
                    const resultado = potencia(numero_uno, numero_dos); 
                    pantalla.value = resultado; 
                }else if (contenido.includes("%")) {
                    const numeros = contenido.split("%");
                    let numero_uno = parseInt(numeros[0]); 
                    let numero_dos = parseInt(numeros[1]); 
                    const resultado = porcentaje(numero_uno, numero_dos); 
                    pantalla.value = resultado; 
                }else if(contenido.includes("bin")){
                    const numero = parseFloat(contenido.replace("bin", ""));
                    const resultado = (binario(numero));
                    pantalla.value = resultado;
                }else if (contenido.includes("dec")){
                    const numero = pantalla.value
                    const resultado=decimal(numero)
                    pantalla.value=resultado
                }
                
            } else if (valorBoton === "c") {
                pantalla.value = "";
            } else {
                pantalla.value += valorBoton;
            }
        });
    });
});
