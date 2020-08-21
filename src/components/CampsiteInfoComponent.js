import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "../index.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

//--W4 CHALLENGE---//

const required= (val) => val && val.length;
const maxLength=(len) => (val) => !val || val.length <= len;
const minLength= (len) => (val) => !val || val.length >= len;


class CommentForm extends Component {
  constructor(props) {
      super(props);
       

      this.state= {
          isModalOpen: false,
          author:"",
          touched:{
              author:false,
          }

      }
      this.toggleModal= this.toggleModal.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

  toggleModal (){
      this.setState({
          isModalOpen: !this.state.isModalOpen
      })
  }

  handleSubmit(values){
    console.log("Current state is: " + JSON.stringify(values))
    alert("Current state is: " + JSON.stringify(values));  
  }

  render() {
    return (
      <div className="container">
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil-alt fa-lg" />
          Submit Comment
        </Button>
       
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col md={12} >
                <Control.select
                  model=".rating"
                  // id="rating"
                  name="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="author" md={4}>Your Name</Label>
                <Col md={12}>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    commponent="div"
                    messages={{
                        required: "Required",
                        minLength:"Must be at least 2 characters",
                        maxLength:"Must be 15 characters or less"
                    }}

                />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="text" md={2}>Comment</Label>
                <Col md={12}>
                <Control.textarea
                  model=".text"
                  id="text"
                  name="text"
                  rows="6"
                  className="form-control"
                />
                </Col>
              </Row>

              <Row className="form-group">
                  <Col md={4}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
                  </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

//--W4 CHALLENGE---//

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name}></CardImg>
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>
          <strong>Comments</strong>
        </h4>
        {/* Array method map with the comments array */}
        {comments.map((comment) => (
          <div key={comment.id}>
            {" "}
            {comment.text}
            <br />
            <div className="cursive">
              {comment.author} /{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}{" "}
            </div>
          </div>
        ))}
        <hr />
        <CommentForm />
      </div>
    );
  }
  return <div></div>;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    //object passed via props
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          {/* Call the rederCampsite method and pass the campsite to it */}
          <RenderComments comments={props.comments} />
          {/* Call the rederComments method and pass the campsite object's comments array */}
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default CampsiteInfo;
