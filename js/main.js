console.log('sanity check!')


// https://pokeapi.co/api/v2/pokemon/{name}



let info = document.querySelector('#pokemonStats')
let pokeName = document.querySelector('h2');



const pokemonNames = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// for (let i = 0; i < pokemonNames.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `<option value='${pokemonNames[i]}'>`;
//     pokemonStats.appendChild('li');
// }

// let li = document.createElement("li");
// li.textContent = "pickachu";
// document.ul.appendChild(li);







let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// const addPokeInfo = (pokemon) => {
//     let li = document.createElement('li');
//     li.textContent = 
// }

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let response = input.value.toLowerCase();
    fetch(pokeUrl + response)
    .then((responseData) => {
        return responseData.json();
    })
    .then((jsonData) => {
        document.querySelector('h2').append(jsonData.name);
        console.log(jsonData.name);
        jsonData.types.forEach((result) => {
            document.querySelector('type').append(result.type.name);
            console.log(result.type.name);
            fetch(result.type.url)
            .then((typeresonseData) => {
                return typeresonseData.json();
            })
            .then((typejsonData) => {
                typejsonData.damage_relations.double_damage_from.forEach(doubleDamageFrom => console.log("double damage from " + doubleDamageFrom.name))
        
                typejsonData.damage_relations.double_damage_to.forEach(doubleDamageTo => console.log("double damage to " + doubleDamageTo.name))
        
                typejsonData.damage_relations.half_damage_from.forEach(halfDamageFrom => console.log("half damage from " + halfDamageFrom.name))
        
                typejsonData.damage_relations.no_damage_from.forEach(noDamageFrom => console.log("no damage from " + noDamageFrom.name))
        
                typejsonData.damage_relations.no_damage_to.forEach(noDamageTo => console.log("no damage to " + noDamageTo.name))
            })
    
        })
        
    })
    
})