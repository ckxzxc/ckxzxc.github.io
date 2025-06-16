import { defineType } from 'sanity';

export const exerciseCollection = defineType({
  name: 'exerciseCollection',
  title: 'Exercise Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'relatedCategory',
      title: 'Related Category',
      type: 'reference',
      to: [{type: 'exerciseCategory'}]
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
})