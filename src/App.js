import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Hello from "./components/Hello";
import { DISHES } from './shared/dishes'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurent</NavbarBrand>
          </div>
        </Navbar>
        <Hello dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
