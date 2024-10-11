import {useEffect, useState} from "react";

export const convertCentimesToEuros = (centimes: number) => {
    const isNumber = (val: any) => typeof val === "number" && val === val;

    if (isNumber(centimes)) {

        let euros = centimes / 100;
        return euros.toFixed(2); // Returns a string with 2 decimal places

    }
};
/**
 * J'utilise ce hook à la place de celui fournis par la librairie useooks-ts car,
 * il permet d'avoir la logique uniquement coté client,
 * ce qui réduit les chances d'incohérence entre le client et le serveur
 */
export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}