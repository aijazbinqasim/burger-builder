import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends React.Component {

    shouldComponentUpdate(nxtProps, nxtState) {
        return nxtProps.show !== this.props.show;
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.orderNowHideHandler} />

                <div
                    className={styles.modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>

                    {this.props.children}
                </div>
            </>
        );
    }
}
