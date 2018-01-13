//Dependencies
import React, { Component } from 'react';
import VarAboutData from './AboutData/aboutData.js';
import { observer } from 'mobx-react';

import { FormControl } from 'react-bootstrap';
import './about.css';
//<input onKeyPress = { this.enviarTarea.bind(this) } />

class About extends Component {

    enviarTarea(evento){
        if(evento.which === 13){
            VarAboutData.agregarTarea(evento.target.value);
            evento.target.value = "";
        }
    }

    render(){

        let listaDiv = [];
        VarAboutData.personas.forEach(
            (value, index) => (
                                listaDiv.push(<li 
                                onClick={
                                            function(){
                                                VarAboutData.eliminarTarea(index)
                                            }
                                        } 
                                className="list-group-item" key={index} >{value}</li>)
                              )
        )

        return(
            <div className="container">
                    <h2>About Component</h2>
                    <hr/>
                    <div className="center">
                        <h3>Lista de Inscripción</h3>
                    </div>
                    <div className="center">
                        <div className="row">
                            <div className="col-xs-4">                    
                                <FormControl
                                    type="text"
                                    placeholder="...Ingrese su nombre"
                                    onKeyPress = { this.enviarTarea.bind(this) }
                                />
                            </div>
                        </div>
                    </div>
                <div>
                    <div>
                        <ul className="list-group">
                            {listaDiv}
                        </ul>    
                    </div>
                </div>
            </div>
        );
    }
}

export default observer(About);