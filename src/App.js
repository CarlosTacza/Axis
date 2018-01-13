import React, { Component } from 'react';
import './App.css';

//dependencias
import Header from './components/header/header.js';
import Footer from './components/Footer/footer.js';

//Data
import items from './components/header/itemsMenu.js';

class App extends Component {
  render() {
    return (
        <div>
          <Header items={items} />
          <div className="body-fixed">
            {this.props.children}
          </div>
          <Footer /> 
        </div>
    );
  }
}

export default App;
