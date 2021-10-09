import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import BarToggle from '../SideBar/BarToggle/BarToggle';

const Toolbar = props => (
    <header className={styles.toolbar}>
        <BarToggle clicked={props.sideBarToggleHandler} />
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav className={styles.desktop}>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar;
