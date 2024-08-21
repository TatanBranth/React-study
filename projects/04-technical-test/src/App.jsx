import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { getFact } from '../Services/facts';

export function App () {

    const [fact, setFact] = useState();
    const [urlImage, setUrlImage] = useState(null);
    const [resetFact, setResetFact] = useState(true);

    useEffect(() =>{
        // retrieving fact
        getFact().then(setFact)
    }, [resetFact])

    useEffect(()=>{
        if (!fact) return
        // extracting 3 first words
        // other way to do that >> fact.split(' ', 3).join(' ');
        const threeFirstLetters = fact.split(' ').slice(0, 3).join(' ')

        // retrieving cat image from API2 using 3 words extracted
        fetch(`https://cataas.com/cat/says/${threeFirstLetters}?fontSize=50&fontColor=red`)
            .then(rest => rest.blob())
            .then(response => {
                const url = URL.createObjectURL(response);
                setUrlImage(url);
            })
    },[fact])

    return (
        <main>
            <h1>app Cats</h1>
            <button onClick={()=>{setResetFact(!resetFact)}}>new fact</button>
            {fact && <h2>Fact: {fact}</h2>}
            {urlImage && <img src={`${urlImage}`} alt={`image of a cat from cats API using first 2 words of this fact: ${fact} `} />}
        </main>
    )
}