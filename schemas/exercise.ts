import { defineType } from 'sanity';

export const exercise = defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fields: [
    {
      name: 'index',
      title: 'Index',
      type: 'number'
    },
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
      name: 'relatedCollection',
      title: 'Related Collection',
      type: 'reference',
      to: [{type: 'exerciseCollection'}]
    },
    {
      name: 'templateABC',
      title: 'Template ABC',
      type: 'file'
    },
    {
      name: 'hintABC',
      title: 'Hint ABC',
      type: 'file'
    },
    {
      name: 'solutionABC',
      title: 'Solution ABC',
      type: 'file'
    },
  ]
});