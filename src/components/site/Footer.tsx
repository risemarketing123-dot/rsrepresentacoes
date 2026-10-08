import logo from "@/assets/logo-rs-justino.webp";
import { marcas } from "@/data/catalogo";
import { Link } from "@tanstack/react-router";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { GoldRule } from "./ui";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt="Logotipo RS Justino — Comércio e Representação em Higiene"
              width={82}
              height={64}
              loading="lazy"
              decoding="async"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 font-serif text-xl text-primary-foreground">RS Representações</p>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
              RS Justino — Comércio e Representação em Higiene
            </p>
            <GoldRule className="mt-4" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Comercialização de equipamentos de proteção individual, produtos de segurança do
              trabalho, higiene, limpeza profissional e soluções para descarte de resíduos em
              Jaboticabal e região. Produtos comercializados pela RS Representações.
            </p>
          </div>

          <nav aria-label="Páginas no rodapé">
            <h2 className="font-serif text-lg text-primary-foreground">Explore o site</h2>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              {([
                { to: "/", nome: "Início" },
                { to: "/produtos", nome: "Produtos" },
                { to: "/catalogo", nome: "Catálogo" },
                { to: "/sobre", nome: "Sobre a RS" },
                { to: "/contato", nome: "Contato" },
              ] as const).map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="transition-colors hover:text-gold-soft">
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-serif text-lg text-primary-foreground">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-gold-soft transition-colors hover:text-primary-foreground"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>Atendimento: Jaboticabal e região</li>
              <li><a href="mailto:robsonjustino.rs@gmail.com" className="break-all hover:text-gold-soft">robsonjustino.rs@gmail.com</a></li>
              <li><a href="https://www.instagram.com/robson.justino.rs/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">Instagram @robson.justino.rs</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61595100514461" target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">Facebook</a></li>
            </ul>

            <h2 className="mt-8 font-serif text-lg text-primary-foreground">Marcas</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              {marcas.map((m) => m.nome).join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/12 pt-6 text-center text-xs text-primary-foreground/55">
          <p>
            © {ano} RS Justino — Comércio e Representação em Higiene. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            A RS Representações não fabrica produtos. Atuamos como representante comercial e
            distribuidora.
          </p>
        </div>
      </div>
    </footer>
  );
}
