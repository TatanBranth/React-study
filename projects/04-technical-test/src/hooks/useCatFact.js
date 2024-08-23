import { useState, useEffect } from 'react'
import { getFact } from '../Services/facts.js';

export function useCatFact () {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        // retrieving fact
        // is not the best practice but equals to"getFact().then(setFact)"
        getFact().then(newFact => setFact(newFact))
    }
    useEffect(() =>{
        getFact().then(setFact)
    }, [])

    return { fact, refreshFact}
}