import React from "react";
import Home from './HomeComponent'
import Hello from "./Hello";
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route} from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS,
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
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
                leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
          />
      );
    }
    const DishWithId =({match}) => {
        return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10) )}
            />

        )
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
                       <Route exact path="/hello" component={() => <Hello dishes={this.state.dishes} />} />
                       <Route path="/hello/:dishId" component={DishWithId} />
                       <Route exact path="/contactus" component={Contact} />
                       <Redirect to="/home" />
                     </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default Main;
