<template>
  <div class="footer">
    <span class="date">{{ formatDate() }}</span>
    <span class="title">{{ wonderfulCV.title }}</span>
    <span class="page-index">{{ pageIndex + 1 }} / {{ wonderfulCV.pages.length }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WonderfulCV } from '../wonderfulcv.ts'

export default defineComponent({
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
  methods: {
    formatDate () {
      return (new Date()).toLocaleDateString()
    }
  }
})
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 5mm;
  color: #666;
  font-size: 0.9rem;
}

.footer > span {
  width: 33.3%;
}

.footer > span.date {
  text-align: left;
}

.footer > span.title {
  text-align: center;
}

.footer > span.page-index {
  text-align: right;
}

</style>
