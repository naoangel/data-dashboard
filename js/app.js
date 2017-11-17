/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);

// var menu1 = document.getElementsByClassName("menu1");

// for (var i = 0; i < menu1.length; i++)
// {
// 	//iterara y en cada indice creara un evento click, que mostrara show
// 	menu1[i].addEventListener("click",showMenu);
// }

// //crear evento showMenu para mostrar el subMenu, cambiar el hiden por show.
// //hiden esta determinado en el html
// function showMenu()
// {
// 	var listMenu = this.getElementsByClassName("itemList")[0];

// 	if (listMenu.classList.contains("hide"))
// 	{
// 		//remover clase hide
// 		listMenu.classList.remove("hide");
// 		//agregar clase show, que esta en css
// 		listMenu.classList.add("show");

// 		//console.log(listMenu); //ayuda para verificar
// 	}
// 	else
// 	{
// 		listMenu.classList.remove("show");
// 		listMenu.classList.add("hide");
// 	}
// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//              AREQUIPA
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//--------------------------------------
//        GENERACION 2016-2
//--------------------------------------


//TOTAL ESTUDIANTES PRESENTES POR SEDE Y GENERACIONES
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//variable contador para total estudiantes
var contEst = 0;

//iterar en cada estudiante de la sede arequipa generacion 2016-2
for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//contar cada estudiante
	contEst ++;
}

console.log("Numero de estudiantes: " + contEst);


//PORCENTAJE DE DESERCION  DE ESTUDIANTES
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//contador para total alumnas
var cont = 0;

//contador para alumnas que desertaron
var cont2 = 0;

//variable para sacar promedio
var porDes = 0;

//iterar en cada alumna
for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//contar cada alumna
	cont ++;
	// console.log(data.SCL['2016-2'].students[i].active);
	
	//si active = falso, osea que se fue para la casa :(, contar
	if(data.AQP['2016-2'].students[i].active === false)
	{
		cont2++;
	}
}
	
//sacar promedio = desertoras / total de las empezaron
porDes = (cont2 * 100) /cont;

console.log("Porcentaje de alumnas que desertaron: " + porDes);


//CANTIDAD DE ESTUDIANTES QUE SUPERA LA META DE PUNTOS EN PROMEDIO DE TODOS LOS SPRINTS.
//META DE PUNTOS ES 70% DEL TOTAL DE PUNTOS
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var contPun = 0;
var contPun2 = 0;


for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//contar cada alumna
	contPun ++;
	console.log(cont);

	if(data.AQP['2016-2'].students.sprints[tech]; i++ )
	{
		contPun2++;
	}
}






//Net Promoter Score (NPS)
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// promedio de los sprints cursados. El NPS se calcula, en base a la encuesta que las 
//estudiantes responden al respecto de la recomendación que darían de Laboratoria, 
//bajo la siguiente fórmula:

// [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
// [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
// [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

// [NPS] = [Promoters] - [Detractors]




//LA PUNTUACION % DE L@S PROFES

//variable para sacar promedio
// var porProf = 0;
// var sum = 0;
// var sum2 = 0;

 
// for (var i = 0; i < data.AQP['2016-2'].ratings.teacher.length; i++) 
// {
// 	//contar cada alumna
// 	//cont ++;
// 	 console.log(data.SCL['2016-2'].ratings[teacher]);

// }
	
//sacar promedio = desertoras / total de las empezaron
//porDes = (cont2 * 100) /cont;

//console.log("Porcentaje de alumnas que desertaron: " + porDes);


//La puntuación promedio de l@s jedi masters.













