import styles from './Control.module.css';

const Control = props => (
    <div className={styles.buildControl}>
        <div className={styles.label}>{props.label}</div>
        <button className={styles.less}>Less</button>
        <button className={styles.more}>More</button>
    </div>
);

export default Control;
