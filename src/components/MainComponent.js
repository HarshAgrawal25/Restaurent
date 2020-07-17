import React from "react";
import Home from './HomeComponent'
import Hello from "./Hello";
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Redirect , Route , withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import {connect} from 'react-redux';
import { addComment } from '../redux/ActionCreators';
import { controls } from "react-redux-form";

const mapStateToProps = state => {
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders,
  }     
}
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating , author , comment) => dispatch(addComment(dishId , rating , author , comment))
});
class Main extends React.Component {

  constructor(props){
    super(props);

  }

 
//   onDishSelect(dishId){
//     this.setState(
//         {selectedDish:dishId},
//     );
// }
  render() {

    const HomePage = () => {
      return (
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
                leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
          />
      );
    }
    const DishWithId =({match}) => {
        return(
            <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10) )}
            addComment ={this.props.addComment}
            />

        )
    }
    return (
      <div>
        <Header />
            
                {/* <Hello dishes={this.props.dishes}
                      onClick={(dishId) =>this.onDishSelect(dishId)} />
                <Dishdetail 
                     dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} /> */}
                     <Switch>
                       <Route path="/home" component={HomePage} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                       <Route exact path="/hello" component={() => <Hello dishes={this.props.dishes} />} />
                       <Route path="/hello/:dishId" component={DishWithId} />
                       <Route exact path="/contactus" component={Contact} />
                       <Redirect to="/home" />
                     </Switch>
        <Footer />
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
