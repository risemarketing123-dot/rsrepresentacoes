import hero from "@/assets/hero-composicao.webp";
import { Link } from "@tanstack/react-router";
import { QuoteButton, GoldRule, Reveal } from "./ui";

const stats = [
  { text: "4 linhas", label: "em destaque" },
  { text: "Direto", label: "atendimento consultivo" },
  { text: "PF e PJ", label: "empresas e pessoas físicas" },
  { text: "Local", label: "entrega na região" },
];


export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-primary pt-24 text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,oklch(0.34_0.08_264)_0%,transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              Jaboticabal e região · EPI, higiene e limpeza profissional
            </p>
            <h1 className="mt-5 text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
              Soluções completas em higiene, segurança e proteção para empresas.
            </h1>
            <GoldRule className="mt-6" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              A RS Representações comercializa equipamentos de proteção individual, produtos de
              higiene, limpeza profissional e soluções para empresas de diversos segmentos.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton variant="gold" className="w-full sm:w-auto">
              Solicitar orçamento
            </QuoteButton>
            <Link to="/produtos" className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-primary-foreground/30 px-6 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto">
              Ver produtos
            </Link>
          </Reveal>
        </div>

        <Reveal delay={80} className="relative">
          <div className="absolute inset-6 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
          <img
            src={hero}
            alt="Composição com capacete, óculos de segurança, respirador, luvas, botina e lixeira comercializados pela RS Representações"
            width={1044}
            height={984}
            fetchPriority="high"
            decoding="async"
            className="relative w-full object-contain drop-shadow-[0_30px_60px_oklch(0.10_0.04_264/0.75)]"
          />
        </Reveal>
      </div>

      <div className="relative border-t border-primary-foreground/10 bg-navy-deep/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-8 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-serif text-3xl font-semibold text-gold-soft sm:text-4xl">
                  {s.text}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-primary-foreground/65">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
