import { useState, useEffect } from 'react';
import './../styles/home.css';
import './../styles/hero.css';
import { useHelmet } from '../hooks';
import { CategoryCard, ProductCard, Hero } from '../components';

interface Category {
    id: number;
    name: string;
    image: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

interface News {
    id: number;
    title: string;
    description: string;
    image: string;
}

const categories: Category[] = [
    { id: 1, name: 'Action', image: 'action.jpg' },
    { id: 2, name: 'Comedy', image: 'comedy.jpg' },
    { id: 3, name: 'Drama', image: 'drama.jpg' },
    { id: 4, name: 'Fantasy', image: 'fantasy.jpg' },
    { id: 5, name: 'Horror', image: 'horror.jpg' },
    { id: 6, name: 'Romance', image: 'https://assets.jumpseller.com/store/mangabreria/themes/657459/options/132540500/Romance%20Nuevo.jpg' },
];
  
const products: Product[] = [
    { id: 1, name: 'Naruto', price: '10.99', description: '', image: 'naruto.jpg' },
    { id: 2, name: 'One Piece', price: '12.99', description: '', image: 'one-piece.jpg' },
    { id: 3, name: 'Attack on Titan', price: '14.99', description: '', image: 'attack-on-titan.jpg' },
    { id: 4, name: 'Dragon Ball', price: '16.99', description: '', image: 'dragon-ball.jpg' },
    { id: 5, name: 'Fullmetal Alchemist', price: '18.99', description: '', image: 'fullmetal-alchemist.jpg' },
];
  
const news: News[] = [
    { id: 1, title: 'New Anime Released', description: 'Check out the latest anime release', image: 'news1.jpg' },
    { id: 2, title: 'Manga Sale', description: 'Get 20% off all manga', image: 'news2.jpg' },
    { id: 3, title: 'New Merchandise', description: 'Check out our new merchandise', image: 'news3.jpg' },
];

const Home = (): JSX.Element => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Home',
    })

    return (
        <main>
            <Helmet />

            <section id="home" className="section">
                <Hero />
            </section>

            <div className="section">
                <div className="section-header">
                    <h2>Manga Categories</h2>
                </div>
                <div className="section-content">
                    <div className="categories-container">
                        {categories.map((item, i) => (
                            <CategoryCard
                                title={item.name}
                                image={item.image}
                                imageAlt={item.name}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="about-section">
                    <div>
                        <picture>
                            <source srcSet='/images/aboutstore.avif' type='image/avif' />
                            <source srcSet='/images/aboutstore.webp' type='image/webp' />
                            <img src='/images/aboutstore.png' alt='About Manga Store - Soul Eater' className='about-image' />
                        </picture>
                    </div>
                    <div className='about-content'>
                        <h2>About Manga Store</h2>
                        <p>We are the Manga Store, an online store dedicated entirely to manga and weeb culture, always trying our best to deliver the best reading experience to our customers with special prices and editions of our favorite stories. There's a manga waiting just for you!</p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">
                    <h2>Best Sellers</h2>
                </div>
                <div className="section-content">
                    <div className="products-container">
                        {products.map((item, i) => (
                            <ProductCard
                                title={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;