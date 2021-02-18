<template>
  <Page
    v-for="(_, index) of wonderfulCV.pages"
    :key="index"
    :wonderfulCV="wonderfulCV"
    :pageIndex="index + 1"
  ></Page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Page from './components/Page.vue'
import wonderfulCV from '../wonderfulcv.config'

export default defineComponent({
  components: {
    Page
  },
  setup () {
    return { wonderfulCV }
  }
})
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 4mm;
}

body {
  margin: 0;
  padding: 0;
}
</style>
