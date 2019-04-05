import React, { Component } from 'react';
import {  Row, Col, Button} from 'react-bootstrap';
import '../css/list.css';

class MyList extends Component {
  render() {
    return (  
    <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-6">
            <div className="list mb-2">
              <div className="list-header">
                <a href="#" className="list-header-image">
                  <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/fkj2HgV3cfRBqJjSSwS7zJVyuXD.jpg" />
                </a>
              </div>
              <div className="list-content">
                <h2><a href="#" className="text-black">Pure Genius</a></h2> 
                <span className="list-meta">
                  <span className="list-meta-item"><i className="fa fa-clock-o" /> 2016</span> 
                  <a href="#" className="list-meta-item"><i className="fa fa-star" /> 6.42</a>
                </span>
      
                <p>A young Silicon Valley tech-titan enlists a veteran surgeon with a </p>
        
        <Row>
    <Col sm>
        <Button variant="danger">
        <span className="glyphicon glyphicon-heart"></span>
        </Button>
        </Col>
    <Col sm>
       
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
        
 
        
        </div>
      </div>
 
    );
  }
}

export default MyList;