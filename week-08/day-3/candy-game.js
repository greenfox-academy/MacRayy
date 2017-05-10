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
    this.candyCount = 3000;
    this.lollypopCount = 0;
    this.speed = 0;

    this.addCandy = function() {
        this.candyCount++;
        display.writeCandyCount();
    }

    this.addLollypop = function() {
        if (this.candyCount >= 100) {
            this.candyCount -= 100;
            this.lollypopCount++;
            display.writeLollypops();
            display.writeCandyCount();
        }
    }

    this.makeItRain = function() {
        if (this.lollypopCount >= 10) {
            this.lollypopCount -= 10;
            this.speed++;
            display.writeRain();
            setInterval(function () {
                this.addCandy()
                display.writeCandyCount();
            }.bind(this), 1000);
            display.refreshLollypop();
        }
    }
};

let write = function() {
    this.lollypopsIHave = ''

    this.writeCandyCount = function() {
        candies.innerHTML = game.candyCount + ' 🍬';
    }

    this.writeLollypops = function() {
        this.lollypopsIHave = lollypops.innerHTML;
        lollypops.innerHTML = this.lollypopsIHave + '🍭 ';
    }

    this.refreshLollypop = function() {
        lollypops.innerHTML = this.lollypopsIHave.slice(25);
    }

    this.writeRain = function() {
        speed.innerHTML = game.speed + ' ⛱';
    }
};

let game = new controller();
candyButton.addEventListener('click', game.addCandy.bind(game));
lollypopButton.addEventListener('click', game.addLollypop.bind(game));
rainButton.addEventListener('click', game.makeItRain.bind(game));
