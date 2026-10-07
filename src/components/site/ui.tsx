import { useEffect, useRef, useState, type ReactNode } from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      className={cn("reveal", visible && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Lucide = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Lucide className={className} aria-hidden="true" strokeWidth={1.4} />;
}

export function GoldRule({ className }: { className?: string }) {
  return <span className={cn("gold-rule block w-24", className)} aria-hidden="true" />;
}

export function SectionHeading({
  overline,
  title,
  description,
  invert = false,
}: {
  overline: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.28em]",
          invert ? "text-gold-soft" : "text-accent",
        )}
      >
        {overline}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight sm:text-4xl",
          invert ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      <GoldRule className="mx-auto mt-5" />
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            invert ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function QuoteButton({
  context,
  children = "Solicitar orçamento",
  variant = "primary",
  className,
}: {
  context?: string;
  children?: ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-navy-deep shadow-[0_10px_30px_-16px_oklch(0.28_0.075_264)]",
    gold: "bg-accent text-accent-foreground hover:bg-gold-soft shadow-[0_10px_30px_-16px_oklch(0.68_0.105_78)]",
    outline: "border border-primary/25 text-primary hover:border-accent hover:text-accent-foreground hover:bg-accent",
    ghost: "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
  }[variant];

  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function PageHero({
  overline,
  title,
  description,
}: {
  overline: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,oklch(0.34_0.08_264)_0%,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-12 text-center lg:px-8 lg:pb-20 lg:pt-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">{overline}</p>
          <h1 className="mt-5 text-[2rem] leading-[1.14] sm:text-5xl">{title}</h1>
          <GoldRule className="mx-auto mt-6" />
          {description ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              {description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <QuoteButton variant="gold">Solicitar orçamento</QuoteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
