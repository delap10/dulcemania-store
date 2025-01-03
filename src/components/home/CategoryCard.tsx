import React from 'react';

interface Card {
    title: string;
    image: string;
    imageAlt: string;
}

const CategoryCard = ({ title, image, imageAlt }: Card): JSX.Element => {
    return (
        <a href='/'>
            <div className="category-card">
                <div className="category-wrapper">
                    <img src={image + ".jpg"} alt={imageAlt} className='category-cover-image' />
                </div>
                <img src={image + "-title.svg"} alt={imageAlt} className="category-title" />
                <img src={image + "-character.svg"} alt={imageAlt} className="category-character" />
            </div>
        </a>
    );
}

export default CategoryCard;
