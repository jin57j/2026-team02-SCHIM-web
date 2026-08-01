const dates = [
  "2026.12.11 새벽 7:30",
  "2026.12.12 오후 2:00",
  "2026.12.13 저녁 8:15",
  "2026.12.14 오전 10:00",
  "2026.12.15 오후 5:30",
  "2026.12.16 밤 9:00",
];

const makeGuestbookCards = (deckId) =>
  dates.map((date, index) => ({
    id: `${deckId}-guestbook-${index + 1}`,
    date,
  }));

export const contentDecks = [
  {
    id: "home-card-1",
    category: "PLACE",
    label: "장소",
    title: "24시 코인세탁소",
    subtitle: "마포구 연남동 · 세탁소",
    date: dates[0],
    thumbnail: null,
    guestbookCount: 12,
    color: "var(--color-key-place-500)",
  },
  {
    id: "home-card-2",
    category: "MUSIC",
    label: "음악",
    title: "죽일놈",
    subtitle: "다이나믹 듀오 · 힙합 · 2007",
    date: dates[1],
    thumbnail: null,
    guestbookCount: 8,
    color: "var(--color-key-music-500)",
  },
  {
    id: "home-card-3",
    category: "MOVIE",
    label: "영화",
    title: "호프",
    subtitle: "나홍진 · 드라마 · 2007",
    date: dates[2],
    thumbnail: null,
    guestbookCount: 24,
    color: "var(--color-key-movie-500)",
  },
  {
    id: "home-card-4",
    category: "BOOK",
    label: "도서",
    title: "물고기는 존재하지 않는다",
    subtitle: "룰루밀러 · 곰출판 · 2007",
    date: dates[3],
    thumbnail: null,
    guestbookCount: 16,
    color: "var(--color-key-book-500)",
  },
].map((deck) => ({ ...deck, guestbookCards: makeGuestbookCards(deck.id) }));

export const getContentDeck = (deckId) =>
  contentDecks.find((deck) => deck.id === deckId) ?? contentDecks[0];
