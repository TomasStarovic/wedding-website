import type { Translation } from './en';

export const sk: Translation = {
  // Navigation
  nav: {
    home:         'Domov',
    venue:        'Miesto',
    schedule:     'Program',
    seating:      'Zasadací plán',
    rsvp:         'RSVP',
  },

  // Hero section
  hero: {
    subtitle:     'Berieme sa!',
    date:         '25. júla 2026',
    location:     'Kulturama, Bratislava',
    countdown:    'dní zostáva',
  },

  // Venue section
  venue: {
    title:        'Miesto',
    address:      'Kulturama — Račianska 22/A, Bratislava',
    directions:   'Získať trasu',
    parking:      'Bezplatné parkovanie na mieste.',
  },

  // Schedule section
  schedule: {
    title:        'Program',
    events: [
      { time: '14:00', label: 'Obrad' },
      { time: '15:30', label: 'Nápoje a občerstvenie' },
      { time: '18:00', label: 'Večera' },
      { time: '20:00', label: 'Tanec' },
    ],
  },

  // Seating section
  seating: {
    title:        'Zasadací plán',
    description:  'Nájdi svoje miesto nižšie. Kliknutím zväčšíš.',
    imageAlt:     'Zasadací plán',
    placeholder:  'Zasadací plán bude k dispozícii bližšie k dátumu.',
  },

  // Gift / money section
  gift: {
    title:        'Dar',
    message:      'Vaša prítomnosť na našej svadbe je pre nás to najdôležitejšie. Musíme však povedať — v najbližších rokoch sa usadiť neplánujeme. Emmina akademická dráha nás zavedie do rôznych krajín, takže praktické dary do domácnosti by sme so sebou len ťažko vozili. Ak nám napriek tomu chcete niečo venovať, príspevok na naše spoločné cestovanie a dobrodružstvá by sme si veľmi vážili.',
    fundLabel:    'Prispieť na naše cestovanie',
    fundUrl:      '#', // TODO: add link
  },


  // Contact / footer
  contact: {
    title:        'Máte otázky?',
    message:      'Neváhajte nás priamo kontaktovať.',
    footer:       '© 2026 Tomáš & Emma',
  },

  // RSVP
  rsvp: {
    title:        'RSVP',
    description:  'Potvrďte svoju účasť do [dátum].', // TODO
    buttonLabel:  'Vyplniť RSVP formulár',
  },
};
