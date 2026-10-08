import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { Sobre, Segmentos, Marcas, CtaFinal } from "@/components/site/Sections";

const TITLE = "Sobre a RS Representações | Jaboticabal e Região";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: "Conheça a RS Representações, seu atendimento consultivo e as soluções em segurança, higiene e proteção para Jaboticabal e região." },
      { property: "og:title", content: TITLE },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero overline="Sobre a RS" title="Atendimento próximo para encontrar a solução certa" description="Produtos de proteção, higiene e segurança para empresas e profissionais de Jaboticabal e região." />
      <Sobre />
      <Segmentos />
      <Marcas />
      <CtaFinal />
    </>
  );
}
