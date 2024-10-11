export interface OfferProps {
    title: string,
    subtitle: string,
    image: string,
    description: string,
    remise?: string
    seeOffer?: boolean
    allPromo?: boolean
    rowReverse: boolean
}

// const Menu = ({title, offer, conscat, image, description, price, promoPrice, remise}: MenuProps) => {
const Offer = ({title, subtitle, image, description, remise, seeOffer, allPromo, rowReverse}: OfferProps) => {

    return (
        <div className={rowReverse ? "rowReverse OfferDetailsContainer" : "OfferDetailsContainer"}>
            <div className="OfferDetailsContainer_details">
                <p className="OfferDetailsContainer_subtitle">{subtitle}</p>
                <p className="OfferDetailsContainer_remise">{remise}</p>
                <h2 className="OfferDetailsContainer_title">{title}</h2>


                <p className={"OfferDetailsContainer_description"}>{description}</p>

                <div className="OfferDetailsOverview">
                    {seeOffer && <button className="OfferDetailsOverview_see" onClick={() => {
                        alert("Voici l'offre !")
                    }}>Voir l'offre</button>}
                    {allPromo && <button className="OfferDetailsOverview_all" onClick={() => {
                        alert("Voici les promos !")
                    }}>Toutes nos promos</button>}
                </div>
            </div>

            <img src={image}
                 alt="Image du produit"
                 className={rowReverse ? "OfferDetailsContainer_imageReverse" : "OfferDetailsContainer_image"}
            />
        </div>
    );
};

export default Offer;


