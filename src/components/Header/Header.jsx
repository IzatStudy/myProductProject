import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


const pages = [
    {
        label: "PokemonPage",
        link: "/",
    },
    {
        label: "PokemonArena",
        link: "/arena",
    }
];

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.icon}></div>
            {pages.map((item,key) => (
                <NavLink key={key} to={item.link}>
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
};

export default Header;