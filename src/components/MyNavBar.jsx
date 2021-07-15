import { Button, Form, Navbar, Nav} from 'react-bootstrap';
import './MyNavBar.css';
import { Link } from 'react-router-dom';

const MyNavBar = () => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" className="navstyle">Home
  <span><img src="/logo512.png" style={{ width: "2rem" }} alt="" /></span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" className="navstyle" style={{color: "black"}}>About</Nav.Link>
      <Nav.Link href="#" className="navstyle" style={{color: "black"}}>Browse</Nav.Link>     
    </Nav>
    <Form className="d-flex">
      <Link to={"/myregistration"}><Button variant="secondary" >Registration</Button> </Link>
    
    </Form>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavBar