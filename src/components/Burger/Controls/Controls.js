import styles from './Controls.module.css';
import Control from './Control/Control';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const Controls = props => (
    <div className={styles.controls}>
        <p>Total amount R.s : <strong>{props.totalPrice}</strong></p>
        {controls.map(ctr => (
            <Control
                key={ctr.label}
                label={ctr.label}
                addItemHandler={() => props.addItemHandler(ctr.type)}
                removeItemHandler={() => props.removeItemHandler(ctr.type)}
                disabled={props.disabled[ctr.type]}
            />
        ))}
    </div>
);

export default Controls;
