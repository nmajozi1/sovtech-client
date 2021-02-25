import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './side-nav.css';
import { 
    Container,
    Col,
} from 'react-bootstrap';
import { fetchCatagories, jokeByCatagory } from '../../actions/joke-action';

class SideNav extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            catagory: ''
        };
    }

    handleClick(e) {
        this.props.jokeByCatagory(e.target.id);
    }

    componentWillMount() {
        this.props.fetchCatagories();
    }

    render() {
        return (
            <div className="Side-nav">
               <Container className="Button-container">
                <Col>
                <header className="Nav-header"><h2>Catagories</h2></header>
                    <hr />
                </Col>
                {this.props.catagories.data.catagories.map((item) => {
                    return <Col className="Nav-buttons" onClick={this.handleClick}><p id={item}>{item}</p></Col>
                })}
               </Container>
            </div>
        )
    }
}

SideNav.propTypes = {
    fetchCatagories: propTypes.func.isRequired,
    catagories: propTypes.array.isRequired,
}

const mapStateToProps = state => ({
    catagories: state.jokes.items,
    newcatagories: state.jokes.item
});

export default connect(mapStateToProps, { fetchCatagories, jokeByCatagory })(SideNav);
