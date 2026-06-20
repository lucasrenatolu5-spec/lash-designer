import type { LashService, Testimonial, FaqItem, BenefitItem, StatItem } from './types';
import brasileiro from '../assets/images/brasileiro.jpeg';
import egipcio from '../assets/images/egipicio.jpeg'
import luxo from '../assets/images/luxo.jpeg'
import arabe from '../assets/images/arabe.jpeg'
import fox from '../assets/images/fox.jpeg'
import megaBrasileiro from '../assets/images/mega-brasileiro.jpeg'
import megaEgipcio from '../assets/images/mega-egipcio.jpeg'
import megaFox from '../assets/images/mega-fox.jpeg'
import megaArabe from '../assets/images/mega-arabe.jpeg'

export const SITE = {
  name: 'Sophia Ellen',
  role: 'Lash Designer',
  phone: '(81) 9427-7271',
  whatsappNumber: '558194277271',
  whatsappMessage: 'Olá! Gostaria de agendar um horário com a Sophia Ellen.',
  instagram: '@sophiaellenlash',
  instagramUrl: 'https://instagram.com/sophiaellenlash',
  address: 'Endereço a confirmar — atendimento somente com marcação de horário',
  hours: [
    { days: 'Atendimento', time: 'Somente com marcação de horário' },
  ],
};

// Catálogo real extraído do material enviado (preços em R$)
export const SERVICES: LashService[] = [
  {
    id: 'volume-brasileiro',
    name: 'Volume Brasileiro',
    description:
      'Técnica clássica que proporciona cílios cheios e marcantes, respeitando a estrutura dos fios naturais para um resultado duradouro e harmonioso.',
    benefits: ['Resultado cheio e natural', 'Respeita os fios naturais', 'Efeito duradouro'],
    applicationPrice: 65,
    maintenancePrice: 50,
    durationLabel: '2h a 2h30',
    image: brasileiro,
  },
  {
    id: 'volume-egipcio',
    name: 'Volume Egípcio',
    description:
      'Olhar marcante e delineado, inspirado na beleza egípcia. Cílios com efeito dramático e alongado, valorizando o contorno dos olhos.',
    benefits: ['Efeito dramático', 'Alongamento elegante', 'Valoriza o contorno dos olhos'],
    applicationPrice: 65,
    maintenancePrice: 50,
    durationLabel: '2h a 2h30',
    image: egipcio,
  },
  {
    id: 'volume-luxo',
    name: 'Volume Luxo',
    description:
      'A sofisticação em cada fio. Aplicação delicada e precisa com acabamento premium que entrega naturalidade e elegância ao mesmo tempo.',
    benefits: ['Acabamento premium', 'Aplicação delicada', 'Naturalidade e elegância'],
    applicationPrice: 70,
    maintenancePrice: 50,
    durationLabel: '2h30',
    image: luxo,
  },
  {
    id: 'volume-arabe',
    name: 'Volume Árabe',
    description:
      'Técnica de volume intenso com abertura no centro, criando um olhar profundo e sedutor. Perfeito para quem deseja um resultado dramático.',
    benefits: ['Abertura central marcante', 'Olhar profundo e sedutor', 'Resultado dramático'],
    applicationPrice: 70,
    maintenancePrice: 50,
    durationLabel: '2h30',
    image: arabe,
  },
  {
    id: 'volume-fox',
    name: 'Volume Fox',
    description:
      'Efeito olho de raposa com concentração de volume na ponta externa, criando um olhar elevado, sensual e moderno.',
    benefits: ['Efeito "olho de raposa"', 'Olhar alongado e elevado', 'Tendência moderna'],
    applicationPrice: 75,
    maintenancePrice: 60,
    durationLabel: '2h30 a 3h',
    featured: true,
    image: fox,
  },
  {
    id: 'volume-mega-brasileiro',
    name: 'Volume Mega Brasileiro',
    description:
      'O brasileiro levado ao máximo. Volume abundante e denso para um olhar impactante, com acabamento impecável fio a fio.',
    benefits: ['Volume máximo', 'Acabamento fio a fio', 'Olhar impactante'],
    applicationPrice: 70,
    maintenancePrice: 60,
    durationLabel: '3h',
    image: megaBrasileiro,
  },
  {
    id: 'volume-mega-egipcio',
    name: 'Volume Mega Egípcio',
    description:
      'A máxima expressão do olhar egípcio. Alongamento e volume intenso para um efeito irresistível que define e transforma o olhar.',
    benefits: ['Efeito irresistível', 'Alongamento intenso', 'Olhar transformado'],
    applicationPrice: 80,
    maintenancePrice: 65,
    durationLabel: '3h',
    image: megaEgipcio,
  },
  {
    id: 'volume-mega-fox',
    name: 'Volume Mega Fox',
    description:
      'A versão mais intensa do fox. Volume máximo na ponta externa para um olhar arrasador, alongado e cheio de personalidade.',
    benefits: ['Volume máximo na ponta externa', 'Olhar arrasador', 'Personalidade única'],
    applicationPrice: 90,
    maintenancePrice: 70,
    durationLabel: '3h a 3h30',
    image: megaFox,
  },
  {
    id: 'volume-mega-arabe',
    name: 'Volume Mega Árabe',
    description:
      'Intensidade máxima com abertura central e volume extremo. O olhar mais profundo e dramático do catálogo, para quem quer ser notada.',
    benefits: ['Intensidade máxima', 'Volume extremo', 'O mais dramático do catálogo'],
    applicationPrice: 85,
    maintenancePrice: 75,
    durationLabel: '3h30',
    image: megaArabe,
  },
];

