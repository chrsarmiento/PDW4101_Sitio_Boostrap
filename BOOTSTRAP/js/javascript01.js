function apagarLaLuz() {
    document.body.style.backgroundColor = '#343a40';
    document.body.style.color = "#ffffff";
}

function saludar() {
    var fecha = new Date();
    document.getElementById('saludo').innerHTML = "Hola hoy es " + fecha;

    var tiempo = setTimeout(function() {saludar()}, 1000);
}

function sumar() {
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = valor1 + " + " + valor2 + " = " + (valor1+valor2);
}

function restar() {
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = valor1 + " - " + valor2 + " = " + (valor1-valor2);
}

//Consumir API mindicador.cl
$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open ('GET','https://mindicador.cl/api',true);
    xmlHttp.send();

    var uf = 0;
    var dolar = 0;
    var euro = 0;

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            uf = data.uf.valor;
            dolar = data.dolar.valor;
            euro = data.euro.valor;
        }
        document.getElementById("valorUF").innerHTML = "Valor actual " + data.uf.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(uf);
        document.getElementById("valorDolar").innerHTML = "Valor actual " + data.dolar.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dolar);
        document.getElementById("valorEuro").innerHTML = "Valor actual " + data.euro.nombre + " : " + new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(euro);
    };
});