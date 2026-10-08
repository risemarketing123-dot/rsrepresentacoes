import capacete from "@/assets/capacete.webp";
import oculos from "@/assets/oculos.webp";
import protetorFacial from "@/assets/protetor-facial.webp";
import respirador from "@/assets/respirador-pff2.webp";
import abafador from "@/assets/abafador.webp";
import luvaNitrilica from "@/assets/luva-nitrilica.webp";
import luvaMalha from "@/assets/luva-malha.webp";
import botina from "@/assets/botina.webp";
import sapato from "@/assets/sapato-antiderrapante.webp";
import uniforme from "@/assets/uniforme.webp";
import colete from "@/assets/colete.webp";
import cinto from "@/assets/cinto-altura.webp";
import lavadora from "@/assets/lavadora.webp";
import lavadoraIndustrial from "@/assets/lavadora-industrial.webp";
import lixeiraTampa from "@/assets/lixeira-tampa.webp";
import lixeiraSeletiva from "@/assets/lixeira-seletiva.webp";
import container from "@/assets/container.webp";

export interface Categoria {
  nome: string;
  descricao: string;
  icone: string;
  imagem: string;
  alt: string;
}

export const categorias: Categoria[] = [
  {
    nome: "Equipamentos de Proteção Individual",
    descricao:
      "Linha completa de EPI certificado para indústrias, construção civil e prestadores de serviços.",
    icone: "ShieldCheck",
    imagem: capacete,
    alt: "Capacete de segurança azul para uso industrial",
  },
  {
    nome: "Segurança do Trabalho",
    descricao:
      "Soluções para adequação às normas regulamentadoras e programas de segurança do trabalho.",
    icone: "HardHat",
    imagem: cinto,
    alt: "Cinto de segurança tipo paraquedista para trabalho em altura",
  },
  {
    nome: "Proteção Facial",
    descricao:
      "Protetores faciais e capacetes acoplados para atividades com risco de respingos e partículas.",
    icone: "ScanFace",
    imagem: protetorFacial,
    alt: "Protetor facial incolor com suporte ajustável",
  },
  {
    nome: "Proteção Respiratória",
    descricao:
      "Respiradores PFF1, PFF2, com e sem válvula, e respiradores faciais com filtro químico.",
    icone: "Wind",
    imagem: respirador,
    alt: "Respirador descartável PFF2 azul",
  },
  {
    nome: "Proteção Auditiva",
    descricao:
      "Abafadores de ruído de 14 dB a 24 dB e protetores auriculares em silicone e copolímero.",
    icone: "EarOff",
    imagem: abafador,
    alt: "Abafador de ruído tipo concha amarelo",
  },
  {
    nome: "Luvas",
    descricao:
      "Luvas de malha pigmentada, nitrílica, látex, vaqueta, raspa, PU e antivibração.",
    icone: "Hand",
    imagem: luvaNitrilica,
    alt: "Par de luvas nitrílicas verdes de cano longo",
  },
  {
    nome: "Calçados de Segurança",
    descricao:
      "Botinas em couro e nobuck, botas de borracha e sapatos antiderrapantes profissionais.",
    icone: "Footprints",
    imagem: botina,
    alt: "Botina de segurança em nobuck marrom com biqueira reforçada",
  },
  {
    nome: "Uniformes Profissionais",
    descricao:
      "Camisas e calças em brim, uniformes NR-10, toucas de soldador e coletes refletivos.",
    icone: "Shirt",
    imagem: uniforme,
    alt: "Camisa profissional manga longa em brim azul",
  },
  {
    nome: "Trabalho em Altura",
    descricao:
      "Cintos paraquedista, talabartes, travas-quedas e mosquetões para atividades em altura.",
    icone: "MoveVertical",
    imagem: cinto,
    alt: "Cinto de segurança paraquedista com fitas verdes",
  },
  {
    nome: "Capacetes",
    descricao:
      "Capacetes de segurança, reforçados e acoplados, com carneiras simples ou com catraca.",
    icone: "HardHat",
    imagem: capacete,
    alt: "Capacete de segurança azul-marinho",
  },
  {
    nome: "Óculos de Segurança",
    descricao:
      "Modelos Leopardo, RJ e Panda, incolor ou fumê, com proteção contra impactos e UV.",
    icone: "Glasses",
    imagem: oculos,
    alt: "Óculos de segurança incolor com hastes ajustáveis",
  },
  {
    nome: "Lavadoras",
    descricao:
      "Lavadoras de alta pressão domésticas e industriais para limpeza pesada e manutenção.",
    icone: "Droplets",
    imagem: lavadora,
    alt: "Lavadora de alta pressão amarela portátil",
  },
  {
    nome: "Lixeiras",
    descricao:
      "Lixeiras com tampa, pedal e containers com rodízios para áreas internas e externas.",
    icone: "Trash2",
    imagem: lixeiraTampa,
    alt: "Lixeira preta com tampa e acionamento por pedal",
  },
  {
    nome: "Coleta Seletiva",
    descricao:
      "Conjuntos de coleta seletiva e containers para gestão e descarte correto de resíduos.",
    icone: "Recycle",
    imagem: lixeiraSeletiva,
    alt: "Conjunto de lixeiras coloridas para coleta seletiva",
  },
  {
    nome: "Produtos de Higiene",
    descricao:
      "Itens de higiene profissional para empresas, indústrias, condomínios e áreas comuns.",
    icone: "SprayCan",
    imagem: container,
    alt: "Container de lixo com rodízios para uso externo",
  },
  {
    nome: "Produtos de Limpeza",
    descricao:
      "Linha de limpeza profissional e equipamentos de apoio para manutenção predial e industrial.",
    icone: "Sparkles",
    imagem: lavadoraIndustrial,
    alt: "Lavadora de alta pressão industrial com motor a combustão",
  },
];

