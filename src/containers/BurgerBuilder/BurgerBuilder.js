import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

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
        totalPrice: 10
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
                <Burger
                    item={this.state.item}
                />

                <Controls
                    addItemHandler={this.addItemHandler}
                    removeItemHandler={this.removeItemHandler}
                    disabled={itemClone}
                />
            </>
        );
    }
}
