import React, {FC} from 'react';
import {data} from "../../utils/data";
import ProductCard from "~molecules/Product";
import ProductResponsive from "~molecules/ProductResponsive";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useMediaQuery} from "../../utils/functions";

export interface ProductCardContainerProps {
}

const ProductCardContainer: FC<ProductCardContainerProps> = () => {

    const responsive = {
        tablet: {
            breakpoint: {max: 1024, min: 700},
            items: 2
        },
        mobile: {
            breakpoint: {max: 720, min: 0},
            items: 1,
        }
    };

    const isResponsive = useMediaQuery('(max-width: 768px)')


    return (
        <>
            {!isResponsive && <div className="productCardContainer">
                {data.map((product, key) => {
                    return <ProductCard
                        key={key}
                        title={product.title}
                        offer={product.offer}
                        conscat={product.conscat}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        promoPrice={product.promoPrice}
                        remise={product.remise}
                    />
                })}

            </div>}

            {isResponsive && <Carousel responsive={responsive} className="productCardContainerResponsive">
                {data.map((product, key) => {
                    return <ProductResponsive
                        key={key}
                        title={product.title}
                        offer={product.offer}
                        conscat={product.conscat}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        promoPrice={product.promoPrice}
                        remise={product.remise}
                    />
                })}
            </Carousel>}
        </>

    );
};

export default ProductCardContainer;
