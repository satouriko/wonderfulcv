<template>
  <nuxt-link
    :class="`bookmark ${bordered ? 'bordered' : ''} ${selected ? 'selected' : ''}`"
    :to="`/${lang}/`"
    :style="`top: ${8 + index * 12}mm; right: ${8 + index * 12}mm;`"
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
  line-height: 4mm;
  text-align: center;
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

@media (min-aspect-ratio: 1/1) {
  .bookmark {
    right: calc(100% - 3mm) !important;
    padding: 3mm 5mm;
    min-width: 20mm;
  }
}

@media (max-aspect-ratio: 1/1) {
  .bookmark {
    top: calc(100% - 3mm) !important;
    padding: 5mm 3mm;
    min-height: 20mm;
    writing-mode: vertical-rl;
  }
}

@media print {
  .bookmark {
    display: none;
  }
}
</style>
