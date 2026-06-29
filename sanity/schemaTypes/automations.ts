import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'automations',
  title: 'Featured Automations',
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
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              type: 'string',
            }),
            defineField({
              name: 'problem',
              type: 'text',
            }),
            defineField({
              name: 'solution',
              type: 'text',
            }),
            defineField({
              name: 'apps',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'timeSaved',
              type: 'string',
            }),
            defineField({
              name: 'roi',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})