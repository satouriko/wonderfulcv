<template>
  <div
    class="page"
    :style="style"
  >
    <BasicInfo
      v-if="pageIndex === 0"
      :wonderfulCV="wonderfulCV"
    ></BasicInfo>
    <Section
      v-for="(_, index) of page.sections"
      :key="index"
      :wonderfulCV="wonderfulCV"
      :pageIndex="pageIndex"
      :sectionIndex="index"
    ></Section>
    <Footer
      :wonderfulCV="wonderfulCV"
      :pageIndex="pageIndex"
    ></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { WonderfulCV } from '../wonderfulcv'
import BasicInfo from './BasicInfo.vue'
import Section from './Section.vue'
import Footer from './Footer.vue'

export default defineComponent({
  components: { Footer, Section, BasicInfo },
  props: {
    wonderfulCV: {
      type: Object as PropType<WonderfulCV>,
      required: true
    },
    pageIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    page () {
      return this.wonderfulCV.pages[this.pageIndex]
    },
    style () {
      let padding = this.wonderfulCV.arrangement.margin
      if (typeof this.wonderfulCV.arrangement.margin === 'number') {
        padding = `${padding}mm`
      }
      const justifyContent = this.page.justifyContent
      return `padding: ${padding}; justify-content: ${justifyContent}`
    }
  }
})
</script>

<style>
.page {
  width: 21cm;
  min-height: 29.7cm;
  height: 29.7cm;
  box-sizing: border-box;
  margin: 1cm auto;
  padding: 10mm;
  border: 1px #d3d3d3 solid;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media print {
  .page {
    margin: 0 !important;
    border: 1px transparent solid !important;
    box-shadow: none !important;
  }
  @page {
    size: 21cm 29.7cm;
  }
}
</style>
