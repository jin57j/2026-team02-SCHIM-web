import AppHeaderLayout from "../layouts/AppHeaderLayout.jsx";

function SettingsPage() {
  return (
    <AppHeaderLayout title="설정" contentClassName="px-6">
      <section className="py-6">
        <p className="body-15-r text-text-muted-warm">
          닉네임과 서핑 카테고리를 설정합니다.
        </p>
      </section>
    </AppHeaderLayout>
  );
}

export default SettingsPage;