export interface Produto {
  nome: string;
  descricao: string;
  imagem: string;
  alt: string;
}

export const produtos: Produto[] = [
  {
    nome: "Capacete de Segurança",
    descricao: "Casco em polietileno de alta densidade, com carneira simples ou catraca.",
    imagem: capacete,
    alt: "Capacete de segurança azul para proteção da cabeça",
  },
  {
    nome: "Respirador PFF2",
    descricao: "Proteção respiratória contra poeiras, névoas e fumos, com ou sem válvula.",
    imagem: respirador,
    alt: "Respirador PFF2 dobrável azul",
  },
  {
    nome: "Óculos Leopardo",
    descricao: "Óculos de proteção incolor ou fumê, leve e com excelente campo de visão.",
    imagem: oculos,
    alt: "Óculos de segurança modelo Leopardo incolor",
  },
  {
    nome: "Luva Nitrílica",
    descricao: "Alta resistência química e mecânica para manuseio de produtos e limpeza.",
    imagem: luvaNitrilica,
    alt: "Luva nitrílica verde de cano longo",
  },
  {
    nome: "Botina de Segurança",
    descricao: "Botina em couro ou nobuck, com solado antiderrapante e biqueira de proteção.",
    imagem: botina,
    alt: "Botina de segurança nobuck marrom",
  },
  {
    nome: "Colete Refletivo",
    descricao: "Alta visibilidade para sinalização, obras, logística e trabalho em vias.",
    imagem: colete,
    alt: "Colete refletivo amarelo com faixas prateadas",
  },
  {
    nome: "Lavadora de Alta Pressão",
    descricao: "Equipamento para limpeza pesada em pátios, frotas, fachadas e indústrias.",
    imagem: lavadora,
    alt: "Lavadora de alta pressão amarela com mangueira",
  },
  {
    nome: "Lixeira para Coleta Seletiva",
    descricao: "Conjunto padronizado por cor para descarte correto de resíduos recicláveis.",
    imagem: lixeiraSeletiva,
    alt: "Conjunto de quatro lixeiras para coleta seletiva",
  },
];

export const outrosProdutos = [
  { nome: "Luva de Malha Pigmentada", imagem: luvaMalha, alt: "Luva de malha com pigmentos antiderrapantes" },
  { nome: "Sapato Antiderrapante", imagem: sapato, alt: "Sapato profissional branco antiderrapante" },
  { nome: "Container de Lixo", imagem: container, alt: "Container de lixo preto com rodízios" },
  { nome: "Protetor Facial", imagem: protetorFacial, alt: "Protetor facial com visor incolor" },
];

