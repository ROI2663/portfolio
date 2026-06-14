import { Fragment } from "react";

type BreakableJaTextProps = {
  text: string;
  className?: string;
};

const avoidLineStartTokens = new Set([
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

function splitIntoSafeChunks(text: string): string[] {
  const chunks: string[] = [];

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

export default function BreakableJaText({ text, className }: BreakableJaTextProps) {
  const chunks = splitIntoSafeChunks(text);

  return (
    <span className={className}>
      {chunks.map((chunk, index) => (
        <Fragment key={`${chunk}-${index}`}>
          <span style={{ whiteSpace: "nowrap" }}>{chunk}</span>
          {index < chunks.length - 1 && <wbr />}
        </Fragment>
      ))}
    </span>
  );
}
