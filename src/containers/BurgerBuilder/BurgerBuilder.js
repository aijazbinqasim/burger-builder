import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSammary';
import axiosInstance from '../../axios-orders';

const ITEM_PRICES = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 3,
}

export default class BurgerBuilder extends React.Component {

    state = {
        item: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 10,
        purchaseable: false,
        isOrder: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(i => {
                return ingredients[i]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    addItemHandler = type => {
        const oldCount = this.state.item[type];
        const newCount = oldCount + 1;
        const newItem = { ...this.state.item }
        newItem[type] = newCount;

        const itemPrice = ITEM_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + itemPrice;

        this.setState({ item: newItem, totalPrice: newTotalPrice });
        this.updatePurchaseState(newItem);
    }

    removeItemHandler = type => {
        const oldCount = this.state.item[type];

        if (oldCount <= 0) {
            return;
        }

        const newCount = oldCount - 1;
        const newItem = { ...this.state.item }
        newItem[type] = newCount;

        const itemPrice = ITEM_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice - itemPrice;

        this.setState({ item: newItem, totalPrice: newTotalPrice });
        this.updatePurchaseState(newItem);
    }

    orderNowHandler = () => {
        this.setState({ isOrder: true });
    }

    orderNowHideHandler = () => {
        this.setState({ isOrder: false });
    }

    orderNowContinueHandler = () => {
        axiosInstance.post('/orders.json', {

            items: this.state.item,
            amount: this.state.totalPrice,
            deliveryMethod: 'Fast',
            customer: {
                name: 'Aijaz Ali',
                email: 'aijaz.ali@hotmail.com',

                address: {
                    street: 'H# C-71,Jamshoro Rd,Gulistan-e-sajjad',
                    zipCode: '7100',
                    country: 'Pakistan'
                }
            }
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {

        const itemClone = {
            ...this.state.item
        }

        for (let key in itemClone) {
            itemClone[key] = itemClone[key] <= 0;
        }

        return (
            <>
                <Modal show={this.state.isOrder} orderNowHideHandler={this.orderNowHideHandler}>
                    <OrderSummary
                        item={this.state.item}
                        orderNowHideHandler={this.orderNowHideHandler}
                        orderNowContinueHandler={this.orderNowContinueHandler}
                        totalPrice={this.state.totalPrice} />
                </Modal>

                <Burger item={this.state.item} />

                <Controls
                    addItemHandler={this.addItemHandler}
                    removeItemHandler={this.removeItemHandler}
                    disabled={itemClone}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    orderNowHandler={this.orderNowHandler}
                />
            </>
        );
    }
}
