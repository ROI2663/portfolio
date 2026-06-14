import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">こんな方におすすめ</h2>
          <p className="section-lead mt-4">
            副業として活動を始めたばかりのため、<wbr />
            今は特に次のような方のご相談に向いています。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.title} delay={index * 0.08}>
              <article className="glass-card h-full rounded-2xl border p-6">
                <h3 className="text-lg font-bold text-[var(--color-accent)]">{testimonial.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  <BreakableJaText text={testimonial.description} className="card-copy" />
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
