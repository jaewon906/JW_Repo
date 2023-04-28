// npm install react-bootstrap bootstrap
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './App.css'

function App() {
    return(
        <div className='App'>
            <Button variant="primary">Primary</Button>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h1.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h2.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className='col-md-4'>
                        <img src="https://joonpark4.github.io/Joonbug/Project_Restaurant/img/h3.jpg" width="80%"/>
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App
