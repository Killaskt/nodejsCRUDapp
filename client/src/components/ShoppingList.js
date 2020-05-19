import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import {v4 as uuid} from 'uuid';

import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';

import PropTypes from "prop-types";

class ShoppingList extends Component {
    // Lifecycle method, used when making an api request (calling an action)  
    componentDidMount() {
        this.props.getItems();
    }
    
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.item; // < - this.props.item.items but using destructuring
        return (
            <Container>
                {/* <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt("Enter Item:")
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name: name}] //name: name can simply be just 'name' in ES6
                            }))
                        }
                    }}
                >Add Item</Button> */}

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name}) => ( 
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                    className="remove-Btn"
                                    color ="danger"
                                    size = "sm"
                                    onClick={this.onDeleteClick.bind(this, id)}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

// when an action is brought in from redux it's stored as a prop in react
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem}
)(ShoppingList);