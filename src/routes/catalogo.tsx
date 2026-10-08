import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { CatalogoEmPreparacao } from "@/components/site/Portfolio";
import { CtaFinal } from "@/components/site/Sections";

const TITLE = "Catálogo RS Representações | EPI, Higiene e Segurança";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: "Conheça as linhas da RS Representações. O catálogo completo em PDF está em preparação; consulte produtos e solicite orçamento pelo WhatsApp." },
      { property: "og:title", content: TITLE },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <>
      <PageHero overline="Catálogo" title="A linha completa da RS em um só lugar" description="O catálogo em PDF está sendo finalizado. Você já pode explorar os produtos no site e solicitar atendimento." />
      <CatalogoEmPreparacao />
      <CtaFinal />
    </>
  );
}
