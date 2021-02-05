# pokeAPI-Project1
This is a project fetching information from a Pokemon API and displaying it for the user. There is an input search bar for the user where a pokemon name is filled, when submitted a fetch request is initiated. The data pulled is then displayed for the user, and based on the user's pokemon type, there is a second fetch initiated on the pokemon type (electric, fire, grass, etc.). When the second fetch happens, it displays information on a pokemons harm/damage taken and given to other pokemons based on their types. This information helps the user make a better choice when battling rival pokemon. This app is in the first version of development.


### Images of App
![MainPage](/ref-images/pokeAPI-main-page.png)

![LoadedPage](/ref-images/pokeAPI-results-page.png)


### Technologies Used
JavaScript, HTML, CSS


### User Stories
As a user, I want to search for my selected pokemon’s type, from there I want to know the best pokemon type to battle based on my pokemon's attack damage. Aside from knowing what type of pokemon my pokemon is most powerful against, I also want to know what pokemon types to avoid battling with because their attacks will greatly harm my pokemon.


### Wireframes
![Wireframes](/ref-images/pokeAPI-Wireframe.png)


### Unsolved Problems 
For further versions of this applications, the user will receive information on the damage from specific attacks made by their pokemon.
There is an unsolved bug where the "Choose New Pokemon" button loads 2x on the page instead of one.
There is a bug for "normal" type pokemon that does not happen for any other type of pokemon. The "normal" type pokemon information does not load properly.
