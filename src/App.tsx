import './App.css'
import Card from "./components/Card/Card.tsx";
import card from './lib/Card.ts';
import cards from "./lib/CardDeck.ts";
import {useState} from "react";

const App = () => {
    const [showCards, setShowCards] = useState<card[]>([]);
    console.log(showCards)

    const getCards = () => {
        const showNewCards = cards.getCards(5);
        setShowCards(showNewCards);
    };

    const getLastCards = () => {
        const getLastCards = cards.getCards(2);
        setShowCards(getLastCards);
    }

    const resetGame = () => {
        setShowCards([]);
        cards.generateCards();
    };

    if (cards.cards.length === 2) {
        console.log('Последние карты')
    }

    return (
        <div className="playingCards faceImages">
            {showCards.length >= 0 && cards.cards.length === 0 ?
                <>
                    <div className='cardsBlock'>
                        {showCards.map((card) => (
                            <Card key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                        ))}

                        <button type="button" onClick={resetGame}>Reset deck</button>
                    </div>
                </>
                :
                <div className="cardsBlock">
                    {showCards.map((card) => (
                        <Card key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                    ))}
                    {cards.cards.length === 2 ?
                        <>
                            <button onClick={getLastCards}>Get last cards!</button>
                        </>
                        :
                        <button onClick={getCards}>Get cards!</button>
                    }
                </div>
            }
        </div>
    )
}

export default App
