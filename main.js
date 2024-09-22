let cantidad = document.getElementById('cantidad');
//let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8){
        alert("La cantidad de caracteres debe ser mayor que 8");
        limpiar();
    }
    else{
        let password = '';
        for (let i=0; i<numeroDigitado; i++){
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            //console.log(caracterAleatorio);
            password += caracterAleatorio;
        }
        //console.log('Password generada: ' + password);
        contrasena.value = password;
        validar(password);
    }   
}

function limpiar(){
    cantidad.value = "";
    contrasena.value = "";
    mensajeSeguridad.textContent = "";
}

function validar(password){
    let mayuscula = password.match(/[A-Z]/);
    let minuscula = password.match(/[a-z]/);
    let numero = password.match(/\d/);
    let caracterEspecial = password.match(/[!@#$%^&*()]/);

    if (mayuscula && minuscula && numero && caracterEspecial){
        mensajeSeguridad.textContent = "Seguridad Fuerte";
        mensajeSeguridad.style.color = "#00FF00";
        mensajeSeguridad.style.textShadow = "0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5)";
    }
    else if((mayuscula && minuscula && numero) || (mayuscula && minuscula && caracterEspecial) || (mayuscula && numero && caracterEspecial) || (minuscula && numero && caracterEspecial)){
        mensajeSeguridad.textContent = "Seguridad Media";
        mensajeSeguridad.style.color = "#FFD700";
        mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 215, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.5)";
    }
    else{
        mensajeSeguridad.textContent = "Seguridad Débil";
        mensajeSeguridad.style.color = "#FF0000";
        mensajeSeguridad.style.textShadow = "0 0 5px rgba(255, 0, 0, 0.7), 0 0 10px rgba(255, 0, 0, 0.5)";
    }
}







