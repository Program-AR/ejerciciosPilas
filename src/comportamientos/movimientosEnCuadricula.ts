/// <reference path = "ComportamientoAnimado.ts"/>

class MovimientoEnCuadricula extends ComportamientoAnimado {
    cuadricula;
    movimiento;
    puedoMovermeEnEsaDireccion;
    claseQueImita;
    
    iniciar(receptor){
        super.iniciar(receptor);
        this.cuadricula = receptor.cuadricula;
        this.movimiento = new this.claseQueImita({});
        this.movimiento.iniciar(receptor);
        this.movimiento.velocidad = this.velocidad();
        this.puedoMovermeEnEsaDireccion = false;
    }
    
    alIniciar(){
    	this.puedoMovermeEnEsaDireccion = this.proximaCasilla();
    	if(!this.puedoMovermeEnEsaDireccion){
    		this.receptor.decir("No puedo ir para " + this.textoAMostrar());
    	}
    }
    doActualizar(){
    	super.doActualizar();
        return this.puedoMovermeEnEsaDireccion && this.movimiento.actualizar();
    }
    alFinalizarAnimacion(){
    	if(this.puedoMovermeEnEsaDireccion){
    		this.receptor.setCasillaActual(this.proximaCasilla());
    	}
    }
    
    // El nro 20 depende del nro 0.05 establecido en CaminaBase
    velocidadHorizontal(){
        return this.cuadricula.anchoCasilla() / 20;    
    }
    velocidadVertical(){
        return this.cuadricula.altoCasilla() / 20;
    }
    
    velocidad(){
        // Template Method. Devuelve la velocidad vertical ú horizontal según corresponda 
    }
    proximaCasilla(){
        // Template Method. Devolver la casilla a la que se va a avanzar
    }
    textoAMostrar(){
        // Template Method. Para mostrar mensaje descriptivo al no poder avanzar
    }
}

class MoverACasillaDerecha extends MovimientoEnCuadricula {
    claseQueImita = CaminaDerecha;
    
    proximaCasilla(){
        return this.receptor.casillaActual().casillaASuDerecha();
    }
    textoAMostrar(){
        return "la derecha";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

class MoverACasillaArriba extends MovimientoEnCuadricula{
    claseQueImita = CaminaArriba;

    proximaCasilla(){
        return this.receptor.casillaActual().casillaDeArriba();
    }
    textoAMostrar(){
        return "arriba";
    }
    velocidad(){
        return this.velocidadVertical();
    }
}

class MoverACasillaAbajo extends MovimientoEnCuadricula{
    claseQueImita = CaminaAbajo;

    proximaCasilla(){
        return this.receptor.casillaActual().casillaDeAbajo();
    }
    textoAMostrar(){
        return "abajo";
    }
    velocidad(){
        return this.velocidadVertical();
    }
}

class MoverACasillaIzquierda extends MovimientoEnCuadricula{
    claseQueImita = CaminaIzquierda;

    proximaCasilla(){
        return this.receptor.casillaActual().casillaASuIzquierda();
    }
    textoAMostrar(){
        return "la izquierda";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

class MoverTodoAIzquierda extends MoverACasillaIzquierda{
   proximaCasilla(){
        return this.cuadricula.casilla(this.receptor.casillaActual().nroFila,0);
   }
   velocidad(){
        return this.velocidadHorizontal() * this.receptor.casillaActual().nroColumna;
   }
}

class MoverTodoADerecha extends MoverACasillaDerecha{
   proximaCasilla(){
        return this.cuadricula.casilla(this.receptor.casillaActual().nroFila,this.cuadricula.cantColumnas-1);
   }
   velocidad(){
        return this.velocidadHorizontal() * (this.cuadricula.cantColumnas - 1 - this.receptor.casillaActual().nroColumna );
   }
}

class MoverTodoArriba extends MoverACasillaArriba{
   proximaCasilla(){
        return this.cuadricula.casilla(this.receptor.casillaActual().nroColumna,0);
   }
   velocidad(){
        return this.velocidadVertical() * this.receptor.casillaActual().nroFila;
   }
}

class MoverTodoAbajo extends MoverACasillaAbajo{
   proximaCasilla(){
        return this.cuadricula.casilla(this.receptor.casillaActual().nroColumna,this.cuadricula.cantFilas-1);
   }
   velocidad(){
        return this.velocidadVertical() * (this.cuadricula.cantFilas - 1 - this.receptor.casillaActual().nroColumna);
   }
}