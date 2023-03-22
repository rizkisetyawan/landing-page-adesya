import {defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'order', title: 'Order', type: 'number'},
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      options: {hotspot: true},
    },
  ],
})
