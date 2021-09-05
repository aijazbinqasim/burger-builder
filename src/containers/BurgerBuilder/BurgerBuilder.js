import React from 'react';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends React.Component {

    state = {
        item: {
            cheese: 2,
            meat: 1,
            salad: 1,
            bacon: 2
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
