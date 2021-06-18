// Definiendo arreglo de errores
var arreglo = new Array();
arreglo[0] = "errorNota1";
arreglo[1] = "errorNota2";
arreglo[2] = "errorNota3";
arreglo[3] = "errorNota4";
arreglo[4] = "errorExamen";

var entrada = new Array();

function validar() {
    //var entrada = new Array();
    entrada[0] = document.getElementById('nota1').value;
    entrada[1] = document.getElementById('nota2').value;
    entrada[2] = document.getElementById('nota3').value;
    entrada[3] = document.getElementById('nota4').value;
    entrada[4] = document.getElementById('examen').value;

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese Nota parcial 1</span>";
    error[1] = "<span style='color: red'>Ingrese Nota parcial 2</span>";
    error[2] = "<span style='color: red'>Ingrese Nota parcial 3</span>";
    error[3] = "<span style='color: red'>Ingrese Nota parcial 4</span>";
    error[4] = "<span style='color: red'>Ingrese Examen</span>";
    error[5] = "<span style='color: red'>Ingrese una nota válida</span>";

    //Definiendo un ciclo forech
    for (i in entrada) {
        var mensajeError = error[i]
        var valorArreglo = arreglo[i]
        //Validando campo requerido
        if (entrada[i] == "") {
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        } else if (entrada[i] < 1 || entrada[i] > 7) {
            document.getElementById(valorArreglo).innerHTML = error[5];
        }
        else {
            document.getElementById(valorArreglo).innerHTML = "✓";
        }
    }
}

function validarTodos() {
    var contador = 0;
    for (i = 0; i < 5; i++) {
        var valorArreglo = arreglo[i];
        if (document.getElementById(valorArreglo).innerHTML == "✓") {
            contador++;
        }
    }
    if (contador == 5) {
        var parciales = (parseFloat(entrada[0]) + parseFloat(entrada[1]) + parseFloat(entrada[2]) + parseFloat(entrada[3])) / 4;
        var notafinal = parciales * 0.6 + parseFloat(entrada[4]) * 0.4
        document.getElementById('promedioParciales').innerHTML = parciales;
        document.getElementById('promedioFinal').innerHTML = notafinal;
        if (notafinal >= 4 && parciales >= 4) {
            document.getElementById('estado').innerHTML = "Aprueba";
        } else {
            document.getElementById('estado').innerHTML = "Reprueba";
        }

    }
}