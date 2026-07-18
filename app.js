const LINKS = {
  source: "https://docs.google.com/document/d/18_CN5PKEOzxEM2C20XvUiABuTWzk2Xhnpyu9H3GLzXk/edit",
  map: "https://www.google.com/maps/d/viewer?mid=1HDBAhbqSJALyHLK1yXfpzf2gUGklVGo",
  folder: "https://drive.google.com/drive/folders/10d8-uJmbaPHdm5j_aLDck_LpcMknNUJU",
  hertz: "https://drive.google.com/file/d/1n4RbqTsmLqsF6W36lnjnECPBhD9DXsqJ/view",
  universal: "https://drive.google.com/file/d/1mu5aKltSfMGIJHqJNVyjdx9pPxzojKAv/view",
  getty: "https://drive.google.com/file/d/1zRCB5cFEWJu3z897usy7MG2uUhhb_kgb/view",
  dcaAdult: "https://drive.google.com/file/d/1Pd8tk-KyJ3P-w_2mV1KPJcnA822WSdL5/view",
  dcaChild: "https://drive.google.com/file/d/1Bk9hOInXEMFvfmMSt-yhn9b5zPVTQukf/view",
  koreanAirAndroid: "https://play.google.com/store/apps/details?id=com.koreanair.passenger",
  koreanAirIOS: "https://apps.apple.com/kr/app/korean-air-my/id1512918989"
};

