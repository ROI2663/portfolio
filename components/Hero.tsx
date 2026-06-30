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
          <p className="mb-5 inline-block rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-accent)]">
            飲食店・カフェ専門｜AIで経費・レシート入力を自動化
          </p>
          <h1 className="max-w-full whitespace-nowrap text-[clamp(1.15rem,6.1vw,3rem)] leading-tight font-black">
            レシート入力、AIにまるごとお任せ。
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(0.98rem,3.9vw,1.125rem)] leading-8 text-[var(--color-muted)]">
            <BreakableJaText
              text="飲食店・カフェの「レシート・領収書の入力」をAIで自動化するのが専門です。写真を撮って送るだけで費目ごとに自動で仕分け・記帳し、閉店後の手入力をなくします。"
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
              className="rounded-full border border-[var(--color-border)] px-7 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-text)]/5"
            >
              サービスを見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
