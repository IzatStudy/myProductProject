import classes from './Header.module.scss';
import {NavLink, Link} from "react-router-dom";
import {DownOutlined} from '@ant-design/icons';
import { Dropdown, Space} from 'antd';
import React from "react";
import Profile from "../../pages/Profile/Profile.jsx";
import { Typography } from 'antd';
const { Title } = Typography;

const items = [
    {
        label: <Link to="/">Главная, О нас, Информация</Link>,
        key: "1",
    },
    {
        label: <Link to="/tariffs">Тарифы и удобные инструменты для управления</Link>,
        key: "2",
    },
    {
        label: <Link to="/warehouse">Удобная система для управления товарами, остатками и логистикой.</Link>,
        key: "3",
    },
];

const pages = [
    {
        label: "Главная",
        link: "/",
    },
    {
        label: "Тарифы",
        link: "/tariffs",
    },
    {
        label: "Склад",
        link: "/warehouse",
    }
];

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.logo}>
                    <NavLink to={"/"} >
                        <img src="/warehouseIcon.png" alt="logo"/>
                    </NavLink>
                    <Title level={2}>Company for Warehouse Management System</Title>
                </div>
                <div className={classes.labelBlock}>
                    {pages.map((item, key) => (
                        <NavLink key={key} to={item.link}>
                            <div className={classes.labels}>{item.label}</div>
                        </NavLink>
                    ))}
                    <Dropdown menu={{items}}>
                        <a onClick={e => e.preventDefault()} >
                            <Space style={{color: 'white', margin: "10px"}} >
                                Услуги
                                <DownOutlined/>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div className={classes.authBtn}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
};

export default Header;