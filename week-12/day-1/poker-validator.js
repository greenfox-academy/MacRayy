'ues strict';

const CreateValidator = function(black, white) {
    const blackHand = black.split(' ');
    const whiteHand = white.split(' ');

    const getLength = () => {
        if (blackHand.length === 5 && whiteHand.length === 5) {
            return true;
        }
    };

    return {
        getLength
    };
};

// const poker = CreateValidator('2H 3D 5S 9C KD' , '2C 3H 4S 8C AH');
// console.log(poker.getLength());

module.exports = CreateValidator;
