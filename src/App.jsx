import React from "react";
import Spread from "./components/Spread.jsx";

const sampleCards = [
    {
        name: "The Fool",
        image: "/rider-waite/major-00-fool.jpg",
    },
    {
        name: "The Magician",
        image: "/rider-waite/major-01-magician.jpg",
    },
    {
        name: "The High Priestess",
        image: "/rider-waite/major-02-highpriestess.jpg",
    },
];

const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Tarot Card Spread</h1>
            <Spread cards={sampleCards} />
        </div>
    );
};

export default App;
