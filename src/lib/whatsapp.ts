export const WHATSAPP_NUMBER = "5516992342353";
export const WHATSAPP_DISPLAY = "(16) 99234-2353";

const BASE_MESSAGE =
  "Olá! Encontrei a RS Representações pelo site e gostaria de solicitar um orçamento.";

export function whatsappLink(context?: string) {
  const message = context ? `${BASE_MESSAGE}\n\nInteresse: ${context}` : BASE_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
