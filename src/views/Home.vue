<template>
  <div class="bg-black">
    <search
      @searchGifs="loadGifs"
    />
    <!-- <GifList :gifList="gifs" /> -->
    <h1 class="font-bold text-5xl text-white flex justify-center ">{{searchTerm}}</h1>
    <div v-if="!gifs.length">
      <p>No se encontraron gifs....</p>
    </div>
    <div v-else>
      <Gif v-for="(item) in gifs" :key="item.id" :gifData="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Search from "../components/Search.vue";
import Gif from "../components/Gif.vue";
// import GifList from "../components/GifList.vue";
import { searchGifs } from "../services/giphyService";

const searchTerm = ref<string>("");
const gifs = ref<any[]>([]);

// Cargar gifs
const loadGifs = async (value: string) => {
  searchTerm.value = value;
  const response = await searchGifs(value);
  gifs.value = response;
};
</script>
