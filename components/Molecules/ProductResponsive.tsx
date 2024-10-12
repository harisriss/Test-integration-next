import {convertCentimesToEuros} from "../../utils/functions";
import React from "react";
import SquareButton from "~atoms/SquareButton";


export interface ProductCardProps {
    title: string,
    offer: string,
    conscat: string,
    image: string,
    description: string,
    price: number,
    promoPrice?: number,
    remise?: number
}

const ProductCard = ({title, offer, conscat, image, description, price, promoPrice, remise}: ProductCardProps) => {
    let dipslayedPrice = promoPrice ?? price

    return (
        <div className="productCardResponsive">
            <div className="productCardHeaderResponsive">
                <p className="productCardHeaderResponsive_title">{title}</p>
                <p className="productCardHeaderResponsive_offer">{offer}</p>
                <p className="productCardHeaderResponsive_conscat">{conscat}</p>
            </div>
            <img src={image}

                   className="productCardResponsive_image"
                   alt="Image de skieur"
            />


            <SquareButton label="Acheter" alertText="Ajouté au panier avec succes"/>



            <div className="productCardFooterResponsive">
                <div className="productCardFooterResponsive_description">
                    {description}
                </div>
                <span className="productCardFooterResponsive_separator"/>
                <div className="productCardFooterResponsive_price">
                    <span
                        className="productCardFooterResponsive_stockPrice">{remise ? remise + "% de remise" : convertCentimesToEuros(dipslayedPrice) + "€"}
                    </span>
                    <span className="productCardFooterResponsive_promoPrice">
                            {promoPrice ? convertCentimesToEuros(price) + "€" : ""}
                    </span>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;


