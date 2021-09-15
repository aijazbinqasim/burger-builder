import styles from './Control.module.css';

const Control = props => (
    <div className={styles.buildControl}>
        <div className={styles.label}>{props.label}</div>

        <button
            className={styles.less}
            onClick={props.removeItemHandler}
            disabled={props.disabled}>Less</button>

        <button
            className={styles.more}
            onClick={props.addItemHandler}>More</button>
    </div>
);

export default Control;
