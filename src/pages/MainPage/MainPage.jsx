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
            title: "Продукт 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/",
        },
        {
            id: 2,
            title: "Продукт 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/",
        },
        {
            id: 3,
            title: "Продукт 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/",
        }
    ]

    const tab = [
        {
            id: 1,
            title: "1",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
        {
            id: 2,
            title: "2",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
        {
            id: 3,
            title: "3",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
        {
            id: 4,
            title: "4",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
        {
            id: 5,
            title: "5",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
        {
            id: 6,
            title: "6",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum"
        },
    ]

    const information = [
        {
            id: 1,
            title: "Доставка точно в срок",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/informIcon.svg",
        },
        {
            id: 2,
            title: "Надежность",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/informIcon2.png",
        },
        {
            id: 3,
            title: "Честные расчеты",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit " +
                "Aliquid assumenda cum dolore dolorem eos," +
                "facilis ipsam iure iusto laboriosam molestiae non" +
                "perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum",
            image: "/informIcon3.webp",
        },
    ]

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
                                 <h3>Система управления складом товаров 1</h3>
                             </SwiperSlide>
                             <SwiperSlide>
                                 <img src="/warehouseImage2.jpg" alt="slide2"/>
                                 <h3>Система управления складом товаров 2</h3>
                             </SwiperSlide>
                             <SwiperSlide>
                                 <img src="/warehouseImage3.jpg" alt="slide3"/>
                                 <h3>Система управления складом товаров 3</h3>
                             </SwiperSlide>
                         </Swiper>
                     </div>
                     <div>
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
                                 <img src="/warehouseIcon.png" alt="image"/>
                                 <div>
                                     <h3>Система управления складом товаров</h3>
                                     <p>
                                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                         Aliquid assumenda cum dolore dolorem eos,
                                         facilis ipsam iure iusto laboriosam molestiae non
                                         perferendis placeat quasi ratione reiciendis reprehenderit sint ut voluptatum.
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
                                <h2>Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus in maiores nam nobis soluta.
                                    A doloribus enim eos ex officiis repellat unde ut!
                                    Ab accusamus, alias blanditiis cumque fugiat ipsam?
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
