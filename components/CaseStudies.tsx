import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">こんな課題に対応できます</h2>
          <p className="section-lead mt-4">
            よくあるお悩みに対して、具体的な解決策をご提案します。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 0.08}>
              <article className="glass-card flex h-full flex-col rounded-2xl border p-6">
                <p className="text-sm font-semibold text-[var(--color-accent)]">{study.title}</p>
                <h3 className="mt-4 text-lg font-bold">よくあるお悩み</h3>
                <p className="mt-2 min-h-[7rem] leading-7 text-[var(--color-muted)]">
                  <BreakableJaText text={study.challenge} className="card-copy" />
                </p>
                <h3 className="mt-5 text-lg font-bold">ご提案できる内容</h3>
                <p className="mt-2 min-h-[8.5rem] leading-7 text-[var(--color-muted)]">
                  <BreakableJaText text={study.support} className="card-copy" />
                </p>
                <a
                  href="#gallery"
                  className="mt-auto pt-5 inline-flex text-sm font-semibold text-[var(--color-accent)] transition hover:brightness-110"
                >
                  関連するデモを見る →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
