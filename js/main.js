$(document).ready(function(){
	
		$("#boton").click(function(){
			var nombre = $("#name").val();
			if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)){
				alert("Ingrese un nombre válido");	
			}

			var apellido = $("#lastname").val();
			if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)){
				alert("Ingrese un apellido válido");	
			}

			var correo = $("#input-email").val();
			if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(correo)){
				alert("Ingrese un correo válido");	
			}


			var contrasenia = $("#input-password").val();
			if(!(/^(?=.*\d).{6,}$/).test(contrasenia)|| contrasenia==="123456"|| contrasenia==="098754"|| contrasenia==="password"){
				alert("Ingrese una contraseña válida");	
			}


		});

});