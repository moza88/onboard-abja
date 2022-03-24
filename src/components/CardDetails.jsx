let cardDetails = [];

cardDetails.push({
    id: 1,
    title: "House Cleaner",
    text: "Best cleaning service in town",
    url: 'www.clean.com',
    button: "Schedule "
});
let N = 20;
for (let i=1; i< N; i++) {
    cardDetails.push({
        id: i,
        title: "Card Title " + i,
        text: "Card Text " + i + " write something for card",
        url: i,
        button: "Button " + String(i) 
    });
}


export default cardDetails;