// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado()
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//Codifo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aqui interactuamos con el HTML
// Funciones cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones Triangulo
function calcularPerimetroTriangulo() {
    const lado_1 = document.getElementById("InputTrianguloLado1");
    const value1 = +lado_1.value;

    const lado_2 = document.getElementById("InputTrianguloLado2");
    const value2 = +lado_2.value;

    const base = document.getElementById("InputTrianguloBase");
    const value3 = +base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase");
    const value3 = +base.value;

    const altura = document.getElementById("InputTrianguloAltura");
    const value4 = +altura.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

// Funciones Circulo
function calcularCircunferencia() {
    const radio = document.getElementById("InputRadioCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputRadioCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}


//Funcion altura triangulo isoceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        alert("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


function calcularAlturaTrianguloIsosceles() {
    const lado_A = document.getElementById("trianguloGrandeLadoA");
    const value_ladoA = lado_A.value;

    const lado_B = document.getElementById("trianguloGrandeLadoB");
    const value_ladoB = lado_B.value;

    const base = document.getElementById("trianguloGrandeBase");
    const value_base = base.value;
    
    const altura = alturaTrianguloIsosceles(value_ladoA, value_ladoB, value_base);
    alert(altura);
}