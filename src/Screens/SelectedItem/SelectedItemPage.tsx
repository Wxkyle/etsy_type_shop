import React, { FC } from "react";

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    pictures: string[];
    reviews: number[];
    category: string;
    listingDate?: Date;
    //date should be mandatory eventually
}

const SelectedItemPage: FC<ProductProps> = (props: ProductProps) => {

    const {
        id,
        name,
        price,
        description,
        stock,
        pictures,
        reviews,
        category,
        listingDate,
    } = props


    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Stock: {stock}</p>
            <div>
                <p>Pictures:</p>
                {pictures.map((picture, index) => (
                    <img src={picture} alt={`Picture ${index}`} key={index} />
                ))}
            </div>
            <p>Reviews:</p>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
            <p>Category: {category}</p>
            <p>Listing Date: {listingDate?.toLocaleDateString()}</p>
        </div>
    );
};

export default SelectedItemPage;