import React from 'react';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component {

    state = {
        item: {
            cheese: 0,
            meat: 0,
            salad: 0,
            bacon: 0
        }
    }

    render() {
        return (
            <>
                <Burger item={this.state.item} />
                <div>Build Controls</div>
            </>
        );
    }
}
