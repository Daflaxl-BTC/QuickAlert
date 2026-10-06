import type { LandingTranslation } from './de'

export const landing: LandingTranslation = {
  nav: {
    how: 'How it works',
    features: 'Technology',
    models: 'Models',
    faq: 'FAQ',
    buy: 'Buy on Amazon',
    buyShort: 'Buy',
    language: 'Choose language',
    home: 'QuickAlert home',
    backToTop: 'Back to top',
  },

  hero: {
    status: 'Now available on Amazon',
    statusSub: 'BASE & PRO',
    titleA: 'Seen before it’s',
    titleAccent: 'too late',
    titleB: '.',
    text: 'The magnetic LED warning light for your car roof. Reach out of the window, place it, switch it on – and the traffic behind you sees the hazard without you ever stepping onto the road.',
    ctaPrimary: 'BASE on Amazon',
    ctaSecondary: 'Compare models',
    trust: ['Neodymium magnet base', '360° LED ring', 'IP54 weatherproof'],
    imageAlt: 'QuickAlert BASE warning light with glowing amber LED ring',
    imageAltPro: 'QuickAlert PRO with automatic GPS location reporting',
  },

  marquee: {
    label: 'Made for',
    items: [
      'Cars with steel roofs',
      'Vans & transporters',
      'Motorhomes',
      'Glovebox size',
      'No tools',
      'No app',
      'Standard batteries',
      'Night, rain & fog',
    ],
  },

  problem: {
    label: 'The problem',
    textA: 'Setting up a warning triangle means getting out and walking 150 metres or more along the carriageway – in the dark, in the rain, next to traffic doing 120 km/h.',
    textB: 'QuickAlert turns that around. The warning sits where you are –',
    textAccent: 'on the roof.',
    statsTitle: 'The reality in numbers (Germany, 2024)',
    link: 'Why the warning triangle alone is not enough',
  },

  steps: {
    label: 'How it works',
    titleA: 'Three moves.',
    titleB: 'No walk into the danger zone.',
    items: [
      {
        title: 'Within reach',
        text: 'Small enough for the glovebox or door pocket. Always there when you need it.',
      },
      {
        title: 'Place it on the roof',
        text: 'Through the open window onto the steel roof – the neodymium magnet holds instantly. No tools.',
      },
      {
        title: 'Switch it on',
        text: 'One press and the amber LED ring warns in every direction – visible from far away.',
      },
    ],
    note: 'In Germany the warning triangle remains mandatory. QuickAlert makes sure you are seen before it is in place.',
  },

  features: {
    label: 'Technology',
    titleA: 'Built for the moment',
    titleB: 'when everything goes wrong.',
    intro: 'No gimmicks, no setup. A rugged device that simply works when it matters.',
    ring: {
      badge: 'The core',
      title: '360° LED ring',
      text: 'Amber warning light in every direction. The light parameters meet ECE R65 – confirmed by tests at IDIADA.',
    },
    magnet: {
      title: 'Neodymium magnet base',
      text: 'Holds securely on a steel roof. Tested at a wind load of 180 Pa.',
    },
    weather: {
      title: 'IP54 weatherproof',
      text: 'Protected against splashing water and dust. Operates from −10 °C to +50 °C.',
    },
    battery: {
      title: 'Standard batteries',
      text: 'Standard alkaline batteries, included. No charging, no flat battery when it counts.',
    },
    compact: {
      title: 'Glovebox size',
      text: 'Compact, rugged, always within reach. No setup, no accessories.',
    },
    pro: {
      badge: 'PRO only · Spain',
      title: 'GPS + eSIM',
      text: 'Automatically reports your location to DGT 3.0 when activated. 12 years of connectivity included – no contract, no app.',
    },
  },

  specs: {
    label: 'In detail',
    titleA: 'Technology that simply',
    titleB: 'works when it matters.',
    text: 'Tested to European standards and documented with certificates. You will find all reports at the bottom of this page.',
    imageAlt: 'QuickAlert BASE – tested safety',
    rows: [
      { label: 'Light source', value: '360° LED ring', sub: 'Amber' },
      { label: 'Light parameters', value: 'ECE R65', sub: 'according to IDIADA tests' },
      { label: 'Mounting', value: 'Neodymium magnet base', sub: 'for steel surfaces' },
      { label: 'Protection', value: 'IP54', sub: 'splash water & dust' },
      { label: 'Power', value: 'Standard batteries', sub: 'alkaline, included' },
      { label: 'Operating temperature', value: '−10 °C to +50 °C', sub: 'all year round' },
      { label: 'Wind stability', value: '180 Pa', sub: 'tested' },
    ],
  },

  models: {
    label: 'Models',
    titleA: 'Two models.',
    titleB: 'One goal: being seen.',
    intro: 'BASE as extra protection for Germany. PRO as the connected V16 warning light for Spain.',
    priceNote: 'One-off · current price on Amazon',
    base: {
      country: 'Germany',
      name: 'QuickAlert BASE',
      tagline: 'Instant protection – before the warning triangle is even set up.',
      price: '€26.99',
      imageAlt: 'QuickAlert BASE warning light',
      features: [
        '360° amber LED ring (ECE R65, according to IDIADA tests)',
        'Neodymium magnet base – holds instantly',
        'IP54 splash water & dust protection',
        'Standard batteries included',
        'Compact enough for the glovebox',
      ],
      cta: 'Buy BASE on Amazon',
    },
    pro: {
      badge: 'Connected',
      country: 'Spain',
      name: 'QuickAlert PRO',
      tagline: 'V16 conectada – replaces the warning triangle in Spain.',
      price: '€39.99',
      imageAlt: 'QuickAlert PRO with packaging',
      features: [
        'Everything in BASE',
        'Integrated GPS module',
        'Automatic reporting to DGT 3.0',
        '12 years of eSIM included',
        'Certified: IDIADA PC26020115',
      ],
      note: 'GPS reporting, eSIM and DGT connection work in Spain only.',
      cta: 'Buy PRO on Amazon',
    },
  },

  compare: {
    label: 'Comparison',
    title: 'BASE or PRO?',
    feature: 'Feature',
    market: 'Market',
    price: 'Price',
    rows: [
      { feature: '360° amber LED ring', base: true, pro: true },
      { feature: 'Light parameters per ECE R65 (IDIADA tests)', base: true, pro: true },
      { feature: 'Neodymium magnet base', base: true, pro: true },
      { feature: 'IP54 weatherproof', base: true, pro: true },
      { feature: 'Standard batteries included', base: true, pro: true },
      { feature: 'V16 certificate Spain (IDIADA PC26020115)', base: false, pro: true },
      { feature: 'GPS location reporting to DGT 3.0', base: false, pro: true },
      { feature: '12 years of eSIM included', base: false, pro: true },
    ],
  },

  legal: {
    label: 'Regulations',
    titleA: 'Clearly regulated.',
    titleB: 'In both countries.',
    germany: {
      name: 'Germany',
      text: 'The warning triangle remains mandatory (§ 53a StVZO). QuickAlert BASE is the additional protection that lights up instantly – before you can set up the triangle.',
    },
    spain: {
      name: 'Spain',
      text: 'Since 01/01/2026 the connected V16 warning light is mandatory. QuickAlert PRO is certified under IDIADA PC26020115 and reports the breakdown to DGT 3.0 automatically.',
    },
    certLink: 'View all certificates & reports',
  },

  faq: {
    label: 'FAQ',
    title: 'What you probably want to know.',
    contact: 'Anything else?',
    contactLink: 'Message us on WhatsApp',
    items: [
      {
        q: 'Does QuickAlert replace the warning triangle?',
        a: 'Not in Germany: the warning triangle remains mandatory. QuickAlert BASE is the additional protection that lights up instantly – before the triangle is in place. In Spain, the connected V16 light has replaced the warning triangle since 01/01/2026. That is what QuickAlert PRO is made for.',
      },
      {
        q: 'Can I use the BASE as a V16 in Spain?',
        a: 'No. The BASE has no GPS and no DGT connection and is not approved as a V16 conectada in Spain. For Spain you need the PRO.',
      },
      {
        q: 'Which batteries do I need?',
        a: 'Standard alkaline batteries – they are included in the box. You will find the exact type in the user manual. Replacements are available everywhere, and there is no rechargeable battery that is flat when you need it.',
      },
      {
        q: 'Does the magnet hold on every car?',
        a: 'The neodymium magnet base sticks to steel. It will not hold on aluminium, plastic or glass roofs (e.g. panoramic roofs) – in that case place the light on another steel part of the body, such as the bonnet.',
      },
      {
        q: 'Does the PRO need an app or a contract?',
        a: 'No. The eSIM is included for 12 years. When activated, your location is sent to the DGT 3.0 platform automatically – no smartphone, no contract.',
      },
      {
        q: 'Where can I buy QuickAlert?',
        a: 'Directly on Amazon – both BASE and PRO. Dealers and fleets can reach us on WhatsApp.',
      },
    ],
  },

  gallery: {
    label: 'Product in detail',
    titleA: 'Everything at a glance.',
    titleB: 'Just like on Amazon.',
    intro: 'The product images from our Amazon listings – with a short explanation for every detail.',
    tabBase: 'BASE · Germany',
    tabPro: 'PRO · Spain',
    prev: 'Previous image',
    next: 'Next image',
    show: 'Show image',
    buyBase: 'View BASE on Amazon',
    buyPro: 'View PRO on Amazon',
    base: [
      { title: 'QuickAlert BASE', text: 'The emergency warning light with its packaging – compact, magnetic and ready to use.' },
      { title: 'Seen before it’s too late', text: 'The amber LED ring lights up all around. The heart of the BASE – additional protection in Germany.' },
      { title: 'Tested safety', text: 'Test report PC21020060, CE marking, IP54 and RoHS – independently tested and properly documented.' },
      { title: 'Compact. Within reach.', text: 'Small enough for the door pocket or glovebox. With a strong magnet base for the steel roof.' },
      { title: 'Ready in seconds', text: 'Grab it, put it on the roof, switch it on. No setting up, no walking, no waiting.' },
      { title: 'Warning triangle vs. QuickAlert', text: 'Instead of walking into the danger zone: on the roof in seconds and visible all around. The triangle is still mandatory in Germany.' },
      { title: 'German brand', text: 'German customer service, German manual and clearly documented tests.' },
    ],
    pro: [
      { title: 'QuickAlert PRO', text: 'The connected V16 warning light for Spain – with its packaging.' },
      { title: 'Seen before it’s too late', text: '360° LED warning light with integrated GPS and eSIM.' },
      { title: 'One light. Every direction.', text: '360° LED light band, one-button operation, strong magnet base – GPS and eSIM built in.' },
      { title: 'Tested safety', text: 'IDIADA PC26020115, certified for DGT 3.0. Plus IP54 and CE conformity.' },
      { title: 'Compact. Within reach.', text: 'Fits in any glovebox – always with you when it matters.' },
      { title: 'Ready in seconds', text: 'Grab it, put it on the roof, switch it on. No setting up, no walking.' },
      { title: 'Reports your breakdown automatically', text: 'GPS location reporting to DGT 3.0 – no app, no smartphone. 12 years of eSIM included.' },
      { title: 'One button. Instantly visible.', text: 'Red on/off button, engraved IDIADA test number and QuickAlert branding on top.' },
      { title: 'German brand', text: 'German customer service and clearly documented tests – for the Spanish market too.' },
    ],
  },

  cta: {
    titleA: 'Don’t wait.',
    titleB: 'Be safe.',
    text: 'Put QuickAlert in your glovebox today – so you are seen when it matters.',
    primary: 'Buy now on Amazon',
    secondary: 'For dealers & fleets',
  },

  footer: {
    tagline: 'Magnetic LED warning light. Seen before it’s too late.',
    certificates: 'Certificates',
  },
}
