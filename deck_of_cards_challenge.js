
function countCompleteDecks(cardsDropped) {
    const suits = ['D', 'H', 'S', 'K'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
    const standardDeck = new Set(suits.flatMap(suit => values.map(value => suit + value)));

    const cardCount = {};
    standardDeck.forEach(card => cardCount[card] = 0);
    cardsDropped.forEach(card => {
        if (standardDeck.has(card)) {
            cardCount[card]++;
        }
    });

    return Math.min(...Object.values(cardCount));
}

const test_cards_1 =  [
    "S9", "H3", "D2", "K9", "D3", "H7", "KA", "D9", "HJ", "S5", "H8", "H0",
    "K9", "D2", "S6", "K8", "K3", "D9", "H0", "S0", "K6", "DJ", "HK", "H5",
    "KA", "KQ", "H3", "K2", "K2", "SA", "HQ", "S0", "KA", "H4", "DA", "K4",
    "K4", "H8", "H2", "D7", "DJ", "S2", "D4", "K5", "SK", "HQ", "K7", "K0",
    "D2", "D8", "DJ", "H2", "S3", "K9", "S4", "D7", "DK", "S8", "K7", "SQ"
];
const test_cards_2 = [
    "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D0", "DJ", "DQ", "DK", "DA",
    "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H0", "HJ", "HQ", "HK", "HA",
    "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S0", "SJ", "SQ", "SK", "SA",
    "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9", "K0", "KJ", "KQ", "KK", "KA",
    "D2", "D3", "D4", "H2", "H3", "H4", "S2", "S3", "S4", "K2", "K3", "K4"
]


console.log("Test case 1: ", test_cards_1)
console.log("Answer :---------------------")
console.log(countCompleteDecks(test_cards_1))
console.log("Test case 2: ", test_cards_2)
console.log("Answer :---------------------")
console.log(countCompleteDecks(test_cards_2))
