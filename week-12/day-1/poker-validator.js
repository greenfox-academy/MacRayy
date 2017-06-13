'ues strict';

const CreateValidator = function(black, white) {
    const blackHand = black.split(' ');
    const whiteHand = white.split(' ');

    const getLength = () => {
        if (blackHand.length === 5 && whiteHand.length === 5) {
            return true;
        }
    };

    const getResult = () => {
        result = '';
        const blackCards = blackHand.reduce((allCards, card) => {
            allCards.push({number: card[0], suit: card[1]});
            return allCards;
        }, []);
        const whiteCards = whiteHand.reduce((allCards, card) => {
            allCards.push({number: card[0], suit: card[1]});
            return allCards;
        }, []);

        return result
    };

    return {
        getLength,
        getResult
    };
};

const poker = CreateValidator('2H 3H 5H 6H 9H' , '2C 3H 4S 8C AH');
console.log(poker.getResult());

module.exports = CreateValidator;
