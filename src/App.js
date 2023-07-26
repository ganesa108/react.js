import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

{
  /*function component that returns JMX code*/
}
export default function App() {
  return (
    <>
      <div className="App">
        {/*navigation bar*/}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Mortal Kombat X</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/*header*/}
        <Card>
          <Card.Body>
            <Card.Title>Your Favourite Character</Card.Title>
          </Card.Body>
        </Card>
        {/*card one*/}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="{require('./subZeroCard.jpg')}" />
          <Card.Body>
            <Card.Title className="subzero">SUB-ZERO</Card.Title>
            <Card.Text>
              Be stealthful as the night...and deadly as the dawn.
            </Card.Text>
          </Card.Body>
        </Card>
        {/*card two*/}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="mileena">MILEENA</Card.Title>
            <Card.Text>Tasty!</Card.Text>
          </Card.Body>
        </Card>
        {/*card three*/}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="scorpion">SCORPION</Card.Title>
            <Card.Text>Vengeance will be mine!</Card.Text>
          </Card.Body>
        </Card>
        {/*use of forms checkpoint objective; select list.*/}
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
    </>
  );
}
