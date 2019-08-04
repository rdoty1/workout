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
          <input type="text" name="firstName" />
          </label>
          
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          Last Name:
          <input type="text" name="lastName" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
           Age:
          <input type="text" name="age" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          Weight:
          <input type="text" name="weight" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          Goals:
          <input type="text" name="goals" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          </form>
          
         </Container>
         <Container>
          <form>
          <label>
          First Name:
          <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          </form>
          
         </Container>



        </div>
        
        



       



    


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
