import styles from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
    const ingredients = Object.keys(props.item)
        .map(singleItem => {
            return [...Array(props.item[singleItem])]
                .map((_, i) => {
                    return <Ingredient key={singleItem + i} type={singleItem} />
                });
        });

    return (
        <div className={styles.Burger}>
            <Ingredient type="breadTop" />
            {ingredients}
            <Ingredient type="breadBottom" />
        </div>
    );
}

export default Burger;
