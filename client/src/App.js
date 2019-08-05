import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid";
import Footer from "./components/Footer"
import { Input, TextArea, FormBtn } from "./components/Form";



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
          <form>
          <label>
          First Name:
          </label>
          <input type="text" name="firstName" />
          <br></br>
          <label>
          Last Name:
          </label>
          <input type="text" name="lastName" />
          <br></br>
          <label>
           Your Age:
           </label>
          <input type="text" name="age" />
          <br></br>
          <label>
          Your Weight:
          </label>
          <input type="text" name="weight" />
          <br></br>
          <label>
          Your Goals:
          </label>
          <input type="text" name="goals" />
          <br></br>
          <label>
          Time Frame:
          </label>
          <input type="text" name="name" />
          <br></br>
          <label>
          Days Per Week:
          </label>
          <input type="text" name="name" />
          <br></br>
          <label>
          Workout Length:
          </label>
          <input type="text" name="name" />
          <br></br>
          <label>
          Experience Level:
          </label>
          <input type="text" name="name" />
          <br></br>
          <input className="submit" type="submit" value="Submit" />
    
          </form>
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
