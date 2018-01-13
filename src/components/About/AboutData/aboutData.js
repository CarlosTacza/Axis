import { extendObservable } from "mobx";

class AboutData {

        constructor(){
            extendObservable(this,
                {
                    personas:['Juan Perez','Paolo Guerrero']
                }
            );
        }

        agregarTarea(tarea){
            console.log(tarea);
            this.personas.push(tarea);
        }

        eliminarTarea(index){
            this.personas.splice(index, 1);
        }

}

var VarAboutData = new AboutData(); 
export default VarAboutData;