//Dependencies
//<button onClick={this.AddHeroe.bind(this)}>Agregar</button>
import React, { Component } from 'react';
import {
        Button,
        Modal,
        FormControl
} from 'react-bootstrap';

import './heroes.css';

class Heroes extends Component {

    constructor(){
        super();//llamamos al constructor del la clase padre, para poder usar state -- this.state

        this.state = {
            heroes: ["Superman","Spiderman"],
            showModal: false,
            input:""
        };
    }

    AddHeroe(e){
        this.setState({
            input: e.target.value
        });
        console.log(this.state.input)
    }
    
    MostrarHeroe(){
        this.setState({
            heroes: this.state.heroes.concat(this.state.input)
        },function(){
            this.close();
        });
        
//Si tuvieramos dos fucniones ingresar y luego,buscar
//buscar debe pasarse en un callback, porque luego de ingresar recien debe buscar
//en la primera funcion le pasamos como parametro un function, y luego al implementar
//la primera funcion la definimos con una funcion y ejecutamos el callback donde queramos
//en este caso luego de  acer la insercion
    }

    agregar() {
        this.addHeroe();
        this.close();
    }

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    render(){
        return(
            <div className="container">
                <h2>Heroes Component</h2>
                <hr/>
                <ul>
                    {this.state.heroes.map(heroe =>
                        <li>{heroe}</li>
                    )}
                </ul>
                
                <Button
                    bsStyle="primary"
                    onClick={this.open.bind(this)}
                    >
                    Ingresar Heroe
                </Button>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingresar Heroe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                                        type="text"
                                        placeholder="...Ingrese el nombre del heroe"
                                        onChange={this.AddHeroe.bind(this)} 
                        />
                        <div className="boton_popUp">
                            <Button
                                bsStyle="primary"
                                onClick={
                                    this.MostrarHeroe.bind(this)
                                }
                                >
                                Agregar
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Heroes;