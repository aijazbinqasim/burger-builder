import styles from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
    let ingredients = Object.keys(props.item)
        .map(singleItem => {
            return [...Array(props.item[singleItem])]
                .map((_, i) => {
                    return <Ingredient key={singleItem + i} type={singleItem} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding Ingredients!</p>
    }

    return (
        <div className={styles.burger}>
            <Ingredient type="breadTop" />
            {ingredients}
            <Ingredient type="breadBottom" />
        </div>
    );
}

export default Burger;
