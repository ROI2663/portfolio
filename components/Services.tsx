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
  const [main, ...others] = services;
  const MainIcon = iconMap[main.icon];

  return (
    <section id="services" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">サービス紹介</h2>
          <p className="section-lead mt-4">
            手書きアンケート・紙書類のデータ化代行が主力です。
          </p>
        </FadeIn>

        {/* 主力サービス（主役カード） */}
        <FadeIn>
          <article className="glass-card mt-10 rounded-3xl border-2 border-[var(--color-accent)] p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <MainIcon className="size-9 text-[var(--color-accent)]" />
              <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-white">
                主力サービス
              </span>
            </div>
            <h3 className="mt-5 text-2xl leading-9 font-bold">
              <BreakableJaText text={main.title} />
            </h3>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--color-muted)]">
              <BreakableJaText text={main.description} className="card-copy" />
            </p>
            {main.price && (
              <p className="mt-5 text-base font-bold text-[var(--color-accent)]">
                料金目安：{main.price}
              </p>
            )}
          </article>
        </FadeIn>

        {/* その他のご相談 */}
        <FadeIn>
          <h3 className="mt-14 text-lg font-bold">その他のご相談</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            業務自動化・チャットボット・AIエージェントは、業種を問わずご相談いただけます。
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {others.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="glass-card h-full rounded-2xl border p-6">
                  <Icon className="mb-4 size-7 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    <BreakableJaText text={service.description} className="card-copy" />
                  </p>
                  {service.price && (
                    <p className="mt-4 text-sm font-bold text-[var(--color-accent)]">
                      料金目安：{service.price}
                    </p>
                  )}
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
