import { createFileRoute } from "@tanstack/react-router";
import { Contato, Faq, CtaFinal } from "@/components/site/Sections";
import { PageHero } from "@/components/site/ui";
import { faq } from "@/data/catalogo";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const TITLE = "Contato e Orçamento | RS Representações Jaboticabal";
const DESCRIPTION =
  "Fale com a RS Representações pelo WhatsApp (16) 99234-2353 e solicite orçamento de EPI, higiene e limpeza profissional em Jaboticabal e região. Atendemos PF e PJ.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.pergunta,
            acceptedAnswer: { "@type": "Answer", text: f.resposta },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          about: { "@type": "Organization", name: "RS Representações", telephone: `+${WHATSAPP_NUMBER}` },
        }),
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <PageHero
        overline="Contato"
        title="Solicite seu orçamento sem compromisso"
        description="Atendimento consultivo para empresas e pessoas físicas de Jaboticabal e região, com entrega própria e produtos certificados."
      />
      <Contato />
      <Faq />
      <CtaFinal />
    </>
  );
}
