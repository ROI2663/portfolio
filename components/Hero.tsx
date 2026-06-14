"use client";

import { motion } from "framer-motion";
import BreakableJaText from "@/components/BreakableJaText";

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card rounded-3xl border px-6 py-14 md:px-12"
        >
          <p className="mb-5 inline-block rounded-full border border-white/20 px-4 py-1 text-sm text-[var(--color-muted)]">
            中小企業・個人事業主向け AI活用支援
          </p>
          <h1 className="max-w-full whitespace-nowrap text-[clamp(1.15rem,6.1vw,3rem)] leading-tight font-black">
            AIで、あなたの業務を次のステージへ。
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(0.98rem,3.9vw,1.125rem)] leading-8 text-[var(--color-muted)]">
            <BreakableJaText
              text="AIエージェント構築から業務自動化、チャットボット、ホームページ制作まで。現場で使える仕組みを作り、毎日の業務を効率化します。"
              className="card-copy"
            />
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-accent-strong)] px-7 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              無料相談する
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              サービスを見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
