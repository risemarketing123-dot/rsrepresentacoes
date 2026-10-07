import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Sobre, Segmentos, Diferenciais, ComoFunciona, CtaFinal } from "@/components/site/Sections";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const TITLE = "EPI e Higiene em Jaboticabal | RS Representações";
const DESCRIPTION =
  "RS Representações: distribuidora de EPI, segurança do trabalho, higiene e limpeza profissional em Jaboticabal e região. Atendimento consultivo e orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "geo.region", content: "BR-SP" },
      { name: "geo.placename", content: "Jaboticabal" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organizacao",
              name: "RS Justino — Comércio e Representação em Higiene",
              alternateName: "RS Representações",
              description: DESCRIPTION,
              areaServed: "Jaboticabal e região, São Paulo, Brasil",
              telephone: `+${WHATSAPP_NUMBER}`,
            },
            {
              "@type": "LocalBusiness",
              "@id": "#negocio",
              name: "RS Representações",
              legalName: "RS Justino — Comércio e Representação em Higiene",
              description: DESCRIPTION,
              telephone: `+${WHATSAPP_NUMBER}`,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaboticabal",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              areaServed: [
                { "@type": "City", name: "Jaboticabal" },
                { "@type": "AdministrativeArea", name: "Região de Jaboticabal" },
              ],
              makesOffer: [
                "Equipamentos de Proteção Individual",
                "Segurança do Trabalho",
                "Produtos de Higiene",
                "Produtos de Limpeza Profissional",
                "Lixeiras e Coleta Seletiva",
              ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Sobre />
      <Segmentos />
      <Diferenciais />
      <ComoFunciona />
      <CtaFinal />
    </>
  );
}
