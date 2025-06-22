const axios = require('axios');

class Pokemon {
    constructor() {

    }
    //funcion de flecha con async
    getPokemonByName = async (name) => {
        //esto es el consumo de una api, y es el ejemplo de uso del async y el await
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            console.log("respuesta del server");
            console.log(`Las habilidades del pokemon es: `,response.data.abilities);
        } catch (error) {
            console.error(error);
        }

    }
}

module.exports = { Pokemon }