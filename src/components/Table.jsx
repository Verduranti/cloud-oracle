import React, { useState, useEffect } from "react";
import Spread from "./Spread";  // Import the Spread component

const Table = ({ deckData }) => {
    const [drawnCards, setDrawnCards] = useState([]);
    const [deck, setDeck] = useState(deckData); // Full deck state

    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap the elements
        }
        return deck;
    }

    function drawCards() {
        if (deck.length > 0) {
            const shuffledDeck = shuffleDeck(deck);
            setDeck(shuffledDeck.slice(4)); // Update remaining deck
            setDrawnCards(shuffledDeck.slice(0, 4));
        }
    }

    // Initialize deck on mount
    useEffect(() => {
        if (deckData) {
            setDeck(deckData); // Initial deck setup
        }
    }, []); // Only run once on mount

    return (
        <div className="">
            {/* Table Area */}
            <div className="p-4 gap-4 w-full h-full flex ">
                {/* Undrawn Deck (on the left) */}
                                <div className="w-50 h-90 bg-gray-100 p-4 rounded-lg shadow-lg">
                                    <button onClick={drawCards} 
                                    className="w-50 h-90 rounded-lg flex justify-center items-center bg-gray-500 text-white"
                                    >
                                        Draw Cards
                                    </button>
                                </div>

                                {/* Tarot Spread (on the right) */}
                <div className="p-4 border border-gray-300 rounded-lg bg-gray-100">
                    <Spread drawnCards={drawnCards} /> {/* Pass drawnCards to Spread */}
                </div>
            </div>
        </div>
    );
};

export default Table;