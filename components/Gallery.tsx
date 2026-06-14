import FadeIn from "@/components/FadeIn";
import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">制作実績</h2>
          <p className="section-lead mt-4">
            制作・導入したチャットbotや業務自動化システムをご紹介します。<wbr />
            カードをクリックするとデモをお試しいただけます。
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <GalleryCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
