// 모든 화면이 공유하는 모바일 앱 프레임과 배경을 제공합니다.
function AppShell({ children, className = "" }) {
  return (
    <div className="min-h-dvh bg-black">
      <div
        className={`bg-bg-base relative mx-auto min-h-dvh w-full max-w-[430px] overflow-x-hidden ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default AppShell;