const days = [
  {
    day: 1, date: "7/24 금", title: "LA 도착", theme: "공항 · 렌터카 · 호텔 체크인", hotel: "The Garland",
    timeline: [
      ["15:20", "LAX 도착", "입국심사 · 수하물 · 세관"],
      ["17:00", "Hertz 렌터카 픽업", "터미널에서 렌터카 셔틀 이동"],
      ["19:00", "The Garland 체크인", "셀프주차 후 짐 정리"],
      ["19:30", "In-N-Out Burger", "3640 Cahuenga Blvd"]
    ],
    move: ["LAX → Hertz → The Garland", "공항에서 호텔까지 약 45–70분", "호텔 셀프주차 $50+세금"],
    tips: ["렌터카 외관·연료·트렁크 적재 상태 확인", "국제면허증과 예약 확인서 준비", "피곤하면 저녁은 호텔 The Front Yard로 대체"],
    actions: [["Hertz 예약 확인서", LINKS.hertz, "ticket"], ["이 날 지도", LINKS.map]]
  },
  {
    day: 2, date: "7/25 토", title: "Exposition Park + LAFC", theme: "과학관 · 자연사박물관 · 축구 직관", hotel: "The Garland",
    timeline: [
      ["08:30", "Bea Bea’s 조식", "09:15 전후 출발"],
      ["09:55", "Blue Structure 주차", "경기 종료까지 차량 이동 없음"],
      ["10:10", "LAFC HQ", "아이들 유니폼 마킹 주문"],
      ["10:50", "California Science Center", "상설전시 중심"],
      ["12:30", "Mercado La Paloma", "Holbox 점심 후 도보 복귀"],
      ["14:00", "Natural History Museum", "16:30 전후 종료"],
      ["16:30", "LAFC HQ 재방문", "당일 마킹 완료 확인 후 수령"],
      ["17:30", "Family Picnic", "Christmas Tree Lane East"],
      ["19:30", "LAFC 경기", "vs. Sporting Kansas City"]
    ],
    move: ["Blue Structure · 3855 S Figueroa St", "주차장 재입차 불가", "경기 후 바로 출차"],
    tips: ["출발 전 종일 주차·추가결제 방식 전화 확인", "유니폼 영문 철자·등번호·사이즈를 두 번 확인", "당일 마킹 완료는 사전 확답 필요", "경기 전날 게이트·킥오프·주차 안내 재확인"],
    actions: [["Day 2 상세 메모", LINKS.source], ["이 날 지도", LINKS.map]]
  },
  {
    day: 3, date: "7/26 일", title: "LA 서쪽 하루", theme: "그리피스 · 할리우드 · 비벌리힐스 · 산타모니카", hotel: "The Garland",
    timeline: [
      ["08:45", "호텔 출발", "그리피스 09:15 도착 목표"],
      ["09:15", "Griffith Observatory", "전망 감상 후 10:00 내부 관람"],
      ["11:45", "Hollywood", "명예의 거리 · 차이니즈 극장"],
      ["13:15", "Farmers Market + The Grove", "점심과 쇼핑"],
      ["15:30", "Rodeo Drive", "Polo Ralph Lauren 포함"],
      ["18:15", "Santa Monica", "피어 · 해변 · 저녁"],
      ["21:15", "호텔 복귀", "교통에 따라 변동"]
    ],
    move: ["동쪽에서 서쪽으로 한 방향 이동", "Santa Monica 주차는 Lot 1 North 우선 검토", "Ovation Hollywood 주차 이용"],
    tips: ["그리피스 상단 주차 단속 시작 시간 확인", "산타모니카는 석양 시간에 맞춰 여유 있게", "쇼핑 시간은 유지하되 정체 시 할리우드 체류 축소"],
    actions: [["이 날 지도", LINKS.map]]
  },
  {
    day: 4, date: "7/27 월", title: "Universal Studios", theme: "테마파크 전일", hotel: "The Garland",
    timeline: [
      ["07:00", "간편 조식", "또는 The Front Yard 조기 이용"],
      ["08:00", "호텔 셔틀", "최신 시간표는 체크인 때 확인"],
      ["09:00", "Universal Studios", "전일 파크 이용"],
      ["18:00", "CityWalk", "구경과 저녁 식사"],
      ["저녁", "호텔 복귀", "유니버설 출발 매시 :15 기준"]
    ],
    move: ["호텔 출발 셔틀: 매시 정각 기준", "유니버설 귀환: 매시 :15 기준", "체크인 시 예약 필요 여부 재확인"],
    tips: ["모바일 티켓을 미리 열어 로그인 확인", "추가 무료 1일은 체력·날씨에 따라 선택", "귀환 셔틀 막차 시간을 현장에서 확인"],
    actions: [["Universal 티켓", LINKS.universal, "ticket"], ["이 날 지도", LINKS.map]]
  },
  {
    day: 5, date: "7/28 화", title: "Getty + 스트릿 쇼핑", theme: "미술 · 쇼핑 · 애너하임 이동", hotel: "JW Marriott Anaheim",
    timeline: [
      ["09:00", "호텔 체크아웃", "Getty Center로 이동"],
      ["10:00", "Getty Center", "12:30까지 관람 · 정원 산책"],
      ["12:30", "점심과 이동", "Sunset Blvd 방향"],
      ["13:30", "Supreme + Glossier", "8801 Sunset Blvd 일대"],
      ["14:30", "Stüssy", "112 S La Brea Ave"],
      ["15:30", "La Brea Tar Pits", "교통 상황에 따라 선택"],
      ["16:30", "Anaheim 이동", "75–120분 예상"],
      ["19:00", "호텔 체크인", "체력 시 Downtown Disney"]
    ],
    move: ["Getty 주차 $25", "Tar Pits 주차 약 $15", "정체가 심하면 Tar Pits를 생략"],
    tips: ["Getty 예약은 10:00", "차량에 캐리어를 두므로 외부에 보이지 않게 적재", "Anaheim 러시아워를 고려해 16:30 이전 출발 권장"],
    actions: [["Getty 예약 티켓", LINKS.getty, "ticket"], ["이 날 지도", LINKS.map]]
  },
  {
    day: 6, date: "7/29 수", title: "Knott’s Berry Farm", theme: "테마파크 · 호텔 수영장", hotel: "JW Marriott Anaheim",
    timeline: [
      ["09:00", "Knott’s 도착", "개장 전 주차와 입장 준비"],
      ["오전", "인기 어트랙션", "당일 공식 운영시간 확인"],
      ["17:00", "파크 식사", "Ghost Town 구경"],
      ["19:00", "호텔 복귀", "수영장과 휴식"]
    ],
    move: ["호텔에서 약 10km · 20분", "파크 공식 주차장 약 $35"],
    tips: ["당일 개장·폐장시간 재확인", "Mrs. Knott’s Chicken Dinner는 대기시간 고려", "다음 날 DCA를 위해 무리하지 않기"],
    actions: [["이 날 지도", LINKS.map]]
  },
  {
    day: 7, date: "7/30 목", title: "Disney California Adventure", theme: "DCA 전일 · World of Color", hotel: "JW Marriott Anaheim",
    timeline: [
      ["06:50", "호텔 출발", "도보 이동 · 보안검색"],
      ["08:00", "DCA 입장", "전일 파크 이용"],
      ["점심", "Lamplight Lounge", "예약 여부에 따라 조정"],
      ["21:00", "World of Color", "당일 공연시간 재확인"]
    ],
    move: ["호텔 전용 셔틀 없음", "JW Marriott에서 도보 이동", "보안검색 후 게이트 대기"],
    tips: ["성인·어린이 바우처를 각각 미리 열어 확인", "공연 관람 구역 또는 가상 대기열 확인", "보조배터리와 얇은 겉옷 준비"],
    actions: [["성인 바우처", LINKS.dcaAdult, "ticket"], ["어린이 바우처", LINKS.dcaChild, "ticket"], ["이 날 지도", LINKS.map]]
  },
  {
    day: 8, date: "7/31 금", title: "OC 쇼핑 + UCI", theme: "South Coast Plaza · 캠퍼스 · Huntington Beach", hotel: "JW Marriott Anaheim",
    timeline: [
      ["08:30", "호텔 휴식", "수영장 · 부대시설"],
      ["10:30", "South Coast Plaza", "쇼핑과 점심"],
      ["13:30", "UC Irvine", "90분 캠퍼스 산책"],
      ["15:00", "UCI 출발", "Huntington Beach 이동"],
      ["15:30", "Huntington Beach", "해변 산책"],
      ["18:30", "호텔 복귀", "체력 시 루프톱"]
    ],
    move: ["UCI Student Center Parking Structure", "General 2시간권 $8 권장", "Student Center → The Hill → Aldrich Park → Ring Mall → Infinity Fountain"],
    tips: ["UCI는 90분 산책으로 압축", "South Coast Plaza는 Polo·Patagonia 우선", "해변 주차 약 $15 예상"],
    actions: [["이 날 지도", LINKS.map]]
  },
  {
    day: 9, date: "8/1 토", title: "Terranea 이동", theme: "Del Amo · 해안 드라이브 · 리조트 입성", hotel: "Terranea Resort",
    timeline: [
      ["09:00", "호텔 체크아웃", "Del Amo로 이동"],
      ["10:30", "Del Amo Fashion Center", "마지막 쇼핑과 점심"],
      ["13:30", "Palos Verdes", "해안 드라이브 · Point Vicente"],
      ["15:30", "Terranea 도착", "짐 보관 후 시설 이용"],
      ["16:00", "객실 입실", "체크인 가능 시간"],
      ["18:30", "mar’sel 저녁", "사전예약 권장"]
    ],
    move: ["Anaheim → Del Amo 약 60–90분", "Del Amo 주차 무료", "Terranea 숙박 발렛 약 $75/박"],
    tips: ["객실 전 짐 보관 가능", "Point Vicente 체류는 체크인 시간에 맞춰 조정", "mar’sel 예약시간 재확인"],
    actions: [["이 날 지도", LINKS.map]]
  },
  {
    day: 10, date: "8/2 일", title: "Terranea 휴양", theme: "해안 산책 · 수영장 · Kids Club", hotel: "Terranea Resort",
    timeline: [
      ["09:00", "조식", "해안가 트레일 산책"],
      ["11:00", "Resort Pool", "워터슬라이드 11:00–16:00"],
      ["14:00", "리조트 휴식", "스파 · Kids Club 선택"],
      ["18:00", "선셋", "Nelson’s 또는 리조트 식사"]
    ],
    move: ["리조트 내 도보 이동", "차량 이동 없는 휴양일"],
    tips: ["Vista Pool은 만 13세 이상", "Kids Club 이용 중 부모는 리조트 안에 있어야 함", "Resort Pool 운영 08:00–20:00 기준"],
    actions: [["이 날 지도", LINKS.map]]
  },
  {
    day: 11, date: "8/3 월", title: "LAX · 귀국", theme: "주유 · 렌터카 반납 · 대한항공", hotel: "귀국",
    timeline: [
      ["07:30", "리조트 조식", "체크아웃 준비"],
      ["08:00", "LAX 방면 출발", "교통 정체 대비"],
      ["08:40", "공항 인근 주유", "Century Blvd 일대"],
      ["09:00", "Hertz 반납", "셔틀로 터미널 이동"],
      ["09:30", "대한항공 체크인", "프레스티지 라운지 안내 확인"],
      ["12:30", "KE018 출발", "8/4 17:20 ICN 도착"]
    ],
    move: ["Terranea → LAX 약 40–60분", "Hertz 반납 후 셔틀 이동", "국제선 출발 3시간 전 공항 도착 목표"],
    tips: ["주유 영수증 보관", "차량과 트렁크에 짐이 남지 않았는지 확인", "라운지 위치·운영 여부는 체크인 카운터에서 최종 확인"],
    actions: [["Hertz 예약 확인서", LINKS.hertz, "ticket"], ["이 날 지도", LINKS.map]]
  }
];

