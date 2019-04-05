import React, { Component } from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import '../css/detail.css';
class MovieDetail extends Component {
  render() {
    return (  
   <div className="container portfolio">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">				
             
    
        <Row>
    <Col sm align="left">
        <Button variant="danger">
        <span className="glyphicon glyphicon-heart"></span> 
        </Button>
        </Col>
   
    <Col sm align="right">
        <Button variant="danger">
        <span className="glyphicon glyphicon-plus"></span>
        </Button>
        </Col>
  </Row>
        
            </div>
          </div>	
        </div>
        <div className="bio-info">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="bio-image">
                    <img src="https://image.ibb.co/f5Kehq/bio-image.jpg" alt="" />
                  </div>			
                </div>
              </div>	
            </div>
            <div className="col-md-6">
              <div className="bio-content">
                <h1>Hi there, I'm Kshiti</h1>
                <h6>I am a fresh web designer and I create custom web designs. I'm skilled at writing well-designed, testable and efficient code using current best practices in Web development. I'm a fast learner, hard worker and team player who is proficient in making creative and innovative web pages.</h6>
        
        <p>
         
        </p>
              </div>
            </div>
          </div>	
        </div>
      </div>

    );
  }
}




export default MovieDetail;