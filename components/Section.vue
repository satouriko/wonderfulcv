<template>
  <fragment>
    <div :class="`section-title ${wonderfulCV.arrangement.sectionTitleStyle}`">
      <h2 :class="getContentClass(section.title)">
        <font-awesome-icon
          v-if="wonderfulCV.arrangement.sectionTitleStyle === 'icon' && section.icon"
          :icon="getIcon(section.icon)"
          class="icon"
        ></font-awesome-icon>
        {{ getContentString(section.title) }}
        <span class="pseudo"></span>
      </h2>
    </div>
    <Content
      v-for="(_, index) of section.contents"
      :key="index"
      :wonderfulCV="wonderfulCV"
      :pageIndex="pageIndex"
      :sectionIndex="sectionIndex"
      :contentIndex="index"
    ></Content>
  </fragment>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
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
.section-title.professional {
  color: var(--theme-color);
  border-bottom: 1px solid;
}

.section-title.fresh {
  color: var(--theme-color);
  border-left: 3px solid;
  padding-left: 0.75rem;
}

.section-title.fresh::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--theme-color);
  opacity: 0.1;
  pointer-events: none;
}

.section-title.fresh, .section-title.prominent, .section-title.icon {
  position: relative;
  line-height: 1.3;
  margin: calc(2 * var(--margin)) 0 0 0;
}

.section-title.prominent::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px var(--theme-color) solid;
  opacity: 0.1;
}

.section-title.icon::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  border-bottom: 1px var(--theme-color) solid;
  opacity: 0.1;
}

h2 {
  font-size: 1.125rem;
  margin: 0;
  line-height: 1.4rem;
  display: inline-block;
  padding: 1.5mm 0;
}

.section-title.prominent > h2 {
  background-color: var(--theme-color);
  color: #fff;
  padding: 1.5mm 6mm 1.5mm 4mm;
  position: relative;
}

.section-title.prominent > h2::after {
  content: '';
  position: absolute;
  left: 100%;
  bottom: 0;
  border-top: calc(0.7rem + 1.5mm) transparent solid;
  border-right: 1mm transparent solid;
  border-bottom: calc(0.7rem + 1.5mm) var(--theme-color) solid;
  border-left: 1mm var(--theme-color) solid;
}

.section-title.prominent > h2 > .pseudo {
  background-color: var(--theme-color);
  position: absolute;
  left: 100%;
  bottom: 0;
  height: 80%;
  width: 3.75mm;
  opacity: 0.1;
}

.section-title.prominent > h2 > .pseudo::after {
  content: '';
  position: absolute;
  left: 100%;
  bottom: 0;
  border-top: calc(0.56rem + 1.2mm) transparent solid;
  border-right: 1mm transparent solid;
  border-bottom: calc(0.56rem + 1.2mm) var(--theme-color) solid;
  border-left: 1mm var(--theme-color) solid;
}

.section-title.icon > h2 {
  background-color: #fff;
  z-index: 1;
  position: relative;
  padding: 1.5mm 0.75em 1.5mm 0;
}

.section-title.icon .icon {
  margin-right: 0.5ex;
}
</style>
