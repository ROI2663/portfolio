export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-[var(--color-muted)] md:flex-row">
        <p>&copy; 2026 鳥居幹広. All Rights Reserved.</p>
        <a href="#hero" className="transition hover:text-white">
          ページ上部へ戻る
        </a>
      </div>
    </footer>
  );
}
