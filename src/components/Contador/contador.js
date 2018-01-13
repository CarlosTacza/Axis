//Dependencies
import React, { Component } from 'react';

//react-redux
import { connect } from 'react-redux';

//estilos
//<button onClick= {this.props.aumentar}>Aumentar</button>
import './contador.css';
import { Button,Label } from 'react-bootstrap';

class Contador extends Component {
    render(){
        return(
            <div className="container">
                <h2>Contador Component</h2>
                <hr/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in aliquam ex. Aenean pharetra elementum nibh, non efficitur nibh pharetra non. Praesent in fringilla sem, sit amet tempus metus. In sodales tortor massa, vitae vulputate risus elementum in. In cursus purus eu ultricies aliquam. Nulla facilisi. Aliquam scelerisque, odio ultrices pulvinar porttitor, nisi enim semper neque, nec consequat velit odio sed lacus. Vivamus fermentum, justo sit amet faucibus consequat, purus neque aliquam nunc, quis volutpat urna arcu sed nunc. Vestibulum et dolor commodo, rutrum risus at, aliquet nulla. Aenean non commodo mauris, eget suscipit turpis. In porta porta ornare. In a mi eget mauris auctor aliquam sit amet sit amet mi. Praesent id vulputate odio, sed imperdiet orci. Donec tempor enim in nisl rhoncus hendrerit
                </p>
                <br/>
                <h4>Cuantos Heroes haz visto</h4>
                <hr/>
                <div className="center">
                    <h4><Label bsStyle="success"><span>{this.props.informacion}</span></Label></h4>
                    <br/>
                    <Button
                            bsStyle="primary"
                            onClick={
                                this.props.aumentar
                            }
                            >
                            Aumentar
                    </Button>{" "}
                    <Button 
                            bsStyle="primary"
                            onClick={
                                this.props.disminuir
                            }
                            >
                            Disminuir
                    </Button>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return{
        informacion: state.cantidad
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        aumentar: ()=> { 
                        dispatch({ 
                                type: "AUM"
                                })
                        },
        disminuir: ()=> { 
                        dispatch({ 
                                type: "DIS"
                                })
                        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Contador);