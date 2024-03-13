import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";

const cardContainer = document.querySelector<HTMLElement>(".card-container");

if (!cardContainer) throw new Error("HTML Element does not exist...");

pokemonArray.forEach((pokemon, idx) => {
    const capitalizedPokemonName =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    cardContainer.innerHTML += `
        <div class="card">
            <img class="card__image" src=${pokemon.sprite} alt=${pokemon.name} />
            <div class="card__content">
                <h2 class="">${capitalizedPokemonName}</h2>
                <p>${capitalizedPokemonName} (#${idx + 1}) is a ${pokemon.types.join(" & ")} type pokemon. </p>
            </div>
        </div>
    `;
});
