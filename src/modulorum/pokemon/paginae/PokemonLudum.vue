<template>
    <section v-if="estPortat || temerePokemon.id ===null" class="flex flex-col justify-center items-center w-screen h-screen ">


        <h1 class="text-2xl">Just a moment...</h1>
        <h3 class="animate-pulse">Loading Pokemons</h3>
    </section>

<section v-else class="flex flex-col justify-center items-center w-screen h-screen  bg-green-100">
<h1 class="m-16 text-3xl ">Who is that Pokemon?</h1>
<h3>{{ temerePokemon }}</h3>

<PokemonImago :pokemon-id="temerePokemon.id" :revelare-pokemon="ludumStatus !== LudumStatus.Ludit"/>
<PokemonOptiones />
</section>



</template>

<script setup lang="ts">
import PokemonImago from '../components/PokemonImago.vue';
import PokemonOptiones from '../components/PokemonOptiones.vue';
import { usePokemonLudum } from '../composables/usePokemonLudum';
import { LudumStatus } from '../interfaces';

const { ludumStatus, estPortat, temerePokemon } = usePokemonLudum();


</script>

<style scoped>
</style>