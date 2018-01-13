//dependencies
import React, { Component } from 'react';

//components
import {  Navbar,
          Nav,
          NavItem,
          NavDropdown,
          MenuItem
} from 'react-bootstrap';
       
//import  PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../header/header.css';
import logo_axis from '../../resources/img/logo.png';

class Header extends Component {

  /*static propTypes = {
        title: PropTypes.string.isRequired
  }; */ 

  render() {
    
    const { items } = this.props;

    return (
      <div className="customize">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <img src={logo_axis} width="40" height="40" alt=""/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {
                items.map((item, key) => 
                    <NavItem eventKey={key}><Link to={item.url}>{item.name}</Link></NavItem>
                )
            }
            <NavDropdown eventKey={3} title="Mis Servicios" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Seguridad y Licencia de Funcionamiento</MenuItem>
              <MenuItem eventKey={3.2}>Arquitectura y Construcción</MenuItem>
              <MenuItem eventKey={3.3}>Saneamiento Físico Legal</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
