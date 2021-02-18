<template>
  <div class="header">
    <div v-if="wonderfulCV.photo" class="photo-wrap">
      <img class="photo" :src="wonderfulCV.photo" />
    </div>
    <div class="basic-info">
      <h1 :class="getContentClass(wonderfulCV.name)">
        {{ getContentString(wonderfulCV.name) }}
      </h1>
      <div
        v-for="(row, index) of basicInfoRows"
        :key="index"
        class="row"
      >
        <span
          v-for="(info, index) of row"
          :key="index"
          class="info"
        >{{ getContentString(info) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WonderfulCV } from '../wonderfulcv'
import { ContentStringMixin } from '../content-string'

export default defineComponent({
  props: {
    wonderfulCV: {
      type: Object as PropType<WonderfulCV>,
      required: true
    }
  },
  computed: {
    basicInfoRows () {
      if (!this.wonderfulCV.basicInfo.length) return []
      if (this.wonderfulCV.basicInfo[0] instanceof Array) {
        return this.wonderfulCV.basicInfo
      } else return [this.wonderfulCV.basicInfo]
    }
  },
  mixins: [ContentStringMixin]
})
</script>

<style>
.header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}

.photo-wrap {
  width: 0;
  position: relative;
  height: 3.5cm;
  float: right;
}

.photo {
  position: absolute;
  right: 0;
  width: 2.5cm;
  height: 3.5cm;
}

.basic-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  margin: 1.75mm 0;
  line-height: 1.1;
}

h1 {
  font-size: 1.45rem;
  margin: 1.75mm 0;
  line-height: 1.1;
}

.info {
  font-size: 1rem;
}

.info:first-child::before {
  display: none;
}

.info::before {
  content: '';
  display: inline-block;
  border-left: 1px solid;
  margin: 0 2mm;
  height: 100%;
  vertical-align: bottom;
}

</style>
