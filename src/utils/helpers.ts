export const formatPriceNumber = (priceNumber:number):string => {
    return `$${priceNumber.toFixed(2)}`;
}