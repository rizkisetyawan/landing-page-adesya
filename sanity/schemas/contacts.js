import {defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Phone', type: 'string'},
    {name: 'address', title: 'Address', type: 'string'},
  ],
})
