import { CopyWritingCorrectService } from 'copywriting-correct'

import { ContentString, EmailWithClassName, TelWithClassName, UrlWithClassName, WonderfulCV } from './wonderfulcv'

export const ContentStringMixin = {
  methods: {
    getContentString (wonderfulCV: WonderfulCV, contentString: ContentString, copyWritingCorrect = false) {
      let value = ''
      if (contentString && typeof contentString === 'object') {
        value = contentString.value
      } else if (typeof contentString === 'string') {
        value = contentString
      }
      for (const plugin of wonderfulCV.plugins) {
        if (plugin instanceof CopyWritingCorrectService && copyWritingCorrect) {
          value = plugin.correct(value)
        }
      }
      return value
    },
    getContentClass (contentString: ContentString) {
      if (contentString && typeof contentString === 'object') {
        return contentString.className
      }
      return ''
    },
    getContentStringHref (contentString: ContentString) {
      if (contentString && typeof contentString === 'object') {
        if ((contentString as TelWithClassName).tel) {
          return `tel:${(contentString as TelWithClassName).tel}`
        }
        if ((contentString as EmailWithClassName).email) {
          return `mailto:${(contentString as EmailWithClassName).email}`
        }
        if ((contentString as UrlWithClassName).url) {
          return (contentString as UrlWithClassName).url
        }
      }
      return null
    },
    getIcon (iconString: string) {
      const array = iconString.split(':')
      if (!array[0].startsWith('fa')) {
        array.unshift('fas')
      }
      return array
    }
  }
}
