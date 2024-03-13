import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";
import { Pokemon } from "./data/types";

const cardContainer = document.querySelector<HTMLElement>(".card-container");
const searchPokemonInput =
    document.querySelector<HTMLInputElement>(".search-pokemon");

if (!cardContainer || !searchPokemonInput)
    throw new Error("HTML Element does not exist...");

const renderPokemons = (pokemonArray: Pokemon[]) => {
    cardContainer.innerHTML = "";

    pokemonArray.forEach((pokemon, idx) => {
        const capitalizedPokemonName =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        cardContainer.innerHTML += `
        <div class="card">
            <img class="card__image" src=${pokemon.sprite} 
                alt=${pokemon.name} />
            <div class="card__content">
                <h2 class="">${capitalizedPokemonName}</h2>
                <p>${capitalizedPokemonName} (#${idx + 1}) 
                is a ${pokemon.types.join(" & ")} type pokemon. </p>
            </div>
        </div>
    `;
    });
};

const renderPockemonsOnPageLoad = (): void => {
    renderPokemons(pokemonArray);
};

searchPokemonInput.addEventListener("input", (event: Event) => {
    const searchByName = (event.currentTarget as HTMLInputElement).value;

    const filteredPokemons = pokemonArray.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchByName)
    );

    renderPokemons(filteredPokemons);
});

document.addEventListener("DOMContentLoaded", renderPockemonsOnPageLoad);
