import classes from "./MainPage.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Spin } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
import {useEffect, useState} from "react";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className={classes.spinLoading}>
                <Spin size={"large"}/>
            </div>
        )
    }

    const products = [
        {
            id: 1,
            title: "Автоматизация учёта",
            content: "Интеллектуальная система учёта товаров с возможностью сканирования штрихкодов, отслеживания остатков и генерации отчетов в реальном времени.",
            image: "/accounting.png",
        },
        {
            id: 2,
            title: "Интеграция",
            content: "Бесшовная интеграция с 1С, Bitrix24, amoCRM и другими системами для упрощения документооборота и обработки заказов.",
            image: "/integration.avif",
        },
        {
            id: 3,
            title: "Управление поставками",
            content: "Контроль сроков поставок, автоматические уведомления и визуализация цепочки поставки от производителя до клиента.",
            image: "/warehouseIcon.png",
        }
    ];


    const tab = [
        {
            id: 1,
            title: "Кто мы?",
            content: "Мы — команда профессионалов, создающих современные решения для автоматизации складского учета и логистики на базе веб-технологий.",
        },
        {
            id: 2,
            title: "Наша миссия",
            content: "Предоставлять бизнесу удобные, масштабируемые и надёжные инструменты для управления запасами и цепочками поставок.",
        },
        {
            id: 3,
            title: "Почему мы?",
            content: "Более 10 лет опыта, поддержка 24/7, индивидуальные решения под потребности любого склада — от малого до корпоративного.",
        },
        {
            id: 4,
            title: "Наша команда",
            content: "Разработчики, аналитики, логисты и проектные менеджеры с глубокой экспертизой в области складской логистики и IT.",
        },
        {
            id: 5,
            title: "Технологии",
            content: "Используем React, Node.js, PostgreSQL, а также внедряем AI и машинное обучение для анализа данных и прогноза спроса.",
        },
        {
            id: 6,
            title: "Будущее",
            content: "Развиваем мобильные решения, внедряем голосовое управление и готовим модуль AR-навигации по складу.",
        },
    ];


    const information = [
        {
            id: 1,
            title: "Доставка точно в срок",
            content: "Благодаря тесной интеграции с транспортными компаниями и гибкому планировщику логистики — мы соблюдаем сроки с точностью до часа.",
            image: "/informIcon.svg",
        },
        {
            id: 2,
            title: "Надежность",
            content: "Облачное хранилище, ежедневное резервное копирование, защита от сбоев и DDoS — ваши данные под надежной защитой.",
            image: "/informIcon2.png",
        },
        {
            id: 3,
            title: "Честные расчеты",
            content: "Прозрачное ценообразование без скрытых комиссий, гибкие тарифы и детальные отчеты по всем операциям.",
            image: "/informIcon3.webp",
        },
    ];


    return (
         <>
             {isLoading ? (
                 <Spin/>
             ) : (
                 <div>
                     <div>
                         <Swiper className={classes.swiper} modules={[Navigation, Pagination, Autoplay]}
                                 spaceBetween={30}
                                 slidesPerView={1} navigation pagination={{clickable: true}} loop={true}
                                 autoplay={{delay: 3000, disableOnInteraction: false,}}>
                             <SwiperSlide>
                                 <img src="/warehouseImage1.jpg" alt="slide1"/>
                                 <h3>Эффективный контроль и учёт складских запасов</h3>
                             </SwiperSlide>
                             <SwiperSlide>
                                 <img src="/warehouseImage2.jpg" alt="slide2"/>
                                 <h3>Интеграция с учётными системами и полная автоматизация</h3>
                             </SwiperSlide>
                             <SwiperSlide>
                                 <img src="/warehouseImage3.jpg" alt="slide3"/>
                                 <h3>Оптимизация логистики и повышение производительности</h3>
                             </SwiperSlide>
                         </Swiper>
                     </div>
                     <div className={classes.productsInner}>
                         <h3>Удобства</h3>
                         <div className={classes.productsBlock}>
                             {products.map((product) => (
                                 <div key={product.id} className={classes.products}>
                                     <div className={classes.productImage}>
                                         <img src={product.image} alt={product.title}/>
                                     </div>
                                     <h3 className={classes.productTitle}>{product.title}</h3>
                                     <br/>
                                     <p className={classes.productContent}>{product.content}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                     <div className={classes.wrapper}>
                         <div className={classes.mainBlock}>
                             <video src="/4477603-hd_1280_720_30fps.mp4" loop muted autoPlay></video>
                             <div className={classes.mainInner}>
                                 <img src="/accounting.png" alt="image"/>
                                 <div>
                                     <h3>Система управления складом товаров</h3>
                                     <p>
                                         Наша система управления складом автоматизирует все ключевые процессы: от приёмки и размещения товаров до их выдачи и инвентаризации.
                                         Она позволяет контролировать остатки в реальном времени, отслеживать движения товаров, снижать количество ошибок и повышать эффективность работы сотрудников.
                                         Благодаря интуитивному интерфейсу и гибким настройкам, решение подходит как для небольших складов, так и для крупных логистических центров.
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className={classes.tabBlock}>
                         <h2>О нас</h2>
                         <div  className={classes.tabChild}>
                             {tab.map((tabBlock) => (
                                 <div key={tabBlock.id} className={classes.tabInner}>
                                     <h3 className={classes.tabTitle}>{tabBlock.title}</h3>
                                     <br/>
                                     <p className={classes.tabContent}>{tabBlock.content}</p>
                                 </div>
                             ))}
                         </div>
                     </div>
                     <div className={classes.adcBlock}>
                        <div className={classes.adcInner}>
                            <div className={classes.adcImage}>
                                 <img src="/phoneImage.webp" alt="image"/>
                            </div>
                            <div className={classes.adcContent}>
                                <h2>Мобильное приложение для Android и iOS</h2>
                                <p>
                                    Управляйте складом прямо с телефона: сканируйте штрихкоды, отслеживайте остатки, оформляйте заказы и получайте уведомления в режиме реального времени.
                                </p>
                                <div className={classes.appBlock}>
                                    <div className={classes.appImage}>
                                        <a href="https://play.google.com/store/games?hl=ru&pli=1">
                                            <img src="/googlPlayIcon.svg" alt="googlePlay"/>
                                        </a>
                                    </div>
                                    <div className={classes.appImage}>
                                        <a href="https://www.apple.com/app-store/">
                                            <img src="/appStoreIcon.svg" alt="appstore"/>
                                        </a>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                     <div>
                         <div className={classes.informBlock}>
                             <h2>Информация</h2>
                             <h3>Наши примущества</h3>
                             <div className={classes.informChild}>
                                 {information.map((inform) => (
                                     <div key={inform.id} className={classes.informInner}>
                                         <div className={classes.informImage}>
                                             <img src={inform.image} alt={inform.title}/>
                                         </div>
                                         <h3 className={classes.informTitle}>{inform.title}</h3>
                                         <br/>
                                         <p className={classes.informContent}>{inform.content}</p>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             )}
         </>
    );
};

export default MainPage;
