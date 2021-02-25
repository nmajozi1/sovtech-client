import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { 
    Container,
    Col,
} from 'react-bootstrap';
import './home.css';
import { fetchCatagories, jokeByCatagory } from '../../actions/joke-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {

    getJoke = () => {
        try {
            var joke = this.props.newcatagories.data.randomJoke.value;

            return joke;
        } catch (error) {
            var joke = '';

            return joke;
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Col className="Random-Joke-Column">
                        <div className="Random-joke-block">
                            <h3><span><FontAwesomeIcon icon={faArrowLeft} /></span> Select a catagory on the left</h3>
                            <hr />
                            <Container>
                                <p>{this.getJoke()}</p>
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
