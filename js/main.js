console.log('sanity check!')


// https://pokeapi.co/api/v2/pokemon/{name}


let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let response = input.value.toLowerCase();
    fetch(pokeUrl + response)
    .then((responseData) => {
        return responseData.json();
    })
    .then((jsonData) => {
        document.querySelector('h2').append(jsonData.name);
        document.querySelector('img').setAttribute('src', jsonData.sprites.front_default);
        jsonData.types.forEach((result) => {
            document.querySelector('type').append(result.type.name);
            fetch(result.type.url)
            .then((typeresonseData) => {
                return typeresonseData.json();
            })
            .then((typejsonData) => {
                typejsonData.damage_relations.double_damage_from.forEach(doubleDamageFrom => document.getElementById('doubleDamageFrom').append("double damage from " + doubleDamageFrom.name))
        
                typejsonData.damage_relations.double_damage_to.forEach(doubleDamageTo => document.getElementById('doubleDamageTo').append("double damage to " + doubleDamageTo.name))
        
                typejsonData.damage_relations.half_damage_from.forEach(halfDamageFrom => document.getElementById('halfDamageFrom').append("half damage from " + halfDamageFrom.name))

                typejsonData.damage_relations.half_damage_to.forEach(halfDamageTo => document.getElementById('halfDamageTo').append("half damage to " + halfDamageTo.name))
        
                typejsonData.damage_relations.no_damage_from.forEach(noDamageFrom => document.getElementById('noDamageFrom').append("no damage from " + noDamageFrom.name))
        
                typejsonData.damage_relations.no_damage_to.forEach(noDamageTo => document.getElementById('noDamageTo').append("no damage to " + noDamageTo.name))
            })
    
        })
        
    })
    
})