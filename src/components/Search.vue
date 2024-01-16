<template>

  <!-- search  -->
  <div class="bg-black p-4">
    <div class="max-w-screen-lg mx-auto flex items-center">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="type something to search for awesome gifs"
        class="w-full h-20 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-700 border border-gray-600 p-2 text-white rounded-md"
      />
      <button
        @click="searchGifs"
        class="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
      >
        Buscar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup(props, {emit}) {
    const searchTerm = ref<string>("");

    const searchGifs = () => {
      emit('searchGifs', searchTerm.value);
    };

    return {
      searchGifs,
      searchTerm,
    };
  },
};
</script>
