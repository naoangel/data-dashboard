/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);


// función para el menú 
var btn = document.getElementById('btn1');
var cont = 0;    

btn.addEventListener('click', function()
{
    var selection = document.getElementById('select').value;
    if (selection == '0') 
    {
        alert('Elige una generación');
        return false;
    } 

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



	//CANT Y % DEL TOTAL QUE SUPERAN LA META DE PTOS TECNICOS EN PROMEDIO Y POR SPRINT
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

	//variable para los puntos maximos
	var sumPtoTech = 0;
	//variable para los puntos tecnicos minimos
	var sumPtosTechMin = 0;
	
	//iterar todas las estudiantes
	for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
	{
		//se deja en variables los puntos tecnicos de los sprints
		var sprint1 = data.AQP['2016-2'].students[i].sprints[0].score.tech;
		var sprint2 = data.AQP['2016-2'].students[i].sprints[1].score.tech;
		var sprint3 = data.AQP['2016-2'].students[i].sprints[2].score.tech;
		var sprint4 = data.AQP['2016-2'].students[i].sprints[3].score.tech;
		var sprint = data.AQP['2016-2'].students[i].sprints;
		
		//cantidad de alumnas que tienen puntos max tecnicos 
		if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length > 1260)
		{
			sumPtoTech ++;
		}	
		//Cantidad de alumnas que tienen puntos tecnicos
		else if ((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length < 1260)
		{	
			sumPtosTechMin ++;
		}

		//sacar promedio de los puntos tecnicos
		var totalPtosTech = parseInt((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length);

		//Promedio de los puntos maximos en porcentaje
		var porcentajePtosTech = (sumPtoTech * 100) / (data.AQP['2016-2'].students.length);
		
	};

	//agregar el resultado en el parrafo del html
	document.getElementById("datosG").innerHTML = totalPtosTech;
	document.getElementById("datosH").innerHTML = porcentajePtosTech;
	document.getElementById("datosI").innerHTML = sumPtoTech;
	document.getElementById("datosJ").innerHTML = sumPtosTechMin;



	//CANT Y % QUE SUPERAN LA META DE PUNTOS HSE 
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

	var ptosHse = 0;
	var ptosHseMin = 0;
	
	for (var i = 0; i < data.AQP['2016-2'].students.length; i++) 
	{
		var sprint1 = data.AQP['2016-2'].students[i].sprints[0].score.hse;
		var sprint2 = data.AQP['2016-2'].students[i].sprints[1].score.hse;
		var sprint3 = data.AQP['2016-2'].students[i].sprints[2].score.hse;
		var sprint4 = data.AQP['2016-2'].students[i].sprints[3].score.hse;
		var sprint = data.AQP['2016-2'].students[i].sprints;
		
		//cantidad de alumnas que tienen puntos HSE maximas
		if (sprint1 + sprint2 + sprint3 + sprint4 / sprint.length > 840)
		{
			ptosHse ++;

		}
		//Cantidad de alumnas que tienen puntos HSE minimos
		else if (sprint1 + sprint2 + sprint3 + sprint4 / sprint.length < 840)
		{
			ptosHseMin ++;
		}

		//prom
		var totalPtosHse = parseInt((sprint1 + sprint2 + sprint3 + sprint4) / sprint.length);
		
		var porcentajePtosHse = (ptosHse * 100) / (data.AQP['2016-2'].students.length);
	
	};

  	//agregar el resultado en el parrafo del html
	document.getElementById("datosK").innerHTML = totalPtosHse;
	document.getElementById("datosL").innerHTML = porcentajePtosHse;
	document.getElementById("datosM").innerHTML = ptosHse;
	document.getElementById("datosN").innerHTML = ptosHseMin;



	//CANTIDAD DE ESTUDIANTES QUE SUPERA LA META DE PUNTOS EN PROMEDIO DE TODOS LOS SPRINTS.
	//META DE PUNTOS ES 70% DEL TOTAL DE PUNTOS
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

	//cantidad de estudiantes
	var totalMeta = parseInt((sumPtoTech + ptosHse) / 2);
	//agregar al html
    document.getElementById("datosC").innerHTML = totalMeta;

    //porcentaje 
	var porcentajeMeta = parseInt((porcentajePtosTech + porcentajePtosHse) / 2);
	//agregar al html
	document.getElementById("datosD").innerHTML = porcentajeMeta;

	
	//CALCULAR EL NET PROMOTER SCORE (NPS)
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



	//EL % DE ESTUDIANTES SATISFECHAS CON LABORATORIA
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




	//PUNTUACION PROMEDIO DE L@S PROFES
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

	var ptosProfes = 0;

	for (var i = 0; i < data.AQP['2016-2'].ratings.length; i++)
	{
		var sprint1 = data.AQP['2016-2'].ratings[i].sprints[0].teacher;
		var sprint2 = data.AQP['2016-2'].ratings[i].sprints[1].teacher;
		var sprint3 = data.AQP['2016-2'].ratings[i].sprints[2].teacher;
		var sprint4 = data.AQP['2016-2'].ratings[i].sprints[3].teacher;
		var sprint = data.AQP['2016-2'].students[i].sprints;
	}

	//sacar promedio
	var totalPuntosProfes = ptosProfes / (data.AQP['2016-2'].ratings[i].sprints.length);
	//agregar al html
	document.getElementById("datosP").innerHTML = totalPuntosProfes;


	//PUNTUACION PROMEDIO DE L@S JEDI MASTER
	//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

	var ptosJedi = 0;

	for (var i = 0; i < data.AQP['2016-2'].ratings.length; i++)
	{
		var sprint1 = data.AQP['2016-2'].ratings[i].sprints[0].jedi;
		var sprint2 = data.AQP['2016-2'].ratings[i].sprints[1].jedi;
		var sprint3 = data.AQP['2016-2'].ratings[i].sprints[2].jedi;
		var sprint4 = data.AQP['2016-2'].ratings[i].sprints[3].jedi;
		var sprint = data.AQP['2016-2'].students[i].sprints;
	}

	//sacar promedio
	var totalPuntosJedi = ptosJedi / (data.AQP['2016-2'].ratings[i].sprints.length);
	//agregar al html
	document.getElementById("datosQ").innerHTML = totalPuntosJedi;

    
});



