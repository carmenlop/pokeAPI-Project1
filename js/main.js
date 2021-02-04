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
        document.getElementById('pokeImageFront').setAttribute('src', jsonData.sprites.front_default);
        jsonData.types.forEach((result) => {
            let pokemonType = document.createElement('li');
            pokemonType.setAttribute('class', 'test');
            pokemonType.innerHTML = result.type.name;
            document.getElementById('pokeType').append(pokemonType);
            fetch(result.type.url)
            .then((typeresonseData) => {
                return typeresonseData.json();
            })
            .then((typejsonData) => {
                
                if (typejsonData.damage_relations.double_damage_to.length > 0) {
                    document.getElementById('doubleDamageToList').textContent = "Double Damage To"
                } else {
                    document.getElementById('doubleDamageToList').textContent = "No types receive double damage from your Pokemon"
                }

                if (typejsonData.damage_relations.double_damage_from.length > 0) {
                    document.getElementById('doubleDamageFromList').textContent = "Double Damage From"
                } else {
                    document.getElementById('doubleDamageFromList').textContent = "No types give double damage to your Pokemon"
                }

                if (typejsonData.damage_relations.half_damage_to.length > 0) {
                    document.getElementById('halfDamageToList').textContent = "Half Damage To"
                } else {
                    document.getElementById('halfDamageToList').textContent = "No types receive half damage from your Pokemon"
                }

                if (typejsonData.damage_relations.half_damage_from.length > 0) {
                    document.getElementById('halfDamageFromList').textContent = "Half Damage From"
                } else {
                    document.getElementById('halfDamagFromList').textContent = "No types give half damage to your Pokemon"
                }

                if (typejsonData.damage_relations.no_damage_to.length > 0) {
                    document.getElementById('noDamageToList').textContent = "No Damage To"
                } else {
                    document.getElementById('noDamageToList').textContent = "No types receive zero damage from your Pokemon"
                }

                if (typejsonData.damage_relations.no_damage_from.length > 0) {
                    document.getElementById('noDamageFromList').textContent = "No Damage From"
                } else {
                    document.getElementById('noDamageFromList').textContent = "No types give zero damage to your Pokemon"
                }

                typejsonData.damage_relations.double_damage_from.forEach(doubleDamageFrom => {
                    let ddfItem = document.createElement('li');
                    ddfItem.setAttribute('class', 'test');
                    ddfItem.innerHTML = "double damage from " + doubleDamageFrom.name;
                    document.getElementById('doubleDamageFromList').append(ddfItem);
                })
        
                typejsonData.damage_relations.double_damage_to.forEach(doubleDamageTo => {
                    let ddtItem = document.createElement('li');
                    ddtItem.setAttribute('class', 'test');
                    ddtItem.innerHTML = doubleDamageTo.name; document.getElementById('doubleDamageToList').append(ddtItem);
                })
        
                typejsonData.damage_relations.half_damage_from.forEach(halfDamageFrom => {
                    let hdfItem = document.createElement('li');
                    hdfItem.setAttribute('class', 'test');
                    hdfItem.innerHTML = halfDamageFrom.name
                    document.getElementById('halfDamageFromList').append(hdfItem)
                })

                typejsonData.damage_relations.half_damage_to.forEach(halfDamageTo => {
                    let hdtItem = document.createElement('li');
                    hdtItem.setAttribute('class', 'test');
                    hdtItem.innerHTML = halfDamageTo.name
                    document.getElementById('halfDamageToList').append(hdtItem)
                })
        
                typejsonData.damage_relations.no_damage_from.forEach(noDamageFrom => {
                    let ndfItem = document.createElement('li');
                    ndfItem.setAttribute('class', 'test');
                    ndfItem.innerHTML = noDamageFrom.name;
                    document.getElementById('noDamageFromList').append(ndfItem);
                })
        
                typejsonData.damage_relations.no_damage_to.forEach(noDamageTo => {
                    let ndtItem = document.createElement('li');
                    ndtItem.setAttribute('class', 'test');
                    ndtItem.innerHTML = noDamageTo.name
                    document.getElementById('noDamageToList').append(ndtItem)
                })
                })
                
            })
    
        })

        let formReset = document.getElementById('form');
        formReset.innerHTML = '';

        let refreshButton = document.createElement('input');
        refreshButton.setAttribute('type', 'button');
        refreshButton.setAttribute('id', 'newPokemonButton');
        refreshButton.setAttribute('value', 'Choose a New Pokemon');
        document.getElementById('refreshButton').append(refreshButton);

        let buttonElement = document.getElementById('newPokemonButton');
        buttonElement.addEventListener("click", (evt) => {
        evt.preventDefault();
        location.reload();
    })
    
})