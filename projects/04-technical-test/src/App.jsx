import React from 'react';
import './App.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

export function App () {
    const { fact, refreshFact} = useCatFact();
    const { urlImage } = useCatImage({fact});


    return (
        <main>
            <h1>app Cats</h1>
            <button onClick={refreshFact}>new fact</button>
            {fact && <p>Fact: {fact}</p>}
            {urlImage && <img src={`${urlImage}`} alt={`image of a cat from cats API using first 2 words of this fact: ${fact} `} />}
        </main>
    )
}