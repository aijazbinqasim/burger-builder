import styles from './Backdrop.module.css';

const Backdrop = props => (
    props.show ? <div className={styles.backdrop} onClick={props.orderNowHideHandler}></div> : null
);

export default Backdrop;
