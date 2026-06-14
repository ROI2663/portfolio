import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">導入事例</h2>
          <p className="section-lead mt-4">
            業種ごとの課題に合わせ、<wbr />
            現場にフィットする形で改善を実施しています。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.industry} delay={index * 0.08}>
              <article className="glass-card h-full rounded-2xl border p-6">
                <p className="text-sm font-semibold text-[var(--color-accent)]">{study.industry}</p>
                <h3 className="mt-4 text-lg font-bold">課題</h3>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">
                  <BreakableJaText text={study.challenge} className="card-copy" />
                </p>
                <h3 className="mt-5 text-lg font-bold">成果</h3>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">
                  <BreakableJaText text={study.outcome} className="card-copy" />
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
