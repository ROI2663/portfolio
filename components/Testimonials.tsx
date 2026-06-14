import { Star } from "lucide-react";
import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">お客さまの声</h2>
          <p className="section-lead mt-4">
            導入後の運用しやすさや、<wbr />
            成果につながる提案を高く評価いただいています。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.08}>
              <article className="glass-card h-full rounded-2xl border p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  “<BreakableJaText text={testimonial.comment} className="card-copy" />”
                </p>
                <div className="mt-6">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {testimonial.role} / {testimonial.company}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
