import {defineType} from 'sanity'

export default defineType({
  name: 'sections',
  title: 'Sections',
  type: 'document',
  fields: [
    {name: 'order', title: 'Order', type: 'number', readOnly: true},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'subTitle', title: 'SubTitle', type: 'string'},
  ],
})
