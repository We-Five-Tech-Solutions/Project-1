export const navLinks = [
  // { label: 'Sale',      href: '/collections/sale' },
  { label: 'Pull-up bar', href: '/collections/equipment' },
  {
    label: 'Shoes',
    href: '/collections/shoes',
    children: [
      { label: 'Running',   href: '/collections/running-shoes'   },
      { label: 'Badminton', href: '/collections/badminton-shoes' },
      { label: 'Trekking',  href: '/collections/trekking-shoes'  },
      { label: 'Cricket',   href: '/collections/cricket-shoes'   },
      { label: 'Walking',   href: '/collections/walking-shoes'   },
    ],
  },
  {
    label: 'Men',
    href: '/collections/men',
    children: [
      {
        label: 'Tops',
        href: '/collections/mens-tops',
        children: [
          { label: 'Training tees', href: '/collections/mens-tees'      },
          { label: 'Jackets',       href: '/collections/mens-jackets'   },
        ],
      },
      {
        label: 'Bottoms',
        href: '/collections/mens-bottoms',
        children: [
          { label: 'Shorts',     href: '/collections/mens-shorts' },
          { label: 'Trackpants', href: '/collections/track-pants'  },
        ],
      },
    ],
  },
  {
    label: 'Women',
    href: '/collections/women',
    children: [
      { label: 'Leggings',   href: '/collections/leggings'   },
      { label: 'Tees',       href: '/collections/womens-tees' },
      { label: 'Jackets',    href: '/collections/womens-jackets' },
      { label: 'Tank tops',  href: '/collections/tank-tops'   },
    ],
  },
  { label: 'Yoga', href: '/collections/yoga' },
]
