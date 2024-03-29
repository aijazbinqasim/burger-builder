import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = () => (
    <ul className={styles.navItems}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </ul>
)

export default NavItems;
