"use client";

import { Fragment, useEffect, useMemo, useState } from "react";

type BreakableJaTextProps = {
  text: string;
  className?: string;
  mode?: "adaptive" | "desktop" | "mobile";
};

type BreakMode = "desktop" | "mobile";

const avoidLineStartTokensDesktop = new Set([
  "、",
  "。",
  "・",
  "･",
  "，",
  "．",
  ",",
  ".",
  "！",
  "？",
  "!",
  "?",
  "：",
  "；",
  ":",
  ";",
  "）",
  ")",
  "】",
  "]",
  "」",
  "』",
  "が",
  "を",
  "に",
  "で",
  "は",
  "へ",
  "と",
  "も",
  "や",
  "の",
  "か",
  "ね",
  "よ",
  "から",
  "まで",
  "より",
  "だけ",
  "しか",
  "など",
]);

const avoidLineStartTokensMobile = new Set([
  ...avoidLineStartTokensDesktop,
  "する",
  "した",
  "して",
  "いる",
  "ます",
  "です",
]);

const preferredBreakAfterTokens = new Set([
  "、",
  "。",
  "・",
  "：",
  "；",
  "）",
  "】",
  "」",
  "』",
  "そして",
  "また",
  "ただし",
  "なお",
  "ため",
]);

type Chunk = {
  text: string;
  canBreakAfter: boolean;
};

function buildBaseChunks(text: string, mode: BreakMode): string[] {
  const chunks: string[] = [];
  const avoidLineStartTokens =
    mode === "mobile" ? avoidLineStartTokensMobile : avoidLineStartTokensDesktop;

  if (typeof Intl !== "undefined" && typeof Intl.Segmenter !== "undefined") {
    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
    const segments = Array.from(segmenter.segment(text), (item) => item.segment);

    for (const segment of segments) {
      if (segment === " " || segment === "\u3000") {
        if (chunks.length > 0) {
          chunks[chunks.length - 1] += segment;
        } else {
          chunks.push(segment);
        }
        continue;
      }

      if (avoidLineStartTokens.has(segment) && chunks.length > 0) {
        chunks[chunks.length - 1] += segment;
      } else {
        chunks.push(segment);
      }
    }

    return chunks;
  }

  // Fallback: keep punctuation/particles attached to the previous chunk.
  const rough = text.split(/(\s+|、|。|・|･|，|．|,|\.|！|？|!|\?|：|；|:|;|）|\)|】|\]|」|』|が|を|に|で|は|へ|と|も|や|の|か|ね|よ|から|まで|より|だけ|しか|など)/g);
  for (const token of rough) {
    if (!token) continue;
    if (avoidLineStartTokens.has(token) && chunks.length > 0) {
      chunks[chunks.length - 1] += token;
    } else {
      chunks.push(token);
    }
  }
  return chunks;
}

function toBreakableChunks(text: string, mode: BreakMode): Chunk[] {
  const baseChunks = buildBaseChunks(text, mode);
  const minCharsForBreak = mode === "mobile" ? 10 : 7;

  return baseChunks.map((chunk) => {
    const trimmed = chunk.trim();
    const canBreakAfter =
      preferredBreakAfterTokens.has(trimmed) ||
      trimmed.endsWith("。") ||
      trimmed.endsWith("、") ||
      trimmed.length >= minCharsForBreak;

    return { text: chunk, canBreakAfter };
  });
}

export default function BreakableJaText({
  text,
  className,
  mode = "adaptive",
}: BreakableJaTextProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (mode !== "adaptive" || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [mode]);

  const effectiveMode: BreakMode =
    mode === "adaptive" ? (isMobile ? "mobile" : "desktop") : mode;
  const chunks = useMemo(() => toBreakableChunks(text, effectiveMode), [text, effectiveMode]);

  return (
    <span className={className}>
      {chunks.map((chunk, index) => (
        <Fragment key={`${chunk.text}-${index}`}>
          <span style={{ whiteSpace: "nowrap" }}>{chunk.text}</span>
          {index < chunks.length - 1 && chunk.canBreakAfter && <wbr />}
        </Fragment>
      ))}
    </span>
  );
}
