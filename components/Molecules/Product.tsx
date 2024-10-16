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
        <div className="productCard">
            <div className="productCardHeader">
                <p className="productCardHeader_title">{title}</p>
                <p className="productCardHeader_offer">{offer}</p>
                <p className="productCardHeader_conscat">{conscat}</p>
            </div>

            <div className="imageContainer">
                <img
                    src={image}

                    className="productCard_image"
                    alt="Image du produit"
                />
            </div>

            <div className="productCardFooter">
                <div className="productCardFooter_description">
                    {description}
                </div>
                <div className="productCardFooter_separatorDiv">

                    <span className="productCardFooter_separator"/>
                    <div className="productCardFooter_price">
                        <div>
                        <span
                            className="productCardFooter_stockPrice">{remise ? remise + "% de remise" : convertCentimesToEuros(dipslayedPrice) + "€"}
                        </span>
                            <span className="productCardFooter_promoPrice">
                            {promoPrice ? convertCentimesToEuros(price) + "€" : ""}
                        </span>
                        </div>
                        <div className="productCardFooter_cart" onClick={() => {
                            alert("Ajouté au panier avec succes")
                        }}>
                            <span className="icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


