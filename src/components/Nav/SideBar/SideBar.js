import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideBar.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideBar = props => {

    let attachedStyles = [styles.sideBar, styles.close];

    if (props.open) {
        attachedStyles = [styles.sideBar, styles.open];
    }

    return (
        <>
            <Backdrop
                show={props.open}
                clicked={props.sideBarCloseHandler} />

            <div className={attachedStyles.join(' ')}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </>
    );
}

export default SideBar;
