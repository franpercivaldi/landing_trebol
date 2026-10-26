// All site copy lives here so it can be edited without touching components.

export const contact = {
  whatsappNumber: "543512780483",
  phones: [
    { label: "+54 9 351 278-0483", href: "tel:+5493512780483" },
    { label: "+54 9 351 539-2047", href: "tel:+5493515392047" },
  ],
  email: "eltrebolseguros@gmail.com",
  instagram: "https://www.instagram.com/eltrebolorganizacion",
  facebook: "https://www.facebook.com/eltrebolorganizacion",
};

export const whatsappLink = (text = "Hola, quiero hacer una consulta.") =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "#coberturas", label: "Coberturas" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#sucursales", label: "Sucursales" },
  { href: "#preguntas", label: "Preguntas" },
];

export const hero = {
  title: "¿Qué querés asegurar?",
  lead:
    "Somos productores asesores de seguros en Córdoba desde hace más de 15 años. Comparamos entre ocho aseguradoras, te explicamos la póliza sin letra chica y seguimos al lado tuyo cuando hay un siniestro.",
  pickerHint: "Elegí una opción y te pedimos solo los datos necesarios para cotizar.",
};

// Fields reused by the quote forms
const person = [
  { name: "fullName", label: "Nombre y apellido", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Teléfono", type: "tel", autoComplete: "tel", required: true },
];
const zip = { name: "zip", label: "Código postal", type: "text", inputMode: "numeric", autoComplete: "postal-code", required: true };
const vehicle = [
  { name: "marca", label: "Marca", type: "text", required: true },
  { name: "modelo", label: "Modelo", type: "text", required: true },
  { name: "anio", label: "Año", type: "number", inputMode: "numeric", required: true },
];
const generic = [
  ...person,
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: false },
  { name: "comment", label: "Contanos qué necesitás", type: "textarea", required: false },
];

