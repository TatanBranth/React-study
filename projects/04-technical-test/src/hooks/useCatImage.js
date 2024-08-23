import { useEffect, useState} from 'react';
// fact into an Object is a good practice
export function useCatImage ({ fact }) {
    const [urlImage, setUrlImage] = useState(null);

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

    return { urlImage }
}