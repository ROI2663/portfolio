"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">よくある質問</h2>
          <p className="section-lead mt-4">
            ご相談前によくいただく質問をまとめています。詳細はお気軽にお問い合わせください。
          </p>
        </FadeIn>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.06}>
                <article className="glass-card overflow-hidden rounded-2xl border">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 leading-7 text-[var(--color-muted)]">
                        <BreakableJaText text={faq.answer} className="card-copy" />
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
