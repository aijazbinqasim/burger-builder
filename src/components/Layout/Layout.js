import styles from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <div>Toolbar, SideDrawer, BackDrop</div>
            <main className={styles.content}>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
