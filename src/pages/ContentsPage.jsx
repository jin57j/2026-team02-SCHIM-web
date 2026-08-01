import { useNavigate, useSearchParams } from "react-router-dom";
import GuestbookCard from "../components/common/Guestbookcard.jsx";
import AppShell from "../layouts/AppShell.jsx";
import { getContentDeck } from "../mocks/contentDecks.js";

export default function ContentsPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const deck = getContentDeck(params.get("deckId"));

  return (
    <AppShell>
      <main className="min-h-dvh bg-bg-base pb-[72px]">
      <section className="relative rounded-b-[4px] px-6 pb-6 pt-8 text-[var(--color-ink-base)]" style={{ backgroundColor: deck.color }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="이전 페이지로 돌아가기"
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full text-[var(--color-ink-base)] transition-colors hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink-base)]"
        >
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path d="M6 6 18 18M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="caption-12-sb mb-6 inline-flex rounded-full bg-[var(--color-ink-base)] px-3 py-1 text-[var(--color-paper-base)]">
          {deck.label}
        </div>
        <h1 className="heading-24-b">{deck.title}</h1>
        <p className="body-13-r mt-1 opacity-75">{deck.subtitle}</p>
      </section>

      <section className="grid grid-cols-2 gap-3 px-4 pt-4" aria-label={`${deck.title} 방명록 카드 목록`}>
        {deck.guestbookCards.map((card) => (
          <GuestbookCard key={card.id} id={card.id} category={deck.category} initialDate={card.date} onRefresh={() => {}} compact disabled />
        ))}
      </section>
      </main>
    </AppShell>
  );
}
