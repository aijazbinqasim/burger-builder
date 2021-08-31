import styles from './Ingredient.module';

const Ingredient = props => {
    let ingr = null;

    switch (props.type) {
        case ('breadBottom'):
            ingr = <div className={styles.breadBottom}></div>;
            break;

        case ('breadTop'):
            ingr = (
                <div className={styles.breadTop}>
                    <div className={styles.seeds1}></div>
                    <div className={styles.seeds2}></div>
                </div>
            );
            break;

        case ('meat'):
            ingr = <div className={styles.meat}></div>;
            break;

        case ('cheese'):
            ingr = <div className={styles.cheese}></div>;
            break;

        case ('salad'):
            ingr = <div className={styles.salad}></div>;
            break;

        case ('bacon'):
            ingr = <div className={styles.bacon}></div>;
            break;

        default:
            ingr = null;
            break;
    }

    return ingr;
}

export default Ingredient;
