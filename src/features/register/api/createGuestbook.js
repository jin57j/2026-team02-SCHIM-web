const GUESTBOOKS_ENDPOINT = "/api/guestbooks";

async function createGuestbook({ imageBlob, content }) {
  const formData = new FormData();

  // (이 부분에 기존 imageBlob을 formData에 append 하는 로직이 있다면 그대로 유지하시면 됩니다)
  if (imageBlob) {
    formData.append("image", imageBlob, "guestbook.png");
  }

  formData.append(
    "content",
    new Blob([JSON.stringify(content)], { type: "application/json" }),
  );

  const response = await fetch(GUESTBOOKS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const error = new Error(
      errorBody?.message ?? "감상카드 등록에 실패했어요.",
    );
    error.code = errorBody?.code;
    throw error;
  }

  return response.json();
}

export default createGuestbook;
