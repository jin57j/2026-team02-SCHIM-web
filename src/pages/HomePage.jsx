import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// 💡 레이아웃과 올바른 컴포넌트 경로 임포트
import AppHeaderLayout from "../layouts/AppHeaderLayout";
import GuestbookCard from "../components/common/Guestbookcard";
import FloatingButton from "../components/common/button/FloatingButton";
import Button from "../components/common/button";
import starIconSrc from "../assets/icon/star.svg";
import heartIconSrc from "../assets/icon/favorite.svg";
import { contentDecks } from "../mocks/contentDecks.js";

export default function Home() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedState, setFlippedState] = useState({});
  const [savedState, setSavedState] = useState({});

  const mockCards = contentDecks;

  const currentCardId = mockCards[activeIndex]?.id;
  const isCurrentFlipped = flippedState[currentCardId];
  const isCurrentSaved = savedState[currentCardId];

  const handleFlip = (id) => {
    setFlippedState((prev) => ({ ...prev, [id]: true }));
  };

  const handleSave = () => {
    setSavedState((prev) => ({ ...prev, [currentCardId]: true }));
  };

  return (
    <AppHeaderLayout>
      {/* 💡 핵심 수정: h-full 대신 min-h-full과 pb-20을 주어 세로로 스크롤되며 여유 있게 공간을 쓰도록 변경 */}
      <div className="relative flex min-h-full flex-col items-center pt-6 pb-24 px-4 overflow-y-auto">
        {/* 상단: 인사말 텍스트 영역 */}
        <div className="mb-4 flex flex-col items-center text-center text-[var(--color-text-light)] shrink-0">
          <p className="body-15-r mb-2 opacity-80">익명의 세탁실요정 님,</p>
          <h1 className="heading-26-b leading-snug">
            오늘은 어떤
            <br />
            카드를 읽어볼까요?
          </h1>

          <div className="mt-3 flex items-center justify-center">
            <img
              src={isCurrentSaved ? heartIconSrc : starIconSrc}
              alt={isCurrentSaved ? "heart" : "star"}
              className={`w-[24px] h-[24px] ${isCurrentSaved ? "opacity-100 scale-110" : "opacity-90 scale-100"}`}
            />
          </div>
        </div>

        {/* 중단: 방명록 카드 스와이프 영역 */}
        <div className="w-full my-auto flex flex-col justify-center items-center py-2">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={-140}
            touchRatio={0.65}
            speed={550}
            resistanceRatio={0.4}
            className="w-full overflow-visible [&_.swiper-slide-active]:z-20 [&_.swiper-slide]:z-0"
          >
            {mockCards.map((card) => (
              <SwiperSlide key={card.id} style={{ width: "320px" }}>
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-500 flex justify-center ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-40 scale-[0.85]"
                    }`}
                  >
                    <div className={isActive ? "" : "pointer-events-none"}>
                      <GuestbookCard
                        id={card.id}
                        category={card.category}
                        initialDate={card.date}
                        content={card}
                        onRefresh={() => console.log("갱신")}
                        onFlip={handleFlip}
                      />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 하단: 조건부 버튼 영역 */}
        {/* 💡 핵심 수정: absolute를 해제하고 mt-auto와 pt-4를 주어 카드 아래에 안전하게 고정되도록 변경 */}
        <div className="w-full mt-4 z-30 flex justify-center shrink-0">
          {!isCurrentFlipped ? (
            <div className="w-full max-w-[342px] flex justify-end">
              <FloatingButton
                onClick={() => navigate("/write")}
                label="방명록 작성하기"
              />
            </div>
          ) : (
            <div className="flex gap-[12px] w-full max-w-[342px] justify-center">
              <Button
                variant="secondary-outline"
                size="half"
                onClick={handleSave}
              >
                {isCurrentSaved ? "저장 완료" : "내 리스트에 저장"}
              </Button>
              <Button
                variant="secondary-filled"
                size="half"
                onClick={() =>
                  navigate(`/contents?deckId=${mockCards[activeIndex].id}`)
                }
              >
                콘텐츠 카드덱 보기
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppHeaderLayout>
  );
}
