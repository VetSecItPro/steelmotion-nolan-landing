import Link from "next/link";

interface CTAProps {
  headline: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({
  headline,
  subtext,
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border bg-surface-1 p-12 md:p-16 lg:p-20 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative text-center max-w-2xl mx-auto" style={{ textAlign: "center" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4" style={{ textAlign: "center" }}>
              {headline}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10" style={{ textAlign: "center" }}>
              {subtext}
            </p>
            <Link
              href={buttonHref}
              className="inline-block px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200 glow-accent"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
