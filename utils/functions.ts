export const convertCentimesToEuros = (centimes: number) => {
    const isNumber = (val: any) => typeof val === "number" && val === val;

    if (isNumber(centimes)) {

        let euros = centimes / 100;
        return euros.toFixed(2); // Returns a string with 2 decimal places

    }
};