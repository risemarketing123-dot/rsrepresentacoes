import { categorias, produtos, outrosProdutos, segmentos, marcas, diferenciais, etapas, faq } from "@/data/catalogo";
import { Reveal, SectionHeading, QuoteButton, Icon, GoldRule } from "./ui";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Quem é a RS Representações
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-primary sm:text-4xl">
              Representação comercial especializada em segurança, higiene e limpeza profissional
            </h2>
            <GoldRule className="mt-5" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A <strong className="text-foreground">RS Justino — Comércio e Representação em Higiene</strong>,
                que atua comercialmente como RS Representações, fornece equipamentos de proteção
                individual, produtos de segurança do trabalho, higiene profissional, limpeza e
                soluções para descarte de resíduos em Jaboticabal e região.
              </p>
              <p>
                Nosso trabalho é consultivo: entendemos a rotina, os riscos e as exigências de cada
                operação para indicar o produto correto, com certificação e no prazo necessário.
                Mantemos pequeno estoque próprio e fornecimento sob encomenda, com entrega própria.
              </p>
              <p className="rounded-md border-l-2 border-accent bg-secondary px-4 py-3 text-sm text-foreground">
                A RS Representações não fabrica produtos. Todos os itens apresentados neste site são
                <strong> produtos comercializados pela RS Representações</strong>, das marcas que
                representamos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="grid gap-4 sm:grid-cols-2">
            {[
              { icone: "MapPin", titulo: "Jaboticabal e região", texto: "Atendimento local e presencial." },
              { icone: "Truck", titulo: "Entrega própria", texto: "Agilidade sem depender de terceiros." },
              { icone: "Users", titulo: "PF e PJ", texto: "Empresas e pessoas físicas." },
              { icone: "PackageSearch", titulo: "Sob encomenda", texto: "Itens específicos providenciados." },
            ].map((c) => (
              <div
                key={c.titulo}
                className="rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
              >
                <Icon name={c.icone} className="size-6 text-accent" />
                <h3 className="mt-4 text-lg text-primary">{c.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.texto}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Segmentos() {
  return (
    <section id="segmentos" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Segmentos atendidos"
          title="Soluções para quem precisa de segurança e higiene todos os dias"
          description="Atendemos empresas de diferentes portes e segmentos, com produtos adequados a cada tipo de operação e risco."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {segmentos.map((s, i) => (
            <Reveal as="li" key={s.nome} delay={i * 35}>
              <div className="flex h-full items-center gap-3 rounded-lg border border-border bg-card px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <Icon name={s.icone} className="size-5 shrink-0 text-accent" />
                <span className="min-w-0 text-sm font-medium text-primary">{s.nome}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <QuoteButton>Solicite um orçamento personalizado</QuoteButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Categorias() {
  return (
    <section id="categorias" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Categorias"
          title="Catálogo organizado por linha de produtos"
          description="Cada categoria reúne dezenas de itens em diferentes modelos, tamanhos e níveis de proteção. Solicite o orçamento da linha que você precisa."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal as="article" key={c.nome} delay={(i % 3) * 80} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_24px_50px_-30px_oklch(0.28_0.075_264)]">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={c.imagem}
                    alt={c.alt}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <Icon name={c.icone} className="size-5 shrink-0 text-accent" />
                    <h3 className="min-w-0 text-lg leading-snug text-primary">{c.nome}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.descricao}
                  </p>
                  <QuoteButton context={c.nome} variant="outline" className="mt-5 w-full">
                    Solicitar orçamento
                  </QuoteButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Produtos() {
  return (
    <section id="produtos" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Produtos em destaque"
          title="Alguns dos itens mais procurados"
          description="Uma amostra do que comercializamos. O catálogo completo é muito mais amplo e atende praticamente qualquer necessidade."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {produtos.map((p, i) => (
            <Reveal as="article" key={p.nome} delay={(i % 4) * 70} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <div className="aspect-square overflow-hidden rounded-md bg-background">
                  <img
                    src={p.imagem}
                    alt={p.alt}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-contain p-3"
                  />
                </div>
                <h3 className="mt-4 text-base leading-snug text-primary">{p.nome}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {p.descricao}
                </p>
                <QuoteButton context={p.nome} variant="outline" className="mt-4 w-full px-3 text-xs">
                  Solicitar orçamento
                </QuoteButton>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {outrosProdutos.map((p) => (
            <div key={p.nome} className="rounded-lg border border-border/70 bg-card/60 p-3 text-center">
              <img
                src={p.imagem}
                alt={p.alt}
                width={300}
                height={225}
                loading="lazy"
                decoding="async"
                className="mx-auto aspect-[4/3] w-full object-contain"
              />
              <p className="mt-2 text-xs font-medium text-muted-foreground">{p.nome}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-accent/40 bg-card px-6 py-8 text-center">
          <MessageCircle className="size-6 text-accent" aria-hidden="true" />
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Caso não encontre o produto desejado, fale conosco pelo WhatsApp. Trabalhamos com uma
            ampla variedade de produtos e soluções para segurança, higiene e limpeza profissional.
          </p>
          <QuoteButton>Solicitar orçamento</QuoteButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Marcas() {
  const token = import.meta.env["VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY"] as string | undefined;
  return (
    <section id="marcas" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Marcas representadas"
          title="Fabricantes reconhecidos nacionalmente"
          description="Trabalhamos com marcas reconhecidas nacionalmente pela qualidade, segurança e confiabilidade de seus produtos."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {marcas.map((m, i) => (
            <Reveal as="li" key={m.nome} delay={(i % 4) * 60}>
              <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-card px-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                {token ? (
                  <img
                    src={`https://img.logo.dev/${m.dominio}?token=${token}&size=160&format=webp&retina=true`}
                    alt={`Logotipo da marca ${m.nome}`}
                    width={120}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="max-h-12 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                ) : (
                  <span className="font-serif text-xl font-semibold tracking-wide text-primary">
                    {m.nome}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 text-center text-sm text-muted-foreground">
          <p>Produtos comercializados pela RS Representações. Não somos fabricantes.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          invert
          overline="Diferenciais"
          title="Por que empresas da região compram conosco"
          description="Atendimento próximo, produtos certificados e agilidade em cada etapa do fornecimento."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => (
            <Reveal as="li" key={d.titulo} delay={(i % 3) * 70}>
              <div className="flex h-full gap-3 rounded-lg border border-primary-foreground/12 bg-primary-foreground/5 p-5 transition-colors duration-300 hover:border-accent/50">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-base text-primary-foreground">{d.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{d.texto}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <QuoteButton variant="gold">Solicite um orçamento personalizado</QuoteButton>
        </Reveal>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Como funciona"
          title="Do orçamento à entrega em cinco passos"
          description="Um processo simples, direto e sem burocracia, conduzido por quem entende de segurança do trabalho."
        />
        <ol className="relative mt-12 space-y-6 border-l border-accent/35 pl-8 lg:mx-auto lg:max-w-3xl">
          {etapas.map((e, i) => (
            <Reveal as="li" key={e.titulo} delay={i * 70} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.6rem] grid size-8 place-items-center rounded-full border border-accent bg-background font-serif text-sm font-semibold text-accent-foreground"
              >
                {i + 1}
              </span>
              <h3 className="text-lg text-primary">{e.titulo}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function NaoEncontrou() {
  return (
    <section id="nao-encontrou" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal className="rounded-2xl border border-accent/40 bg-card px-6 py-12 text-center shadow-[0_30px_70px_-50px_oklch(0.28_0.075_264)] sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Não encontrou o produto?
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-primary sm:text-4xl">
            Nossa equipe encontra a solução para sua necessidade
          </h2>
          <GoldRule className="mx-auto mt-5" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Trabalhamos com centenas de produtos voltados para segurança, proteção individual,
            higiene e limpeza profissional. Caso o item desejado não esteja disponível no catálogo,
            entre em contato conosco. Nossa equipe encontrará a melhor solução para sua necessidade.
          </p>
          <QuoteButton className="mt-8" variant="gold">
            Solicitar orçamento
          </QuoteButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading
          overline="Perguntas frequentes"
          title="Dúvidas sobre atendimento e fornecimento"
        />
        <Reveal className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((f, i) => (
              <AccordionItem key={f.pergunta} value={`item-${i}`}>
                <AccordionTrigger className="py-5 text-left font-serif text-lg text-primary hover:no-underline">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-primary-foreground lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_0%,oklch(0.32_0.08_264)_0%,transparent_65%)]"
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl leading-tight sm:text-4xl">Solicite um orçamento personalizado.</h2>
        <GoldRule className="mx-auto mt-5" />
        <p className="mt-5 text-base text-primary-foreground/75">
          Atendimento consultivo pelo WhatsApp, sem compromisso, para empresas e pessoas físicas de
          Jaboticabal e região.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <QuoteButton variant="gold">Solicitar orçamento</QuoteButton>
          <QuoteButton variant="ghost" context="Gostaria de falar com um especialista">
            Falar com um especialista
          </QuoteButton>
        </div>
      </Reveal>
    </section>
  );
}

export function Contato() {
  return (
    <section id="contato" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          overline="Fale conosco"
          title="Atendimento consultivo pelo WhatsApp"
          description="Envie sua lista de itens, dúvidas técnicas ou necessidade específica. Respondemos com orçamento e prazo de entrega."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icone: "MessageCircle",
              titulo: "WhatsApp",
              texto: WHATSAPP_DISPLAY,
              detalhe: "Canal principal para orçamentos e dúvidas.",
            },
            {
              icone: "MapPin",
              titulo: "Área de atendimento",
              texto: "Jaboticabal e região — SP",
              detalhe: "Atendimento presencial e entrega própria.",
            },
            {
              icone: "Mail",
              titulo: "E-mail",
              texto: "robsonjustino.rs@gmail.com",
              detalhe: "Envie sua lista de produtos e informações do pedido.",
            },
          ].map((c) => (
            <Reveal as="article" key={c.titulo} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
                <Icon name={c.icone} className="size-6 text-accent" />
                <h3 className="mt-4 text-lg text-primary">{c.titulo}</h3>
                {c.titulo === "E-mail" ? (
                  <a href="mailto:robsonjustino.rs@gmail.com" className="mt-2 break-all font-medium text-foreground underline-offset-4 hover:underline">{c.texto}</a>
                ) : c.titulo === "WhatsApp" ? (
                  <a href="https://wa.me/5516992342353" target="_blank" rel="noopener noreferrer" className="mt-2 font-medium text-foreground underline-offset-4 hover:underline">{c.texto}</a>
                ) : (
                  <p className="mt-2 font-medium text-foreground">{c.texto}</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{c.detalhe}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <a href="https://www.instagram.com/robson.justino.rs/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-3 text-primary hover:border-accent">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61595100514461" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-3 text-primary hover:border-accent">Facebook</a>
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-accent/40 bg-secondary px-6 py-10 text-center">
          <h3 className="max-w-2xl font-serif text-2xl text-primary sm:text-3xl">
            Atendemos empresas (PJ) e pessoas físicas (PF)
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Do item avulso ao fornecimento recorrente para equipes inteiras, com produtos
            certificados das marcas que representamos.
          </p>
          <QuoteButton variant="gold">Solicitar orçamento</QuoteButton>
        </Reveal>
      </div>
    </section>
  );
}
