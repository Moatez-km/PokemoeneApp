export const fetchPokemons =async ()=>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    
    if(!response.ok){
         throw new Error("Failed to fetch pokemon list");
    }

    const data = await response.json();

    //display data
    const detailedPomises =data.results.map(async (pokemone)=>{
        const res = await fetch(pokemone.url);
        if (!res.ok) {
      throw new Error("Failed to fetch pokemon details");
    }
    return res.json();
     
    });
    return Promise.all(detailedPomises);
}