import { ArrowRight } from "lucide-react";
import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">導入の流れ</h2>
          <p className="section-lead mt-4">
            初回相談から導入後の改善まで、伴走しながら進めます。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.07}>
              <article className="glass-card relative h-full rounded-2xl border p-5">
                <div className="on-accent mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-strong)] text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  <BreakableJaText text={step.detail} className="card-copy" />
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute top-5 -right-3 hidden size-5 text-[var(--color-accent)] xl:block" />
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
