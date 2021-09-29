import styles from './Layout.module.css';
import Toolbar from '../Nav/Toolbar/Toolbar';

const Layout = props => {
    return (
        <>
            <Toolbar />
            <main className={styles.content}>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
