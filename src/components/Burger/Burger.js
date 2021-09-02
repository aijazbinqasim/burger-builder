import styles from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
    return (
        <div className={styles.Burger}>
            <Ingredient type="breadTop" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="salad" />
            <Ingredient type="bacon" />
            <Ingredient type="breadBottom" />
        </div>
    );
}

export default Burger;
