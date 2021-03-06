import React  from 'react';
import {Card,CardText,CardImgOverlay,CardImg,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseURL';



function RenderMenuItem({dish}){
    if(dish!=null){
        return (
            <Card key={dish.id}>
                <Link to ={`/menu/${dish.id}`}>
                    <CardImg width='100%' src={baseUrl+dish.image} alt={dish.name} />
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


export default Menu;