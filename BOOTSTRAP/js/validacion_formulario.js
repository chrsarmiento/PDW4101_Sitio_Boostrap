$(function() {
    $("#mi_formulario").validate( {
        rules:
        {
            rut:
            {
                required:true,
            },
            nombre:
            {
                required:true,
                minlength:3,
                maxlength:50,
            },
            fecha_nac:
            {
                required:true,
            },
            email:
            {
                email:true,
                required:true,
                minlength:6,
                maxlength:50,
            },
            password:
            {
                required:true,
                minlength:6,
                maxlength:15
            },
            confirm_password:
            {
                required:true,
                equalTo:"#password",
            },
            comentarios:
            {   
                required:true,
            }
        },
        messages:
        {
            rut:
            {
                required:"Debes ingresar tu rut.",
            },
            nombre:
            {
                required:"Debes ingresar tu nombre.",
                minlength:"Debes ingresar al menos 3 caracteres.",
                maxlength:"El nombre ingresado excede el largo permitido.",
            },
            fecha_nac:
            {
                required:"Debes ingresar tu fecha de nacimiento.",
            },
            email:
            {
                email:"Email ingresado no tiene un formato válido.",
                required:"Debes ingresar tu email",
                minlength:"El email ingresado no tiene el largo mínimo requerido",
                maxlength:"El email ingresado excede el largo máximo permitido",
            },
            password:
            {
                required:"Debes ingresar una contraseña",
                minlength:"La contraseña debe contener entre 6 a 15 caracteres.",
                maxlength:"La contraseña debe contener entre 6 a 15 caracteres.",
            },
            confirm_password:
            {
                required:"Debes ingresar la contraseña nuevamente.",
                equalTo:"La contraseña ingresada no es igual a la anterior",
            },
            comentarios:
            {   
                required:"Debes ingresar un comentario.",
            }
        }
    });
});


function limitarCantidadCaracteres(e, contenido, maximoCaracteres) {
    //obtener la tecla pulsada.
    var unicode = (e.keyCode)? e.keyCode : e.charCode;

    //Permitir las siguientes teclas
    //  8 backspace
    // 46 suprimir
    // 13 enter
    //  9 tabulador
    // 37 izquierda
    // 38 subir
    // 39 derecha
    // 40 bajar

    if(unicode == 8 || unicode == 9 || unicode == 13 || unicode == 37 || unicode == 38 || unicode == 39 || unicode == 40 || unicode == 46)
    {
        return true;
    }

    //Si se ha superado el limite de caracteres vamos a retornar false.
    if(contenido.length >= maximoCaracteres)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function actualizarCantidadCaracteres(maximoCaracteres) {
    var elemento = document.getElementById("comentarios");
    var informacion = document.getElementById("info");

    if(elemento.value.length >= maximoCaracteres)
    {
        informacion.innerHTML = "Máximo " + maximoCaracteres + " caracteres."
    }
    else
    {
        informacion.innerHTML = "Puedes escribir " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
    }
}