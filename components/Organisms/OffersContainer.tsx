import React, {FC} from 'react';
import Offer from "~molecules/Offer";

export interface OffersContainer {
}

const OffersContainer: FC<OffersContainer> = (props) => {

    return (
        <div className="offersContainer">
            <Offer title="Promotions d’avant saison : forfait saison"
                   subtitle="promo avant-saison"
                   description="Le forfait Evasion vous permet d'accéder à 109 remontées mécaniques et 400km de pistes, pour tous les niveaux, débutants comme confirmés ! Forfait Evasion saison ou année jusqu'à -25% : skiez en illimité!"
                   remise="-25% forfait saison avant le 30/11"/>
        </div>
    );
};

export default OffersContainer;
