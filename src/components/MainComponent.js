import React from "react";

import Hello from "./Hello";
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
      selectedDish : null
    };
  }
  onDishSelect(dishId){
    this.setState(
        {selectedDish:dishId},
    );
}
  render() {
    return (
      <div>
        <Header />
            <div className="container">
                <div className="row">
                      <Hello dishes={this.state.dishes}
                      onClick={(dishId) =>this.onDishSelect(dishId)} />
                 </div>
            </div>
                   <Dishdetail 
                     dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
        
      </div>
    );
  }
}

export default Main;
