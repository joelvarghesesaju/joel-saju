import { defineType, defineField } from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
            defineField({ name: 'name', type: 'string' }),
            defineField({ name: 'role', type: 'string' }),
            defineField({ name: 'company', type: 'string' }),
            defineField({ name: 'message', type: 'text' }),
            defineField({ name: 'avatar', type: 'string' }),
            defineField({ name: 'rating', type: 'number' }),
          ],
        },
      ],
    }),
  ],
})