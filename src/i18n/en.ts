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
    timeAndPlace: 'Kulturama - 16:00',
    location:     'Bratislava',
  },

  // Venue section
  venue: {
    title:        'Venue',
    address:      'Kulturama — Račianska 22/A, Bratislava',
    directions:   'Navigate to Venue',
    parkingTitle: 'Parking',
    parkingNote:  'There is no parking at the venue itself. Two paid car parks are a short walk away:',
    parkingLots: [
      {
        name:     'URBAN Residences',
        detail:   '€ 2 / h · \xa0max € 24 / day \xa0· \xa0~1 min walk',
        navigate: 'https://maps.google.com/?q=URBAN+Residence+parking,+Račianska,+Bratislava',
        embed:    'https://maps.google.com/maps?q=Račianska+78+Bratislava&output=embed',
      },
      {
        name:     'Filiálka',
        detail:   '€1 / h \xa0· \xa0max €7 / day \xa0· \xa0~5 min walk',
        navigate: 'https://maps.google.com/?q=Parkovisko+Filiálka,+Šancová,+Bratislava',
        embed:    'https://maps.google.com/maps?q=Parkovisko+Filiálka,+Šancová,+Bratislava&output=embed',
      },
    ],
    navigateLabel: 'Navigate',
  },

  // Schedule section
  schedule: {
    title:        'Schedule',
    events: [
      { time: '16:00', label: 'Ceremony' },
      { time: '17:00', label: 'Dinner' },
      { time: '18:00', label: 'Newlyweds\' First Dance' },
      { time: '19:00', label: 'Kahoot quiz' },
      { time: '20:00', label: 'Cake cutting' },
      { time: '21:00', label: 'The Shoe game' },
      { time: '22:00', label: 'Money dance' },
      { time: '23:00', label: 'Hot buffet' },
      { time: '00:00', label: 'Party' },

    ],
  },

  // Seating section
  seating: {
    title:        'Seating Plan',
    description:  'You can find your seat in the seating plan below.',
    imageAlt:     'Seating chart',
    placeholder:  'The seating plan will be available soon.',
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
    footer:       '© 2026 Emma & Tomáš',
  },

  // RSVP
  rsvp: {
    title:        'RSVP',
    description:  'Please confirm your attendance by [date].', // TODO
    buttonLabel:  'Fill in RSVP Form',
  },
};

export type Translation = typeof en;
