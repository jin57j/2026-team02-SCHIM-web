import { useEffect, useRef } from "react";
import MenuList from "./MenuList.jsx";

// 앱 화면 위에서 열리는 전체 메뉴 오버레이입니다.
function MenuOverlay({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    const menuButton = document.querySelector(
      '[aria-controls="app-menu-overlay"]',
    );
    const menuLinks = dialogRef.current?.querySelectorAll("a[href]");

    menuLinks?.[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      if (!menuButton || !menuLinks?.length) return;

      const firstLink = menuLinks[0];
      const lastLink = menuLinks[menuLinks.length - 1];

      if (document.activeElement === menuButton && !event.shiftKey) {
        event.preventDefault();
        firstLink.focus();
      } else if (document.activeElement === menuButton && event.shiftKey) {
        event.preventDefault();
        lastLink.focus();
      } else if (document.activeElement === firstLink && event.shiftKey) {
        event.preventDefault();
        menuButton.focus();
      } else if (document.activeElement === lastLink && !event.shiftKey) {
        event.preventDefault();
        menuButton.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      className="bg-bg-base absolute inset-x-0 top-[54px] pt-6 bottom-0 z-40 min-h-[calc(100dvh-54px)]"
      id="app-menu-overlay"
      aria-label="전체 메뉴"
    >
      <MenuList onNavigate={onClose} />
    </div>
  );
}

export default MenuOverlay;
