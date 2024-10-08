import Button from "~atoms/Button";


export interface OfferProps {
    title: string,
    subtitle: string,
    description: string,
    remise?: string
}

// const Menu = ({title, offer, conscat, image, description, price, promoPrice, remise}: MenuProps) => {
const Offer = ({title, subtitle, description, remise}: OfferProps) => {

    return (
        <div className="OfferDetailsConatainer">
            <p className="OfferDetailsConatainer_subtitle">{subtitle}</p>
            <p>{remise}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button buttonName="Voir l'offre"></Button>
            <Button buttonName="Toutes nos promos"></Button>
        </div>
    );
};

export default Offer;


