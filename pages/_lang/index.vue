<template>
  <fragment>
    <Page
      v-for="(_, index) of wonderfulCV.pages"
      :key="index"
      :wonderful-c-v="wonderfulCV"
      :page-index="index"
    />
    <Corner href="https://github.com/satouriko/wonderfulcv" />
  </fragment>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import wonderfulCVs from '../../wonderfulcv.config'
import Page from '../../components/Page.vue'
import Corner from '../../components/Corner.vue'

export default defineComponent({
  components: {
    Corner,
    Page
  },
  asyncData ({ params }) {
    const lang = params.lang
    return { lang }
  },
  head () {
    return {
      title: this.wonderfulCV.title
    }
  },
  computed: {
    wonderfulCV () {
      let cv = wonderfulCVs.find(item => item.lang === this.lang)
      if (!cv) cv = wonderfulCVs[0]
      return cv
    }
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

a[href] {
  color: var(--theme-color);
}
</style>
