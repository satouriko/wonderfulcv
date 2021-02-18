<template>
  <div
    class="page"
    :style="style"
  ><h1>Page {{ pageIndex }}</h1></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WonderfulCV } from "../wonderfulcv";

export default defineComponent({
  props: {
    wonderfulCV: Object as PropType<WonderfulCV>,
    pageIndex: Number
  },
  computed: {
    style () {
      let padding = this.wonderfulCV.arrangement.margin
      if (typeof this.wonderfulCV.arrangement.margin === 'number') {
        padding = `${padding}mm`
      }
      return `padding: ${padding}`
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
}

@media print {
  .page {
    margin: 0 !important;
    border: 1px transparent solid;
  }
  @page {
    size: 21cm 29.7cm;
  }
}
</style>
