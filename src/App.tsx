import './App.css';
import Card from "./components/Card/Card.tsx";
import card from './lib/Card.ts';
import cards from "./lib/CardDeck.ts";
import {useState} from "react";
import PokerHand from "./lib/PokerHand.ts";

const App = () => {
    const [showCards, setShowCards] = useState<card[]>([]);
    const pokerHand = new PokerHand(showCards);

    const getCards = () => {
        let howManyCards = 5;
        if(cards.cards.length === 2){
            howManyCards = 2;
        }
        const showNewCards = cards.getCards(howManyCards);
        setShowCards(showNewCards);
    };

    const resetGame = () => {
        setShowCards([]);
        cards.generateCards();
    };

    return (
        <div className="playingCards faceImages">
            <div className="cardsBlock">
                {showCards.map((card) => (
                    <Card key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
            {showCards.length === 0 ?
                <></> :
                <div className='combination'>
                    <strong>Your combination: {pokerHand.getOutcome()}</strong>
                </div>
            }

            {showCards.length >= 0 && cards.cards.length === 0 ?
                <button type="button" onClick={resetGame}>Reset deck</button>
                :
                <button onClick={getCards}>Get cards!</button>}
        </div>
    );
};

export default App;