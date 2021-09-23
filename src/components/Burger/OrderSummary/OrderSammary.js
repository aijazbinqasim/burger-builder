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
            <h3>Your Order</h3>
            <p>A tasty Burger with the following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p>Continue to cehckout?</p>
        </>
    );
}

export default OrderSummary;
