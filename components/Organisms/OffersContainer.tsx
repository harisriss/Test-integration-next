import React, {FC} from 'react';
import OfferMobile from "~molecules/OfferMobile";
import {useMediaQuery} from "../../utils/functions";
import Offer from "~molecules/Offer";


export interface OffersContainer {
}

const OffersContainer: FC<OffersContainer> = () => {

    const isResponsive = useMediaQuery('(max-width: 720px)')

    return (
        <>
            {!isResponsive &&
                <div className="OfferContainer">

                    <Offer
                        title={"Promotions d’avant saison : forfait saison"}
                        subtitle="promo avant-saison"
                        image="images/produit1.png"
                        description="Le forfait Evasion vous permet d'accéder à 109 remontées mécaniques et 400km de pistes, pour tous les niveaux, débutants comme confirmés ! Forfait Evasion saison ou année jusqu'à -25% : skiez en illimité!"
                        remise="-25% forfait saison avant le 30/11"
                        seeOffer={true}
                        allPromo={true}
                        rowReverse={false}
                        ButtonLabelSee="Voir l'offre"
                        ButtonLabelAll="Toutes nos promos"
                    />

                    <Offer
                        title={"Glissez dans un écrin de bien-être"}
                        subtitle="IDÉE CADEAU"
                        image="images/produit5.png"
                        description="Une journée d’escapade entre grands espaces de glisse et eau thermale à 39°C du Mont Revait. Tous les bienfaits de Saint-Michel dans un seul forfait. Le nouvel espace bien être des Thermes de Saint Michel vous invite à une expérience..."
                        remise="Forfait ski 4h & Spa Thermal"
                        seeOffer={true}
                        allPromo={false}
                        rowReverse={true}
                        ButtonLabelSee="Voir l'offre"
                        ButtonLabelAll="Toutes nos promos"
                    />

                </div>

            }

            {isResponsive &&
                <div className="OfferContainer">

                    <OfferMobile
                        title="Promotions d’avant saison : forfait saison"
                        subtitle="promo avant-saison"
                        image="images/produit1.png"
                        description="Le forfait Evasion vous permet d'accéder à 109 remontées mécaniques et 400km de pistes, pour tous les niveaux, débutants comme confirmés ! Forfait Evasion saison ou année jusqu'à -25% : skiez en illimité!"
                        remise="-25% forfait saison avant le 30/11"
                        seeOffer={true}
                        allPromo={true}
                        left={false}
                        ButtonLabelSee="Voir l'offre"
                        ButtonLabelAll="Toutes nos promos"
                    />

                    <OfferMobile
                        title="Glissez dans un écrin de bien-être"
                        subtitle="IDÉE CADEAU"
                        image="images/produit5.png"
                        description="Une journée d’escapade entre grands espaces de glisse et eau thermale à 39°C du Mont Revait. Tous les bienfaits de Saint-Michel dans un seul forfait. Le nouvel espace bien être des Thermes de Saint Michel vous invite à une expérience..."
                        remise="Forfait ski 4h & Spa Thermal"
                        seeOffer={true}
                        allPromo={false}
                        left={true}
                        ButtonLabelSee="Voir l'offre"
                        ButtonLabelAll="Toutes nos promos"
                    />

                </div>
            }
        </>


    );
};

export default OffersContainer;
