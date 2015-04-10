/// <reference path = "ComportamientoAnimado.ts"/>

 class Mover extends ComportamientoAnimado{
 	distanciaRestante;
 	
 	nombreAnimacion(){
 		return 'correr';
 	}
 	doActualizar(){
 		this.receptor.x += this.desplazamiento(this.movimientoEnX());
 		this.receptor.y += this.desplazamiento(this.movimientoEnY());
 		return llegue();
 	}
 	
 	desplazamiento(cant){
 		if(cant = 0) return 0;
 		return Math.max(1, cant * this.velocidad());
 	}
 	
 	llegue(){
 		distanciaRestante -= this.argumentos.distancia;
 		return distanciaRestante < 1;
 	}
 	
 	
 }