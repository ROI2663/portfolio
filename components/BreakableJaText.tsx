import { Fragment } from "react";

type BreakableJaTextProps = {
  text: string;
  className?: string;
};

const preferredBreakTokens = new Set([
  "、",
  "。",
  "と",
  "が",
  "を",
  "に",
  "で",
  "は",
  "へ",
  "も",
  "や",
]);
const breakPattern = /(、|。|と|が|を|に|で|は|へ|も|や)/g;

export default function BreakableJaText({ text, className }: BreakableJaTextProps) {
  const parts = text.split(breakPattern);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {part}
          {preferredBreakTokens.has(part) && <wbr />}
        </Fragment>
      ))}
    </span>
  );
}
