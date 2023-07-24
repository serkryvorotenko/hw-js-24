import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

import {Counter} from "./components/Counter";

import './style/style.scss'


function findLargestPair(obj) {
    let largestKey = null;
    let largestValue = -Infinity;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value > largestValue) {
                largestValue = value;
                largestKey = key;
            }
        }
    }

    return {[largestKey]: largestValue};
}

const App = () => {
    let result = {};

    const getResult = (value, newResult) => {
        result[value] = newResult
    }

    const getBest = () => {
        const best = findLargestPair(result)
        alert(`The best emoji is ${JSON.stringify(best)}`)
    }

    return (
        <main>
            <Counter value={'😀'} getResult={getResult}/>
            <Counter value={'🤬'} getResult={getResult}/>
            <Counter value={'😝'} getResult={getResult}/>
            <button onClick={getBest}>Get best emoji</button>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(App());