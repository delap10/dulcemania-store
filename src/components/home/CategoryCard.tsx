import React from 'react';

interface propsWithChildren {
    title: string;
    image: string;
    imageAlt: string;
}

const CategoryCard = ({ title, image, imageAlt }: propsWithChildren): JSX.Element => {
    return (
        <div className="category-card">
            <picture>
                <source srcSet={`/images/${image}.avif`} type='image/avif' />
                <source srcSet={`/images/${image}.webp`} type='image/webp' />
                <img src={`/images/${image}.png`} alt={imageAlt} className='category-image' />
            </picture>
            <div className="category-title">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default CategoryCard;