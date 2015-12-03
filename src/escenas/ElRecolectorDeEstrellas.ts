/// <reference path = "EscenaActividad.ts" />

class ElRecolectorDeEstrellas extends EscenaActividad {
    fondo;
    automata;
    cuadricula;
    objetos;
    estado;
    iniciar() {
        this.estado=new SinEstado(function(escena){return escena.cantidadObjetosConEtiqueta('EstrellaAnimada')==0;})
        this.fondo = new Fondo('fondo.recolector.png',0,0);
        //this.recolector.izquierda = pilas.izquierda();
        var cantidadFilas=4
        var cantidadColumnas=5

        this.cuadricula = new Cuadricula(0,-20,cantidadFilas,cantidadColumnas,
            {alto: 400},
            {grilla: 'invisible.png',
            cantColumnas: 1})

        this.automata = new RecolectorEstrellas(0,0);
        this.cuadricula.agregarActorEnPerspectiva(this.automata,cantidadFilas-1,0);
        // La posición inicial pretende respectar el ejemplo

        this.objetos=[];
        for (var fila=0;fila<cantidadFilas;fila++){
            for(var columna=1;columna<cantidadColumnas;columna++){
                var objeto= new EstrellaAnimada(0,0);
                this.cuadricula.agregarActor(objeto,fila,columna);
                this.objetos.push(objeto)
            }
        }

    }


    volverAlBordeIzquierdo(){
        this.automata.hacer_luego(MoverTodoAIzquierda);
    }

    irArriba(){
        this.automata.hacer_luego(MoverACasillaArriba);
    }

    irDerecha(){
        this.automata.hacer_luego(MoverACasillaDerecha);
    }

    recogerEstrella(){
        this.automata.hacer_luego(Recoger);
    }


}
