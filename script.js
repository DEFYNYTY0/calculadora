let num1;
let num2;
let total;

function entrada(){
    num1 = Number(document.getElementById('n1').value);
    num2 = Number(document.getElementById('n2').value);
}

function somar(){
    entrada()
total = document.getElementById("resultado");
total.innerHTML = num1 + num2;

}

function subtrair(){
   entrada()
total = document.getElementById("resultado");
total.innerHTML = num1 - num2;

}

function multiplicar(){
entrada()
total = document.getElementById("resultado");
total.innerHTML = num1 * num2;

}

function dividir(){
    entrada()

total = document.getElementById("resultado");
total.innerHTML = num1 / num2;

}

function limpar(){
total = document.getElementById("resultado");
total.innerHTML="";
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}