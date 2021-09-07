import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

export default class BurgerBuilder extends React.Component {

    state = {
        item: {
            cheese: 1,
            meat: 3,
            salad: 1,
            bacon: 1
        }
    }

    render() {
        return (
            <>
                <Burger item={this.state.item} />
                <Controls />
            </>
        );
    }
}
