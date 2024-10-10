import Image from "next/image";
import {convertCentimesToEuros} from "../../utils/functions";


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
            <Image src={image}
                   fill
                   className="productCardResponsive_image"
                   alt="Image de skieur"
            />
            <div className="productCardBuyButton" onClick={()=> {alert("Ajouté au panier avec succes")}}>
                <div className="productCardBuyButton_cart">
                    <span className="icon"></span>
                </div>
                <span>Acheter</span>
            </div>


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


