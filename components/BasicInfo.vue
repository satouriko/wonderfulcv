<template>
  <div :class="headerClass">
    <div v-if="wonderfulCV.photo" class="photo-wrap">
      <img alt="photo" class="photo" :src="wonderfulCV.photo" />
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
        >
          <a :href="getContentStringHref(info)">
            <span
              v-if="wonderfulCV.arrangement.basicInfoStyle === 'text' && info.name"
              :class="getContentClass(info.name)"
            >{{ getContentString(info.name) }}</span><font-awesome-icon
              v-if="wonderfulCV.arrangement.basicInfoStyle === 'icon' && info.icon"
              :icon="getIcon(info.icon)"
              class="icon"
            ></font-awesome-icon><span
              :class="`link ${getContentClass(info)}`"
            >{{ getContentString(info) }}</span>
          </a>
        </span>
      </div>
    </div>
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
    }
  },
  computed: {
    basicInfoRows () {
      if (!this.wonderfulCV.basicInfo.length) return []
      if (this.wonderfulCV.basicInfo[0] instanceof Array) {
        return this.wonderfulCV.basicInfo
      } else return [this.wonderfulCV.basicInfo]
    },
    headerClass () {
      return `header ${this.wonderfulCV.arrangement.basicInfoLayout} style-${this.wonderfulCV.arrangement.basicInfoStyle}`
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
  align-items: center;
}

.header.style-icon a[href] {
  text-decoration: none;
}

.header.avatar {
  flex-direction: column;
}

.photo-wrap {
  width: 0;
  position: relative;
  height: 3.5cm;
  float: right;
}

.header.avatar .photo-wrap {
  height: 2.5cm;
  width: 2.5cm;
  float: none;
  margin: calc(1.25 * var(--margin)) 0;
}

.photo {
  position: absolute;
  right: 0;
  width: 2.5cm;
  height: 3.5cm;
}

.header.avatar .photo-wrap .photo {
  height: 2.5cm;
  border-radius: 50%;
}

.basic-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header.left .basic-info {
  align-items: flex-start;
}

.row {
  margin: var(--margin) 0;
}

h1 {
  font-size: 1.45rem;
  margin: var(--margin) 0;
}

.info {
  font-size: 1rem;
}

.info:first-child::before {
  display: none;
}

.info::before {
  content: '';
  border-left: 1px solid #666;
  margin: 0 0.5rem;
  height: 100%;
  vertical-align: bottom;
}

.header.style-icon .info::before {
  margin: 0 0.75rem;
}

.info .icon {
  margin-right: 0.75ex;
}

.info a {
  text-decoration: none;
}

.info a[href] span.link {
  text-decoration: underline;
}
</style>
