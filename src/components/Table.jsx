import React, { useState, useEffect } from "react";
import Spread from "./Spread";  // Import the Spread component
import CelticCross from "./CelticCross"; // Import the CelticCross component

const Table = ({ deckData }) => {
    const [drawnCards, setDrawnCards] = useState([]);
    const [deck, setDeck] = useState(deckData); // Full deck state

    const shuffleDeck = (deck) => {
        // Fisher-Yates shuffle algorithm
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
            [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap the elements
        }
        return deck;
    }

    const resetDeck = deck => {
        //setDeck(deckData); // Reset deck to original state
        setDrawnCards([]); // Clear drawn cards
        setDeck(shuffleDeck(deckData)); // Shuffle the deck
    }

    function drawCards() {
        if (deck.length > 0) {
            setDrawnCards(drawnCards => [...drawnCards, ...deck.slice(0, 1)]); // Draw the top card
            setDeck(deck.slice(1)); // Update remaining deck
        }
    }

    // Initialize deck on mount
    useEffect(() => {
        if (deckData) {
            setDeck(shuffleDeck(deckData)); // Initial deck setup
        }
    }, []); // Only run once on mount

    return (
        <div className="flex">
            {/* Table Area */}
            {/* Undrawn Deck (on the left) */}
            <div className="p-2 w-1/4 ">
                
                <div className="g-gray-100 p-4 flex flex-col rounded-lg shadow-lg min-h-60 gap-4">
                    <button onClick={drawCards}
                        className="rounded-lg flex-1 justify-center items-center bg-gray-500 text-white"
                    >
                        Draw Cards
                    </button>
                    <button onClick={resetDeck}
                        className="rounded-lg flex-1 justify-center items-center bg-gray-500 text-white"
                    >
                        Reset Deck
                    </button>
                </div>
            </div>
            {/* Tarot Spread (on the right) */}
            <div className="w-3/4 p-4 border border-gray-300 rounded-lg bg-gray-100">
                <CelticCross drawnCards={drawnCards} /> {/* Pass drawnCards to Spread */}
            </div>

        </div>
    );
};

export default Table;