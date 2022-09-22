function findPokemon(){
    console.log(121313);
    document.querySelector("#")
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}