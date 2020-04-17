import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';



import {Switch,Redirect,Route} from 'react-router-dom';
import About from './AboutComponent';


class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            dishes:DISHES,
            leaders:LEADERS,
            promotions:PROMOTIONS,
            comments:COMMENTS,
        }
    }

    

    render() {


        const HomePage = (props) =>{
            return (
                <div>
                    <Home />
                </div>
            )
        }

        const DishWithId = ({match}) =>{
            return (
                <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                            comments={this.state.comments.filter((comment)=>comment.id===parseInt(match.params.dishId))[0]}
                            />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path ='/home' component={()=><Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]} /> }  />
                    <Route exact path = '/menu' component={()=><Menu dishes={this.state.dishes} />} />
                    <Route path= '/menu/:dishId' component={DishWithId} />
                    <Route path = '/contactus' component={Contact} />
                    <Route path= '/aboutus' component={()=><About leaders={this.state.leaders} />}/>
                    <Redirect path='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;