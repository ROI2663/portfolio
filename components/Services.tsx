import { Bot, Globe, MessageCircle, Workflow } from "lucide-react";
import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { services } from "@/lib/data";

const iconMap = {
  Bot,
  Workflow,
  MessageCircle,
  Globe,
} as const;

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">サービス紹介</h2>
          <p className="section-lead mt-4">
            課題と目的に合わせて、必要な施策を組み合わせてご提案します。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="glass-card h-full rounded-2xl border p-6">
                  <Icon className="mb-5 size-8 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">
                    <BreakableJaText text={service.description} className="card-copy" />
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