const hotels = [
  {
    stay: "7/24–7/28 · 4박", name: "The Garland", address: "4222 Vineland Ave, North Hollywood, CA 91602",
    tips: ["Universal 셔틀: 호텔 매시 정각 · 귀환 매시 :15 기준", "수영장 06:00–22:00", "The Front Yard는 파티오 좌석 요청", "셀프주차 $50+세금 · 발렛 $55+세금"]
  },
  {
    stay: "7/28–8/1 · 4박", name: "JW Marriott Anaheim", address: "1775 S Clementine St, Anaheim, CA 92802",
    tips: ["DCA 전용 셔틀 없음 · 도보 이동", "Parkestry Rooftop에서 일부 불꽃놀이 조망 가능", "온수 야외 수영장과 JW Garden", "발렛 약 $68/일"]
  },
  {
    stay: "8/1–8/3 · 2박", name: "Terranea Resort", address: "100 Terranea Way, Rancho Palos Verdes, CA 90275",
    tips: ["객실 체크인 16:00 · 도착 즉시 짐 보관 가능", "Resort Pool 08:00–20:00", "워터슬라이드 11:00–16:00", "발렛 약 $75/박 · 리조트 피 약 $75/박"]
  }
];

const restaurants = [
  ["Day 1", "The Front Yard", "4222 Vineland Ave, North Hollywood", "Breakfast Buffet · French Toast · Burger", "첫날 저녁 또는 조식, 파티오 권장"],
  ["Day 2", "Holbox", "3655 S Grand Ave #C9, Los Angeles", "Fish Taco · Ceviche · Smoked Kanpachi Taco", "Mercado La Paloma 점심"],
  ["Day 3", "Pampas Grill", "6333 W 3rd St, Los Angeles", "비프 스테이크 · 소시지 · 치킨", "The Grove에서 가족 식사"],
  ["Day 4", "Toothsome", "100 Universal City Plaza", "Milkshake · Salmon · Steak", "CityWalk, 예약 권장"],
  ["Day 5", "Anaheim Packing House", "440 S Anaheim Blvd, Anaheim", "Naanwich · Fish & Chips · Shawarma", "취향대로 고르기 쉬운 푸드홀"],
  ["Day 6", "Mrs. Knott’s Chicken Dinner", "8039 Beach Blvd, Buena Park", "Fried Chicken · Boysenberry Pie", "대표 메뉴, 대기시간 확인"],
  ["Day 7", "Lamplight Lounge", "1313 Disneyland Dr, Anaheim", "Lobster Nachos · Fish Tacos · Sliders", "Pixar Pier, 사전예약 권장"],
  ["Day 8", "Din Tai Fung", "3333 Bristol St, Costa Mesa", "Xiao Long Bao · Spicy Wontons · Noodles", "South Coast Plaza, 예약 권장"],
  ["Day 9–10", "Nelson’s", "100 Terranea Way", "Fish Tacos · Ahi Tuna Burger", "가족 캐주얼 · 선셋"],
  ["Day 9–10", "mar’sel", "100 Terranea Way", "Filet Mignon · Lobster · 계절 메뉴", "특별 저녁, 사전예약 권장"]
];

