import { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import "./SingleBook.css"

class SingleBook extends Component {

    state = {
        selected: false
    }
  
    render() { 
      return ( 
        <div>     
          <Card           
          className="cardstyle"   
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: (this.state.selected) ? "1px solid gray" : "none" }}
          >
            <Card.Link href="#">
              <Card.Img variant="top" src={this.props.book.img} className="cardimg"/>
            
            <Badge pill variant="secondary" className="badge">{this.props.book.price}</Badge>
            <Card.Body className="pt-0">
              <Card.Title>
                <small>{this.props.book.title}</small>
              </Card.Title>
            </Card.Body>
            </Card.Link>
          </Card>   
          </div>       
      );
    }
};

export default SingleBook;
