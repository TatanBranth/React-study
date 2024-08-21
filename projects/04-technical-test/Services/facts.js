const API1_RANDOM_FACT = 'https://catfact.ninja/fact';


export function getFact (){
    return fetch(API1_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
        const {fact} = data;
        return fact;
    })
}