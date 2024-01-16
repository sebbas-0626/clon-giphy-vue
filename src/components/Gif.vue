<template>
  <div>
    <img :src="dataGifs.url" :alt="dataGifs.title" />
    <p>{{ dataGifs.title }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: ['gifData'],
  setup(props) {
    const dataGifs = ref<any>({});
    dataGifs.value = props.gifData;
    return {
      dataGifs,
    }
  }
}
</script>
