import { Fragment } from "react";

type BreakableJaTextProps = {
  text: string;
  className?: string;
};

const naturalBreakPattern = /(、|。|・|：|；|）|】|」|』)/g;
const breakableTokens = new Set(["、", "。", "・", "：", "；", "）", "】", "」", "』"]);

export default function BreakableJaText({ text, className }: BreakableJaTextProps) {
  const parts = text.split(naturalBreakPattern);

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {part}
          {breakableTokens.has(part) && <wbr />}
        </Fragment>
      ))}
    </span>
  );
}
