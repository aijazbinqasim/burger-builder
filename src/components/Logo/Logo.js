import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = () => (
    <div className={styles.logo}>
        <img src={BurgerLogo} alt="My Burger Logo" />
    </div>
)

export default Logo;