export const services = [
  {
    id: "auto",
    icon: "Car",
    name: "Auto",
    title: "Seguro automotor",
    image: "img/our-services/seguroAuto.webp",
    summary:
      "Autos, pickups, camiones, acoplados y trailers. Desde responsabilidad civil hasta terceros completos y todo riesgo, según cómo usás el vehículo.",
    coverages: [
      "Responsabilidad civil",
      "Asistencia al vehículo las 24 horas",
      "Robo o hurto",
      "Incendio",
      "Daños por accidente",
      "Cristales, granizo y cerraduras",
      "Daños parciales con franquicia fija o variable",
    ],
    fields: [...person, zip, ...vehicle, { name: "gnc", label: "¿Tiene GNC?", type: "yesno", required: true }],
  },
  {
    id: "moto",
    icon: "Motorbike",
    name: "Moto",
    title: "Seguro de moto",
    image: "img/our-services/seguroMoto2.webp",
    summary: "Para la moto de todos los días o la de ruta. Elegís entre una cobertura básica o una protección total.",
    coverages: [
      "Responsabilidad civil",
      "Asistencia a la moto las 24 horas",
      "Robo o hurto total",
      "Incendio total",
      "Daños por accidente",
    ],
    fields: [...person, zip, ...vehicle],
  },
  {
    id: "bici",
    icon: "Bike",
    name: "Bici o monopatín",
    title: "Seguro de bici y monopatín",
    image: "img/our-services/seguroBiciDef.webp",
    summary:
      "Urbana, mountain bike, de ruta o eléctrica, sin importar la antigüedad. También cubrimos monopatines eléctricos.",
    coverages: [
      "Robo dentro de la República Argentina",
      "Reintegro de gastos de documentación en caso de robo",
      "Daños a terceros",
    ],
    fields: [
      ...person,
      zip,
      { name: "marca", label: "Marca", type: "text", required: true },
      { name: "modelo", label: "Modelo", type: "text", required: true },
      { name: "valor", label: "Valor aproximado ($)", type: "number", inputMode: "numeric", required: true },
    ],
  },
  {
    id: "hogar",
    icon: "House",
    name: "Hogar",
    title: "Seguro de hogar",
    image: "img/our-services/seguroHogar.webp",
    summary:
      "Casa, departamento, vivienda permanente o de fin de semana, incluso construcciones no tradicionales. Protegemos la estructura y lo que tenés adentro.",
    coverages: [
      "Incendio, explosión o derrumbe, total o parcial",
      "Daños por rayo, viento, granizo, terremoto o caída de árboles",
      "Limpieza y remoción de escombros, alojamiento, mudanza y guardamuebles",
      "Contenido: robo, hurto, daños eléctricos e intento de robo",
      "Equipos electrónicos, incluso por accidente o inundación",
      "Cristales y pérdida de alimentos refrigerados",
      "Asistencia para el hogar las 24 horas, todo el año",
    ],
    fields: generic,
  },
  {
    id: "comercio",
    icon: "Store",
    name: "Comercio",
    title: "Seguro de comercio",
    image: "img/our-services/seguroNegocio.webp",
    summary:
      "Locales, oficinas y emprendimientos de cualquier rubro y tamaño. Armamos la póliza según lo que hacés y lo que tenés en el local.",
    coverages: [
      "Incendio de edificio y contenido",
      "Robo de contenido y mercadería",
      "Cristales",
      "Responsabilidad civil comprensiva",
      "Asistencia para el comercio las 24 horas",
      "Opcionales: valores en caja fuerte y en tránsito, seguro técnico y daños por agua",
    ],
    fields: generic,
  },
  {
    id: "accidentes",
    icon: "HeartPulse",
    name: "Accidentes personales",
    title: "Accidentes personales",
    image: "img/our-services/seguroSalud2.webp",
    summary:
      "Para autónomos, trabajadores independientes o cualquiera que quiera cubrirse ante un accidente. Lo adaptamos a una persona, una familia o un equipo.",
    coverages: [
      "Indemnización por lesiones, incapacidad temporal o permanente, o fallecimiento",
      "Gastos médicos y de internación derivados del accidente",
      "Opciones individuales, familiares o para profesionales",
      "Se puede combinar con hogar o vehículo",
    ],
    fields: generic,
  },
  {
    id: "caucion",
    icon: "FileSignature",
    name: "Caución",
    title: "Seguro de caución",
    image: "img/our-services/seguroCaucion.webp",
    summary:
      "Garantiza que vas a cumplir un contrato. Lo usan empresas, pymes y profesionales para licitaciones, obras, servicios y alquileres.",
    coverages: [
      "Garantías para licitaciones, contratos de obra y de servicios",
      "Alquileres comerciales sin depósito en efectivo",
      "Montos y plazos según cada contrato",
      "Emisión rápida de la póliza",
    ],
    fields: generic,
  },
  {
    id: "viaje",
    icon: "Plane",
    name: "Viaje",
    title: "Asistencia al viajero",
    image: "img/our-services/seguroViajero.webp",
    summary:
      "Para viajes dentro del país o al exterior. Te ayudamos a elegir el plan según el destino, la duración y quiénes viajan.",
    coverages: [
      "Asistencia médica por enfermedad o accidente",
      "Medicamentos y odontología de urgencia",
      "Equipaje demorado o extraviado",
      "Regreso anticipado y traslados sanitarios",
    ],
    note: "Las coberturas y los topes dependen del plan que elijas.",
    fields: generic,
  },
  {
    id: "art",
    icon: "HardHat",
    name: "ART",
    title: "Riesgos del trabajo (ART)",
    image: "img/our-services/seguroART.webp",
    summary:
      "La cobertura obligatoria para empleadores. Cubre a tu personal ante accidentes de trabajo y enfermedades profesionales.",
    coverages: [
      "Atención médica, farmacéutica y rehabilitación",
      "Prestaciones dinerarias por incapacidad",
      "Asesoramiento en prevención de riesgos",
      "Gestión de altas, bajas y denuncias",
    ],
    fields: generic,
  },
];

