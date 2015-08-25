/// <reference path = "../../dependencias/pilasweb.d.ts"/>

class Animarse extends Habilidad {

	constructor(receptor, argumentos) {
	  super(receptor, argumentos);
	}
	
	actualizar() {
	    this.receptor.avanzarAnimacion();
	}
	
}
