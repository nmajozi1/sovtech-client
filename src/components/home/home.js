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

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
    }

    getProps(props) {
        console.log('PROPS: ', props)
    }

    render() {
        console.log('PROPS: ', this.props.newcatagories.data.randomJoke.value);
        return (
            <div>
                <Container>
                    <Col className="Random-Joke-Column">
                        <div className="Random-joke-block">
                            <h3>Select Joke Catagory on the left</h3>
                            <hr />
                            <p>{this.props.newcatagories.data.randomJoke.value}</p>
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
