import 'bootstrap/dist/css/bootstrap.css';
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
    { id: 1, name: 'Action', image: '/categories/action' },
    { id: 2, name: 'Comedy', image: '/categories/comedy' },
    { id: 3, name: 'Drama', image: '/categories/drama' },
    { id: 4, name: 'Fantasy', image: '/categories/fantasy' },
    { id: 5, name: 'Horror', image: '/categories/horror' },
    { id: 6, name: 'Romance', image: '/categories/romance' },
];
  
const products: Product[] = [
    { id: 1, name: 'Naruto', price: '10.99', description: '', image: 'naruto' },
    { id: 2, name: 'One Piece', price: '12.99', description: '', image: 'one-piece' },
    { id: 3, name: 'Attack on Titan', price: '14.99', description: '', image: 'attack-on-titan' },
    { id: 4, name: 'Dragon Ball', price: '16.99', description: '', image: 'dragon-ball' },
    { id: 5, name: 'Fullmetal Alchemist', price: '18.99', description: '', image: 'fullmetal-alchemist' },
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
                    <h2>Categorías</h2>
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
                            <img src='/images/dulcemania-logo.png' alt='About DulceMania Store' className='about-image' />
                        </picture>
                    </div>
                    <div className='about-content'>
                        <h2>Sobre nosotros</h2>
                        <p>
                            Tu tienda anime de confianza. Somos más que una simple tienda, somos tu refugio otaku. 
                            Descubre un universo de figuras, manga y accesorios de tus series favoritas. 
                            ¡Únete a nuestra comunidad y vive la magia del anime al máximo!
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header">
                    <h2>Best Sellers</h2>
                </div>
                <div className="section-content">
                    <ProductCard
                        title={"item.name"}
                        image={"item.image"}
                        description={"item.description"}
                        price={"item.price"}
                    />
                </div>
            </div>
        </main>
    );
}

export default Home;