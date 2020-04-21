import React  from 'react';
import {Card,CardText,CardImgOverlay,CardImg,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';



function RenderMenuItem({dish}){
    if(dish!=null){
        return (
            <Card key={dish.id}>
                <Link to ={`/menu/${dish.id}`}>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardText>
                            {dish.name}
                        </CardText>
                    </CardImgOverlay>
                </Link>
            </Card>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}


const Menu = (props) => {
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else {
        const menu= props.dishes.map((dish)=>{
            return (
                <div className='col-12 col-md-5 m-1' key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
                    
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to={'/home'}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h1>Menu</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {menu}
                </div>
            </div>
        )
    }
}


export default Menu;