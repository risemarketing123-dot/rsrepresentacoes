import { createFileRoute } from "@tanstack/react-router";
import { Categorias, Produtos, Marcas, NaoEncontrou } from "@/components/site/Sections";
import { PageHero } from "@/components/site/ui";

const TITLE = "Categorias de Produtos: EPI, Higiene e Limpeza | RS Representações";
const DESCRIPTION =
  "Catálogo da RS Representações: EPI certificado, proteção respiratória, luvas, calçados, uniformes, lixeiras, lavadoras e produtos de higiene e limpeza profissional.";

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
        overline="Categorias de produtos"
        title="Tudo em EPI, higiene e limpeza profissional"
        description="Catálogo organizado por linha de produtos, com itens certificados das marcas que representamos. Solicite o orçamento da categoria que você precisa."
      />
      <Categorias />
      <Produtos />
      <Marcas />
      <NaoEncontrou />
    </>
  );
}
