<!-- GifList.vue
<template>
    <div>
        <div v-for="gif in gifList" :key="gif.id">
            <Gif :gifData="gif" />
        </div>
    </div>
</template>

<script setup lang="ts">
// import Gif from '@/components/Gif.vue'; // Asegúrate de que la ruta sea correcta

// Define la prop gifList automáticamente
const props = defineProps(['gifList']);
</script> -->
