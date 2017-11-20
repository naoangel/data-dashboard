/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//              AREQUIPA
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//--------------------------------------
//        GENERACION 2016-2
//--------------------------------------


//TOTAL ESTUDIANTES PRESENTES POR SEDE Y GENERACIONES
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//variable contador para total estudiantes
var contEstudiantes = 0;

//iterar en cada estudiante de sede y generacion seleccionada
for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//contar cada estudiante
	contEstudiantes ++;
}

//console.log("Numero de estudiantes: " + contEstudiantes); //verifica por consola

//agregara el resultado en el parrafo del html con el id de "datosA" 
document.getElementById("datosA").innerHTML = contEstudiantes;


//PORCENTAJE DE DESERCION DE ESTUDIANTES
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//contador para alumnas que se fueron
var contDesercion = 0;

//variable para sacar promedio
var porcentajeDes = 0;

//iterar en cada alumna
for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//si active = falso, osea que se fue para la casa :(, contar
	if(data.AQP['2016-2'].students[i].active === false)
	{
		contDesercion++;
	}
}
	
//sacar promedio = ((desertoras * 100) / total de las que empezaron)
porcentajeDes = parseInt((contDesercion * 100)/contEstudiantes); 

//parseInt para pasar a entero el numero con decimal. 

//console.log("Porcentaje de alumnas que desertaron: " + porcentajeDes); //para verifica por consola

//agregar el resultado de porcentaje en el parrafo del html donde esta el id "datosB" 
document.getElementById("datosB").innerHTML = porcentajeDes;





//00000000000000000000000000000000000000000000000000000000000000000000
//00000000000000000000000000000000000000000000000000000000000000000000



//CANTIDAD DE ESTUDIANTES QUE SUPERA LA META DE PUNTOS EN PROMEDIO DE TODOS LOS SPRINTS.
//META DE PUNTOS ES 70% DEL TOTAL DE PUNTOS
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// //variable para sumar total puntos
// var sumaSprint = 0;

// //variable para calcular promedio
// var promSprint = 0;

// //variable suma cant ninas
// var sumNinas = 0;


// //iterar en cada alumna
// for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
// {
// 	//si se encuentra activa, ingresar al sprint para calcular los datos
// 	if(data.AQP['2016-2'].students[i].active === true)
// 	{	
		
// 		if ((data.AQP['2016-2'].students[i].sprints.tech) + (data.AQP['2016-2'].students[i].sprints.tech) >= 2100)
// 		{
// 			//sumar nina
// 			sumNinas ++;
// 			//sumar puntos
// 			sumaSprint++;
// 		}

// 	}
// }

// promSprint = 

// console.log(sumNinas);
// //document.getElementsById("datosC").innerHTML = sumNinas;




// var sumaMetas = (function () 
// {
// 	var totalMetas = 0;

// 	for (var i = 0; i < data.AQP['2016-2'].ratings.length; i++) 
// 	{
// 		totalMetas += ((ninasActivas * data.AQP['2016-2'].ratings[i].student.cumple) / 100);
// 	}
// 	return totalMetas;
// });

// var metas = sumaMetas () / data.AQP['2016-2'].ratings.length;

// metaEstudiante = parseInt(metas);
// document.getElementById("datosC").innerHTML = metaEstudiante;

// //calcular el porcentaje de las que llegan a la meta
// totalPocentaje = parseInt((metas * 100) / ninasActivas);


// document.getElementById("datosD").innerHTML = totalPocentaje;



//CALCULAR EL NET PROMOTER SCORE (NPS)
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//promotores de laboratoria

// var sumaPromotores = (function () 
// {
// 	var totalProm = 0;

// 	for (var i = 0; i < data.AQP['2016-2'].ratings.length; i++) 
// 	{
// 		totalProm += data.AQP['2016-2'].ratings[i].nps.promoters;
// 	}

// 	return totalProm;
// });

// document.getElementById("promotores").innerHTML = (sumPromoters() / data.AQP['2016-2'].ratings.length) + "% ";




//LA CANTIDAD Y % QUE REPRESENTA EL TOTAL DE ESTUDIANTES QUE SUPERAN
//LA META TECH EN PROMEDIO Y POR SPRINT 
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



//CANT Y % DEL TOTAL QUE SUPERAN LA META DE PTOS TECNICOS EN PROMEDIO Y POR SPRINT
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


var sumPtoTech = 0;
var proTech = 0;

//iterar todas las estudiantes
for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
{
	//verificar si la estudiante esta activa
	if(data.AQP['2016-2'].students[i].active === true)
	{
		//si esta activa ingresar a los puntos tech
		for( var i = 0; i < data.AQP['2016-2'].students[i].sprints.tech; i++)
		{
			if (data.AQP['2016-2'].students[i].sprints.tech >= 1260)
			{
				sumPtoTech ++;
			}
		}
	}
}


console.log(sumPtoTech);






//CANT Y % QUE SUPERAN LA META DE PUNTOS HSE EN PROMEDIO Y SPRINT
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&













//EL % DE ESTUDIANTES SATISFECHAS CON LABORATORIA
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




//PUNTUACION PROMEDIO DE L@S PROFES
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//variable para sumar puntos de l@s profes
var sumPtosProfes = 0;

//variable para calcular promedio
var promProfes = 0;

//iterar en cada puntaje de l@s profes
for (var i = 0; i < data.AQP['2016-2'].ratings[i].teacher.length; i++) 
{
	//sumar puntos
	sumPtosProfes ++;
}

console.log(sumPtosProfes);

//sacar promedio (puntos / cantidad de sprints)
promProfes = parseInt( sumPtosProfes / data.AQP['2016-2'].ratings[i].teacher.length );

//document.getElementById("datosP").innerHTML = parseInt( sumPtosProfes / data.AQP['2016-2'].ratings[i].teacher.length );

console.log(promProfes);

//document.getElementById("datosP").innerHTML = promProfes;


	

//console.log("Porcentaje de alumnas que desertaron: " + porcentajeDes); //para verifica por consola

//agregar el resultado de porcentaje en el parrafo del html donde esta el id "datosB" 
//document.getElementById("datosB").innerHTML = porcentajeDes;
























//PUNTUACION PROMEDIO DE L@S JEDI MASTER








