import RoundButton from "~atoms/RoundButton";

export interface OfferProps {
    title: string,
    subtitle: string,
    image: string,
    description: string,
    remise?: string
    seeOffer?: boolean
    allPromo?: boolean
    rowReverse: boolean
    ButtonLabelSee: string
    ButtonLabelAll: string
}

// const Menu = ({title, offer, conscat, image, description, price, promoPrice, remise}: MenuProps) => {
const Offer = ({
                   title,
                   subtitle,
                   image,
                   description,
                   remise,
                   seeOffer,
                   allPromo,
                   rowReverse,
                   ButtonLabelSee,
                   ButtonLabelAll
               }: OfferProps) => {

    return (
        <div className={rowReverse ? "rowReverse OfferDetailsContainer" : "OfferDetailsContainer"}>
            <div className="OfferDetailsContainer_details">
                <p className="OfferDetailsContainer_subtitle">{subtitle}</p>
                <p className="OfferDetailsContainer_remise">{remise}</p>
                <h2 className="OfferDetailsContainer_title">{title}</h2>


                <p className={"OfferDetailsContainer_description"}>{description}</p>

                <div className="OfferDetailsOverview">
                    {seeOffer && <RoundButton label={ButtonLabelSee} alertText="Voici l'offre !" classNameLabel="see"/>}
                    {allPromo &&
                        <RoundButton label={ButtonLabelAll} alertText="Voici les promos !" classNameLabel="all"/>}

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


