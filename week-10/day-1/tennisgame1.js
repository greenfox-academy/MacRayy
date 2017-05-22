'use strict'

var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.m_score1++;
    } else {
        this.m_score2++;
    }
};

TennisGame1.prototype.getScore = function() {
    let score = "";
    if (this.m_score1 === this.m_score2) {
        score = this.getEqualScore();
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = this.getScoreOverFour ();
    } else {
        score = this.getScoreBelowThree ();
    }
    return score;
};

TennisGame1.prototype.getEqualScore = function() {
    let scoreEqual = '';
    switch (this.m_score1) {
        case 0:
            scoreEqual = "Love-All";
            break;
        case 1:
            scoreEqual = "Fifteen-All";
            break;
        case 2:
            scoreEqual = "Thirty-All";
            break;
        default:
            scoreEqual = "Deuce";
            break;
    }
    return scoreEqual;
}

TennisGame1.prototype.getScoreOverFour  = function() {
    let scoreOverFour = '';
    let minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) {
        scoreOverFour = "Advantage player1";
    } else if (minusResult === -1) {
        scoreOverFour = "Advantage player2";
    } else if (minusResult >= 2) {
        scoreOverFour = "Win for player1";
    } else {
        scoreOverFour = "Win for player2";
    }
    return scoreOverFour;
}

TennisGame1.prototype.getScoreBelowThree = function() {
    let scoreBelowThree = '';
    for (let i = 1; i < 3; i++) {
        if (i === 1) {
            scoreBelowThree = this.m_score1;
        } else {
            scoreBelowThree += '-'
            switch (this.m_score2) {
                case 0:
                scoreBelowThree += "Love";
                break;
                case 1:
                scoreBelowThree += "Fifteen";
                break;
                case 2:
                scoreBelowThree += "Thirty";
                break;
                case 3:
                scoreBelowThree += "Forty";
                break;
            }
        }
    }
    console.log(scoreBelowThree);
    return scoreBelowThree
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
