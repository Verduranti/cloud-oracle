import React from "react";
import Table from "./components/Table.jsx";
import deckData from "/src/deck/deck.json"

const App = () => {
    return (
        <div className="w-full flex flex-col bg-gray-100 p-4">
            {/* Header Bar */}
            <h1 className="text-3xl font-bold">Cloud Oracle</h1>
                

            <Table deckData={deckData}/>
        </div>
    );
};


export default App;
