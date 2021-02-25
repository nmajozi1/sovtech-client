import React, { Component } from 'react';
import { 
    Button,
    Container,
    Row,
    Col,
    Card,
    ListGroup
} from 'react-bootstrap';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col className="Random-Joke-Column">
                        <div className="Random-joke-block">
                            <h3>Select Joke Catagory on the left</h3>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Home;
