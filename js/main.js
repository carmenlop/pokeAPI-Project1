console.log('sanity check!')


// https://pokeapi.co/api/v2/pokemon/{name}





let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/gengar'

fetch(pokeUrl)
.then((responseData) => {
    return responseData.json();
})
.then((jsonData) => {
    jsonData.types.forEach((result) => {
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
