import React from 'react';
import classes from './Footer.module.scss';
import {Link} from 'react-router-dom';

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
                                <li><Link to="/"><p>Главная</p></Link></li>
                                <li><Link to="/tariffs"><p>Тарифы</p></Link></li>
                                <li><Link to="/warehouse"><p>Склад</p></Link></li>
                                <li><Link to="/"><p>О нас</p></Link></li>
                                <li><Link to="/"><p>Информация</p></Link></li>
                            </ul>
                        </div>
                        <div className={classes.footerForm}>
                            <h3 className={classes.red}>Компания</h3>
                            <ul>
                                <li><Link to="/"><p>Политика Cookie</p></Link></li>
                                <li><Link to="/"><p>Политика конфиденциальности</p></Link></li>
                                <li><Link to="/"><p>Контакты</p></Link></li>
                            </ul>
                            <br/>
                            <div className={classes.phoneNumber}>
                                <Link to="/"><p>&#128222; +996 700 00 00 00</p></Link>
                                <Link to="/"><p>&#128222; +996 500 00 00 00</p></Link>
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