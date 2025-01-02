// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'bootstrap/dist/css/bootstrap.css';
import './../../styles/carousel.css';

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Product {
    title: string;
    image: string;
    description: string;
    price: string;
}

const ProductCard = ({ title, image, description, price }: Product): JSX.Element => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={'/products/attack-on-titan.jpg'} alt='Attack on Titan' />
                    <div className="text-box">
                        <h2>Attack on Titan</h2>
                        <p>
                        Una historia de acción, misterio y supervivencia en un mundo post-apocalíptico lleno de peligros.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/products/dragon-ball.jpg" alt='Dragon Ball' />
                    <div className="text-box">
                        <h2>Dragon Ball</h2>
                        <p>
                        es una serie de aventuras y artes marciales donde un joven guerrero llamado Goku busca 
                        las Esferas del Dragón y se convierte en un héroe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/products/fullmetal-alchemist.jpg" alt='Fullmetal Alchemist' />
                    <div className="text-box">
                        <h2>Fullmetal Alchemist</h2>
                        <p>
                        Es una historia de aventuras, drama y alquimia donde dos hermanos luchan por recuperar lo que 
                        perdieron y descubrir la verdad sobre el mundo que los rodea.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/products/naruto.jpg" alt='Naruto' />
                    <div className="text-box">
                        <h2>Naruto</h2>
                        <p>
                        Es una historia de un joven ninja que lucha por superar sus limitaciones, encontrar su lugar 
                        en el mundo y cumplir sus sueños, todo mientras enfrenta desafíos y peligros que amenazan a su aldea.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/products/one-piece.jpg" alt='One Piece' />
                    <div className="text-box">
                        <h2>One Piece</h2>
                        <p>
                        Es una épica aventura de piratas llena de acción, humor y amistad, donde un joven soñador 
                        navega los mares para cumplir su sueño de convertirse en el Rey de los Piratas.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ProductCard;