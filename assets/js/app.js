function trello() {
	// body...
	var container= document.getElementById('container') //contenedor padre de los elementos
	var btn= document.createElement('button');
	var input=document.createElement('input');
	var nodoText= document.createTextNode('Guardar');

	//atributes para darle las caracteristicas del css... se realizan acá
	input.setAttribute('id','valor'); 

	btn.appendChild(nodoText);//Este texto es guardado en el boton

	container.appendChild(btn);//este boton es metido en el container
	container.appendChild(input); //este input tb se dirige al container

  //El boton guardar debe entregarme  la lista deplegable

    btn.addEventListener('click', function(){ // llamo a la funcion trello y la pongo dentro del escuchador
    	var list= document.getElementById('valor').value; //quiero llamar el valor del input que lleva dentro el valor
        
        document.getElementById('valor').value="";

    	var contiene=document.getElementById('contiene'); // llama al div contiene 
    	var parrafo= document.createElement('p'); //crea parrafo (p)
    	var textNuevo=document.createTextNode(list); //crea el nodo texto donde le pase el valor del input, traspasar de un lado a otro la info.

        var add=document.createElement('a') // creacion tarjeta a
        add.setAttribute('href', '#'); //suma atributos a href y a #;  
        var textAdd=document.createTextNode('añadir tarjeta') //y al hacer click, crea un textarea;

    	parrafo.appendChild(textNuevo); //padre , enfermera... lleva al hijo
    	contiene.appendChild(parrafo);
    	add.appendChild(textAdd);
    	contiene.appendChild(add);

    	add.addEventListener('click', function(){

    		var textarea= document.createElement('textarea');
    		var add=document.createElement('a') // creacion tarjeta a
            add.setAttribute('href', '#'); //suma atributos a href y a #; 
            var textAdd=document.createTextNode('añadir tarjeta') //y al hacer click, crea un textarea;
    	    add.appendChild(textAdd);
    	    contiene.appendChild(textarea);
    	    contiene.appendChild(add);
    	})
    })

}





//crear etiquetas, luego nodo de texto para que  el contenido (txt, etc vaya dentro)(dibujar)