<template>
  <nuxt-link
    :class="`bookmark ${bordered ? 'bordered' : ''} ${selected ? 'selected' : ''}`"
    :to="`/${lang}/`"
    :style="`top: ${8 + index * 12}mm`"
  >
    {{ label }}
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      required: true
    },
    bordered: Boolean,
    selected: Boolean
  }
})
</script>

<style scoped>
.bookmark {
  display: block;
  position: absolute;
  padding: 3mm 5mm;
  line-height: 4mm;
  min-width: 20mm;
  text-align: center;
  right: calc(100% - 3mm);
  z-index: 1;
}

.bookmark.bordered {
  border: 1px #d3d3d3 solid;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: transparent;
  z-index: -1;
}

.bookmark.selected {
  text-decoration: none;
}

.bookmark.selected.bordered {
  z-index: 1;
}

@media print {
  .bookmark {
    display: none;
  }
}
</style>
