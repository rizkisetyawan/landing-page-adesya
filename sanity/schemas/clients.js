import {defineType} from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {name: 'order', title: 'Order', type: 'number'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
  ],
})
