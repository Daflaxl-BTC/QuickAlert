import type { LandingTranslation } from './de'

export const landing: LandingTranslation = {
  nav: {
    how: 'Cómo funciona',
    features: 'Tecnología',
    models: 'Modelos',
    faq: 'Preguntas',
    buy: 'Comprar en Amazon',
    buyShort: 'Comprar',
    language: 'Elegir idioma',
    home: 'Inicio de QuickAlert',
    backToTop: 'Volver arriba',
  },

  hero: {
    status: 'Ya disponible en Amazon',
    statusSub: 'BASE y PRO',
    titleA: 'Visible antes de que sea',
    titleAccent: 'demasiado tarde',
    titleB: '.',
    text: 'La luz de emergencia LED magnética para el techo del coche. Sacas la mano por la ventanilla, la colocas, la enciendes – y el tráfico que viene detrás ve el peligro sin que pises la calzada.',
    ctaPrimary: 'BASE en Amazon',
    ctaSecondary: 'Comparar modelos',
    trust: ['Base magnética de neodimio', 'Anillo LED 360°', 'IP54 resistente'],
    imageAlt: 'Luz de emergencia QuickAlert BASE con anillo LED ámbar encendido',
    imageAltPro: 'QuickAlert PRO con aviso GPS automático',
  },

  marquee: {
    label: 'Pensado para',
    items: [
      'Turismos con techo de acero',
      'Furgonetas',
      'Autocaravanas',
      'Tamaño guantera',
      'Sin herramientas',
      'Sin app',
      'Pilas estándar',
      'Noche, lluvia y niebla',
    ],
  },

  problem: {
    label: 'El problema',
    textA: 'Colocar un triángulo significa bajarse del coche y caminar 150 metros o más junto a la calzada – de noche, bajo la lluvia, al lado de tráfico a 120 km/h.',
    textB: 'QuickAlert le da la vuelta. La señal está donde estás tú –',
    textAccent: 'en el techo.',
    statsTitle: 'La realidad en cifras (Alemania, 2024)',
    link: 'Por qué el triángulo por sí solo no basta',
  },

  steps: {
    label: 'Cómo funciona',
    titleA: 'Tres gestos.',
    titleB: 'Sin caminar por la zona de peligro.',
    items: [
      {
        title: 'Siempre a mano',
        text: 'Cabe en la guantera o en el bolsillo de la puerta. Siempre lista cuando la necesitas.',
      },
      {
        title: 'Al techo',
        text: 'Por la ventanilla abierta sobre el techo de acero – la base de neodimio se fija al instante. Sin herramientas.',
      },
      {
        title: 'Encender',
        text: 'Una pulsación y el anillo LED ámbar avisa en todas direcciones – visible desde lejos.',
      },
    ],
    note: 'En Alemania el triángulo sigue siendo obligatorio. QuickAlert hace que te vean antes de colocarlo.',
  },

  features: {
    label: 'Tecnología',
    titleA: 'Hecha para el momento',
    titleB: 'en que todo sale mal.',
    intro: 'Sin artificios, sin montaje. Un dispositivo robusto que simplemente funciona cuando importa.',
    ring: {
      badge: 'El corazón',
      title: 'Anillo LED 360°',
      text: 'Luz de advertencia ámbar en todas direcciones. Los parámetros lumínicos cumplen ECE R65 – confirmado por ensayos de IDIADA.',
    },
    magnet: {
      title: 'Base magnética de neodimio',
      text: 'Se sujeta con firmeza al techo de acero. Probada con una carga de viento de 180 Pa.',
    },
    weather: {
      title: 'IP54 resistente',
      text: 'Protegida contra salpicaduras y polvo. Funciona de −10 °C a +50 °C.',
    },
    battery: {
      title: 'Pilas estándar',
      text: 'Pilas alcalinas estándar, incluidas. Sin cargas, sin batería vacía en el peor momento.',
    },
    compact: {
      title: 'Tamaño guantera',
      text: 'Compacta, robusta, siempre a mano. Sin montaje, sin accesorios.',
    },
    pro: {
      badge: 'Solo PRO · España',
      title: 'GPS + eSIM',
      text: 'Al activarse, envía tu ubicación automáticamente a la DGT 3.0. 12 años de conectividad incluidos – sin contrato, sin app.',
    },
  },

  specs: {
    label: 'En detalle',
    titleA: 'Tecnología que simplemente',
    titleB: 'funciona cuando importa.',
    text: 'Ensayada según normas europeas y documentada con certificados. Encontrarás todos los informes al final de esta página.',
    imageAlt: 'QuickAlert BASE – seguridad comprobada',
    rows: [
      { label: 'Fuente de luz', value: 'Anillo LED 360°', sub: 'Ámbar' },
      { label: 'Parámetros lumínicos', value: 'ECE R65', sub: 'según ensayos IDIADA' },
      { label: 'Fijación', value: 'Base de neodimio', sub: 'para superficies de acero' },
      { label: 'Protección', value: 'IP54', sub: 'salpicaduras y polvo' },
      { label: 'Alimentación', value: 'Pilas estándar', sub: 'alcalinas, incluidas' },
      { label: 'Temperatura de uso', value: '−10 °C a +50 °C', sub: 'todo el año' },
      { label: 'Estabilidad al viento', value: '180 Pa', sub: 'probada' },
    ],
  },

  models: {
    label: 'Modelos',
    titleA: 'Dos modelos.',
    titleB: 'Un objetivo: que te vean.',
    intro: 'BASE como protección adicional para Alemania. PRO como baliza V16 conectada para España.',
    priceNote: 'Pago único · precio actual en Amazon',
    base: {
      country: 'Alemania',
      name: 'QuickAlert BASE',
      tagline: 'Protección inmediata – antes incluso de colocar el triángulo.',
      price: '26,99 €',
      imageAlt: 'Luz de emergencia QuickAlert BASE',
      features: [
        'Anillo LED ámbar 360° (ECE R65, según ensayos IDIADA)',
        'Base magnética de neodimio – fijación inmediata',
        'Protección IP54 contra salpicaduras y polvo',
        'Pilas estándar incluidas',
        'Compacta para la guantera',
      ],
      cta: 'Comprar BASE en Amazon',
    },
    pro: {
      badge: 'Conectada',
      country: 'España',
      name: 'QuickAlert PRO',
      tagline: 'V16 conectada – sustituye al triángulo en España.',
      price: '39,99 €',
      imageAlt: 'QuickAlert PRO con embalaje',
      features: [
        'Todas las funciones de BASE',
        'Módulo GPS integrado',
        'Aviso automático a la DGT 3.0',
        '12 años de eSIM incluidos',
        'Certificada: IDIADA PC26020115',
      ],
      note: 'El aviso GPS, la eSIM y la conexión con la DGT solo funcionan en España.',
      cta: 'Comprar PRO en Amazon',
    },
  },

  compare: {
    label: 'Comparativa',
    title: '¿BASE o PRO?',
    feature: 'Función',
    market: 'Mercado',
    price: 'Precio',
    rows: [
      { feature: 'Anillo LED ámbar 360°', base: true, pro: true },
      { feature: 'Parámetros lumínicos ECE R65 (ensayos IDIADA)', base: true, pro: true },
      { feature: 'Base magnética de neodimio', base: true, pro: true },
      { feature: 'IP54 resistente', base: true, pro: true },
      { feature: 'Pilas estándar incluidas', base: true, pro: true },
      { feature: 'Certificado V16 España (IDIADA PC26020115)', base: false, pro: true },
      { feature: 'Ubicación GPS a la DGT 3.0', base: false, pro: true },
      { feature: '12 años de eSIM incluidos', base: false, pro: true },
    ],
  },

  legal: {
    label: 'Normativa',
    titleA: 'Todo claro.',
    titleB: 'En ambos países.',
    germany: {
      name: 'Alemania',
      text: 'El triángulo sigue siendo obligatorio (§ 53a StVZO). QuickAlert BASE es la protección adicional que se enciende al instante – antes de que puedas colocar el triángulo.',
    },
    spain: {
      name: 'España',
      text: 'Desde el 01/01/2026 la baliza V16 conectada es obligatoria. QuickAlert PRO está certificada según IDIADA PC26020115 y avisa de la avería a la DGT 3.0 automáticamente.',
    },
    certLink: 'Ver todos los certificados e informes',
  },

  faq: {
    label: 'Preguntas',
    title: 'Lo que probablemente quieres saber.',
    contact: '¿Algo más?',
    contactLink: 'Escríbenos por WhatsApp',
    items: [
      {
        q: '¿QuickAlert sustituye al triángulo?',
        a: 'En Alemania no: el triángulo sigue siendo obligatorio. QuickAlert BASE es la protección adicional que se enciende al instante – antes de colocar el triángulo. En España, la baliza V16 conectada sustituye al triángulo desde el 01/01/2026. Para eso está QuickAlert PRO.',
      },
      {
        q: '¿Puedo usar la BASE como V16 en España?',
        a: 'No. La BASE no tiene GPS ni conexión con la DGT y no está homologada como V16 conectada en España. Para España necesitas la PRO.',
      },
      {
        q: '¿Qué pilas necesito?',
        a: 'Pilas alcalinas estándar – vienen incluidas. El tipo exacto figura en el manual de instrucciones. Las encuentras en cualquier sitio y no hay batería recargable que esté vacía cuando la necesitas.',
      },
      {
        q: '¿El imán se sujeta en cualquier coche?',
        a: 'La base de neodimio se fija al acero. No se sujeta en techos de aluminio, plástico o cristal (p. ej. techo panorámico) – en ese caso colócala sobre otra parte de acero de la carrocería, como el capó.',
      },
      {
        q: '¿La PRO necesita app o contrato?',
        a: 'No. La eSIM está incluida durante 12 años. Al activarla, tu ubicación se envía automáticamente a la plataforma DGT 3.0 – sin smartphone, sin contrato.',
      },
      {
        q: '¿Dónde puedo comprar QuickAlert?',
        a: 'Directamente en Amazon – BASE y PRO. Distribuidores y flotas pueden contactarnos por WhatsApp.',
      },
    ],
  },

  gallery: {
    label: 'El producto en detalle',
    titleA: 'Todo de un vistazo.',
    titleB: 'Igual que en Amazon.',
    intro: 'Las imágenes de nuestros anuncios en Amazon – con una breve explicación de cada detalle.',
    tabBase: 'BASE · Alemania',
    tabPro: 'PRO · España',
    prev: 'Imagen anterior',
    next: 'Imagen siguiente',
    show: 'Mostrar imagen',
    buyBase: 'Ver BASE en Amazon',
    buyPro: 'Ver PRO en Amazon',
    base: [
      { title: 'QuickAlert BASE', text: 'La luz de emergencia con su embalaje – compacta, magnética y lista para usar.' },
      { title: 'Visible antes de que sea tarde', text: 'El anillo LED ámbar ilumina en todas direcciones. El corazón de la BASE – protección adicional en Alemania.' },
      { title: 'Seguridad comprobada', text: 'Informe PC21020060, marcado CE, IP54 y RoHS – ensayada de forma independiente y bien documentada.' },
      { title: 'Compacta. A mano.', text: 'Cabe en la puerta o en la guantera. Con base magnética potente para el techo de acero.' },
      { title: 'Lista en segundos', text: 'Cogerla, ponerla en el techo, encenderla. Sin montaje, sin caminar, sin esperas.' },
      { title: 'Triángulo vs. QuickAlert', text: 'En lugar de caminar por la zona de peligro: en el techo en segundos y visible en todas direcciones. En Alemania el triángulo sigue siendo obligatorio.' },
      { title: 'Marca alemana', text: 'Atención al cliente alemana, manual en alemán y ensayos claramente documentados.' },
    ],
    pro: [
      { title: 'QuickAlert PRO', text: 'La baliza V16 conectada para España – con su embalaje.' },
      { title: 'Visible antes de que sea tarde', text: 'Luz de advertencia LED 360° con GPS y eSIM integrados.' },
      { title: 'Una luz. Todas las direcciones.', text: 'Banda LED 360°, manejo con un solo botón, base magnética potente – GPS y eSIM integrados.' },
      { title: 'Seguridad comprobada', text: 'IDIADA PC26020115, certificada para la DGT 3.0. Además IP54 y conformidad CE.' },
      { title: 'Compacta. A mano.', text: 'Cabe en cualquier guantera – siempre contigo cuando importa.' },
      { title: 'Lista en segundos', text: 'Cogerla, ponerla en el techo, encenderla. Sin montaje, sin caminar.' },
      { title: 'Avisa de la avería automáticamente', text: 'Ubicación GPS a la DGT 3.0 – sin app, sin smartphone. 12 años de eSIM incluidos.' },
      { title: 'Un botón. Visible al instante.', text: 'Pulsador rojo de encendido, número IDIADA grabado y logo QuickAlert en la parte superior.' },
      { title: 'Marca alemana', text: 'Atención al cliente alemana y ensayos claramente documentados – también para el mercado español.' },
    ],
  },

  cta: {
    titleA: 'No esperes.',
    titleB: 'Ve seguro.',
    text: 'Guarda hoy QuickAlert en la guantera – para que te vean cuando importa.',
    primary: 'Comprar ahora en Amazon',
    secondary: 'Para distribuidores y flotas',
  },

  footer: {
    tagline: 'Luz de emergencia LED magnética. Visible antes de que sea demasiado tarde.',
    certificates: 'Certificados',
  },
}
