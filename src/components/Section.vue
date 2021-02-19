<template>
  <div class="section-title">
    <h2 :class="getContentClass(section.title)">{{ getContentString(section.title) }}</h2>
  </div>
  <Content
    v-for="(_, index) of section.contents"
    :key="index"
    :wonderfulCV="wonderfulCV"
    :pageIndex="pageIndex"
    :sectionIndex="sectionIndex"
    :contentIndex="index"
  ></Content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WonderfulCV } from '../wonderfulcv'
import { ContentStringMixin } from '../content-string'
import Content from './Content.vue'

export default defineComponent({
  components: { Content },
  props: {
    wonderfulCV: {
      type: Object as PropType<WonderfulCV>,
      required: true
    },
    pageIndex: {
      type: Number,
      required: true
    },
    sectionIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    section () {
      return this.wonderfulCV.pages[this.pageIndex]
        .sections[this.sectionIndex]
    }
  },
  mixins: [ContentStringMixin]
})
</script>

<style>
.section-title {
  color: var(--theme-color);
  border-bottom: 1px solid;
}

h2 {
  font-size: 1.25rem;
  margin: 0;
  line-height: 1.6875rem;
  display: inline-block;
  padding: 1.5mm 0;
}
</style>
