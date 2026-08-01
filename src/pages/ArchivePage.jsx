import AppHeaderLayout from "../layouts/AppHeaderLayout.jsx";

function ArchivePage({ type = "reflectionCard" }) {
  const isReflectionCard = type === "reflectionCard";
  const title = isReflectionCard ? "나의 감상카드" : "발견한 콘텐츠";

  return (
    <AppHeaderLayout title={title} contentClassName="px-6">
      <section className="py-6">
        <p className="body-15-r text-text-muted-warm">
          {isReflectionCard
            ? "내가 남긴 감상카드를 확인합니다."
            : "스치며 발견한 콘텐츠를 확인합니다."}
        </p>
      </section>
    </AppHeaderLayout>
  );
}

export default ArchivePage;
