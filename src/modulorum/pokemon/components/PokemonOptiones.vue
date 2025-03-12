
<template>
  

  <section class=" flex flex-col mt-8">

    <button 
    @click="$emit('electusOptio', id)"
    v-for="{ nomen, id} in optiones" 
    :key="id" 
    class="capitalize"
    >

{{ nomen }}

</button>


  </section>


</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';



interface Props {
    optiones: Pokemon[];
}
defineProps<Props>();

defineEmits<{
    electusOptio: [id: number]
}>();
</script>

<style scoped>
@import 'tailwindcss';
button {
    @apply bg-yellow-400 shadow-lg rounded-full  p-3 my-2 w-40 text-center  cursor-pointer  hover:bg-yellow-300;
}
</style>