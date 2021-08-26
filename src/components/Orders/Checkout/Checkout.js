import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, 
        Label, Input, Modal, ModalBody} from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../../Spinner/Spinner.js';
import { resetIngredient } from '../../../redux/actionCreators.js';
 
const mapStateToProps = state =>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        resetIngredient: () => dispatch(resetIngredient()),
    }
}

class Checkout extends Component{
    state = {
        values:{
            fullName: "",
            phone: "",
            deliveryAddress: "",
            paymentType: "Cash On Delivery",
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: "",
    }

    goBack = () => {
        this.props.history.push("/");
    }

    inputChangeHandler = (e) =>{
        this.setState({
            values:{
                ...this.state.values,
                [e.target.name] : e.target.value,
            }
        })
    }

    submitHandler = () =>{
        this.setState({
            isLoading: true,
        });

        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
        }

        axios.post("https://burger-project-d5a56-default-rtdb.firebaseio.com/orders.json", order)
        .then(response => {
            if(response.status === 200){
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Order Placed Successfully!"
                })
                this.props.resetIngredient();
            }else{
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something Went Wrong! Please Order Again!"
                })
            }
        })
        .catch(error =>{
            this.setState({
                isLoading: false,
                isModalOpen: true,
                modalMsg: "Something Went Wrong! Please Order Again!"
            })
        })
    }



    render(){

        let form = (
            <div>
                <Row>
                    <Col sm="12" md="5" lg="4" className="m-auto my-3">
                        <Card>
                            <CardHeader className="text-center">
                                <h5>Payment Card</h5>
                            </CardHeader>

                            <CardBody>
                                <h4>Total Pay : {this.props.totalPrice} BDT</h4>
                            </CardBody>
                            </Card>
                    </Col>

                    <Col sm="12" md="7" lg="7" className="m-auto my-3">
                        <Card>
                            <CardHeader className="text-center">
                                <h5>Checkout</h5>
                            </CardHeader>

                            <CardBody>
                                <Form >
                                    <FormGroup className="my-3">
                                        <Label for="fullName">Name</Label>
                                        <Input type="text" name="fullName" id="fullName"
                                            placeholder="Your Name" 
                                            value={this.state.values.fullName} 
                                            onChange={(e)=> this.inputChangeHandler(e)}/>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Label for="phone">Phone</Label>
                                        <Input type="number" name="phone" id="phone" 
                                            placeholder="Your Phone Number" 
                                            value={this.state.values.phone} 
                                            onChange={(e)=> this.inputChangeHandler(e)}/>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Label for="deliveryAddress">Your Address</Label>
                                        <Input type="textarea" name="deliveryAddress" id="deliveryAddress" 
                                            placeholder="Your Address" 
                                            value={this.state.values.deliveryAddress} 
                                            onChange={(e)=> this.inputChangeHandler(e)}/>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Label for="paymentType">Select</Label>
                                        <Input type="select" name="paymentType" id="paymentType" 
                                            value={this.state.values.paymentType} 
                                            onChange={(e)=> this.inputChangeHandler(e)}>
                                            <option value="Cash On Delivery">Cash On Delivery</option>
                                            <option value="Bkash">Bkash</option>
                                        </Input>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Button style={{backgroundColor: "rgb(215, 15, 100)", border: "rgb(215, 15, 100)"}} className="mr-auto" 
                                            onClick={this.submitHandler} disabled={!this.props.purchasable}>Place Order</Button>
                                        <Button color="secondary" style={{marginLeft:"10px"}} className="ml-2" 
                                            onClick={this.goBack}>Cancel</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

        return(
            <div>

                { this.state.isLoading ? <Spinner /> : form }

                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);