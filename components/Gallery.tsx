import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">制作実績</h2>
          <p className="section-lead mt-4">
            制作・導入したプロジェクトを、<wbr />
            目的別に一部ご紹介します。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-white/15">
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
                        "linear-gradient(to top, rgba(6,18,42,0.96) 18%, rgba(6,18,42,0.82) 45%, rgba(6,18,42,0.08) 100%)",
                    }}
                  />
                  <div className="absolute right-4 bottom-4 left-4">
                    <p className="text-xs tracking-wide text-[var(--color-accent)] uppercase">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
