/*var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var mensaje = document.getElementById("mensaje");
var titular = document.getElementById("titular");
var subtitulo = document.getElementById("subtitulo");
var texto = document.getElementById("texto");

//Cambiar el texto de los botones

boton1.innerHTML = "Boton1";
boton2.innerHTML = "Boton2";

//Creación de funciones

function cargaInfo(mens,tit,sub,text){
	mensaje.innerHTML = mens;
	titular.innerHTML = tit;
	subtitulo.innerHTML = sub;
	texto.innerHTML = text;

};


//Cración de escuchas y definición de función al evento
//La escuchas            Evento   Función              Variable mens          Variable tit                Variable sub            Variable text
boton1.addEventListener("click", function(){cargaInfo("Mensaje del botón 1", "Titular del primer Botón", "Subtitulo del Botón1", "texto de prueba para eventos con parámteros")});
boton2.addEventListener("click", function(){cargaInfo("Mensaje del botón 2", "Titular del primer Botón", "Subtitulo del Botón2", "texto de prueba para eventos con parámteros")});

*/

//

function edad()
{

	var dato = prompt("Introduzca su edad:");
	var a;

	switch (true)
	{
		case (dato >= 18):
		a = alert("Eres mayor de edad");
		break;

		default:
		a= alert("Abandona la pagina");
		break;
	};
	
};
edad();