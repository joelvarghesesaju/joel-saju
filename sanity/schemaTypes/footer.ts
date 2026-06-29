import { defineType, defineField } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', type: 'string' }),
    defineField({ name: 'footerDescription', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),

    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'href', type: 'string' }),
      ],
    }),

    defineField({
      name: 'social',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
            defineField({ name: 'logo', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'nav',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})