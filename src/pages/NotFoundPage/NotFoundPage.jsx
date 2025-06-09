import classes from "./NotFound.module.scss";
import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div className={classes.container}>
                <video src="/notFoundBg.mov" className={classes.notFound} autoPlay loop muted></video>
                <div className={classes.pageBlock}>
                    <button onClick={handleClick}>На главную</button>
                    <div className={classes.pageForm}>
                        <div className={classes.pageTitle}>
                            <h2 className={classes.errorTitle}>Error 404</h2>
                            <h3 className={classes.errorText}>Page not found!</h3>
                        </div>
                        <div className={classes.pageTitle}>
                            <h2 className={classes.errorTitle}>Ошибка 404</h2>
                            <h3 className={classes.errorText}>Страница не найдена!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;