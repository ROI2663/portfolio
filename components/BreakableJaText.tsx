type BreakableJaTextProps = {
  text: string;
  className?: string;
};

export default function BreakableJaText({ text, className }: BreakableJaTextProps) {
  return <span className={className}>{text}</span>;
}
