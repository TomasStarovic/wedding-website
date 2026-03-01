export const en = {
  // Navigation
  nav: {
    home:         'Home',
    venue:        'Venue',
    schedule:     'Schedule',
    seating:      'Seating',
    rsvp:         'RSVP',
  },

  // Hero section
  hero: {
    subtitle:     'We\'re getting married!',
    date:         'July 25, 2026',
    location:     'Kulturama, Bratislava',
  },

  // Venue section
  venue: {
    title:        'Venue',
    address:      'Kulturama — Račianska 22/A, Bratislava',
    directions:   'Get Directions',
    parking:      'Free parking available on site.',
  },

  // Schedule section
  schedule: {
    title:        'Schedule',
    events: [
      { time: '14:00', label: 'Ceremony' },
      { time: '15:30', label: 'Drinks & Canapés' },
      { time: '18:00', label: 'Dinner' },
      { time: '20:00', label: 'Dancing' },
    ],
  },

  // Seating section
  seating: {
    title:        'Seating Plan',
    description:  'Find your table below. Click to enlarge.',
    imageAlt:     'Seating chart',
    placeholder:  'Seating chart will be available closer to the date.',
  },

  // Gift / money section
  gift: {
    title:        'Gift',
    message:      'Your presence at our wedding means the most to us. As Emma’s academic path will lead us to several different countries over the coming years, we won’t be able to carry traditional household gifts with us. If you wish to give us a gift, a contribution towards our future travels and adventures would be appreciated the most.',  
  },

  // Contact / footer
  contact: {
    title:        'Questions?',
    message:      'Feel free to reach out to us directly.',
    footer:       '© 2026 Tomáš & Emma',
  },

  // RSVP
  rsvp: {
    title:        'RSVP',
    description:  'Please confirm your attendance by [date].', // TODO
    buttonLabel:  'Fill in RSVP Form',
  },
};

export type Translation = typeof en;
