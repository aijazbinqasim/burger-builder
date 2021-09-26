import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const summary = Object.keys(props.item)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.item[igKey]}
                </li>
            );
        });

    return (
        <>
            <h3 style={{textAlign:'center'}}>Your Order</h3>
            <p>A tasty Burger with the following ingredients:</p>

            <ul>
                {summary}
            </ul>

            <p><strong>Total amount R.s: {props.totalPrice}</strong></p>

            <p>Continue to cehckout?</p>

            <Button btnType='danger' clicked={props.orderNowHideHandler}>CANCEL</Button>
            <Button btnType='success' clicked={props.orderNowContinueHandler}>CONTINUE</Button>
        </>
    );
}

export default OrderSummary;
