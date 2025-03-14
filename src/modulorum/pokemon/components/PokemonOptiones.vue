
<template>
  

  <section class=" flex flex-col mt-8">

    <button 
    
    :disabled="nonEligere"
    @click="$emit('electusOptio', id)"
    v-for="{ nomen, id} in optiones" 
    :key="id" 
    :class="['capitalize disabled:shadow-none disabled:bg-gray-100', {
      'recte': id === recteResponsio && nonEligere,
      'non-recte': id !== recteResponsio && nonEligere
    }]"
    >

{{ nomen }}

</button>


  </section>


</template>

<script setup lang="ts">
import { LudumStatus, type Pokemon } from '../interfaces';



interface Props {
    optiones: Pokemon[];
    nonEligere: boolean;
    recteResponsio: number;
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

.recte{
    @apply bg-blue-500 text-black;
}

.non-recte{
    @apply bg-gray-100 text-black;
}
</style>