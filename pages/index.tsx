import Layout from "~template/Layout"
import React from "react";
import ProductCardContainer from "~organisms/ProductCardContainer";
import OffersContainer from "~organisms/OffersContainer";


const HomePage = () => {

    return (
        <Layout>
           <ProductCardContainer/>
            <OffersContainer/>
        </Layout>
    );
}

export default HomePage;