export const insurers = [
  { name: "ATM Seguros", logo: "partners/atm.webp" },
  { name: "Mercantil Andina", logo: "partners/mercantil-andina.webp" },
  { name: "Río Uruguay Seguros", logo: "partners/rus.webp" },
  { name: "Experta Seguros", logo: "partners/experta.webp" },
  { name: "Prudencia Seguros", logo: "partners/prudencia-seguros.webp" },
  { name: "Triunfo Seguros", logo: "partners/triunfo.webp" },
  { name: "Segurometal", logo: "partners/seguro-metal.webp" },
  { name: "MedicarWork", logo: "partners/medicar-work.webp" },
];

export const steps = [
  {
    title: "Nos contás qué necesitás",
    text: "Por WhatsApp, por teléfono o en la oficina. Preguntamos lo justo para entender qué querés proteger.",
  },
  {
    title: "Comparamos por vos",
    text: "Cotizamos entre las aseguradoras con las que trabajamos y te mostramos las opciones que tienen sentido, con sus diferencias.",
  },
  {
    title: "Contratás sin vueltas",
    text: "Te explicamos cada punto de la póliza antes de firmar y te la enviamos por email.",
  },
  {
    title: "Seguimos con vos",
    text: "Si tenés un siniestro, nos llamás a nosotros. Te guiamos en la denuncia y hacemos el seguimiento con la compañía.",
  },
];

export const about = {
  title: "Una organización de productores, con nombre y apellido",
  paragraphs: [
    "El Trébol nació en Córdoba como un equipo de productores asesores de seguros. Más de 15 años después seguimos trabajando igual: atendemos en persona, conocemos a nuestros clientes y respondemos el teléfono.",
    "No somos una aseguradora. Trabajamos para vos, y eso nos deja comparar entre varias compañías y recomendarte la que mejor se adapta a lo que necesitás.",
  ],
  reasons: [
    "Más de 15 años asesorando en Córdoba",
    "Ocho aseguradoras para comparar",
    "Dos sucursales con atención presencial",
    "Planes a medida de cada cliente",
    "Acompañamiento en cada siniestro",
    "Respuesta rápida por WhatsApp",
  ],
};

export const branches = [
  {
    name: "Sucursal Bodereau",
    address: "Av. Bodereau 9498, locales 4 y 5",
    city: "Córdoba",
    mapsLink: "https://maps.app.goo.gl/wJWjrzzEJ5u9qdkn8",
    embed: "https://www.google.com/maps?q=Avenida+Bodereau+9498,+C%C3%B3rdoba,+Argentina&output=embed",
    phone: contact.phones[0],
  },
  {
    name: "Sucursal Donato Álvarez",
    address: "Av. Donato Álvarez 7800",
    city: "Córdoba",
    mapsLink: "https://maps.app.goo.gl/jxygBNgfpXHBd6Gp9",
    embed: "https://www.google.com/maps?q=Avenida+Donato+Alvarez+7800,+C%C3%B3rdoba,+Argentina&output=embed",
    phone: contact.phones[1],
  },
];

export const faq = [
  {
    q: "¿Qué seguros ofrecen?",
    a: "Autos, motos, bicicletas y monopatines, hogar, comercio, accidentes personales, caución, asistencia al viajero y ART. Si buscás algo que no está en la lista, consultanos igual.",
  },
  {
    q: "¿Cómo pido una cotización?",
    a: "Elegí el tipo de seguro en esta página y completá el formulario, escribinos por WhatsApp o pasá por cualquiera de las dos sucursales.",
  },
  {
    q: "¿Qué hago si tengo un siniestro?",
    a: "Comunicate con nosotros lo antes posible. Te decimos qué documentación hace falta, te ayudamos a hacer la denuncia y seguimos el trámite con la aseguradora.",
  },
  {
    q: "¿Puedo cambiar mi póliza después de contratarla?",
    a: "Sí. Podés ampliar o modificar la cobertura en cualquier momento. Escribinos y vemos juntos qué conviene cambiar.",
  },
  {
    q: "¿Cómo recibo la póliza?",
    a: "Te la enviamos por email. Si preferís tenerla en papel, la podés retirar en la oficina.",
  },
];
