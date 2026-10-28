// 말문 노트 설정 파일
// 동기화는 책갈피와 같은 Firebase 프로젝트(bookmark-shawn)의 users/내ID/malmun 아래에 저장돼요.
// Gemini API 키는 여기에 넣지 마세요. 앱의 설정 화면에서 넣으면 그 기기에만 저장돼요.

export const firebaseConfig = {
  apiKey: "AIzaSyAWXlcM_2owKj9J1PkU97GU1ps_xuF410U",
  authDomain: "bookmark-shawn.firebaseapp.com",
  projectId: "bookmark-shawn",
  storageBucket: "bookmark-shawn.firebasestorage.app",
  messagingSenderId: "128820784864",
  appId: "1:128820784864:web:ba9af0ba4c42f08e476a85"
};

// AI 코칭: Google Gemini 무료 API. 앞에서부터 차례로 시도해요.
// 구글이 모델 이름을 바꾸면 여기만 고치면 돼요.
export const AI_MODELS = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-flash-lite-latest", "gemini-2.0-flash"];
