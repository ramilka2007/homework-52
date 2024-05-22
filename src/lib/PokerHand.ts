import Card from "./Card.ts";

class PokerHand {
    myCards: Card[];
    ranks: string[];
    suits: string[];

    constructor(myCards) {
        this.myCards = myCards;
        this.ranks = [];
        this.suits = [];
    }

    getOutcome()  {
        let result = null;
        this.ranks = [];
        this.suits = [];
        this.myCards.map((myCard) => {
            this.ranks.push(myCard.rank);
            this.suits.push(myCard.suit);
        });

        let flush = 0;

        for (let i = 0; i < this.suits.length; i +=1 ) {
            if (this.suits[i + 1] === this.suits[0]) {
                flush++;
            }
        }

        const pairs = this.ranks.filter((number, index, numbers) => {
            return numbers.indexOf(number) !== index;
        });

        if (flush === 5) {
            result = 'Flush';
        }else if (pairs.length === 1) {
            result = 'One pair';
        } else if (pairs.length === 2) {
            result = 'Two pair';
        } else if (pairs.length === 3) {
            result = 'Three of a kind';
        } else {
            result = 'High card';
        }

        return result;
    }
}

export default PokerHand;