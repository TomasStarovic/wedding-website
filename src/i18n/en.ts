export const en = {
  // Navigation
  nav: {
    home:         'Home',
    venue:        'Venue',
    schedule:     'Schedule',
    seating:      'Seating',
    faq:          'FAQ',
    rsvp:         'RSVP',
  },

  // Hero section
  hero: {
    subtitle:     'We\'re getting married!',
    date:         'July 25, 2026',
    location:     'Kulturama, Bratislava',
    countdown:    'days to go',
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
    message:      'Your presence is the greatest gift of all. If you wish to contribute, we are saving for our adventures ahead — a honeymoon fund link is below.',
    fundLabel:    'Honeymoon Fund',
    fundUrl:      '#', // TODO: add link
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
