<template>
  <Page
    v-for="(_, index) of wonderfulCV.pages"
    :key="index"
    :wonderfulCV="wonderfulCV"
    :pageIndex="index"
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
  },
  mounted () {
    document.title = wonderfulCV.title
  }
})
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 4mm;
  line-height: 1.5;
}

body {
  margin: 0;
  padding: 0;
}
</style>
