// 첫 단계에는 닫기를, 이후 단계에는 뒤로가기를 표시합니다.
function RegisterHeader({
  currentStep = 1,
  totalStep = 3,
  closeLabel = "등록 취소",
  backLabel = "이전 단계",
  onClose,
  onBack,
  className = "",
}) {
  const isFirstStep = currentStep === 1;
  const actionLabel = isFirstStep ? closeLabel : backLabel;
  const handleAction = isFirstStep ? (onClose ?? onBack) : onBack;

  return (
    <header
      className={`flex h-[27px] w-full items-center ${className}`}
      aria-label={`감상카드 등록 ${currentStep}단계`}
    >
      <button
        className="text-text-muted-warm tracking-global shrink-0 cursor-pointer text-[18px] leading-[normal] font-normal"
        type="button"
        aria-label={actionLabel}
        onClick={handleAction}
      >
        <span aria-hidden="true">{isFirstStep ? "✕" : "←"}</span>
      </button>

      <span className="min-w-px flex-1" aria-hidden="true" />

      <p className="text-text-muted-warm body-13-r tracking-global shrink-0 leading-[normal] whitespace-nowrap">
        <span className="sr-only">총 {totalStep}단계 중 </span>
        {currentStep} / {totalStep}
      </p>
    </header>
  );
}

export default RegisterHeader;
