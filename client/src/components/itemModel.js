import React, {Component} from 'react';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
 } from "reactstrap";
 import {connect} from 'react-redux';
 import {addItem} from '../actions/itemActions' 

 // container: a component that is hooked to redux, using a redux state inside a react component

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        // Add item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
            <Button 
            color="dark"
            style={{marginBottom: '2rem'}} 
            onClick={this.toggle}>
                Add Item!
            </Button>
            <Modal 
            isOpen={this.state.modal} 
            toggle={this.toggle} >
                <ModalHeader 
                toggle={this.toggle}>
                    Add an Item!
                </ModalHeader>
                <ModalBody>
                    <Form
                    onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">
                                Item
                            </Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add Shopping Item"
                            onChange={this.onChange}
                            />                            
                        </FormGroup>
                        <Button
                       color="dark"
                       style={{marginTop: '2rem'}}
                       block>
                           Add the Item to your list!
                    </Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <p>ShaZam</p>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
      
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(
    mapStateToProps, 
    { addItem }
)(ItemModal);