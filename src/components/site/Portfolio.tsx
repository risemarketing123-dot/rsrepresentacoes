import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Hand, Footprints, Glasses, Package } from "lucide-react";
import { departamentos, destaques, itensPortfolio, linhas, type Linha } from "@/data/portfolio";
import { GoldRule, QuoteButton, Reveal, SectionHeading } from "./ui";

const icons = [Hand, Footprints, Glasses, Package];

export function LinhasEmDestaque() {
  return (
    <section className="bg-background py-16 lg:py-20" aria-labelledby="linhas-titulo">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Encontre sua solução</p>
            <h2 id="linhas-titulo" className="mt-3 text-3xl text-primary sm:text-4xl">Principais linhas da RS</h2>
            <GoldRule className="mt-4" />
          </div>
          <Link to="/produtos" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:text-accent-foreground">
            Ver todos os produtos <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((linha, i) => {
            const Icon = icons[i] ?? Package;
            return (
              <Reveal key={linha.nome} as="article" delay={i * 55} className="h-full">
                <Link to="/produtos" hash="vitrine" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                  <div className="grid aspect-[4/3] place-items-center bg-secondary p-5">
                    {linha.imagem ? <img src={linha.imagem} alt={linha.alt} width={400} height={300} loading="lazy" className="size-full object-contain" /> : <Icon className="size-20 text-accent/65" strokeWidth={1.1} aria-hidden="true" />}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl text-primary">{linha.nome}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{linha.texto}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">Conhecer a linha <ArrowRight className="size-4" aria-hidden="true" /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VitrineDeProdutos() {
  const [linhaAtiva, setLinhaAtiva] = useState<Linha>("Todos");
  const itens = linhaAtiva === "Todos" ? itensPortfolio : itensPortfolio.filter((item) => item.linha === linhaAtiva);

  return (
    <section id="vitrine" className="scroll-mt-24 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading overline="Produtos comercializados" title="Explore as linhas da RS" description="Uma seleção inicial de produtos. Consulte modelos, marcas, certificações quando aplicáveis e disponibilidade com nossa equipe." />
        <div className="mt-9 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:overflow-visible" aria-label="Filtrar produtos por linha">
          {linhas.map((linha) => (
            <button key={linha} type="button" aria-pressed={linhaAtiva === linha} onClick={() => setLinhaAtiva(linha)} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${linhaAtiva === linha ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-accent"}`}>
              {linha}
            </button>
          ))}
        </div>
        {itens.length ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {itens.map((item) => (
              <article key={item.nome} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/60 hover:shadow-lg">
                <div className="aspect-[4/3] bg-secondary p-5">
                  <img src={item.imagem} alt={item.alt} width={480} height={360} loading="lazy" decoding="async" className="size-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{item.linha}</p>
                  <h3 className="mt-2 text-xl text-primary">{item.nome}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.resumo}</p>
                  <QuoteButton context={item.nome} variant="outline" className="mt-5 w-full px-3 text-center">Consultar este produto</QuoteButton>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-2xl border border-accent/40 bg-secondary p-7 text-center sm:p-10" aria-live="polite">
            <Package className="mx-auto size-9 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-2xl text-primary">Linha de procedimentos e descartáveis</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Estamos organizando as fotos e os modelos desta linha. Fale com a RS para informar o produto e a aplicação que você procura.</p>
            <QuoteButton context="Produtos para procedimentos e descartáveis" variant="gold" className="mt-6">Consultar a linha</QuoteButton>
          </div>
        )}
        <p className="mt-5 text-center text-xs text-muted-foreground">Imagens ilustrativas das linhas. Especificações e disponibilidade são confirmadas no orçamento.</p>
      </div>
    </section>
  );
}

export function Departamentos() {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading overline="Portfólio em expansão" title="Soluções para diferentes operações" description="Além dos itens em destaque, consulte nossa equipe sobre as demais linhas e aplicações." />
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {departamentos.map((d, i) => (
            <Reveal key={d.nome} as="article" delay={i * 55} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">0{i + 1}</p>
              <h3 className="mt-2 text-xl text-primary">{d.nome}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.categorias}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CatalogoEmPreparacao() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Catálogo RS Representações</p>
          <h2 className="mt-3 text-3xl text-primary sm:text-4xl">O catálogo completo está em produção</h2>
          <GoldRule className="mt-5" />
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Estamos reunindo produtos, modelos e imagens das marcas comercializadas pela RS. A versão em PDF será disponibilizada aqui assim que estiver finalizada.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/produtos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-navy-deep">Explorar produtos <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <QuoteButton context="Gostaria de receber informações sobre o catálogo da RS" variant="outline">Falar com a RS</QuoteButton>
          </div>
        </div>
        <div className="rounded-2xl border border-accent/35 bg-secondary px-6 py-10 sm:px-10">
          <ClipboardList className="size-10 text-accent" strokeWidth={1.3} aria-hidden="true" />
          <h3 className="mt-5 text-2xl text-primary">O que você encontrará</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground">
            <li>• Linhas de luvas, calçados, óculos e descartáveis</li>
            <li>• Outros EPIs, vestimentas e trabalho em altura</li>
            <li>• Sinalização, higiene, limpeza e resíduos</li>
            <li>• QR Codes de contato e redes sociais na versão final</li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Sem preços publicados. Condições e disponibilidade sob consulta.</p>
        </div>
      </div>
    </section>
  );
}
