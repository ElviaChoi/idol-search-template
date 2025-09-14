export type Idol = {
  id: number;
  name: string;
  groupName: string;
  position?: string;
  avatarUrl?: string;
};

export const REAL_IDOLS: Idol[] = [
  // IVE
  { id: 1, name: "안유진", groupName: "아이브" },
  { id: 2, name: "가을", groupName: "아이브" },
  { id: 3, name: "레이", groupName: "아이브" },
  { id: 4, name: "장원영", groupName: "아이브" },
  { id: 5, name: "리즈", groupName: "아이브" },
  { id: 6, name: "이서", groupName: "아이브" },

  // NewJeans
  { id: 11, name: "민지", groupName: "뉴진스" },
  { id: 12, name: "하니", groupName: "뉴진스" },
  { id: 13, name: "다니엘", groupName: "뉴진스" },
  { id: 14, name: "해린", groupName: "뉴진스" },
  { id: 15, name: "혜인", groupName: "뉴진스" },

  // LE SSERAFIM
  { id: 21, name: "김채원", groupName: "르세라핌" },
  { id: 22, name: "사쿠라", groupName: "르세라핌" },
  { id: 23, name: "허윤진", groupName: "르세라핌" },
  { id: 24, name: "카즈하", groupName: "르세라핌" },
  { id: 25, name: "홍은채", groupName: "르세라핌" },

  // aespa
  { id: 31, name: "카리나", groupName: "에스파" },
  { id: 32, name: "지젤", groupName: "에스파" },
  { id: 33, name: "윈터", groupName: "에스파" },
  { id: 34, name: "닝닝", groupName: "에스파" },

  // BLACKPINK
  { id: 41, name: "지수", groupName: "블랙핑크" },
  { id: 42, name: "제니", groupName: "블랙핑크" },
  { id: 43, name: "로제", groupName: "블랙핑크" },
  { id: 44, name: "리사", groupName: "블랙핑크" },

  // TWICE
  { id: 51, name: "나연", groupName: "트와이스" },
  { id: 52, name: "정연", groupName: "트와이스" },
  { id: 53, name: "모모", groupName: "트와이스" },
  { id: 54, name: "사나", groupName: "트와이스" },
  { id: 55, name: "지효", groupName: "트와이스" },
  { id: 56, name: "미나", groupName: "트와이스" },
  { id: 57, name: "다현", groupName: "트와이스" },
  { id: 58, name: "채영", groupName: "트와이스" },
  { id: 59, name: "쯔위", groupName: "트와이스" },

  // Red Velvet
  { id: 61, name: "아이린", groupName: "레드벨벳" },
  { id: 62, name: "슬기", groupName: "레드벨벳" },
  { id: 63, name: "웬디", groupName: "레드벨벳" },
  { id: 64, name: "조이", groupName: "레드벨벳" },
  { id: 65, name: "예리", groupName: "레드벨벳" },

  // (G)I-DLE
  { id: 71, name: "미연", groupName: "(여자)아이들" },
  { id: 72, name: "민니", groupName: "(여자)아이들" },
  { id: 73, name: "소연", groupName: "(여자)아이들" },
  { id: 74, name: "우기", groupName: "(여자)아이들" },
  { id: 75, name: "슈화", groupName: "(여자)아이들" },

  // ITZY
  { id: 81, name: "예지", groupName: "있지" },
  { id: 82, name: "리아", groupName: "있지" },
  { id: 83, name: "류진", groupName: "있지" },
  { id: 84, name: "채령", groupName: "있지" },
  { id: 85, name: "유나", groupName: "있지" },

  // STAYC
  { id: 91, name: "수민", groupName: "스테이씨" },
  { id: 92, name: "시은", groupName: "스테이씨" },
  { id: 93, name: "아이사", groupName: "스테이씨" },
  { id: 94, name: "세은", groupName: "스테이씨" },
  { id: 95, name: "윤", groupName: "스테이씨" },
  { id: 96, name: "재이", groupName: "스테이씨" },

  // BTS
  { id: 101, name: "RM", groupName: "방탄소년단" },
  { id: 102, name: "진", groupName: "방탄소년단" },
  { id: 103, name: "슈가", groupName: "방탄소년단" },
  { id: 104, name: "제이홉", groupName: "방탄소년단" },
  { id: 105, name: "지민", groupName: "방탄소년단" },
  { id: 106, name: "뷔", groupName: "방탄소년단" },
  { id: 107, name: "정국", groupName: "방탄소년단" },

  // SEVENTEEN
  { id: 111, name: "에스쿱스", groupName: "세븐틴" },
  { id: 112, name: "정한", groupName: "세븐틴" },
  { id: 113, name: "조슈아", groupName: "세븐틴" },
  { id: 114, name: "준", groupName: "세븐틴" },
  { id: 115, name: "호시", groupName: "세븐틴" },
  { id: 116, name: "원우", groupName: "세븐틴" },
  { id: 117, name: "우지", groupName: "세븐틴" },
  { id: 118, name: "디에잇", groupName: "세븐틴" },
  { id: 119, name: "민규", groupName: "세븐틴" },
  { id: 120, name: "도겸", groupName: "세븐틴" },
  { id: 121, name: "승관", groupName: "세븐틴" },
  { id: 122, name: "버논", groupName: "세븐틴" },
  { id: 123, name: "디노", groupName: "세븐틴" },

  // Stray Kids
  { id: 131, name: "방찬", groupName: "스트레이 키즈" },
  { id: 132, name: "리노", groupName: "스트레이 키즈" },
  { id: 133, name: "창빈", groupName: "스트레이 키즈" },
  { id: 134, name: "현진", groupName: "스트레이 키즈" },
  { id: 135, name: "한", groupName: "스트레이 키즈" },
  { id: 136, name: "필릭스", groupName: "스트레이 키즈" },
  { id: 137, name: "승민", groupName: "스트레이 키즈" },
  { id: 138, name: "아이엔", groupName: "스트레이 키즈" },

  // NCT DREAM
  { id: 141, name: "마크", groupName: "엔시티 드림" },
  { id: 142, name: "런쥔", groupName: "엔시티 드림" },
  { id: 143, name: "제노", groupName: "엔시티 드림" },
  { id: 144, name: "해찬", groupName: "엔시티 드림" },
  { id: 145, name: "재민", groupName: "엔시티 드림" },
  { id: 146, name: "천러", groupName: "엔시티 드림" },
  { id: 147, name: "지성", groupName: "엔시티 드림" },

  // NCT 127
  { id: 151, name: "태일", groupName: "엔시티 127" },
  { id: 152, name: "쟈니", groupName: "엔시티 127" },
  { id: 153, name: "태용", groupName: "엔시티 127" },
  { id: 154, name: "유타", groupName: "엔시티 127" },
  { id: 155, name: "도영", groupName: "엔시티 127" },
  { id: 156, name: "재현", groupName: "엔시티 127" },
  { id: 157, name: "정우", groupName: "엔시티 127" },
  { id: 158, name: "마크", groupName: "엔시티 127" },
  { id: 159, name: "해찬", groupName: "엔시티 127" },

  // TXT
  { id: 161, name: "연준", groupName: "투모로우바이투게더" },
  { id: 162, name: "수빈", groupName: "투모로우바이투게더" },
  { id: 163, name: "범규", groupName: "투모로우바이투게더" },
  { id: 164, name: "태현", groupName: "투모로우바이투게더" },
  { id: 165, name: "휴닝카이", groupName: "투모로우바이투게더" },

  // ENHYPEN
  { id: 171, name: "정원", groupName: "엔하이픈" },
  { id: 172, name: "희승", groupName: "엔하이픈" },
  { id: 173, name: "제이", groupName: "엔하이픈" },
  { id: 174, name: "제이크", groupName: "엔하이픈" },
  { id: 175, name: "성훈", groupName: "엔하이픈" },
  { id: 176, name: "선우", groupName: "엔하이픈" },
  { id: 177, name: "니키", groupName: "엔하이픈" },
];
