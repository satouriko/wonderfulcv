<template>
  <div class="content">
    <div class="content-header">
      <div
        v-if="content.company"
        class="content-title"
      >
        <h3>{{ getContentString(content.company) }}</h3>
        <div>{{ getContentString(content.position) }}</div>
      </div>
      <div class="content-title-aux">
        <div>{{ getContentString(content.date) }}</div>
        <div>{{ getContentString(content.location) }}</div>
      </div>
    </div>
    <ul>
      <li
        v-for="(description, index) of descriptions"
        :key="index"
        class="description"
      >
        <span class="highlight">{{ getDescriptionHighlight(description) }}</span>
        {{ getDescriptionRest(description) }}
      </li>
    </ul>
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
    },
    pageIndex: {
      type: Number,
      required: true
    },
    sectionIndex: {
      type: Number,
      required: true
    },
    contentIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    content () {
      return this.wonderfulCV.pages[this.pageIndex]
        .sections[this.sectionIndex].contents[this.contentIndex]
    },
    descriptions () {
      return this.content.description instanceof Array
        ? this.content.description : [this.content.description]
    }
  },
  methods: {
    getDescriptionHighlight (desc) {
      if (!this.content.descriptionHighlightSeparator) return null
      const str = this.getContentString(desc)
      return str.split(this.content.descriptionHighlightSeparator)[0] +
        this.content.descriptionHighlightSeparator
    },
    getDescriptionRest (desc) {
      const highlight = this.getDescriptionHighlight(desc)
      if (!highlight) return desc
      return desc.substring(highlight.length)
    }
  },
  mixins: [ContentStringMixin]
})
</script>

<style>
.content {
  margin: 1mm 0;
}

.content-header {
  display: flex;
  justify-content: space-between;
  margin: 2mm 0;
}

.content-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-title-aux {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

ul {
  margin: 0;
  padding-left: 5mm;
}

h3 {
  font-size: 1rem;
  margin: 0;
  line-height: inherit;
}

.highlight {
  font-weight: bold;
}

.description {
  text-align: justify;
}
</style>
