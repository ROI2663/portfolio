import FadeIn from "@/components/FadeIn";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">数字で見る実績</h2>
          <p className="section-lead mt-4">
            実際の運用で効果を実感しやすい、<wbr />
            成果につながる改善を重視しています。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.06}>
              <article className="glass-card rounded-2xl border p-6 text-center">
                <p className="text-sm text-[var(--color-muted)]">{item.label}</p>
                <p className="mt-3 text-4xl font-black text-[var(--color-accent)]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.note}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