export const STATS: StatItem[] = [
  { id: 'clientes', value: '500+', label: 'Clientes atendidas' },
  { id: 'avaliacao', value: '5.0', label: 'Avaliação média' },
  { id: 'tecnicas', value: '9', label: 'Técnicas disponíveis' },
  { id: 'satisfacao', value: '100%', label: 'Atendimento com hora marcada' },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'personalizado',
    title: 'Atendimento Personalizado',
    description: 'Cada olhar é único — a técnica é escolhida com base no formato dos seus olhos e no efeito que você deseja.',
    icon: 'heart',
  },
  {
    id: 'higiene',
    title: 'Higienização Rigorosa',
    description: 'Materiais esterilizados e protocolos de higiene em cada etapa do atendimento.',
    icon: 'shield',
  },
  {
    id: 'tecnicas',
    title: 'Técnicas Atualizadas',
    description: 'Do Volume Brasileiro ao Mega Fox, sempre alinhada com as tendências mais procuradas.',
    icon: 'sparkles',
  },
  {
    id: 'duradouro',
    title: 'Resultado Duradouro',
    description: 'Aplicação cuidadosa fio a fio para um resultado que mantém o efeito por semanas.',
    icon: 'clock',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Quanto tempo dura a aplicação?',
    answer:
      'Depende da técnica escolhida: as aplicações clássicas levam entre 2h e 2h30, enquanto os volumes Mega podem levar até 3h30, garantindo um resultado impecável fio a fio.',
  },
  {
    id: 'f2',
    question: 'Com que frequência preciso fazer manutenção?',
    answer:
      'O ideal é realizar a manutenção entre 15 e 21 dias após a aplicação, para repor os fios que caíram naturalmente e manter o volume e o design original.',
  },
  {
    id: 'f3',
    question: 'Posso molhar os cílios depois da aplicação?',
    answer:
      'Sim, mas recomendamos evitar contato com água nas primeiras 24 horas para a colagem fixar completamente. Depois desse período, os cílios podem ser molhados normalmente.',
  },
  {
    id: 'f4',
    question: 'Os fios danificam meus cílios naturais?',
    answer:
      'Não, quando aplicados corretamente e com o peso adequado para cada fio natural. Por isso a avaliação prévia é importante — a técnica é sempre adaptada à saúde dos seus cílios.',
  },
  {
    id: 'f5',
    question: 'Preciso de quanto sinal para confirmar meu horário?',
    answer:
      'É necessário o pagamento de 30% de entrada para confirmar o agendamento, com envio do comprovante. Isso garante e prioriza seu horário na agenda.',
  },
  {
    id: 'f6',
    question: 'Posso levar acompanhante?',
    answer:
      'Para manter o conforto e a qualidade do atendimento, não é permitida a presença de acompanhantes ou crianças durante o procedimento.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Cliente satisfeita',
    rating: 5,
    text: 'Texto de depoimento a ser substituído por uma avaliação real de cliente.',
    photo: '',
  },
  {
    id: 't2',
    name: 'Cliente satisfeita',
    rating: 5,
    text: 'Texto de depoimento a ser substituído por uma avaliação real de cliente.',
    photo: '',
  },
  {
    id: 't3',
    name: 'Cliente satisfeita',
    rating: 5,
    text: 'Texto de depoimento a ser substituído por uma avaliação real de cliente.',
    photo: '',
  },
];

export const POLICIES = [
  'Remoção: R$ 45,00',
  'Agendamento: para confirmar seu horário, é necessário o pagamento de 30% de entrada',
  'O comprovante do sinal é obrigatório para garantir o horário',
  'Não é permitida a presença de acompanhantes ou crianças durante o atendimento',
  'Antes do procedimento, compareça sem rímel, maquiagem ou produtos nos cílios, para garantir o melhor resultado',
  'Não é realizada manutenção em cima do serviço de outra profissional',
  'Atendimento somente com marcação de horário',
];
