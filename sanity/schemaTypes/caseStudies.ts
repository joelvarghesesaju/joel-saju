import { defineType, defineField } from 'sanity'

export const caseStudiesType = defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'industry', type: 'string' }),
            defineField({ name: 'problem', type: 'text' }),
            defineField({ name: 'automation', type: 'text' }),
            defineField({ name: 'apps', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'hoursSaved', type: 'string' }),
            defineField({ name: 'moneySaved', type: 'string' }),
            defineField({ name: 'result', type: 'text' }),
            defineField({ name: 'icon', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})