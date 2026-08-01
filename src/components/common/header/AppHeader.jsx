import logoSrc from "../../../assets/logo/schim.svg";
import menuIconSrc from "../../../assets/icon/menu.svg";

// title이 없으면 로고를, 있으면 해당 페이지 제목을 표시합니다.
function AppHeader({
  title,
  menuLabel = "메뉴 열기",
  menuCloseLabel = "메뉴 닫기",
  menuExpanded = false,
  menuControls,
  onMenuClick,
  className = "",
}) {
  const showsLogo = title == null;

  return (
    <header
      className={`flex h-[54px] w-full items-center justify-between overflow-hidden px-6 py-3 ${className}`}
    >
      {showsLogo ? (
        <img className="h-[30px] w-[57px] shrink-0" src={logoSrc} alt="SCHIM" />
      ) : (
        <h1 className="heading-20-b text-paper-base whitespace-nowrap">
          {title}
        </h1>
      )}

      <button
        className="grid size-6 shrink-0 cursor-pointer place-items-center"
        type="button"
        aria-label={menuExpanded ? menuCloseLabel : menuLabel}
        aria-expanded={menuExpanded}
        aria-controls={menuControls}
        onClick={onMenuClick}
      >
        <img className="h-[14px] w-[18px]" src={menuIconSrc} alt="" />
      </button>
    </header>
  );
}

export default AppHeader;
