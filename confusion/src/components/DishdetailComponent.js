import React ,{Component} from 'react';
import {Card,CardText,CardBody,CardTitle,CardImg} from 'reactstrap';



class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderDish(dish) {
        if(dish!=null){
            return (
                <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    };

    renderComments(comments) {

        let list = comments.map((comment)=>{
            if(comment!=null){
                return (
                    <li key={comment.id}>
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    </li>
                )
            }
            else {
                return (
                    <div></div>
                )
            }
        })

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </div>
        )
    };
        
        

    render() {
        const dish=this.props.dish;
        if(dish==null)
        {
            return (
                <div></div>
            )
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
            
        )
    };

};

export default DishDetail;