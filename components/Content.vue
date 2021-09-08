<template>
  <div class="content">
    <div
      :class="`content-header ${content.company ? '' : 'empty'}`"
    >
      <div
        v-if="content.company"
        class="content-title"
      >
        <h3 :class="getContentClass(content.company)">{{ getContentString(content.company) }}</h3>
        <div :class="getContentClass(content.position)">{{ getContentString(content.position) }}</div>
      </div>
      <div class="content-title-aux">
        <div :class="getContentClass(content.date)">{{ getContentString(content.date) }}</div>
        <div :class="getContentClass(content.location)">{{ getContentString(content.location) }}</div>
      </div>
    </div>
    <ul>
      <li
        v-for="(description, index) of descriptions"
        :key="index"
        class="description"
      >
        <span :class="`highlight ${getContentClass(description)}`">{{ getDescriptionHighlight(description) }}</span>
        <span :class="getContentClass(description)">{{ getDescriptionRest(description) }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
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
      if (!this.content.description) return []
      return this.content.description instanceof Array
        ? this.content.description
        : [this.content.description]
    }
  },
  methods: {
    getDescriptionHighlight (desc) {
      if (!this.content.descriptionHighlightSeparator) return null
      const str = this.getContentString(desc, true)
      return str.split(this.content.descriptionHighlightSeparator)[0] +
        this.content.descriptionHighlightSeparator
    },
    getDescriptionRest (desc) {
      const highlight = this.getDescriptionHighlight(desc)
      if (!highlight) return this.getContentString(desc, true)
      return this.getContentString(desc, true).substring(highlight.length)
    }
  },
  mixins: [ContentStringMixin]
})
</script>

<style>
.section-title + .content {
  margin-top: var(--margin);
}

.content {
  margin-bottom: var(--margin);
}

.content-header {
  display: flex;
  justify-content: space-between;
  margin: calc(2 * var(--margin)) 0;
}

.content-header.empty {
  margin-bottom: 0;
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
