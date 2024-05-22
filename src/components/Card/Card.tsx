import React from "react";

interface CardProps {
    rank: string;
    suit: string;
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
    let showSuit = '';
    if (suit === 'diams') {
        showSuit = '♦️';
    } else if (suit === 'hearts') {
        showSuit = '♥️';
    } else if (suit === 'clubs') {
        showSuit = '♣️';
    } else if (suit === 'spades') {
        showSuit = '♠️';
    } else {
        console.log('Нет такой масти.');
    }

    let nominal = '';
    if (rank === '2' || rank === '3' ||
        rank === '4' || rank === '5' ||
        rank === '6' || rank === '7' ||
        rank === '8' || rank === '9' ||
        rank === '10' || rank === 'j' ||
        rank === 'q' || rank === 'k' || rank === 'a') {
        nominal = rank;
    } else {
        console.log('Нет такого номинала.')
    }

    return (
        <div>
            <span className={`card rank-${nominal} ${suit}`}>
                <span className="rank">{nominal}</span>
                <span className="suit">{showSuit}</span>
            </span>
        </div>
    );
};

export default Card;