import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Hello from './components/Hello'

class App extends React.Component
{
  render(){
    return(
          <div>
             <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurent</NavbarBrand>
          </div>
      </Navbar>
         <Hello />
          </div>
    );
  }
}

export default App;