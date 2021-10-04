import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = props => (
    <header className={styles.toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar;
