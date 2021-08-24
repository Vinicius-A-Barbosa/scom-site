export const getShortDateAsNumbers = (date) => {
    if (date === null || date.length === 8) {
        return '--/--/----';
    }
    let dateText = date.replace(/[-]/g, "");
    const day = dateText.substr(6, 2);
    const month = dateText.substr(4, 2);
    const year = dateText.substr(0, 4);
    return `${day}/${month}/${year}`;
};
  
export default getShortDateAsNumbers;