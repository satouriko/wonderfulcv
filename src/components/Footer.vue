<template>
  <div class="footer">
    <span class="date">{{ formatDate() }}</span>
    <a class="title" href="" @click="print">
      {{ wonderfulCV.title }}
      <font-awesome-icon icon="print"></font-awesome-icon>
    </a>
    <a class="title print" :href="wonderfulCV.url" @click="print">
      {{ wonderfulCV.title }}
      <font-awesome-icon
        v-if="wonderfulCV.url"
        icon="external-link-alt"
      ></font-awesome-icon>
    </a>
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
    },
    print (e) {
      e.preventDefault()
      window.print()
    }
  }
})
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  color: #666;
  font-size: 0.9rem;
}

.footer > span {
  width: 33.3%;
}

.footer > span.date {
  text-align: left;
}

.footer > a {
  text-decoration: none;
  color: #666;
}

.footer > a.title {
  text-align: center;
}

.footer > a.title.print {
  display: none;
}

.footer > span.page-index {
  text-align: right;
}

@media print {
  .footer > a.title {
    display: none;
  }
  .footer > a.title.print {
    display: inline;
  }
}

</style>
