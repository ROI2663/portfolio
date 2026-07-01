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
            紙・手書き書類のデータ化代行｜写真を送るだけ
          </p>
          <h1 className="max-w-full whitespace-nowrap text-[clamp(1.05rem,5.6vw,2.9rem)] leading-tight font-black">
            手書きアンケート、送るだけでExcelに。
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(0.98rem,3.9vw,1.125rem)] leading-8 text-[var(--color-muted)]">
            <BreakableJaText
              text="セミナー・研修の手書きアンケートも、店舗のレシートも。写真やスキャンを送るだけで、AIが一枚ずつ正確にデータ化し、集計まで仕上げてお返しします。"
              className="card-copy"
            />
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="on-accent rounded-full bg-[var(--color-accent-strong)] px-7 py-3 text-sm font-bold transition hover:brightness-110"
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
