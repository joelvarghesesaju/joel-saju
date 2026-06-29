import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import stats from './stats'
import automations from './automations'
import { caseStudiesType } from './caseStudies'
import { testimonialsType } from './testimonials'
import { footerType } from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, stats, automations, caseStudiesType, testimonialsType,footerType, ],
}