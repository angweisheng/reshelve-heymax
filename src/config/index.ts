export const CATEGORIES = [
  {
    label: "Browse Books",
    value: "browse" as const,
    featured: [
      {
        name: "What's New",
        href: "#",
        imageSrc: "/nav/book.png",
        description: "New listings"
      },
      {
        name: "Trending Today",
        href: "#",
        imageSrc: "/nav/book.png",
        description: "Hottest reads today"
      },
      {
        name: "Editor picks",
        href: "#",
        imageSrc: "/nav/book.png",
        description: "See what we like"
      },
    ],
  },

];

export const GENRES = [
  {
    label: 'Fiction',
    value: 'fiction' as const,
  },
  {
    label: 'Non-Fiction', 
    value: 'nonfiction' as const,
  },
  {
    label: 'Thriller',
    value: 'thriller' as const,
  },
  {
    label: 'Autobiography',
    value: 'autobiography' as const,
  }


]
