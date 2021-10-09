import React from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideBar from '../Nav/SideBar/SideBar';

export default class Layout extends React.Component {
    state = { open: false }

    sideBarCloseHandler = () => {
        this.setState({ open: false });
    }

    sideBarToggleHandler = () => {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    render() {
        return (
            <>
                <Toolbar sideBarToggleHandler={this.sideBarToggleHandler} />

                <SideBar
                    open={this.state.open}
                    sideBarCloseHandler={this.sideBarCloseHandler} />

                <main className={styles.content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}
