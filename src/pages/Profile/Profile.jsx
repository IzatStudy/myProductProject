import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import {Link, useNavigate} from "react-router-dom";
import classes from "./Profile.module.scss";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Profile = () => {
    const { username, isAuthenticated } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const useLogout = () => {
        dispatch(logout());
        navigate("/");
    };


    const profileItems = [
        {
            label: <span onClick={useLogout} style={{cursor: 'pointer'}}>Выйти</span>,
            key: '1',
        }
    ];

    const authBtn = () => {
       navigate("/login");
    }


    return (
        <div className={classes.profile}>
            <div>
                {isAuthenticated ? (
                    <div className={classes.profileBlock}>
                        <div className={classes.profileForm}>
                            <div className={classes.characterIcon}>
                                <img src="/characterIcon.jpg" alt="characterIcon"/>
                            </div>
                            <Dropdown menu={{items: profileItems}} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
                                    <Space style={{color: 'white'}}>
                                        <p>{username}</p>
                                        <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Button onClick={authBtn} className={classes.authBtn} type={"primary"}>Авторизация</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;

