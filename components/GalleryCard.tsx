"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BreakableJaText from "@/components/BreakableJaText";
import type { GalleryItem } from "@/lib/data";

type GalleryCardProps = {
  item: GalleryItem;
};

export default function GalleryCard({ item }: GalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const cardBody = (
    <article className="flex h-full flex-col">
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
      <div className="flex h-full flex-col space-y-2 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs tracking-wide text-[var(--color-accent)] uppercase">{item.category}</p>
          <span className="rounded-full border border-[var(--color-accent)]/60 px-2 py-0.5 text-[11px] font-semibold text-[var(--color-accent)]">
            デモ作品
          </span>
        </div>
        <h3 className="text-lg leading-7 font-bold">
          <BreakableJaText text={item.title} />
        </h3>
        {item.description && (
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            <BreakableJaText text={item.description} />
          </p>
        )}
        <p className="mt-auto pt-1 text-sm font-semibold text-[var(--color-accent)]">
          {"href" in item ? "デモを試す →" : "デモ動画を見る →"}
        </p>
      </div>
    </article>
  );

  return (
    <>
      {"href" in item ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-[500px] w-full overflow-hidden rounded-2xl border border-white/15 transition hover:border-[var(--color-accent)]"
        >
          {cardBody}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => {
            setVideoError(false);
            setIsOpen(true);
          }}
          className="group block h-[500px] w-full overflow-hidden rounded-2xl border border-white/15 text-left transition hover:border-[var(--color-accent)]"
          aria-label={`${item.title}のデモ動画を開く`}
        >
          {cardBody}
        </button>
      )}

      {"video" in item && isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl border border-white/20 bg-[var(--color-bg-elevated)] p-4 sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold leading-7">{item.title}</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/25 px-3 py-1 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-white"
              >
                閉じる
              </button>
            </div>
            {item.description && (
              <p className="mb-4 text-sm leading-7 text-[var(--color-muted)]">
                <BreakableJaText text={item.description} />
              </p>
            )}
            {videoError ? (
              <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-white/25 bg-black/20 px-4 text-center text-sm text-[var(--color-muted)]">
                動画を準備中です。`public/videos/cafe-automation-demo.mp4` を配置してください。
              </div>
            ) : (
              <video
                controls
                playsInline
                preload="metadata"
                poster={item.image}
                className="aspect-video w-full rounded-xl bg-black"
                onError={() => setVideoError(true)}
              >
                <source src={item.video} type="video/mp4" />
                お使いのブラウザは動画の再生に対応していません。
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
