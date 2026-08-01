import inkPenIconSrc from "../../../assets/icon/ink_pen.svg";

// 화면 위에 배치해 주요 작성 동작을 제공하는 원형 버튼입니다.
function FloatingButton({
  label = "감상카드 작성",
  onClick,
  className = "",
  ...buttonProps
}) {
  return (
    <button
      {...buttonProps}
      className={`border-paper-base bg-bg-base grid size-16 shrink-0 cursor-pointer place-items-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper-base ${className}`}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <img className="size-[18px]" src={inkPenIconSrc} alt="" />
    </button>
  );
}

export default FloatingButton;
