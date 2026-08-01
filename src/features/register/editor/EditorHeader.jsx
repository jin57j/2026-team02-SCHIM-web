import trashCanIcon from "../../../assets/icon/trash-can.svg";

function EditorHeader({
  canUndo,
  canRedo,
  hasSelection,
  isExporting,
  onBack,
  onUndo,
  onRedo,
  onDelete,
  onNext,
}) {
  const elementActionClassName =
    "grid shrink-0 place-items-center leading-none disabled:cursor-default";

  return (
    <header className="flex h-[38px] items-center gap-4">
      <button
        type="button"
        aria-label="콘텐츠 선택으로 돌아가기"
        onClick={onBack}
        className="text-ink-base shrink-0 text-[20px] leading-none tracking-[-0.03em]"
      >
        ←
      </button>

      <button
        type="button"
        aria-label="실행 취소"
        disabled={!canUndo}
        onClick={onUndo}
        className={`${elementActionClassName} text-[18px] tracking-[-0.03em] ${
          canUndo ? "text-ink-base" : "text-paper-tape"
        }`}
      >
        ↺
      </button>

      <button
        type="button"
        aria-label="다시 실행"
        disabled={!canRedo}
        onClick={onRedo}
        className={`${elementActionClassName} text-[18px] tracking-[-0.03em] ${
          canRedo ? "text-ink-base" : "text-paper-tape"
        }`}
      >
        ↻
      </button>

      <button
        type="button"
        aria-label="선택한 요소 삭제"
        disabled={!hasSelection}
        onClick={onDelete}
        className={`${elementActionClassName} size-6`}
      >
        <span
          aria-hidden="true"
          className={`block size-6 ${
            hasSelection ? "bg-ink-base" : "bg-paper-tape"
          }`}
          style={{
            WebkitMask: `url("${trashCanIcon}") center / contain no-repeat`,
            mask: `url("${trashCanIcon}") center / contain no-repeat`,
          }}
        />
      </button>

      <span className="min-w-px flex-1" aria-hidden="true" />

      <button
        type="button"
        onClick={onNext}
        disabled={isExporting}
        className="bg-bg-base text-paper-base body-13-sb shrink-0 rounded-full px-4 py-[9px] disabled:opacity-50"
      >
        {isExporting ? "저장 중" : "다음"}
      </button>
    </header>
  );
}

export default EditorHeader;
