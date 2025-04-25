import type { CollectionConfig } from 'payload'

export const Todos: CollectionConfig = {
  slug: 'todos',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'completed',
      type: 'checkbox',
      label: 'Completed',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Media',
      required: false,
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Created At',
      defaultValue: () => new Date(),
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Updated At',
      defaultValue: () => new Date(),
    },
  ],
}
