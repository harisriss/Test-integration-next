import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import {data} from "../../utils/data";
import ProductCard from "~molecules/Product";

export interface ProductCardContainer { }

const ProductCardContainer: FC<ProductCardContainer> = (props) => {

  return (
      <div className="productCardContainer">
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

      </div>);
};

export default ProductCardContainer;
