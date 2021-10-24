import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSammary';
import Loader from '../../components/UI/Loader/Loader';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axiosInstance from '../../axios-orders';

const ITEM_PRICES = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 3,
}

class BurgerBuilder extends React.Component {

    state = {
        item: null,
        totalPrice: 10,
        purchaseable: false,
        isOrder: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axiosInstance.get('/item.json')
            .then(response => this.setState({ item: response.data }))
            .catch(() => this.setState({ error: true }));
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
        this.setState({ loading: true });

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
            .then(() => {
                this.setState({ loading: false, isOrder: false });
            })
            .catch(() => {
                this.setState({ loading: false, isOrder: false });
            });
    }

    render() {

        const itemClone = {
            ...this.state.item
        }

        for (let key in itemClone) {
            itemClone[key] = itemClone[key] <= 0;
        }

        let orderSummary = null;
        let burger = !this.state.error ? <Loader /> : <p style={{ textAlign: 'center' }}>Burger couldn't be loaded, try again later!</p>;

        if (this.state.item) {
            burger = (
                <>
                    <Burger item={this.state.item} />
                    <Controls
                        addItemHandler={this.addItemHandler}
                        removeItemHandler={this.removeItemHandler}
                        disabled={itemClone}
                        totalPrice={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        orderNowHandler={this.orderNowHandler} />
                </>
            );

            orderSummary = (
                <OrderSummary
                    item={this.state.item}
                    orderNowHideHandler={this.orderNowHideHandler}
                    orderNowContinueHandler={this.orderNowContinueHandler}
                    totalPrice={this.state.totalPrice} />
            );
        }

        if (this.state.loading) {
            orderSummary = <Loader />;
        }

        return (
            <>
                <Modal show={this.state.isOrder} orderNowHideHandler={this.orderNowHideHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);
