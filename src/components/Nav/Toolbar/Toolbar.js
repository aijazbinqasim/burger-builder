import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = () => (
    <header className={styles.toolbar}>
        <div>MENU</div>
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav className={styles.desktop}>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar;
