
<template>
   <ul class="my-4">
    <li>Pokemon 1</li>
    <li>Pokemon 2</li>
    <li>Pokemon 3</li>
    <li>Pokemon 4

    </li>
   </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import 'tailwindcss';
li {
    @apply bg-yellow-400 shadow-lg rounded-full  p-3 my-6 w-40 text-center  cursor-pointer  hover:bg-yellow-300;
}
</style>