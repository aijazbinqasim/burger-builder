import styles from './NavItem.module.css';

const NavItem = props => (
    <li className={styles.navItem}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}>{props.children}</a>
    </li>
)

export default NavItem;
