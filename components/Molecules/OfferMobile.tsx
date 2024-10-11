export interface OfferMobile {
    title: string,
    subtitle: string,
    image: string,
    description: string,
    remise?: string
    seeOffer?: boolean
    allPromo?: boolean
    left: boolean
}

// const Menu = ({title, offer, conscat, image, description, price, promoPrice, remise}: MenuProps) => {
const OfferMobile = ({title, subtitle, image, description, remise, seeOffer, allPromo, left}: OfferMobile) => {

    return (
        <div className={left ? "OfferDetailsContainerMobile_left " : "OfferDetailsContainerMobile_right "}>

            <p className="OfferDetailsContainerMobile_subtitle">{subtitle}</p>
            <p className="OfferDetailsContainerMobile_remise">{remise}</p>
            <h2 className={left ? "OfferDetailsContainerMobile_title" : "OfferDetailsContainerMobile_title_right"}>{title}</h2>


            <img src={image}
                 alt="Image de Montagne"
                 className={left ? "OfferDetailsContainerMobile_leftImage" : "OfferDetailsContainerMobile_rightImage"}
            />

            <p className={left ? "OfferDetailsContainerMobile_description" : "OfferDetailsContainerMobile_description_right"}>{description}</p>
            <div className={left ? "OfferDetailsOverviewMobile_left" : "OfferDetailsOverviewMobile_right"}>
                {seeOffer && <button className="OfferDetailsOverviewMobile_see" onClick={() => {
                    alert("Voici l'offre !")
                }}>Voir l'offre</button>}
                {allPromo && <button className="OfferDetailsOverviewMobile_all" onClick={() => {
                    alert("Voici les promos !")
                }}>Toutes nos promos</button>}

            </div>
        </div>
    );
};

export default OfferMobile;


