import { useState } from "react";
// 경로가 상위 폴더(..)의 components로 변경되었습니다.
import GuestbookCard from "../components/Guestbookcard";
import Button from "../components/Button";
import PlaceCategoryButton, {
  MusicCategoryButton,
  BookCategoryButton,
  MovieCategoryButton,
  PerformanceCategoryButton,
  EtcCategoryButton,
} from "../components/List";

export default function ListShowcase() {
  // 어떤 카테고리가 선택되었는지 관리하는 상태 (초기값은 null 또는 'PLACE' 등 자유롭게 설정)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 카드 404 에러 시 호출될 콜백 함수
  const handleRefresh = () => {
    console.log("목록 갱신 함수가 호출되었습니다!");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] flex flex-col items-center py-16 gap-16 overflow-y-auto">
      {/* =========================================
          1. 카테고리 선택 버튼 테스트 (Click 기반)
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--text-light)] border-b border-[var(--border-dark)] pb-2 w-full max-w-4xl text-center">
          1. 카테고리 선택 버튼 (Click Test)
        </h2>
        <div className="flex flex-col items-center gap-4">
          <span className="caption-12-r text-[var(--text-muted-grey)] mb-2">
            버튼을 클릭하여 활성/비활성 상태가 변경되는지 확인하세요.
          </span>

          {/* 카테고리 버튼들을 가로로 나열 */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* 장소 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                장소
              </span>
              <PlaceCategoryButton
                isActive={selectedCategory === "PLACE"}
                onClick={() => setSelectedCategory("PLACE")}
              />
            </div>

            {/* 음악 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                음악
              </span>
              <MusicCategoryButton
                isActive={selectedCategory === "MUSIC"}
                onClick={() => setSelectedCategory("MUSIC")}
              />
            </div>

            {/* 도서 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                도서
              </span>
              <BookCategoryButton
                isActive={selectedCategory === "BOOK"}
                onClick={() => setSelectedCategory("BOOK")}
              />
            </div>

            {/* 영화 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                영화
              </span>
              <MovieCategoryButton
                isActive={selectedCategory === "MOVIE"}
                onClick={() => setSelectedCategory("MOVIE")}
              />
            </div>

            {/* 공연 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                공연
              </span>
              <PerformanceCategoryButton
                isActive={selectedCategory === "PERFORMANCE"}
                onClick={() => setSelectedCategory("PERFORMANCE")}
              />
            </div>

            {/* 기타 */}
            <div className="flex flex-col items-center gap-2">
              <span className="caption-12-sb text-[var(--text-muted-warm)]">
                기타
              </span>
              <EtcCategoryButton
                isActive={selectedCategory === "ETC"}
                onClick={() => setSelectedCategory("ETC")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. 공통 하단 버튼 테스트
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--text-light)] border-b border-[var(--border-dark)] pb-2 w-full max-w-4xl text-center">
          2. 공통 하단 버튼
        </h2>

        <div className="flex flex-col gap-6 items-center">
          {/* 전체 너비 버튼 */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--text-muted-warm)]">
              전체 너비 (Light / Dark)
            </span>
            <Button
              variant="primary-light"
              size="full"
              onClick={() => alert("다음 (Light) 클릭!")}
            >
              다음
            </Button>
            <Button
              variant="primary-dark"
              size="full"
              onClick={() => alert("다음 (Dark) 클릭!")}
            >
              다음
            </Button>
          </div>

          {/* 반절 너비 버튼 그룹 */}
          <div className="flex flex-col gap-2 items-center mt-4">
            <span className="caption-12-sb text-[var(--text-muted-warm)]">
              반절 너비 조합
            </span>
            <div className="flex gap-[12px] w-[342px]">
              <Button
                variant="secondary-outline"
                size="half"
                onClick={() => alert("내 리스트에 저장!")}
              >
                내 리스트에 저장
              </Button>
              <Button
                variant="secondary-filled"
                size="half"
                onClick={() => alert("방명록 남기기!")}
              >
                방명록 남기기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. 방명록 카드 테스트
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--text-light)] border-b border-[var(--border-dark)] pb-2 w-full max-w-4xl text-center">
          3. 방명록 카드 (3D Flip)
        </h2>

        <div className="flex flex-wrap gap-8 justify-center max-w-6xl">
          <div className="flex flex-col gap-4 items-center">
            <span className="caption-12-sb text-[var(--text-muted-warm)]">
              정상 동작 (PLACE)
            </span>
            <GuestbookCard
              id="test-normal-1"
              category="PLACE"
              initialDate="2026.08.01 오전 10:00"
              onRefresh={handleRefresh}
            />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <span className="caption-12-sb text-[var(--text-muted-warm)]">
              출처 표기 (MOVIE)
            </span>
            <GuestbookCard
              id="test-movie-1"
              category="MOVIE"
              initialDate="2026.08.01 오후 2:30"
              onRefresh={handleRefresh}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
