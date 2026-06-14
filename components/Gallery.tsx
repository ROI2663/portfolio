import Image from "next/image";
import BreakableJaText from "@/components/BreakableJaText";
import FadeIn from "@/components/FadeIn";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">制作実績</h2>
          <p className="section-lead mt-4">
            制作・導入したチャットbotをご紹介します。<wbr />
            カードをクリックするとデモをお試しいただけます。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-white/15 transition hover:border-[var(--color-accent)]"
              >
                <article className="h-full">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={640}
                      height={400}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(6,18,42,0.72) 10%, rgba(6,18,42,0.35) 45%, rgba(6,18,42,0) 100%)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 p-4 sm:p-5">
                    <p className="text-xs tracking-wide text-[var(--color-accent)] uppercase">
                      {item.category}
                    </p>
                    <h3 className="text-lg leading-7 font-bold">
                      <BreakableJaText text={item.title} />
                    </h3>
                    {item.description && (
                      <p className="text-sm leading-7 text-[var(--color-muted)]">
                        <BreakableJaText text={item.description} />
                      </p>
                    )}
                    <p className="pt-1 text-sm font-semibold text-[var(--color-accent)]">
                      デモを試す →
                    </p>
                  </div>
                </article>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
