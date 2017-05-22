'use strict'

var TennisGame3 = function(p1Name, p2Name) {
    this.p2Score = 0;
    this.p1Score = 0;

    this.p1Name = p1Name;
    this.p2Name = p2Name;
};

TennisGame3.prototype.getScore = function() {
    let score;
    if ((this.p1Score < 4 && this.p2Score < 4) && (this.p1Score + this.p2Score < 6)) {
        let p = ["Love", "Fifteen", "Thirty", "Forty"];
        score = p[this.p1Score];
        return (this.p1Score === this.p2Score) ? score + "-All" : score + "-" + p[this.p2Score];
    } else {
        if (this.p1Score === this.p2Score)
            return "Deuce";
        score = (this.p1Score > this.p2Score) ? this.p1Name : this.p2Name;
        return ((this.p1Score - this.p2Score) * (this.p1Score - this.p2Score) === 1) ? "Advantage " + score : "Win for " + score;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.p1Score += 1;
    else
        this.p2Score += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
