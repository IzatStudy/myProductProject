import Header from '../Header/Header.jsx';
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <main className={classes.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
