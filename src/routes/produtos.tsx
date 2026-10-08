import { createFileRoute } from "@tanstack/react-router";
import { NaoEncontrou } from "@/components/site/Sections";
import { VitrineDeProdutos, Departamentos } from "@/components/site/Portfolio";
import { PageHero } from "@/components/site/ui";

const TITLE = "Produtos: Luvas, Calçados, Óculos e EPIs | RS Representações";
const DESCRIPTION =
  "Conheça produtos comercializados pela RS Representações em Jaboticabal e região: luvas, calçados, óculos, EPIs, higiene e resíduos. Consulte pelo WhatsApp.";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/produtos" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  return (
    <>
      <PageHero
        overline="Produtos da RS"
        title="Encontre a linha certa para sua operação"
        description="Explore uma seleção de produtos e consulte nossa equipe sobre modelos, aplicações e disponibilidade. Atendimento em Jaboticabal e região."
      />
      <VitrineDeProdutos />
      <Departamentos />
      <NaoEncontrou />
    </>
  );
}
