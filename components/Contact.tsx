"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { contact } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">お問い合わせ</h2>
          <p className="section-lead mt-4">
            ご相談内容が固まっていなくても問題ありません。<wbr />
            まずは現状の課題をお聞かせください。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <FadeIn delay={0.05}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl border p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  お名前
                  <input
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
                    placeholder="山田 太郎"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  メールアドレス
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
                    placeholder="example@example.com"
                  />
                </label>
              </div>
              <label className="mt-4 flex flex-col gap-2 text-sm">
                会社名・屋号
                <input
                  value={form.company}
                  onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
                  placeholder="株式会社サンプル"
                />
              </label>
              <label className="mt-4 flex flex-col gap-2 text-sm">
                お問い合わせ内容
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-[var(--color-accent)]"
                  placeholder="現在の課題や相談したいことをご記入ください。"
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-strong)] px-6 py-3 text-sm font-bold transition hover:brightness-110"
                >
                  <Send className="size-4" />
                  送信する
                </button>
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  メールで直接連絡
                </a>
              </div>
              {status === "error" && (
                <p className="mt-4 text-sm text-red-300">
                  お名前・メールアドレス・お問い合わせ内容を入力してください。
                </p>
              )}
              {status === "success" && (
                <p className="mt-4 text-sm text-emerald-300">
                  送信ありがとうございました。内容を確認のうえご連絡します。
                </p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.12}>
            <aside className="glass-card rounded-2xl border p-6 md:p-8">
              <h3 className="text-xl font-bold">連絡先</h3>
              <ul className="mt-5 space-y-3 text-[var(--color-muted)]">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-[var(--color-accent)]" />
                  {contact.email}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-[var(--color-accent)]" />
                  {contact.phone}
                </li>
              </ul>
              <h4 className="mt-8 font-semibold">SNS</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {contact.sns.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
