import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { casesEn, casesEs } from './locales/cases'

const en = {
  nav_work: 'Work', nav_approach: 'How I work', nav_exp: 'Experience', nav_contact: 'Contact',
  hero_intro: 'I come from frontend development — so instead of writing long specs, <strong>I prototype the full flow and bring it to the team in days.</strong> The trio discusses something real, not a document.',
  hero_role: 'Product Manager <b>///</b> B2B SaaS · Booking platforms · AI‑first discovery',
  str1_title: 'Discovery first', str1_p: 'I prototype flows before writing specs — validated proposals to the trio in days, not sprints.',
  str2_title: 'Technical bridge', str2_p: 'Two years as a frontend developer means I talk to engineering in their language and know where my opinion ends.',
  str3_title: 'Shipped ownership', str3_p: "Two products end-to-end, strategy to production, no co-PM. Every decision — what we build, what we don't — was mine.",
  str4_title: 'AI‑first process', str4_p: 'Claude is part of my standard discovery loop: benchmarking, flow prototyping, PRD drafting. The team moves faster.',
  work_title: 'Case studies', work_sub: "Two multi-quarter projects written the way I run them: decisions, trade-offs, and what I'd do differently.",
  card1_num: 'CASE 01 · PLATFORM MIGRATION', card1_title: 'Replatforming a live storefront for ~300 schools', card1_desc: 'Moving a six-year-old Ember.js storefront to a modern embeddable React widget — while schools kept transacting through it.',
  card2_num: 'CASE 02 · PLATFORM BET', card2_title: 'One forms platform instead of two products', card2_desc: "45% of daily support time went into editing forms by hand. I argued the fix wasn't a feature — it was a platform.",
  read: 'Read case study',
  how_title: 'Three habits', how_sub: 'Not values — working habits you can verify in the case studies.',
  p1_title: 'Prototype before spec', p1_body: 'When a project starts I prototype the complete flow with AI — competitor benchmarks included — and bring a working proposal to the trio in days. Design moves from exploring to refining; engineering validates feasibility before any scope commitment.', p1_proof: '→ Case 01: the 5-screen booking flow, prototyped before a single PRD line',
  p2_title: 'Technical decisions in plain language', p2_body: "Two years as a frontend developer means I don't need constraints translated. My job is the reverse: turning architecture decisions into one sentence a non-engineer can act on — and knowing exactly where my technical opinion ends.", p2_proof: '→ Case 01: Shadow DOM consent, add-ons matrix, channel parity principle',
  p3_title: 'Audit-driven delivery', p3_body: "Every release ships with a paired audit of what's missing versus the working legacy — severity-rated, owner-tagged. Open questions live in the PRD with names attached. The limitations doc publishes before GA.", p3_proof: '→ Case 01: 5 audits, 250+ test cases, a P0/P1/P2 limitations doc before launch',
  exp_title: "Where I've shipped",
  xp1_role: 'Product Manager', xp1_org: 'Bloowatch · B2B/B2B2C SaaS', xp1_desc: 'Sole PM of a booking, payments and operations platform for sports schools across 15+ countries. Two products end-to-end — operations back-office and customer-facing eCommerce — in a product trio, reporting to the CEO.',
  xp2_role: 'Frontend Developer', xp2_org: 'Freelance · Remote', xp2_desc: 'Frontend dev in a startup product trio, shipping features in React. Built single-page applications and sites end-to-end — Figma to implementation — across React, WordPress, Shopify and Squarespace.',
  xp3_role: 'Engineering first', xp3_org: 'Ironhack · ULPGC', xp3_desc: 'Full-Stack Web Development, Ironhack Barcelona (2020).<br />BSc Oceanographic Engineering, ULPGC (2012–2017).',
  contact_title: "Let's talk product.", contact_sub: 'Based in Barcelona. Open to mid-senior IC PM roles — booking & experiences platforms, B2B/B2B2C SaaS, customer-facing products.',
  btn_li: 'LinkedIn ↗', btn_email: 'Email me', btn_cv: 'Download CV ↓',
  footer_copy: '© 2026 Pau Larrea', footer_role: 'Product Manager — Barcelona', footer_tag: 'Built with an AI-first workflow, naturally',
}

