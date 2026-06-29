export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-[var(--color-muted)] md:flex-row">
        <p>&copy; 2026 安田慶一. All Rights Reserved.</p>
        <a href="#hero" className="transition hover:text-[var(--color-text)]">
          ページ上部へ戻る
        </a>
      </div>
    </footer>
  );
}
