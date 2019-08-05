import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid";
import Footer from "./components/Footer"
import { Input, TextArea, FormBtn } from "./components/Form";
import {Form} from "./components/Form"



function App() {
  return (
    

    <Container fluid>
      
      <Jumbotron>
        <h1> WORKOUT APP</h1>
      </Jumbotron>
      
      <Container className="bodyOne">
        <div className="stepOne">
          
          <h1 className="stepOneTitle">
          STEP ONE: FILL OUT INFORMATION
          </h1>
    
          <Container>
            <Form>

            </Form>
        
          </Container>
          
        </div>
      </Container>

      <Container className="bodyTwo">
        <div className="stepTwo">
          
          
          <h1 className="stepOneTitle">
          STEP TWO: EXPERIENCE LEVEL
          </h1>


          </div>
      </Container>

      <Container className="bodyThree">
        
        <div className="stepThree">


          <h1 className="stepOneTitle">
          STEP THREE: CHOOSE YOUR PROGRAM
          </h1>


        </div>

        
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
