// 말문 노트 설정 파일
// 동기화는 책갈피와 같은 Firebase 프로젝트(bookmark-shawn)의 users/내ID/malmun 아래에 저장돼요.
// AI API 키는 여기에 넣지 마세요. 앱의 설정 화면에서 넣으면 그 기기에만 저장돼요.

export const firebaseConfig = {
  apiKey: "AIzaSyAWXlcM_2owKj9J1PkU97GU1ps_xuF410U",
  authDomain: "bookmark-shawn.firebaseapp.com",
  projectId: "bookmark-shawn",
  storageBucket: "bookmark-shawn.firebasestorage.app",
  messagingSenderId: "128820784864",
  appId: "1:128820784864:web:ba9af0ba4c42f08e476a85"
};

// AI 코칭에 쓰는 모델 (빠르고 저렴한 모델)
export const AI_MODEL = "claude-haiku-5-5";