const checklistItems = [
  "여권 4개와 ESTA 승인 확인",
  "국제운전면허증 · 국내면허증",
  "신용카드 · 소액 현금",
  "항공권 · 호텔 · 렌터카 오프라인 저장",
  "Universal · Getty · DCA 티켓 저장",
  "LAFC 모바일 티켓과 주차 확인",
  "아이들 유니폼 영문 이름 · 등번호 · 사이즈 메모",
  "보조배터리 · 충전기 · 미국용 어댑터",
  "여행자보험 · 상비약 · 선크림",
  "My Maps와 이 여행 가이드를 홈 화면에 추가"
];

const app = document.querySelector("#app");
const dayDialog = document.querySelector("#dayDialog");
const dialogDays = document.querySelector("#dialogDays");

function extLink(label, href, kind = "") {
  return `<a class="action-link ${kind}" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`;
}

function mapAddress(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function koreanAirAppUrl() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ? LINKS.koreanAirIOS : LINKS.koreanAirAndroid;
}

function checklistState() {
  try { return JSON.parse(localStorage.getItem("la-trip-checklist") || "{}"); }
  catch { return {}; }
}

function countdownText() {
  const start = new Date("2026-07-24T00:00:00+09:00");
  const now = new Date();
  const diff = Math.ceil((start - now) / 86400000);
  if (diff > 0) return `<strong>D-${diff}</strong><span>출발까지</span>`;
  const end = new Date("2026-08-04T23:59:59+09:00");
  if (now <= end) return `<strong>여행 중</strong><span>Have fun!</span>`;
  return `<strong>완료</strong><span>좋은 추억</span>`;
}

