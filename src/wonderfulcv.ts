export type ContentString = string | StringWithClassName

export interface StringWithClassName {
  value: string
  className?: string
}

export interface WonderfulCV<T extends BasicInfoStyle, P extends SectionTitleStyle> {
  arrangement: {
    basicInfoStyle: T
    basicInfoLayout: BasicInfoLayout
    margin: number | string
    sectionTitleStyle: P
  }
  name: ContentString
  photo?: string // url
  basicInfo: Array<BasicInfo<T>> | Array<BasicInfoRow<T>>
  pages: Array<Page<P>>
}

export type BasicInfo<T extends BasicInfoStyle> = T extends 'text'
  ? StringWithClassName & { name: string }
  : T extends 'icon'
    ? StringWithClassName & { icon: string }
    : StringWithClassName

export type BasicInfoRow<T extends BasicInfoStyle> = Array<BasicInfo<T>>

export type BasicInfoStyle = 'text' | 'icon' | 'concise'
export type BasicInfoLayout = 'left' | 'center' | 'avatar'

export interface Page<T extends SectionTitleStyle> {
  sections: Section<T> | Array<Section<T>>
  justifyContent: 'start' | 'space-evenly'
}

export type SectionTitleStyle = 'professional' | 'fresh' | 'prominent' | 'icon'

export type Section<T extends SectionTitleStyle> = T extends 'icon'
  ? SectionBase & { icon: string }
  : SectionBase

export interface SectionBase {
  title: ContentString
  contents: Content[]
}

export interface Content {
  company?: ContentString
  position?: ContentString
  date?: ContentString
  location?: ContentString
  description?: ContentString | ContentString[]
  descriptionFormat?: 'p' | 'li' | 'html'
  descriptionHighlightSeparator?: string
}
