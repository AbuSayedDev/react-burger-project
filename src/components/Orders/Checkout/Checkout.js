import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';


class Checkout extends Component{
    state = {
        values:{
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery",

        }
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

    submitHandler = (event) =>{
        console.log(this.state.values);
        event.preventDefault();
    }



    render(){
        return(
            <div>
                <Row>
                    <Col sm="12" md="7" className="m-auto">
                        <Card>
                            <CardHeader className="text-center">
                                <h5>Checkout</h5>
                            </CardHeader>

                            <CardBody>
                                <Form >
                                    <FormGroup className="my-3">
                                        <Label for="phone">Phone</Label>
                                        <Input type="number" name="phone" id="phone" id="phone" placeholder="Your Phone Number" value={this.state.values.phone} onChange={(e)=> this.inputChangeHandler(e)}/>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Label for="deliveryAddress">Your Address</Label>
                                        <Input type="textarea" name="deliveryAddress" id="deliveryAddress" placeholder="Your Address" value={this.state.values.deliveryAddress} onChange={(e)=> this.inputChangeHandler(e)}/>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Label for="paymentType">Select</Label>
                                        <Input type="select" name="paymentType" id="paymentType" value={this.state.values.paymentType} onChange={(e)=> this.inputChangeHandler(e)}>
                                            <option value="Cash On Delivery">Cash On Delivery</option>
                                            <option value="Bkash">Bkash</option>
                                        </Input>
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <Button style={{backgroundColor: "rgb(215, 15, 100)", border: "rgb(215, 15, 100)"}} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                                        <Button color="secondary" style={{marginLeft:"10px"}} className="ml-2" onClick={this.goBack}>Cancel</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Checkout;