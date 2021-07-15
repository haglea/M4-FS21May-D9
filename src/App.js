import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import MyRegistration from "./components/MyRegistration";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Container>
      <MyNavBar /> 
      <Route path="/MyRegistration" exact component={MyRegistration} />
      <MyWelcome books={fantasy}/>
      <WarningSign text="I am an alert" />    
      <BookList books={fantasy} />
      <MyFooter />      
    </Container>
    </Router>
  );
}

export default App;
