import { computed, onMounted, ref } from "vue"
import { LudumStatus, type Pokemon, type PokemonListaResponsio} from "../interfaces";
import { pokemonApi } from "@/api/pokemonApi";

export const usePokemonLudum = () => {
   
    const ludumStatus = ref<LudumStatus>(LudumStatus.Ludit);
const pokemons = ref<Pokemon[]>([]);
const pokemonOptiones = ref<Pokemon[]>([]);

const estPortat = computed( () => pokemons.value.length === 0);

const temerePokemon = computed(() =>{
    const temereIndex = Math.floor( Math.random() * pokemonOptiones.value.length );
    return pokemonOptiones.value[temereIndex];

});

const obtinePokemons = async(): Promise<Pokemon[]> => {

    const responsio = await pokemonApi.get<PokemonListaResponsio>('/?limit=151');

   const pokemonArray: Pokemon[] = responsio.data.results.map((pokemon) => {
        const urlPartes = pokemon.url.split('/');

        const id = urlPartes[urlPartes.length - 2]?? 0;

        return {
            nomen: pokemon.name,
            id: +id
        }
   });
   
   return pokemonArray.sort(() => Math.random() - 0.5);

}

const sequentiOptiones = (quot: number = 4 ) => {
    
    ludumStatus.value = LudumStatus.Ludit;
    pokemonOptiones.value = pokemons.value.slice(0, quot);

    pokemons.value =  pokemons.value.slice(quot)
}

onMounted(async() => {
    await new Promise((r) => setTimeout(r, 500));
   pokemons.value = await obtinePokemons();
sequentiOptiones();
console.log(pokemonOptiones.value);
});

    return{
        ludumStatus,
        estPortat,
        pokemonOptiones,
        sequentiOptiones,
        temerePokemon,
    }
}

//funcion async await
//composable tiene una funcion que retorna

//3 estagios del juego> juegando, gana y pierde.