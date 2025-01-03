import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const BannerCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: SetStateAction<number>) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade interval={3000}>
            <Carousel.Item>
                <img
                    src={`/images/carousel/promotional-1.png`}
                    alt="First slide"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/banner-offers-1-example.jpg`}
                    alt="Second slide"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/banner-offers-2-example.jpg`}
                    alt="Third slide"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={`/images/carousel/banner-offers-3-example.jpg`}
                    alt="Fourth slide"
                    className="d-block w-100"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;