const es = {
  nav_work: 'Proyectos', nav_approach: 'Cómo trabajo', nav_exp: 'Experiencia', nav_contact: 'Contacto',
  hero_intro: 'Vengo del desarrollo frontend — así que en vez de escribir specs largas, <strong>prototipo el flujo completo y lo llevo al equipo en días.</strong> El trío discute algo real, no un documento.',
  hero_role: 'Product Manager <b>///</b> B2B SaaS · Plataformas de reservas · Discovery AI-first',
  str1_title: 'Discovery primero', str1_p: 'Prototipo flujos antes de escribir specs — propuestas validadas al trío en días, no en sprints.',
  str2_title: 'Puente técnico', str2_p: 'Dos años como developer frontend me permiten hablar con engineering en su lenguaje y saber dónde termina mi opinión.',
  str3_title: 'Ownership real', str3_p: 'Dos productos end-to-end, estrategia a producción, sin co-PM. Cada decisión — qué se construye, qué no — fue mía.',
  str4_title: 'Proceso AI-first', str4_p: 'Claude forma parte de mi loop de discovery: benchmarking, prototipado de flujos, borradores de PRD. El equipo va más rápido.',
  work_title: 'Casos de estudio', work_sub: 'Dos proyectos de varios trimestres escritos como los ejecuto: decisiones, trade-offs y qué haría diferente.',
  card1_num: 'CASO 01 · MIGRACIÓN DE PLATAFORMA', card1_title: 'Replataformizar una tienda live para ~300 escuelas', card1_desc: 'Migrar un eCommerce de seis años en Ember.js a un widget embebible en React moderno — mientras las escuelas seguían tramitando reservas.',
  card2_num: 'CASO 02 · APUESTA DE PLATAFORMA', card2_title: 'Una plataforma de forms en vez de dos productos', card2_desc: 'El 45% del tiempo de soporte diario se gastaba en editar formularios a mano. Argumenté que la solución no era una feature — era una plataforma.',
  read: 'Leer caso de estudio',
  how_title: 'Tres hábitos', how_sub: 'No son valores — son hábitos de trabajo que puedes verificar en los casos.',
  p1_title: 'Prototipo antes de spec', p1_body: 'Cuando arranca un proyecto, prototipo el flujo completo con AI — benchmark de competidores incluido — y llevo una propuesta al trío en días. Design pasa de explorar a refinar; engineering valida feasibility antes de cualquier compromiso de scope.', p1_proof: '→ Caso 01: el flujo de reserva de 5 pantallas, prototipado antes de escribir una sola línea de PRD',
  p2_title: 'Decisiones técnicas en lenguaje accionable', p2_body: 'Dos años como developer frontend significa que no necesito que me traduzcan los constraints. Mi trabajo es la traducción inversa: convertir decisiones de arquitectura en una frase que cualquier persona del equipo pueda ejecutar.', p2_proof: '→ Caso 01: Shadow DOM, matriz de add-ons, principio de channel parity',
  p3_title: 'Delivery basado en auditorías', p3_body: 'Cada release incluye una auditoría de lo que falta respecto al legacy, con severidad y propietario asignado. Las preguntas abiertas viven en el PRD con nombres. El doc de limitaciones se publica antes del GA.', p3_proof: '→ Caso 01: 5 auditorías, 250+ casos de test, doc P0/P1/P2 antes del lanzamiento',
  exp_title: 'Dónde he shipeado',
  xp1_role: 'Product Manager', xp1_org: 'Bloowatch · B2B/B2B2C SaaS', xp1_desc: 'Único PM de una plataforma de reservas y operaciones para escuelas deportivas en 15+ países. Dos productos end-to-end — back-office y eCommerce — en un trío de producto, reportando al CEO.',
  xp2_role: 'Frontend Developer', xp2_org: 'Freelance · Remote', xp2_desc: 'Dev frontend en un trío de producto de startup, shipeando features en React. SPAs y sitios end-to-end — de Figma a implementación — en React, WordPress, Shopify y Squarespace.',
  xp3_role: 'Engineering primero', xp3_org: 'Ironhack · ULPGC', xp3_desc: 'Desarrollo Web Full-Stack, Ironhack Barcelona (2020).<br />Grado en Ingeniería Oceanográfica, ULPGC (2012–2017).',
  contact_title: 'Hablemos de producto.', contact_sub: 'Basado en Barcelona. Busco roles IC de PM mid-senior — plataformas de reservas y experiencias, B2B/B2B2C SaaS, productos customer-facing.',
  btn_li: 'LinkedIn ↗', btn_email: 'Escríbeme', btn_cv: 'Descargar CV ↓',
  footer_copy: '© 2026 Pau Larrea', footer_role: 'Product Manager — Barcelona', footer_tag: 'Construido con un workflow AI-first, claro está',
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { ...en, ...casesEn } },
    es: { translation: { ...es, ...casesEs } },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
