function generarTabla() {
    //Obtener la refencia del lugar donde dejaremos la tabla
    var tabla_usuarios = document.getElementById("tabla_random_user");

    //Crear los elementos <table>, <thead> y <tbody>
    var tabla = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //Crear los encabezados de la tabla
    var encabezados = ["Código","Nombre","Email","País","Edad","Género"];
    var filaHead = document.createElement("tr");
    for (var i = 0; i < encabezados.length; i++) 
    {
        //Crear una celda
        var celdaHead = document.createElement("th");
        var textoCelda = document.createTextNode(encabezados[i]);
        celdaHead.appendChild(textoCelda);
        filaHead.appendChild(celdaHead);
    }
    thead.appendChild(filaHead);

    //Cargar los datos de la API externa y armar el contenido de la tabla
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open ('GET','https://randomuser.me/api/?results=10',true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //Crear la fila para cada registro que obtuvismo
            for (var i = 0; i < data.results.length; i++) 
            {
                //Crear la fila
                var filaBody = document.createElement("tr");

                //Crear la celda para el código
                var celdaCodigo = document.createElement("td");
                var textoCodigo = document.createTextNode(i+1);
                celdaCodigo.appendChild(textoCodigo);
                filaBody.appendChild(celdaCodigo);
                tbody.appendChild(filaBody);
                //Crear la celda para el nombre
                var celdaNombre = document.createElement("td");
                var textoNombre = document.createTextNode(data.results[i].name.first + " " + data.results[i].name.last);
                celdaNombre.appendChild(textoNombre);
                filaBody.appendChild(celdaNombre);
                tbody.appendChild(filaBody);

                //Crear la celda para el email
                var celdaEmail = document.createElement("td");
                var textoEmail = document.createTextNode(data.results[i].email);
                celdaEmail.appendChild(textoEmail);
                filaBody.appendChild(celdaEmail);
                tbody.appendChild(filaBody);

                //Crear la celda para el país
                var celdaPais = document.createElement("td");
                var textoPais = document.createTextNode(data.results[i].location.country);
                celdaPais.appendChild(textoPais);
                filaBody.appendChild(celdaPais);
                tbody.appendChild(filaBody);

                //Crear la celda para el edad
                var celdaEdad = document.createElement("td");
                var textoEdad = document.createTextNode(data.results[i].dob.age);
                celdaEdad.appendChild(textoEdad);
                filaBody.appendChild(celdaEdad);
                tbody.appendChild(filaBody);

                //Crear la celda para el genero
                var celdaGenero = document.createElement("td");
                var genero = data.results[i].gender;
                var textoGenero = (genero == 'male')?document.createTextNode("Masculino"):document.createTextNode("Femenino");
                celdaGenero.appendChild(textoGenero);
                filaBody.appendChild(celdaGenero);
                tbody.appendChild(filaBody);
            }
        }
    };

    //Agrega la fila de encabezados a la tabla
    tabla.appendChild(thead);

    //Agregar las filas de contenido a la tabla
    tabla.appendChild(tbody);

    //Mostrar la tabla
    tabla_usuarios.appendChild(tabla);

    //Aplicar clases de bootstrap
    tabla.setAttribute("class","table table-bordered");
    thead.setAttribute("class","thead-dark text-center")
    tbody.setAttribute("id","datos_tabla");
}


//Filtrado automático sobre la tabla
$(document).ready(function() {
    $("#texto_buscado").on("keyup", function() {
        var texto = $(this).val().toLowerCase();
        $("#datos_tabla tr").filter (function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(texto) > -1)
        });
    });
});