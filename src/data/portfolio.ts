import luvaNitrilica from "@/assets/luva-nitrilica.webp";
import luvaMalha from "@/assets/luva-malha.webp";
import botina from "@/assets/botina.webp";
import sapato from "@/assets/sapato-antiderrapante.webp";
import oculos from "@/assets/oculos.webp";
import protetorFacial from "@/assets/protetor-facial.webp";
import capacete from "@/assets/capacete.webp";
import respirador from "@/assets/respirador-pff2.webp";
import abafador from "@/assets/abafador.webp";
import cinto from "@/assets/cinto-altura.webp";
import uniforme from "@/assets/uniforme.webp";
import colete from "@/assets/colete.webp";
import lavadora from "@/assets/lavadora.webp";
import lixeira from "@/assets/lixeira-seletiva.webp";
import container from "@/assets/container.webp";

export const linhas = ["Todos", "Luvas", "Calçados", "Óculos e face", "Descartáveis", "Outros EPIs", "Higiene e resíduos"] as const;
export type Linha = (typeof linhas)[number];

export const destaques = [
  { nome: "Luvas", imagem: luvaNitrilica, alt: "Luva nitrílica de proteção", texto: "Proteção das mãos para diferentes rotinas e aplicações." },
  { nome: "Calçados", imagem: botina, alt: "Botina de segurança", texto: "Opções para ambientes profissionais e industriais." },
  { nome: "Óculos e face", imagem: oculos, alt: "Óculos de proteção", texto: "Proteção ocular e facial para diversas atividades." },
  { nome: "Descartáveis", imagem: null, alt: "", texto: "Produtos para procedimentos e uso descartável. Consulte a linha." },
] as const;

export interface ItemPortfolio {
  nome: string;
  linha: Exclude<Linha, "Todos" | "Descartáveis">;
  imagem: string;
  alt: string;
  resumo: string;
}

// Vitrine ilustrativa: marca, modelo, tamanhos e disponibilidade são confirmados no orçamento.
export const itensPortfolio: ItemPortfolio[] = [
  { nome: "Luva nitrílica", linha: "Luvas", imagem: luvaNitrilica, alt: "Luva nitrílica verde", resumo: "Consulte opções para manuseio, limpeza e proteção das mãos." },
  { nome: "Luva de malha pigmentada", linha: "Luvas", imagem: luvaMalha, alt: "Luva de malha com pontos de aderência", resumo: "Alternativa para tarefas de manuseio e uso geral." },
  { nome: "Botina de segurança", linha: "Calçados", imagem: botina, alt: "Botina de segurança marrom", resumo: "Modelos e numerações conforme a necessidade da operação." },
  { nome: "Sapato profissional", linha: "Calçados", imagem: sapato, alt: "Sapato profissional branco", resumo: "Opção de calçado para rotinas profissionais." },
  { nome: "Óculos de proteção", linha: "Óculos e face", imagem: oculos, alt: "Óculos de proteção transparente", resumo: "Consulte modelos, cores de lente e aplicações." },
  { nome: "Protetor facial", linha: "Óculos e face", imagem: protetorFacial, alt: "Protetor facial transparente", resumo: "Proteção complementar para rosto e olhos." },
  { nome: "Capacete de segurança", linha: "Outros EPIs", imagem: capacete, alt: "Capacete de segurança azul", resumo: "Consulte modelos e acessórios para proteção da cabeça." },
  { nome: "Respirador PFF2", linha: "Outros EPIs", imagem: respirador, alt: "Respirador PFF2", resumo: "Consulte os modelos disponíveis para proteção respiratória." },
  { nome: "Abafador de ruído", linha: "Outros EPIs", imagem: abafador, alt: "Abafador de ruído amarelo", resumo: "Opções para proteção auditiva no trabalho." },
  { nome: "Cinturão para trabalho em altura", linha: "Outros EPIs", imagem: cinto, alt: "Cinturão de segurança para trabalho em altura", resumo: "Equipamentos para proteção contra quedas sob consulta." },
  { nome: "Uniforme profissional", linha: "Outros EPIs", imagem: uniforme, alt: "Camisa profissional azul", resumo: "Vestimentas para diferentes funções e ambientes." },
  { nome: "Colete refletivo", linha: "Outros EPIs", imagem: colete, alt: "Colete de alta visibilidade", resumo: "Alta visibilidade para equipes e atividades externas." },
  { nome: "Lavadora de alta pressão", linha: "Higiene e resíduos", imagem: lavadora, alt: "Lavadora de alta pressão", resumo: "Equipamento para limpeza e manutenção profissional." },
  { nome: "Conjunto para coleta seletiva", linha: "Higiene e resíduos", imagem: lixeira, alt: "Lixeiras coloridas para coleta seletiva", resumo: "Soluções para separação e descarte de resíduos." },
  { nome: "Contêiner para resíduos", linha: "Higiene e resíduos", imagem: container, alt: "Contêiner de resíduos com rodízios", resumo: "Consulte capacidades e opções de uso." },
];

export const departamentos = [
  { nome: "EPI e segurança", categorias: "Mãos · calçados · olhos e face · cabeça · proteção respiratória e auditiva" },
  { nome: "Vestimentas e altura", categorias: "Uniformes · vestimentas especiais · proteção contra quedas" },
  { nome: "Sinalização e isolamento", categorias: "Sinalização viária · isolamento e segurança de ambientes" },
  { nome: "Higiene e resíduos", categorias: "Descartáveis · limpeza profissional · lixeiras e coleta seletiva" },
];
