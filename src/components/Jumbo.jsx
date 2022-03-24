import React, { Component } from 'react';
import {Button, Container, Jumbotron} from 'react-bootstrap';

class Jumbo extends Component {
  render() {
    return (
      <div >
        <br/>
        <br/>

        <br/>
        <Jumbotron fluid>
          <Container>
            <h1>Abja Network</h1>
            <p>
              Rent homes from reputable landlords and earn money by renting.
            </p>
            <Button variant="primary">
              Primary Button
            </Button>
          </Container>
        </Jumbotron>
      </div>
    )
  }
  
}

export default Jumbo;
