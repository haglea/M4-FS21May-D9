import { Button, Col, Form, Row } from "react-bootstrap";

const MyRegistration = () => {

    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Name </Form.Label>
                    <Col sm={10}>  <Form.Control type="name" placeholder="Name" />  </Col>
                </Form.Group>
              

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}> Surname </Form.Label>
                <Col sm={10}>  <Form.Control type="Surname" placeholder="Surname" />  </Col>
                </Form.Group>
              
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Email </Form.Label>
                    <Col sm={10}>  <Form.Control type="email" placeholder="Email" />  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>     

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password confirm
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Confirm Password" />
                    </Col>
                </Form.Group>        
           
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default MyRegistration;