function renderHome() {
  return `
    <div class="page">
      <section class="hero">
        <p class="eyebrow">Los Angeles · Summer 2026</p>
        <h1>우리 가족의 LA 여름</h1>
        <p>테마파크부터 축구, 쇼핑, 태평양 휴양까지. 이동 중 필요한 정보만 빠르게 꺼내보는 10박 11일 가이드.</p>
        <div class="countdown">${countdownText()}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>여행 한눈에</h2></div>
        <div class="summary-grid flight-grid">
          <article class="summary-card"><span class="card-icon">↗</span><div><h3>갈 때</h3><p>7/24 금 · KE011<br>ICN T2 19:40<br>LAX 15:20</p></div></article>
          <article class="summary-card"><span class="card-icon">↙</span><div><h3>올 때</h3><p>8/3 월 · KE018<br>LAX 12:30<br>ICN 8/4 17:20</p></div></article>
          <article class="summary-card hotel-summary"><span class="card-icon">🏨</span><div><h3>숙소</h3><p>The Garland 4박 · JW Marriott Anaheim 4박 · Terranea Resort 2박</p></div></article>
        </div>
        <a class="airline-app-link" href="${koreanAirAppUrl()}" target="_blank" rel="noopener"><span>✈️ 대한항공 My 앱</span><small>체크인 · 탑승권 열기 ↗</small></a>
      </section>

      <section class="section">
        <div class="section-heading"><h2>Day 바로가기</h2><a href="#days">전체 보기</a></div>
        <a class="checklist-shortcut" href="#checklist"><span><strong>✓ 출발 전 Checklist</strong><small>여권 · 티켓 · 준비물 최종 확인</small></span><span>›</span></a>
        <div class="home-day-grid">${days.slice(0, 10).map(d => `<a class="home-day-card" href="#day-${d.day}" title="${d.title}"><b>DAY ${d.day}</b><strong>${d.title}</strong><time>${d.date}</time></a>`).join("")}</div>
        <a class="home-day-last" href="#day-11"><span><b>DAY 11</b><strong>귀국</strong></span><time>8/3 월</time><span>›</span></a>
      </section>

      <section class="section">
        <div class="section-heading"><h2>빠른 실행</h2></div>
        <div class="quick-actions">
          ${extLink("Day 1 시작", "#day-1", "primary").replace('target="_blank" rel="noopener"', '')}
          ${extLink("My Maps", LINKS.map)}
          ${extLink("원본 일정", LINKS.source)}
          ${extLink("Drive 폴더", LINKS.folder)}
        </div>
      </section>

      <p class="privacy-note section">🔒 티켓·예약서와 개인정보는 이 사이트에 저장하지 않습니다. 관련 버튼은 로그인 권한이 유지되는 Google Drive 원본을 새 창에서 엽니다.</p>
    </div>`;
}

