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
                typejsonData.damage_relations.double_damage_from.forEach(doubleDamageFrom => {
                    let ddfItem = document.createElement('li');
                    ddfItem.setAttribute('class', 'test');
                    ddfItem.innerHTML = "double damage from " + doubleDamageFrom.name;
                    document.getElementById('doubleDamageFromList').append(ddfItem);
                })
        
                typejsonData.damage_relations.double_damage_to.forEach(doubleDamageTo => {
                    let ddtItem = document.createElement('li');
                    ddtItem.setAttribute('class', 'test');
                    ddtItem.innerHTML = "double damage to " + doubleDamageTo.name; document.getElementById('doubleDamageToList').append(ddtItem);
                })
        
                typejsonData.damage_relations.half_damage_from.forEach(halfDamageFrom => {
                    let hdfItem = document.createElement('li');
                    hdfItem.setAttribute('class', 'test');
                    hdfItem.innerHTML = "half damage from " + halfDamageFrom.name
                    document.getElementById('halfDamageFromList').append(hdfItem)
                })

                typejsonData.damage_relations.half_damage_to.forEach(halfDamageTo => {
                    let hdtItem = document.createElement('li');
                    hdtItem.setAttribute('class', 'test');
                    hdtItem.innerHTML = "half damage to " + halfDamageTo.name
                    document.getElementById('halfDamageToList').append(hdtItem)
                })
        
                typejsonData.damage_relations.no_damage_from.forEach(noDamageFrom => {
                    let ndfItem = document.createElement('li');
                    ndfItem.setAttribute('class', 'test');
                    ndfItem.innerHTML = "no damage from " + noDamageFrom.name;
                    document.getElementById('noDamageFromList').append(ndfItem);
                })
        
                typejsonData.damage_relations.no_damage_to.forEach(noDamageTo => {
                    let ndtItem = document.createElement('li');
                    ndtItem.setAttribute('class', 'test');
                    ndtItem.innerHTML = "no damage to " + noDamageTo.name
                    document.getElementById('noDamageToList').append(ndtItem)
                })
            })
    
        })
        
    })
    
})