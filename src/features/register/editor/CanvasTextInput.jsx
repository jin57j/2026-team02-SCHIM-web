import { useEffect, useRef, useState } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./canvasConfig.js";

function CanvasTextInput({ position, onComplete, onCancel }) {
  const inputRef = useRef(null);
  const isFinishedRef = useRef(false);
  const pendingSubmitRef = useRef(false);
  const fallbackTimerRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    inputRef.current?.focus();

    return () => {
      window.clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  const completeText = () => {
    if (isFinishedRef.current) {
      return;
    }

    isFinishedRef.current = true;
    pendingSubmitRef.current = false;
    window.clearTimeout(fallbackTimerRef.current);

    // 모바일 IME의 마지막 조합 문자를 포함하도록 DOM의 최신 값을 읽습니다.
    const nextText = (inputRef.current?.value ?? text).trim();

    if (nextText) {
      onComplete(nextText, position);
      return;
    }

    onCancel();
  };

  const completePendingText = () => {
    if (!pendingSubmitRef.current || isFinishedRef.current) {
      return;
    }

    pendingSubmitRef.current = false;
    window.clearTimeout(fallbackTimerRef.current);
    window.requestAnimationFrame(completeText);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      isFinishedRef.current = true;
      onCancel();
      return;
    }

    if (event.key !== "Enter" && event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    if (!event.nativeEvent.isComposing) {
      completeText();
      return;
    }

    // 일부 모바일 키보드는 완료 키에서도 isComposing을 true로 유지합니다.
    pendingSubmitRef.current = true;
    fallbackTimerRef.current = window.setTimeout(completePendingText, 150);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      completePendingText();
    }
  };

  return (
    <textarea
      ref={inputRef}
      value={text}
      rows={3}
      enterKeyHint="done"
      aria-label="캔버스 텍스트 입력"
      onChange={(event) => setText(event.target.value)}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onCompositionEnd={completePendingText}
      onBlur={completeText}
      className="absolute z-10 resize-none overflow-hidden border-0 bg-transparent p-0 text-[15px] leading-[1.5] font-semibold tracking-[-0.03em] outline-none"
      style={{
        color: "#000000",
        left: `${(position.x / CANVAS_WIDTH) * 100}%`,
        top: `${(position.y / CANVAS_HEIGHT) * 100}%`,
        width: `${Math.min(72, ((CANVAS_WIDTH - position.x) / CANVAS_WIDTH) * 100)}%`,
      }}
    />
  );
}

export default CanvasTextInput;
