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
    timeAndPlace: 'Kulturama - 16:00',
    location:     'Bratislava',
  },

  // Venue section
  venue: {
    title:        'Miesto',
    address:      'Kulturama — Račianska 22/A, Bratislava',
    directions:   'Navigovať na miesto',
    parkingTitle: 'Parkovanie',
    parkingNote:  'Priamo pri Kulturame parkovanie nie je. V okolí sú dve platené parkoviská:',
    parkingLots: [
      {
        name:     'Filiálka',
        detail:   '1 € / h \xa0· \xa0max 7 € / deň \xa0· \xa0~5 min pešo',
        navigate: 'https://maps.google.com/?q=Parkovisko+Filiálka,+Šancová,+Bratislava',
        embed:    'https://maps.google.com/maps?q=Parkovisko+Filiálka,+Šancová,+Bratislava&output=embed',

      },
      {
        name:     'URBAN Residences',
        detail:   '2 € / h \xa0· \xa0max 24 € / deň \xa0· \xa0~1 min pešo',
        navigate: 'https://maps.google.com/?q=URBAN+Residence+parking,+Račianska,+Bratislava',
        embed:    'https://maps.google.com/maps?q=Račianska+78+Bratislava&output=embed',
      },
    ],
    navigateLabel: 'Navigovať',
  },

  // Schedule section
  schedule: {
    title:        'Program',
    events: [
      { time: '16:00', label: 'Obrad' },
      { time: '17:00', label: 'Večera' },
      { time: '18:00', label: 'Tanec novomanželov' },
      { time: '19:00', label: 'Kahoot kvíz' },
      { time: '20:00', label: 'Krájanie torty' },
      { time: '21:00', label: 'Topánkový kvíz' },
      { time: '22:00', label: 'Redový tanec' },
      { time: '23:00', label: 'Teplý bufet' },
      { time: '00:00', label: 'Voľný program' },
    ],
  },

  // Seating section
  seating: {
    title:        'Zasadací plán',
    description:  'Svoje miesto môžte nájsť v zasadacom pláne nižšie.',
    imageAlt:     'Zasadací plán',
    placeholder:  'Zasadací plán bude čoskoro k dispozícii.',
  },

  // Gift / money section
  gift: {
    title:        'Dar',
    message:      'Vaša prítomnosť na našej svadbe je pre nás tým najväčším darom. Keďže nás Emmina akademická cesta v najbližších rokoch zavedie do rôznych kútov sveta, našu domácnosť budeme baliť do kufrov pomerne často. Ak by ste nás chceli obdarovať, najvďačnejší budeme za finančný príspevok. ',
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
