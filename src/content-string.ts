import { CopyWritingCorrectService } from 'copywriting-correct'

import { ContentString, EmailWithClassName, TelWithClassName, UrlWithClassName } from './wonderfulcv'
import wonderfulCV from '../wonderfulcv.config'

export const ContentStringMixin = {
  methods: {
    getContentString (contentString: ContentString, copyWritingCorrect = false) {
      let value = ''
      if (contentString && typeof contentString === 'object') {
        value = contentString.value
      } else if (contentString) {
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
    }
  }
}
