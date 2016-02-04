/// <reference path="ComportamientoColision.ts"/>

/*
Este comportamiento Agarra al objeto y refleja en un contador
el valor.
Argumentos adicionales al comportamiento colision: puedoSostenerMasDeUno (por defecto es falso)
*/
class Sostener extends ComportamientoColision {

  metodo(objetoColision){
			// TODO: Habría que separarlo en dos comportamientos, Tomar por un lado, Contar por el otro.
			var objetoAgarrado = objetoColision.clonar();
      objetoAgarrado.escala = objetoColision.escala;
      objetoAgarrado.y = this.receptor.y;
      objetoAgarrado.x = this.receptor.subactores[0].derecha - (this.receptor.subactores[0].ancho / 4);
      this.receptor.agregarSubactor(objetoAgarrado);
      objetoAgarrado.cargarAnimacion("correr"); // porque tiene que cargar la misma imagen que va a usar al moverse


      objetoColision.disminuir('cantidad',1);
      if (objetoColision['cantidad'] == 0) {
          objetoColision.eliminar()
        }
  }

  configurarVerificaciones() {
    super.configurarVerificaciones();
    this.verificacionesPre.push(new Verificacion(() => this.puedoSostener(), "No puedo sostener dos cosas a la vez..."));
  }

  puedoSostener(){
    return this.argumentos.puedoSostenerMasDeUno || !this.receptor.tieneAlgoEnLaMano();
  }
}

class Soltar extends ComportamientoColision {
  metodo(objetoColision) {
    this.receptor.eliminarUltimoSubactor();
  }

  configurarVerificaciones() {
    super.configurarVerificaciones();
    this.verificacionesPre.push(new Verificacion(() => this.receptor.tieneAlgoEnLaMano(), "No tengo nada en la mano"));
  }
}