function renderDay(day) {
  const prev = day.day > 1 ? days[day.day - 2] : null;
  const next = day.day < days.length ? days[day.day] : null;
  return `
    <article class="page day-page" data-day="${day.day}">
      <header class="day-hero">
        <div class="day-meta"><span class="chip">DAY ${day.day} · ${day.date}</span><span class="chip hotel">${day.hotel}</span></div>
        <h1>${day.title}</h1>
        <p class="theme">${day.theme}</p>
      </header>

      <section class="section">
        <div class="section-heading"><h2>오늘의 흐름</h2></div>
        <div class="timeline">${day.timeline.map(([time, title, note]) => `<div class="timeline-item"><time>${time}</time><div><p>${title}</p><small>${note}</small></div></div>`).join("")}</div>
      </section>

      <section class="section card-stack">
        <article class="info-card accent"><h3>🚗 이동 · 주차</h3><ul class="info-list">${day.move.map(x => `<li>${x}</li>`).join("")}</ul></article>
        <article class="info-card warn"><h3>✓ 꼭 확인</h3><ul class="info-list">${day.tips.map(x => `<li>${x}</li>`).join("")}</ul></article>
      </section>

      <section class="section">
        <div class="section-heading"><h2>이 날 필요한 링크</h2></div>
        <div class="button-row">${day.actions.map(([label, href, kind]) => extLink(label, href, kind)).join("")}</div>
      </section>

      <nav class="slide-controls" aria-label="날짜 이동">
        ${prev ? `<a href="#day-${prev.day}">← Day ${prev.day}<br>${prev.title}</a>` : `<a href="#home">← 여행 홈</a>`}
        ${next ? `<a href="#day-${next.day}">Day ${next.day} →<br>${next.title}</a>` : `<a href="#home">여행 홈 →</a>`}
      </nav>
      <p class="slide-hint">화면을 좌우로 밀어서 이전·다음 Day로 이동할 수 있어요.</p>
    </article>`;
}

function renderDays() {
  return `<div class="page"><p class="eyebrow">10 nights · 11 days</p><h1 class="page-title">전체 일정</h1><p class="page-lead">날짜를 누르면 그날의 타임라인과 주차·예약 정보를 바로 확인할 수 있습니다.</p><div class="all-days">${days.map(d => `<a class="day-row" href="#day-${d.day}"><span class="day-number">DAY<br>${d.day}</span><span><h3>${d.title}</h3><p>${d.date} · ${d.hotel}</p></span><span>›</span></a>`).join("")}</div></div>`;
}

