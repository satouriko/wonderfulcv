/* eslint-disable no-use-before-define,camelcase */
import { CopyWritingCorrectService } from 'copywriting-correct'

export type ContentString = string | StringWithClassName

export type StringWithClassName =
  | StringWithClassName_Base
  | TelWithClassName
  | EmailWithClassName
  | UrlWithClassName

export interface StringWithClassName_Base {
  value: string
  className?: string
}

export interface TelWithClassName extends StringWithClassName_Base {
  tel: string
}

export interface EmailWithClassName extends StringWithClassName_Base {
  email: string
}

export interface UrlWithClassName extends StringWithClassName_Base {
  url: string
}

export type WonderfulCV =
  | WonderfulCV_T<'text', 'professional'>
  | WonderfulCV_T<'text', 'fresh'>
  | WonderfulCV_T<'text', 'prominent'>
  | WonderfulCV_T<'text', 'icon'>
  | WonderfulCV_T<'icon', 'professional'>
  | WonderfulCV_T<'icon', 'fresh'>
  | WonderfulCV_T<'icon', 'prominent'>
  | WonderfulCV_T<'icon', 'icon'>
  | WonderfulCV_T<'concise', 'professional'>
  | WonderfulCV_T<'concise', 'fresh'>
  | WonderfulCV_T<'concise', 'prominent'>
  | WonderfulCV_T<'concise', 'icon'>

export interface WonderfulCV_T<T extends BasicInfoStyle, P extends SectionTitleStyle> {
  arrangement: {
    basicInfoStyle: T
    basicInfoLayout: BasicInfoLayout
    // 页边距（mm）
    margin: number | string
    sectionTitleStyle: P
  }
  name: ContentString
  title: string
  url?: string
  // URL
  photo?: string
  basicInfo: Array<BasicInfo<T>> | Array<BasicInfoRow<T>>
  pages: Array<Page<P>>
  plugins: Array<CopyWritingCorrectService>
}

export type BasicInfo<T extends BasicInfoStyle> = T extends 'text'
  ? StringWithClassName & { name: string | StringWithClassName_Base }
  : T extends 'icon'
    ? StringWithClassName & { icon: string }
    : StringWithClassName

export type BasicInfoRow<T extends BasicInfoStyle> = Array<BasicInfo<T>>

export type BasicInfoStyle = 'text' | 'icon' | 'concise'
export type BasicInfoLayout = 'left' | 'center' | 'avatar'

export interface Page<T extends SectionTitleStyle> {
  sections: Array<Section<T>>
  justifyContent: 'flex-start' | 'space-evenly'
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
