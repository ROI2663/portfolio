import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">選ばれる理由</h2>
          <p className="section-lead mt-4">
            現場目線で、小さく始めて確実に成果を出す進め方を大切にしています。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="glass-card h-full rounded-2xl border p-6">
                <h3 className="text-lg font-bold text-[var(--color-accent)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  <BreakableJaText text={item.detail} className="card-copy" />
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
