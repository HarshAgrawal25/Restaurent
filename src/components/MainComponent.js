import React from "react";
import Home from './HomeComponent'
import Hello from "./Hello";
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route} from 'react-router-dom';

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
      // selectedDish : null
    };
  }
//   onDishSelect(dishId){
//     this.setState(
//         {selectedDish:dishId},
//     );
// }
  render() {

    const HomePage = () => {
      return (
          <Home />
      );
    }
    return (
      <div>
        <Header />
            
                {/* <Hello dishes={this.state.dishes}
                      onClick={(dishId) =>this.onDishSelect(dishId)} />
                <Dishdetail 
                     dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                     <Switch>
                       <Route path="/home" component={HomePage} />
                       <Route exat path="/hello" component={() => <Hello dishes={this.state.dishes} />} />
                       <Redirect to="/home" />
                     </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default Main;
