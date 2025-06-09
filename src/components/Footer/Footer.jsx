import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <div>
                <div className={classes.footer}>
                    <div className={classes.footerInner}>
                        <div className={classes.footerForm}>
                            <div className={classes.logo}>
                                <img src="/warehouseIcon.png" alt="logo"/>
                                <h3>Company for Warehouse Management System</h3>
                            </div>
                        </div>
                        <div className={classes.footerForm}>
                            <h3 className={classes.red}>Страницы</h3>
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/warehouse">Склад</a></li>
                                <li><a href="/tariffs">Тарифы</a></li>
                                <li><a href="">О нас</a></li>
                                <li><a href="">Информация</a></li>
                            </ul>
                        </div>
                        <div className={classes.footerForm}>
                            <h3 className={classes.red}>Компания</h3>
                            <ul>
                                <li><a href="">Политика Cookie</a></li>
                                <li><a href="">Политика конфиденциальности</a></li>
                                <li><a href="">Контакты</a></li>
                            </ul>
                            <br/>
                            <div>
                                <p className={classes.phoneNumber}><a href="">&#128222; +996 700 00 00 00</a></p>
                                <p className={classes.phoneNumber}><a href="">&#128222; +996 500 00 00 00</a></p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerBottom}>
                        <div>
                            <p>© Система управления складом товаров.</p>
                            <p>© Warehouse Management System.</p>
                        </div>
                        <p>Footer.2025 ©</p>
                        <div className={classes.socialIcons}>
                            <a href="https://www.whatsapp.com/"><img src="/whatsapp_icon1%C2%A0—%20.svg" alt="whatsapp_icon1%C2%A0—%20.svg"/></a>
                            <a href="https://www.instagram.com/"><img src="/instagram_icon.svg" alt="instagram_icon1.svg"/></a>
                            <a href="https://www.facebook.com/"><img src="/facebook_icon.svg" alt="facebook_icon1.svg"/></a>
                            <a href="https://www.facebook.com/"><img src="/twitter_icon.svg" alt="twitter_icon1.svg"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;