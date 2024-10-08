import Layout from "~template/Layout"
import React from "react";
import ProductCardContainer from "~organisms/ProductCardContainer";

interface HomePageProps {
}


const HomePage = (props: HomePageProps) => {

    return (
        <Layout>
           <ProductCardContainer/>
            {/*<OffersContainer/>*/}
        </Layout>
    );
}

export default HomePage;
