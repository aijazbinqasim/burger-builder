import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
    <>
        <Backdrop show={props.show} orderNowHideHandler={props.orderNowHideHandler} />

        <div
            className={styles.modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
);

export default Modal;
