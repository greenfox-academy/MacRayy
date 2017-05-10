'use strict'
// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
const candyButton = document.querySelector('.create-candies');
const lollypopButton= document.querySelector('.buy-lollypops');
const rainButton = document.querySelector('.candy-machine');

function valami() {
    console.log('valami');
}

let controller = function() {
    let display = new write();
    this.candyCount = 1000;
    this.lollypopCount = 0;

    this.addCandy = function() {
        this.candyCount++;
        display.writeCandyCount();
    }

    this.addLollypop = function() {
        if (this.candyCount >= 100) {
            this.candyCount -= 100;
            this.lollypopCount++,
            display.writeLollypops();
            display.writeCandyCount();
        }
    }
};

let write = function() {
     this.writeCandyCount = function() {
        candies.innerHTML = game.candyCount + ' 🍬';
    }

    this.writeLollypops = function() {
        let lollypopsIHave = lollypops.innerHTML;
        lollypops.innerHTML = lollypopsIHave + '🍭 ';
    }

};

let game = new controller();
candyButton.addEventListener('click', game.addCandy.bind(game));
lollypopButton.addEventListener('click', game.addLollypop.bind(game));
