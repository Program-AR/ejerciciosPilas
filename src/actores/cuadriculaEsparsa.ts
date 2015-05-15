class CuadriculaEsparsa extends Cuadricula{
  matriz;
  constructor(x,y,cantidadFilasMax,cantidadColumnasMax,opcionesCuadricula,opcionesCasilla,matriz){
    this.matriz=matriz;
    super(x,y,cantidadFilasMax,cantidadColumnasMax,opcionesCuadricula,opcionesCasilla);
  }

  crearCasillas(){
    console.log(this.matriz)
    this.casillas = new Array<Casilla>();
    for(var nroFila=0; nroFila < this.cantFilas; nroFila++){
      for(var nroColumna=0; nroColumna < this.cantColumnas; nroColumna++){
        if(this.matriz[nroFila][nroColumna]){
          this.casillas.push(
            new Casilla(nroFila,nroColumna, this));
          }
        }
      }
  }

  construimeCaminoAleatorioEntre(inicioX,inicioY,finX,finY){
      //TODO: falta implementar
  }

  hayDerecha(casilla){
    return this.matriz[casilla.nroFila][casilla.nroColumna+1]
    //si no esta en rango devuelve undefined, lo cual se interpretara
    //como false
  }

}


class MoverACasillaDerechaEsparsa extends MoverACasillaDerecha {

  proximaCasilla(casilla){
      if (casilla.cuadricula.hayDerecha(casilla)){
      return casilla.casillaASuDerecha();
      }else{
        return undefined;
      }
  }

}

/*
class MoverACasillaDerechaEsparsa extends MovimientoEnCuadricula {
  proximaCasilla(casilla){
    if
    if(hayCasillaADerecha){}

  }
    hayCasillaADerecha(){

    }
}





class MoverACasillaDerecha extends MovimientoEnCuadricula {
    claseQueImita = CaminaDerecha;

    proximaCasilla(casilla){
        return casilla.casillaASuDerecha();
    }
    textoAMostrar(){
        return "la derecha";
    }
    velocidad(){
        return this.velocidadHorizontal();
    }
}

*/