function renderInfo() {
  return `
    <div class="page">
      <p class="eyebrow">Stay · Eat · Prepare</p>
      <h1 class="page-title">여행정보</h1>
      <p class="page-lead">호텔 이용 팁과 일정에 맞춘 식당, 출발 전 준비사항을 한곳에 모았습니다.</p>

      <section class="section">
        <div class="section-heading"><h2>호텔 이용 팁</h2></div>
        <div class="card-stack">${hotels.map(h => `<article class="info-card hotel-block"><span class="tag">${h.stay}</span><h3>${h.name}</h3><a class="address-link" href="${mapAddress(h.address)}" target="_blank" rel="noopener">${h.address} ↗</a><ul class="info-list">${h.tips.map(x => `<li>${x}</li>`).join("")}</ul></article>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>추천 레스토랑</h2></div>
        <div class="restaurant-grid">${restaurants.map(([day, name, address, menu, tip]) => `<article class="restaurant-card"><span class="chip">${day}</span><h3>${name}</h3><p class="menu">${menu}</p><p>${tip}</p><a class="address-link" href="${mapAddress(address)}" target="_blank" rel="noopener">${address} ↗</a></article>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>출발 전 체크</h2></div>
        <article class="info-card accent"><ul class="info-list"><li>여권 · ESTA · 국제면허증</li><li>신용카드 · 소액 현금 · 보조배터리</li><li>주요 티켓은 휴대폰에 오프라인 저장</li><li>경기·테마파크 운영시간을 전날 재확인</li><li>원본 일정과 My Maps를 홈 화면에 저장</li></ul></article>
      </section>

      <section class="section quick-actions">${extLink("원본 일정", LINKS.source)}${extLink("My Maps", LINKS.map)}${extLink("Drive 폴더", LINKS.folder)}</section>
      <p class="privacy-note section">개인정보가 포함된 ESTA·항공권 파일은 공개 사이트에 직접 노출하지 않습니다. 필요한 경우 Google Drive 앱에서 별도로 확인하세요.</p>
    </div>`;
}

function renderChecklist() {
  const saved = checklistState();
  const done = checklistItems.filter((_, index) => saved[index]).length;
  return `
    <div class="page">
      <p class="eyebrow">Before departure</p>
      <h1 class="page-title">출발 전 Checklist</h1>
      <p class="page-lead">체크한 항목은 이 기기에 저장됩니다. 출국 전날과 공항 출발 직전에 한 번씩 확인하세요.</p>
      <div class="checklist-grid">${checklistItems.map((item, index) => `<label class="check-item"><input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""}><span>${item}</span></label>`).join("")}</div>
      <p class="check-progress"><strong>${done} / ${checklistItems.length}</strong> 완료</p>
      <section class="section quick-actions">${extLink("대한항공 My 앱", koreanAirAppUrl())}${extLink("Drive 폴더", LINKS.folder)}${extLink("여행 시작 · Day 1", "#day-1", "primary").replace('target="_blank" rel="noopener"', '')}</section>
    </div>`;
}

function currentRoute() {
  return (location.hash || "#home").slice(1);
}

function render() {
  const route = currentRoute();
  const dayMatch = route.match(/^day-(\d+)$/);
  if (dayMatch) {
    const day = days.find(d => d.day === Number(dayMatch[1]));
    app.innerHTML = day ? renderDay(day) : renderDays();
  } else if (route === "days") {
    app.innerHTML = renderDays();
  } else if (route === "info") {
    app.innerHTML = renderInfo();
  } else if (route === "checklist") {
    app.innerHTML = renderChecklist();
  } else {
    app.innerHTML = renderHome();
  }
  document.querySelectorAll("[data-nav]").forEach(link => {
    const nav = link.dataset.nav;
    const active = nav === route || (nav === "days" && dayMatch);
    link.classList.toggle("active", Boolean(active));
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

dialogDays.innerHTML = days.map(d => `<a href="#day-${d.day}"><strong>DAY ${d.day} · ${d.date}</strong><span>${d.title}</span></a>`).join("");
document.querySelector("#dayPickerButton").addEventListener("click", () => dayDialog.showModal());
document.querySelector("#closeDayDialog").addEventListener("click", () => dayDialog.close());
dayDialog.addEventListener("click", event => { if (event.target === dayDialog) dayDialog.close(); });
dialogDays.addEventListener("click", () => dayDialog.close());
window.addEventListener("hashchange", render);
app.addEventListener("change", event => {
  if (!event.target.matches("[data-check]")) return;
  const saved = checklistState();
  saved[event.target.dataset.check] = event.target.checked;
  localStorage.setItem("la-trip-checklist", JSON.stringify(saved));
  render();
});

let touchStartX = 0;
let touchStartY = 0;
document.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}, { passive: true });
document.addEventListener("touchend", event => {
  const dayPage = document.querySelector(".day-page");
  if (!dayPage) return;
  const dx = event.changedTouches[0].screenX - touchStartX;
  const dy = event.changedTouches[0].screenY - touchStartY;
  if (Math.abs(dx) < 65 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
  const day = Number(dayPage.dataset.day);
  if (dx < 0 && day < days.length) location.hash = `day-${day + 1}`;
  if (dx > 0 && day > 1) location.hash = `day-${day - 1}`;
}, { passive: true });

render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
