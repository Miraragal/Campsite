import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../index.css';


class CampsiteInfo extends Component {
    constructor(props) {
        super(props);

    }
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4><strong>Comments</strong></h4>
                    {/* Array method map with the comments array */}
                    {comments.map(comment => <div key={comment.id}> {comment.text}<br />
                        <div className='cursive'>{comment.author} / {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </div>
                    </div>)}
                </div>
            )
        } return <div></div>
    }

    render() {
        if (this.props.campsite) { //object passed via props 
            return (
                <div className="container">
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {/* Call the rederCampsite method and pass the campsite to it */}
                    {this.renderComments(this.props.campsite.comments)}
                    {/* Call the rederComments method and pass the campsite object's comments array */}
                </div>
                </div>
            )
        }
        return <div></div>

    }
}

export default CampsiteInfo;