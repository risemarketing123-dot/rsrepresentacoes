import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo-rs-justino.webp";
import { QuoteButton } from "./ui";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur" : "bg-background",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="RS Representações — página inicial">
          <img
            src={logo}
            alt="Logotipo RS Justino — Comércio e Representação em Higiene"
            width={62}
            height={48}
            className="h-11 w-auto shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-semibold leading-none text-primary">
              RS Representações
            </span>
            <span className="mt-1 block truncate text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
              Higiene, segurança e proteção
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent-foreground",
                pathname === l.to ? "text-accent-foreground" : "text-foreground/75",
              )}
            >
              {l.label}
            </Link>
          ))}
          <QuoteButton variant="primary" className="px-5">
            Solicitar orçamento
          </QuoteButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid size-12 place-items-center rounded-md border border-border text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Navegação principal em dispositivos móveis">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <QuoteButton variant="gold" className="mt-5 w-full">
            Solicitar orçamento pelo WhatsApp
          </QuoteButton>
          <p className="mt-3 text-center text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p>
        </div>
      ) : null}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_34px_-12px_oklch(0.28_0.075_264)] ring-1 ring-accent/40 transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
