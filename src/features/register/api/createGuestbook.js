import apiClient from "../../../api/client.js";

const GUESTBOOKS_ENDPOINT = "/api/guestbooks";

async function createGuestbook({ imageBlob, content }) {
  const formData = new FormData();
  formData.append("image", imageBlob, "guestbook.png");
  formData.append(
    "content",
    new Blob([JSON.stringify(content)], { type: "application/json" }),
  );

  try {
    const response = await apiClient.post(GUESTBOOKS_ENDPOINT, formData);
    return response.data;
  } catch (requestError) {
    const errorBody = requestError.response?.data;
    const error = new Error(errorBody?.message ?? "감상카드 등록에 실패했어요.");
    error.code = errorBody?.code;
    throw error;
  }
}

export default createGuestbook;
