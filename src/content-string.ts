import {ContentString, EmailWithClassName, TelWithClassName, UrlWithClassName} from './wonderfulcv'

export const ContentStringMixin = {
  methods: {
    getContentString (contentString: ContentString) {
      if (contentString && typeof contentString === 'object') {
        return contentString.value
      }
      return contentString
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
