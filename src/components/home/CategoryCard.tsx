import React from 'react';

interface Card {
    title: string;
    image: string;
    imageAlt: string;
}

const CategoryCard = ({ title, image, imageAlt }: Card): JSX.Element => {
    return (
        <div className="category-card">
            <picture>
                <img src={image} alt={imageAlt} className='category-image' />
            </picture>
            <div className="category-title">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default CategoryCard;
