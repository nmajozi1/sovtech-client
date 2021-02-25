import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { 
    Container,
    Col,
} from 'react-bootstrap';
import './home.css';
import { fetchCatagories, jokeByCatagory } from '../../actions/joke-action';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col className="Random-Joke-Column">
                        <div className="Random-joke-block">
                            <h3>Select a catagory on the left</h3>
                            <hr />
                            <Container>
                                <p>{this.props.newcatagories.data.randomJoke.value}</p>
                            </Container>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}

Home.propTypes = {
    fetchCatagories: propTypes.func.isRequired,
    catagories: propTypes.array.isRequired,
}

const mapStateToProps = state => ({
    catagories: state.jokes.items,
    newcatagories: state.jokes.item
});

export default connect(mapStateToProps, { fetchCatagories, jokeByCatagory })(Home);
