import React from 'react';
import styles from './TariffsPage.module.css';

const TariffsPage = () => {
    const tariffs = [
        {
            id: 1,
            title: 'Бесплатно',
            text: 'Для малых складов',
            content1: 'До 100 товаров',
            content2: 'Карта склада',
            content3: 'Инвентаризация'
        },
        {
            id: 2,
            title: '1.90$ / мес',
            text: 'Для средних складов',
            content1: 'До 500 товаров',
            content2: 'Карта склада',
            content3: 'Аналитика и отчёты',
            content4: 'Инвентаризация',
        },
        {
            id: 3,
            title: '5.90$ / мес',
            text: 'Профессиональный',
            content1: 'До 5000 товаров',
            content2: 'Карта склада',
            content3: 'Аналитика и отчёты',
            content4: 'Поддержка API',
            content5: 'Инвентаризация'
        },
    ]

    const screenShots = [
        {
            id: 1,
            title: "Product 1",
            image: "/warehouseImage1.jpg",
        },
        {
            id: 2,
            title: "Product 2",
            image: "/warehouseImage2.jpg",
        },
        {
            id: 3,
            title: "Product 3",
            image: "/warehouseImage3.jpg",
        }
    ]

    return (
        <>
            <div className={styles.contentBlock}>
                <div className={styles.section}>
                    <h1 className={styles.title}>Склад под контролем</h1>
                    <p className={styles.subtitle}>Удобная система для управления товарами, остатками и логистикой.</p>
                </div>
                <div className={styles.titles}>
                    {[{
                        title: "Учёт остатков",
                        desc: "Контроль за товаром в реальном времени"
                    }, {title: "Поступления и отгрузки", desc: "История движения каждого товара"}, {
                        title: "Аналитика",
                        desc: "Понимание, что и когда продаётся"
                    },].map(({title, desc}, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardText}>{desc}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.screens}>
                    <h2 className={styles.sectionTitle}>Скриншоты</h2>
                    <div className={styles.screenGrid}>
                        {screenShots.map((screens) => (
                            <div key={screens.id}>
                                <img id={screens.id} alt={screens.title} src={screens.image}
                                     className={styles.screenImg}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.title}>Тарифы</h2>
                    <div className={styles.pricing}>
                        {tariffs.map((cards) => (
                            <div className={styles.card} key={cards.id}>
                                <h3 className={styles.cardTitle}>{cards.title}</h3>
                                <p className={styles.cardText}>{cards.text}</p>
                                <ul className={styles.cardList}>
                                    <li>{cards.content1}</li>
                                    <li>{cards.content2}</li>
                                    <li>{cards.content3}</li>
                                    <li>{cards.content4}</li>
                                    <li>{cards.content5}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default TariffsPage;
