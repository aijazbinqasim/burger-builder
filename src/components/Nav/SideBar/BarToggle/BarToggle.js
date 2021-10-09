import styles from './BarToggle.module.css';

const BarToggle = props => (
    <div className={styles.barToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default BarToggle;
