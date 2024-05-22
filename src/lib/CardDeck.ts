import Card from "./Card.ts";

class CardDeck {
    cards: Card[];
    ranks: string[];
    suits: string[];

    constructor() {
        this.cards = [];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        this.suits = ['diams', 'hearts', 'clubs', 'spades'];

        this.generateCards();
    };

    generateCards() {
        this.cards = [];

        this.ranks.map(rank => {
            this.suits.map(suit => {
                const card = new Card(rank, suit);
                this.cards.push(card);
            });
        });
    };

    getCard() {
        const randomIndex: number = Math.floor(Math.random() * this.cards.length);
        let randomCard = this.cards[randomIndex];
        this.cards.splice(randomIndex, 1);
        return randomCard;
    };

    getCards(howMany: number) {
        const newCards = [];
        for (let i = 0; i < howMany; i++) {
            newCards.push(this.getCard());
        }

        return newCards;
    };
}

const cards = new CardDeck();

export default cards;