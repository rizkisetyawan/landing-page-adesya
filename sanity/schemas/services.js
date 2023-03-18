import {defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'SubTitle', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
  ],
})
