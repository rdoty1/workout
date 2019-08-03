import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid";
import Footer from "./components/Footer"
import { Form }  from "./components/Form"

function App() {
  return (
    

    <Container fluid>
      
      <Jumbotron>
        <h1> WORKOUT APP</h1>
      </Jumbotron>
      

      <Container className="bodyOne">
        <div className="stepOne">STEP ONE: FILL OUT INFORMATION</div>
        <Form>
          hello

        </Form>
        

        
      </Container>

      <Container className="bodyTwo">
        <div className="stepTwo">STEP TWO</div>
      </Container>

      <Container className="bodyThree">
        
        <div className="stepThree">STEP THREE</div>
      </Container>

   

      <Footer>

        <div className="foot">

        THIS IS OUR PROJECT
        </div>

       


      </Footer>

    </Container>
  
  );
}

export default App;
