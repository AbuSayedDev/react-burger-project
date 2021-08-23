import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls.js';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button  } from 'reactstrap';
import Summary from './Summary/Summary.js';

const ingredient_Price = {
    salad: 20,
    cheese:40,
    meat:80,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            
            {type: "salad", amount: 0},
            {type: "cheese", amount: 0},
            {type: "meat", amount: 0}
        ],
        totalPrice: 80,
        modalOpen: false,
        purchasable: false,
    }

    addIngredientHandle = type =>{
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + ingredient_Price[type];
        for(let item of ingredients){
            if(item.type === type){
                item.amount ++;
            }
        }
        this.setState({
            ingredients:ingredients,
            totalPrice:newPrice
        });
        this.updatePurchasable(ingredients);
    }

    removeIngredientHandle = type =>{
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - ingredient_Price[type];
        for(let item of ingredients){
            if(item.type === type){
                if(item.amount <= 0) return
                item.amount--;
            }
        }
        this.setState({
            ingredients:ingredients,
            totalPrice: newPrice
        });
        this.updatePurchasable(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }

    updatePurchasable = ingredients =>{
        const sum = ingredients.reduce((sum, element) =>{
            return sum + element.amount;
        }, 0);

        this.setState({
            purchasable: sum > 0
        })
    }


    handleCheckout = () =>{
        this.props.history.push("/checkout");
    }


    render(){
        return(
            <div>
                <div className="d-flex flex-md-row flex-column ">
                    <Burger ingredients={this.state.ingredients}/>
                    <Controls 
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemove={this.removeIngredientHandle}
                    price = {this.state.totalPrice}
                    toggleModal = {this.toggleModal}
                    purchasable = {this.state.purchasable}/>
                </div>

                <Modal isOpen= {this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price : {this.state.totalPrice.toFixed(0)} BDT</h5>
                        <Summary  ingredients = {this.state.ingredients}/>                    
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn btn-success" onClick={this.handleCheckout}>Continue Checkout </Button>
                        <Button className="btn btn-secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default BurgerBuilder;