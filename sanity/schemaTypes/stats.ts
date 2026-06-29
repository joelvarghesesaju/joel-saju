import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Stats Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name (e.g. zap, users, trending-up)',
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'number',
            }),
            defineField({
              name: 'prefix',
              title: 'Prefix',
              type: 'string',
              initialValue: '',
            }),
            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              initialValue: '',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})