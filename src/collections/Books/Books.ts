import { CollectionConfig } from "payload/types";

export const Books: CollectionConfig = {
  slug: "books",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.email };
      },
    ],
  },
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "title",
      label: "Book Title",
      type: "text",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "textarea",
      label: "Summary",
      required: true,
    },
    {
      name: "genre",
      type: "select",
      options: [
        {
          label: "Fiction",
          value: "fiction",
        },
        {
          label: "Non-Fiction",
          value: "nonfiction",
        },
        {
          label: "Thriller",
          value: "thriller",
        },
        {
          label: "Autobiography",
          value: "autobiography",
        },
      ],
      label: "Genre",
      required: true,
    },
    // {
    //     name:'book_file',
    //     label:'Book File',
    //     type: 'relationship',
    //     required: true,
    //     relationTo: 'book_file',
    //     hasMany: false
    // },
    {
      name: "condition",
      label: "Condition",
      type: "select",
      options: [
        {
          label: "5 - Good as New",
          value: "5",
        },
        {
          label: "4 - Preloved",
          value: "4",
        },
        {
          label: "3 - Used",
          value: "3",
        },
        {
          label: "2 - Worn",
          value: "2",
        },
        {
          label: "1 - Damaged/Missing Pages",
          value: "1",
        },
      ],
      required: true,
    },
    {
      name: "images",
      type: "array",
      label: "Book Cover",
      minRows: 1,
      maxRows: 1,
      required: true,
      fields:[
        {
            name:'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
      ]
    },
  ],
};