export const segmentos = [
  { nome: "Indústrias", icone: "Factory" },
  { nome: "Construção Civil", icone: "HardHat" },
  { nome: "Comércios", icone: "Store" },
  { nome: "Prestadores de Serviços", icone: "Wrench" },
  { nome: "Agronegócio", icone: "Tractor" },
  { nome: "Condomínios", icone: "Building2" },
  { nome: "Empresas de Limpeza", icone: "SprayCan" },
  { nome: "Hospitais", icone: "Hospital" },
  { nome: "Clínicas", icone: "Stethoscope" },
  { nome: "Transportadoras", icone: "Truck" },
  { nome: "Metalúrgicas", icone: "Flame" },
  { nome: "Oficinas", icone: "Cog" },
  { nome: "Empresas em Geral", icone: "Briefcase" },
];

export const marcas = [
  { nome: "Kalipso", dominio: "kalipso.com.br" },
  { nome: "Volk", dominio: "volkdobrasil.com.br" },
  { nome: "Danny", dominio: "danny.com.br" },
  { nome: "3M", dominio: "3m.com" },
  { nome: "Ledan", dominio: "ledan.com.br" },
  { nome: "Bracol", dominio: "bracol.com.br" },
  { nome: "Fujiwara", dominio: "fujiwara.com.br" },
  { nome: "Vonder", dominio: "vonder.com.br" },
];

export const diferenciais = [
  { titulo: "Atendimento consultivo", texto: "Orientação técnica para escolher o EPI correto para cada risco." },
  { titulo: "Entrega na região", texto: "Entrega própria em Jaboticabal e região, conforme o pedido." },
  { titulo: "Produtos certificados", texto: "Equipamentos com Certificado de Aprovação (CA) exigido pelas normas." },
  { titulo: "Grande variedade", texto: "Centenas de itens em segurança, higiene e limpeza profissional." },
  { titulo: "Fornecimento sob encomenda", texto: "Itens específicos providenciados junto às marcas representadas." },
  { titulo: "Pessoa física e jurídica", texto: "Atendimento tanto para empresas quanto para profissionais autônomos." },
];

export const etapas = [
  { titulo: "Escolha a categoria", texto: "Identifique no catálogo a linha de produtos que atende sua necessidade." },
  { titulo: "Solicite um orçamento", texto: "Envie sua lista pelo WhatsApp em poucos segundos." },
  { titulo: "Receba atendimento especializado", texto: "Nossa equipe orienta sobre modelos, tamanhos e certificações." },
  { titulo: "Confirme seu pedido", texto: "Aprovação simples, com condições combinadas diretamente com você." },
  { titulo: "Receba seus produtos", texto: "Entrega própria em Jaboticabal e região, com acompanhamento." },
];

export const faq = [
  {
    pergunta: "Vocês trabalham apenas com empresas?",
    resposta:
      "Não. A RS Representações atende empresas de todos os portes e também pessoas físicas que precisam de EPI, produtos de higiene ou limpeza profissional.",
  },
  {
    pergunta: "Vocês atendem pessoa física?",
    resposta:
      "Sim. Profissionais autônomos e pessoas físicas podem solicitar orçamento normalmente pelo WhatsApp, sem quantidade mínima definida.",
  },
  {
    pergunta: "Vocês entregam?",
    resposta:
      "Sim. Contamos com entrega própria em Jaboticabal e região, o que garante mais agilidade e acompanhamento do pedido.",
  },
  {
    pergunta: "Vocês possuem produtos certificados?",
    resposta:
      "Sim. Trabalhamos com equipamentos de proteção individual de marcas reconhecidas nacionalmente e com Certificado de Aprovação (CA) exigido pelas normas regulamentadoras.",
  },
  {
    pergunta: "Posso solicitar orçamento sem compromisso?",
    resposta:
      "Com certeza. O orçamento é gratuito e sem compromisso. Envie sua lista pelo WhatsApp e nossa equipe retorna com as melhores condições.",
  },
  {
    pergunta: "Caso o produto não esteja no site, vocês conseguem fornecer?",
    resposta:
      "Sim. O site apresenta apenas parte do que comercializamos. Trabalhamos com fornecimento sob encomenda e conseguimos atender praticamente qualquer necessidade em segurança, higiene e limpeza profissional.",
  },
];
