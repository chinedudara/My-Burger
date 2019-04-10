import React, {Component} from 'react';

import Aux from '../hoc/Auxilliary';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 100,
    bacon: 170,
    meat: 200,
    cheese: 150
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 0,
        canPurchase: false,
        isPurchasing: false
    }

    isPurchasingHandler = () => {
        this.setState({isPurchasing: true})
    }

    updatePurchaseStateHandler = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(ingrKey => ingredients[ingrKey])
        .reduce((sum, el) => {
            return sum + el;
        }, 0)
        this.setState({canPurchase: sum > 0});
    }

    addIngredientHandler = (type) => {
        const newIngrState = {...this.state.ingredients};
        newIngrState[type]++;
        const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: newIngrState, totalPrice: newTotalPrice});
        this.updatePurchaseStateHandler(newIngrState);
    }

    removeIngredientHandler = (type) => {
        const newIngrState = {...this.state.ingredients};
        if (newIngrState[type] <= 0) return; 
        newIngrState[type]--; 
        const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: newIngrState, totalPrice: newTotalPrice});
        this.updatePurchaseStateHandler(newIngrState);
    }

    render () {
        let disabledInfo = {...this.state.ingredients};
        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.isPurchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    canPurchase={this.state.canPurchase}
                    isPurchasing={this.isPurchasingHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;