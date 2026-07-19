const LINKS = {
  source: "https://docs.google.com/document/d/18_CN5PKEOzxEM2C20XvUiABuTWzk2Xhnpyu9H3GLzXk/edit",
  map: "https://www.google.com/maps/d/viewer?mid=1HDBAhbqSJALyHLK1yXfpzf2gUGklVGo",
  folder: "https://drive.google.com/drive/folders/10d8-uJmbaPHdm5j_aLDck_LpcMknNUJU",
  hertz: "https://drive.google.com/file/d/1n4RbqTsmLqsF6W36lnjnECPBhD9DXsqJ/view",
  lafc: "https://www.ticketmaster.com/user/order/kjwQYLe8ZrogvC7z6K325EKcJjCspBMlTuJTitQIdTRiWWO5NAV-UrzqxKGALik%3D/0A006373F370941A/view",
  universal: "https://drive.google.com/file/d/1mu5aKltSfMGIJHqJNVyjdx9pPxzojKAv/view",
  getty: "https://drive.google.com/file/d/1zRCB5cFEWJu3z897usy7MG2uUhhb_kgb/view",
  dcaAdult: "https://drive.google.com/file/d/1Pd8tk-KyJ3P-w_2mV1KPJcnA822WSdL5/view",
  dcaChild: "https://drive.google.com/file/d/1Bk9hOInXEMFvfmMSt-yhn9b5zPVTQukf/view",
  garlandVoucher: "https://drive.google.com/file/d/1Ns5me4KjwAJ79fyC4aAgY3r8aKyr2jSB/view",
  jwVoucher: "https://drive.google.com/file/d/1GWdQgHtiDaIwToTWPZFugliDR0kplaY2/view",
  terraneaVoucher: "https://drive.google.com/file/d/1PSAntwTzj-9QdCg-CYTRrxEvG_V7jq4Z/view",
  koreanAir: "https://www.koreanair.com/",
  hotels: "https://www.hotels.com/"
};

const DAY_MAPS = {
  1: "https://www.google.com/maps/d/viewer?mid=13bYxlcPQjxujYQxPMSfVUOk-gndr9mA",
  2: "https://www.google.com/maps/d/viewer?mid=1_mp5mIe_NSmk4IBkVPckswrr0mZqL1U",
  3: "https://www.google.com/maps/d/viewer?mid=1CpCZ1vkCULDp4ACPqTx316Mta7GP1NU",
  4: "https://www.google.com/maps/d/viewer?mid=1FglRvW1mh0k_Ir47_k3rAJIXM5p6j-A",
  5: "https://www.google.com/maps/d/viewer?mid=1aps2OQhkfKPntQTkoIPCwkCkkx8K9_s",
  6: "https://www.google.com/maps/d/viewer?mid=1hUvPmpjwNiRu7m_kVsC4H4k2CzY6u4E",
  7: "https://www.google.com/maps/d/viewer?mid=1TaPlEgQIGAWGNvyb3i-ZRR28QzJS63E",
  8: "https://www.google.com/maps/d/viewer?mid=13JynO4YaWdhwvLOmf1pNgVSrOrTbzu0",
  9: "https://www.google.com/maps/d/viewer?mid=1P-pKrwFZ_Lml1ZdHkuT0zmivZhuuC5k",
  10: "https://www.google.com/maps/d/viewer?mid=1A8SicTv-vRSyxu6eC3-_iK3ZdiK5hyY",
  11: "https://www.google.com/maps/d/viewer?mid=1zUyLW1d1BGTBOPw8z-loMN1i7rvd47Y"
};

const DAY_MAP_VIEWS = {
  1: { center: "34.0420,-118.3810", zoom: 10 },
  2: { center: "34.0138,-118.2857", zoom: 15 },
  3: { center: "34.0730,-118.3970", zoom: 11 },
  4: { center: "34.1377,-118.3550", zoom: 15 },
  5: { center: "33.9750,-118.1950", zoom: 9 },
  6: { center: "33.8260,-117.9550", zoom: 12 },
  7: { center: "33.8070,-117.9180", zoom: 15 },
  8: { center: "33.7280,-117.9200", zoom: 10 },
  9: { center: "33.7750,-118.1550", zoom: 9 },
  10: { center: "33.7380,-118.3970", zoom: 15 },
  11: { center: "33.8420,-118.4020", zoom: 10 }
};

const dayVisuals = {
  1: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg/960px-Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
    alt: "로스앤젤레스 국제공항 LAX",
    source: "https://commons.wikimedia.org/wiki/File:Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
    sourceLabel: "LAX Tom Bradley 터미널 사진"
  },
  2: {
    image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/deaee31c-3a1d-44a2-b7ee-4ed62d92a67c",
    alt: "LA 자연사박물관 공룡 전시",
    source: "https://triple.guide/tna/products/20e6dffe-3297-4d3d-b439-798c4ed3ae9f",
    sourceLabel: "Natural History Museum"
  },
  3: {
    image: "https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/11/18/6zUQ/48otiZ5buJ.jpg",
    alt: "산타모니카 해변과 로스앤젤레스 서부",
    source: "https://experiences.myrealtrip.com/products/3859681",
    sourceLabel: "Santa Monica"
  },
  4: {
    image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a7cf1489-481c-4f87-aaa9-7b65480873a4",
    alt: "유니버설 스튜디오 할리우드",
    source: "https://triple.guide/tna/products/82c26b51-448d-4c82-af49-dc3c2c2ffbdf",
    sourceLabel: "Universal Studios Hollywood"
  },
  5: {
    image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/874a5f5f-8229-41d6-b3a8-f3457e9733ad",
    alt: "게티 센터 전시 공간",
    source: "https://triple.guide/tna/products/4b4df88e-8bd5-4fda-83d5-badb8f5369fb",
    sourceLabel: "The Getty Center"
  },
  6: {
    image: "https://cdn.sanity.io/images/bsnrdz4t/production/10fe8e134319fba3039c2300d5bf8f63271dd11b-5448x3030.jpg?w=1920&h=1080&q=80&fit=clip&auto=format",
    alt: "Knott’s Berry Farm 스카이라인과 어트랙션",
    source: "https://www.sixflags.com/knotts/attractions",
    sourceLabel: "Knott’s Berry Farm 공식"
  },
  7: {
    image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d7688082-6ace-4c5e-b1e4-3457416998ec",
    alt: "디즈니 캘리포니아 어드벤처",
    source: "https://triple.guide/tna/products/45fe1c19-21da-4106-99dc-6daef952a57e",
    sourceLabel: "Disney California Adventure"
  },
  8: {
    image: "https://admissions.uci.edu/assets/images/campus-highlights-aldrich-park.jpg",
    alt: "UC Irvine의 Aldrich Park",
    source: "https://admissions.uci.edu/celebrate-uci/campus-highlights.php",
    sourceLabel: "UCI 공식 Campus Highlights"
  },
  9: {
    image: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/terranea-resort/terranea392412-1/site-images/accommodations/enjoy-breathtaking-views-at-terranea-resort-rancho-palos-verdes-california.jpg",
    alt: "Terranea Resort와 태평양 전망",
    source: "https://www.terranea.com/gallery",
    sourceLabel: "Terranea Resort 공식 갤러리"
  },
  10: {
    image: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/terranea-resort/terranea392412-1/site-images/offers/third-night-complimentary-of-terranea-resort-rancho-palos-verdes-california.jpg",
    alt: "태평양 절벽 위 Terranea Resort",
    source: "https://www.terranea.com/gallery",
    sourceLabel: "Terranea Resort 공식 갤러리"
  },
  11: {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg/960px-Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
    alt: "LAX에서 귀국하는 날",
    source: "https://commons.wikimedia.org/wiki/File:Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
    sourceLabel: "LAX Tom Bradley 터미널 사진"
  }
};

const days = [
  {
    day: 1, date: "7/24 금", title: "LA 도착", theme: "공항 · 렌터카 · 호텔 체크인", hotel: "The Garland",
    timeline: [
      ["15:20", "LAX 도착", "입국심사 · 수하물 · 세관"],
      ["17:00", "Hertz 렌터카 픽업", "5251 W 98th St · 터미널에서 렌터카 셔틀 이동"],
      ["19:00", "The Garland 체크인", "셀프주차 후 짐 정리"],
      ["19:30", "In-N-Out Burger", "3640 Cahuenga Blvd"]
    ],
    move: ["LAX → Hertz → The Garland", "공항에서 호텔까지 약 45–70분", "호텔 셀프주차 $50+세금"],
    tips: ["렌터카 외관·연료·트렁크 적재 상태 확인", "국제면허증과 예약 확인서 준비", "피곤하면 저녁은 호텔 The Front Yard로 대체"],
    actions: [["Hertz 예약 확인서", LINKS.hertz, "ticket"], ["The Garland 바우처", LINKS.garlandVoucher, "ticket"], ["지도", LINKS.map]]
  },
  {
    day: 2, date: "7/25 토", title: "Exposition Park + LAFC", theme: "과학관 · 자연사박물관 · 축구 직관", hotel: "The Garland",
    timeline: [
      ["08:30", "Bea Bea’s 조식", "09:15 전후 출발"],
      ["09:55", "Blue Structure 주차", "3855 S Figueroa St · 재입차 없이 경기 종료까지 주차"],
      ["10:10", "LAFC HQ", "사이즈·영문 이름·등번호 확인 · 당일 수령 가능 시각 확답"],
      ["10:50", "California Science Center", "상설전시 중심"],
      ["12:30", "Mercado La Paloma", "재입차 불가 · Holbox까지 도보 왕복"],
      ["14:00", "Natural History Museum", "16:30 전후 종료"],
      ["16:30", "LAFC HQ 재방문", "오전에 완료 확답을 받은 경우 유니폼 수령"],
      ["17:30", "Family Picnic", "Christmas Tree Lane East · 킥오프 2시간 전"],
      ["19:30", "LAFC 경기", "vs. Sporting Kansas City · 종료 후 Blue Structure로 바로 이동"]
    ],
    move: ["Blue Structure · 3855 S Figueroa St", "주차장 재입차 불가", "경기 후 바로 출차"],
    tips: ["출발 전 종일 주차·추가결제 방식 전화 확인", "유니폼 영문 철자·등번호·사이즈를 두 번 확인", "당일 마킹 완료는 사전 확답 필요", "경기 전날 게이트·킥오프·주차 안내 재확인"],
    actions: [["LAFC 모바일 티켓", LINKS.lafc, "ticket"], ["지도", LINKS.map]]
  },
  {
    day: 3, date: "7/26 일", title: "Hollywood & Santa Monica", theme: "그리피스 · 할리우드 · 비벌리힐스 · 산타모니카", hotel: "The Garland",
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
    actions: [["지도", LINKS.map]]
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
    actions: [["Universal 티켓", LINKS.universal, "ticket"], ["지도", LINKS.map]]
  },
  {
    day: 5, date: "7/28 화", title: "Getty + 스트릿 쇼핑", theme: "미술 · 쇼핑 · 애너하임 이동", hotel: "JW Marriott Anaheim",
    timeline: [
      ["09:00", "호텔 체크아웃", "Getty Center 주차장까지 차량 이동 · 짐은 트렁크 안쪽에"],
      ["10:00", "Getty Center", "주차 후 트램 탑승 · 12:30까지 관람과 정원 산책"],
      ["12:30", "점심과 이동", "Sunset Blvd 방향 · 매장별 차량 이동"],
      ["13:30", "Supreme", "8801 Sunset Blvd · 점심과 매장 방문"],
      ["13:50", "Madhappy West Hollywood", "8906 Melrose Ave · 선물용 후디의 색상·사이즈부터 확인"],
      ["14:20", "Glossier", "8407 Melrose Ave · 인근 유료주차"],
      ["14:50", "Stüssy", "112 S La Brea Ave · 미터 주차 또는 인근 유료주차"],
      ["15:20", "La Brea Tar Pits", "Curson Ave & 6th St 주차 · 야외 Hancock Park만 짧게 관람"],
      ["16:20", "Anaheim 이동", "75–120분 예상"],
      ["19:00", "호텔 체크인", "체력 시 Downtown Disney"]
    ],
    move: ["Getty는 주차 후 트램으로 정상 이동", "쇼핑 매장 사이는 차량으로 나누어 이동", "Tar Pits 주차장 입구는 Curson Ave & 6th St · 카드만 가능"],
    tips: ["Getty 예약은 10:00", "Madhappy California 후디는 $185+세금 기준 · relaxed unisex fit이라 실착 권장", "원하는 재고가 없으면 Day 8 South Coast Plaza 매장을 대체 후보로 확인", "차량에 캐리어를 두므로 외부에 보이지 않게 적재", "Anaheim 러시아워를 고려해 16:30 전후 출발"],
    actions: [["Getty 예약 티켓", LINKS.getty, "ticket"], ["JW Marriott 바우처", LINKS.jwVoucher, "ticket"], ["지도", LINKS.map]]
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
    actions: [["지도", LINKS.map]]
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
    actions: [["성인 바우처", LINKS.dcaAdult, "ticket"], ["어린이 바우처", LINKS.dcaChild, "ticket"], ["지도", LINKS.map]]
  },
  {
    day: 8, date: "7/31 금", title: "OC 쇼핑 + UCI", theme: "South Coast Plaza · 캠퍼스 · Huntington Beach", hotel: "JW Marriott Anaheim",
    timeline: [
      ["08:30", "호텔 휴식", "수영장 · 부대시설"],
      ["10:30", "Victoria’s Secret", "Level 1 · Bloomingdale’s Wing · 첫 쇼핑 지점"],
      ["10:55", "South Coast Plaza · 쇼핑", "Ralph Lauren → UNIQLO·LEGO·Bath & Body Works"],
      ["12:00", "South Coast Plaza · 점심", "Din Tai Fung 예약 우선 · 빠른 식사는 Marugame Udon"],
      ["13:00", "South Coast Plaza 출발", "UCI Student Center Parking Structure로 이동"],
      ["13:30", "UC Irvine", "90분 캠퍼스 산책"],
      ["15:00", "UCI 출발", "Huntington Beach 이동"],
      ["15:30", "Huntington Beach", "피어 산책 · 서핑 구경 · 해변 또는 자전거"],
      ["17:45", "Huntington Beach 출발", "주차장 복귀 후 Anaheim 이동"],
      ["18:30", "호텔 복귀", "체력 시 루프톱"]
    ],
    move: ["UCI Student Center Parking Structure", "General 2시간권 $8 권장", "Student Center → The Hill → Aldrich Park → Ring Mall → Infinity Fountain"],
    tips: ["Victoria’s Secret은 Bloomingdale’s Wing 매장부터 방문", "UCI는 90분 산책으로 압축", "South Coast Plaza는 2시간 30분 안에 쇼핑과 점심 완료", "Huntington City Beach 주차는 시간당 $2 · 일일 최대 $15 기준"],
    actions: [["지도", LINKS.map]]
  },
  {
    day: 9, date: "8/1 토", title: "Terranea 이동", theme: "Del Amo · 해안 드라이브 · 리조트 입성", hotel: "Terranea Resort",
    timeline: [
      ["09:00", "호텔 체크아웃", "Del Amo로 이동"],
      ["10:30", "Del Amo Fashion Center", "Nordstrom 쪽 주차 · 핵심 매장부터 쇼핑"],
      ["11:30", "Victoria’s Secret", "Main Level · Lush와 Zara 사이 · 보완 쇼핑"],
      ["11:50", "See’s Candies", "#310A · 초콜릿 선물 구매"],
      ["12:10", "Del Amo 점심", "North Italia 또는 FRIDA · 빠른 식사는 Bazille"],
      ["13:20", "Del Amo 출발", "Pacific Coast Hwy 방향"],
      ["13:40", "Trader Joe’s", "Rolling Hills Plaza · 메이플 리프 쿠키와 귀국 선물 쇼핑"],
      ["14:20", "Palos Verdes", "해안 드라이브 · Point Vicente"],
      ["15:30", "Terranea 도착", "짐 보관 후 시설 이용"],
      ["16:00", "객실 입실", "체크인 가능 시간"],
      ["18:30", "mar’sel 저녁", "사전예약 권장"]
    ],
    move: ["Anaheim → Del Amo 약 60–90분", "Del Amo 주차 무료", "Terranea 숙박 발렛 약 $75/박"],
    tips: ["Del Amo Victoria’s Secret은 Day 8에 못 산 품목·사이즈 보완용", "Del Amo는 Nordstrom 구역과 Zara·UNIQLO 구역 중 우선순위를 정해 이동", "See’s 초콜릿은 보냉백에 넣고 트렁크에 오래 두지 않기", "Trader Joe’s에서는 메이플 리프 쿠키 재고를 먼저 확인", "객실 전 짐 보관 가능", "Point Vicente 체류는 체크인 시간에 맞춰 조정", "mar’sel 예약시간 재확인"],
    actions: [["Terranea 바우처", LINKS.terraneaVoucher, "ticket"], ["지도", LINKS.map]]
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
    tips: ["Cielo Point Pool은 만 21세 이상으로 가족 동선에서 제외", "Kids Club 이용 중 부모는 리조트 안에 있어야 함", "Resort Pool 운영 08:00–20:00 기준"],
    actions: [["지도", LINKS.map]]
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
    actions: [["Hertz 예약 확인서", LINKS.hertz, "ticket"], ["지도", LINKS.map]]
  }
];

const dayHighlights = {
  1: [
    {
      kicker: "렌터카 픽업",
      title: "Hertz LAX",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg/960px-Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
      alt: "LAX 도착 후 렌터카를 픽업하는 날",
      summary: "공항 셔틀로 Hertz 지점까지 이동해 예약 차량과 캐리어 4개 적재 상태를 직접 확인합니다.",
      points: ["주소: 5251 West 98th Street, Los Angeles, CA 90045", "24시간 운영 · 전화 (310) 568-5100", "픽업 7/24 17:00 · 외관·연료·트렁크 적재 상태 촬영"],
      source: "https://commons.wikimedia.org/wiki/File:Tom_Bradley_International_Terminal_taken_from_departing_flight_March_2016.jpg",
      sourceLabel: "LAX Tom Bradley 터미널 사진"
    }
  ],
  2: [
    {
      kicker: "아이들과 볼 것",
      title: "Natural History Museum",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/deaee31c-3a1d-44a2-b7ee-4ed62d92a67c",
      alt: "LA 자연사박물관 공룡 전시",
      summary: "공룡 홀을 먼저 보면 짧은 시간에도 만족도가 높습니다. 실제 화석 300여 점과 완성형 공룡 골격 20점, 성장 단계별 티라노사우루스 전시가 대표 볼거리입니다.",
      points: ["공룡 홀 우선 관람", "시간이 남으면 보석·광물 홀과 자연정원"],
      source: "https://triple.guide/tna/products/20e6dffe-3297-4d3d-b439-798c4ed3ae9f",
      sourceLabel: "트리플에서 전시 정보 보기"
    },
    {
      kicker: "오전 · 체험형 전시",
      title: "California Science Center",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/California_Science_Center.jpg",
      alt: "California Science Center 입구와 외관",
      summary: "짧은 관람이면 Ecosystems의 Kelp Forest와 체험 전시를 먼저 보고, 아이들이 고른 상설 갤러리로 이어가세요.",
      points: ["상설 전시 중심으로 90분 관람", "Kelp Forest와 체험형 전시를 우선"],
      source: "https://commons.wikimedia.org/wiki/File:California_Science_Center.jpg",
      sourceLabel: "California Science Center 사진"
    },
    {
      kicker: "경기 전 준비",
      title: "BMO Stadium · LAFC HQ",
      image: "https://bmostadium.com/wp-content/uploads/2025/05/bmo-stadium-express-hero-scaled.jpg",
      alt: "BMO Stadium 경기장과 축구 행사",
      summary: "아침에 주차한 뒤 LAFC HQ에서 유니폼 사이즈, 영문 이름과 등번호를 확정하세요. 당일 마킹 완료 시각을 받아두고 경기 입장 전에 수령하는 흐름이 가장 안전합니다.",
      points: ["좌석: Section 134 · Row E · Seats 13–16", "주문서와 영수증을 사진으로 저장", "16:30 전후 수령 가능 여부를 주문할 때 확답"],
      source: "https://bmostadium.com/bmo-stadium-express/",
      sourceLabel: "BMO Stadium 공식"
    }
  ],
  3: [
    {
      kicker: "오전 · 영화의 거리",
      title: "Hollywood",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/604781a9-d550-4ccc-9033-7fa1141d2af3",
      alt: "Hollywood의 대표 명소",
      summary: "Griffith Observatory에서 내려온 뒤 Walk of Fame과 TCL Chinese Theatre 중심으로 짧고 선명하게 둘러봅니다.",
      points: ["Ovation Hollywood에 주차", "명예의 거리와 차이니즈 극장 중심으로 체류 압축"],
      source: "https://triple.guide/tna/products/a85deaa3-21a8-4fbb-9049-b1447baad6ca",
      sourceLabel: "Hollywood 명소 정보"
    },
    {
      kicker: "오후 · 거리와 쇼핑",
      title: "Beverly Hills · Rodeo Drive",
      image: "https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/11/18/6zUQ/48otiZ5buJ.jpg",
      alt: "Beverly Hills와 Rodeo Drive",
      summary: "The Grove 점심과 쇼핑 뒤 Rodeo Drive로 이동해 거리 분위기와 Polo Ralph Lauren을 확인합니다.",
      points: ["차량으로 이동해 인근 주차장 이용", "쇼핑 시간은 유지하고 사진 포인트는 짧게"],
      source: "https://experiences.myrealtrip.com/products/3859681",
      sourceLabel: "LA 서부 투어 참고"
    },
    {
      kicker: "저녁 · 해변과 석양",
      title: "Santa Monica",
      image: "https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/11/18/BwBk/pHb6dN60wx.jpg",
      alt: "Santa Monica 해변과 피어",
      summary: "피어, 해변 산책과 석양을 한 구역에서 여유 있게 즐기는 Day 3의 마지막 일정입니다.",
      points: ["Lot 1 North 우선 검토", "피어·Pacific Park·Palisades Park 중 체력에 맞춰 선택"],
      source: "https://experiences.myrealtrip.com/products/3859681",
      sourceLabel: "Santa Monica 사진"
    }
  ],
  4: [
    {
      kicker: "두 번 방문 포인트",
      title: "Universal Studios Hollywood",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/a7cf1489-481c-4f87-aaa9-7b65480873a4",
      alt: "유니버설 스튜디오 할리우드",
      summary: "마리오 카트, 해리포터 구역, 스튜디오 투어를 첫 방문의 우선순위로 두세요. 추가 무료 1일은 놓친 어트랙션과 재탑승 위주로 짧게 쓰면 체력 부담이 적습니다.",
      points: ["티켓은 출력 없이 스마트폰 입장 가능", "첫날은 인기 시설, 추가 방문은 여유 관람"],
      source: "https://triple.guide/tna/products/82c26b51-448d-4c82-af49-dc3c2c2ffbdf",
      sourceLabel: "트리플에서 2일 이용권 정보 보기"
    }
  ],
  5: [
    {
      kicker: "예약 완료",
      title: "The Getty Center",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/874a5f5f-8229-41d6-b3a8-f3457e9733ad",
      alt: "게티 센터 전시 공간",
      summary: "상설 컬렉션에서 모네, 렘브란트, 반 고흐 등 익숙한 작가를 먼저 찾고 건축과 정원으로 이어가면 아이들도 흐름을 잡기 쉽습니다.",
      points: ["10:00 예약에 맞춰 주차장 도착", "작품 찾기 게임처럼 2–3개 대표작을 정해 관람"],
      source: "https://triple.guide/tna/products/4b4df88e-8bd5-4fda-83d5-badb8f5369fb",
      sourceLabel: "트리플에서 관람 포인트 보기"
    },
    {
      kicker: "오후 · 스트릿 쇼핑",
      title: "Sunset · Melrose · La Brea",
      image: "https://www.discoverlosangeles.com/sites/default/files/styles/max_1920x1920_kraken/public/images/2022-02/Alfred%20at%20Glossier%20Alley.jpeg.webp?auto=webp&fit=bound&itok=SJ_YjMvj&quality=72&width=480",
      alt: "Melrose Avenue의 Glossier Alley",
      summary: "Getty 관람 뒤 Supreme, Madhappy, Glossier, Stüssy를 차로 나누어 방문하고 각 블록 안에서만 짧게 걷습니다.",
      points: ["Supreme → Madhappy → Glossier → Stüssy 순서", "Madhappy에서는 선물용 후디의 색상·사이즈 재고를 먼저 확인", "캐리어는 트렁크 안쪽에 가리고 매장별 유료주차 이용"],
      source: "https://www.discoverlosangeles.com/things-to-do/the-guide-to-melrose-avenue-west",
      sourceLabel: "Discover Los Angeles"
    }
  ],
  6: [
    {
      kicker: "가족 테마파크",
      title: "Knott’s Berry Farm",
      image: "https://cdn.sanity.io/images/bsnrdz4t/production/10fe8e134319fba3039c2300d5bf8f63271dd11b-5448x3030.jpg?w=1920&h=1080&q=80&fit=clip&auto=format",
      alt: "Knott’s Berry Farm 스카이라인",
      summary: "오전에는 가족이 함께 탈 인기 어트랙션을 먼저 보고, 오후에는 아이들 선호에 따라 스릴 라이드와 Camp Snoopy를 나누어 움직이세요.",
      points: ["입장 직후 당일 운영 중단 시설 확인", "19:00 복귀 목표를 지켜 다음 날 체력 확보"],
      source: "https://www.sixflags.com/knotts/attractions",
      sourceLabel: "Knott’s 공식 어트랙션 안내"
    }
  ],
  7: [
    {
      kicker: "하루 핵심 구역",
      title: "Disney California Adventure",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d7688082-6ace-4c5e-b1e4-3457416998ec",
      alt: "디즈니 캘리포니아 어드벤처",
      summary: "Avengers Campus와 Pixar Pier를 큰 축으로 잡으면 동선이 단순해집니다. 가족이 꼭 탈 시설을 각자 하나씩 정하고 World of Color 시간을 기준으로 저녁을 배치하세요.",
      points: ["입장 전 성인·어린이 바우처를 각각 열어두기", "공연·가상 대기열은 공식 앱에서 당일 확인"],
      source: "https://triple.guide/tna/products/45fe1c19-21da-4106-99dc-6daef952a57e",
      sourceLabel: "트리플에서 파크 구성 보기"
    }
  ],
  8: [
    {
      kicker: "오전 · 쇼핑과 점심",
      title: "South Coast Plaza",
      image: "https://www.southcoastplaza.com/wp-content/uploads/2022/03/052209-Light-Canopy-on-Garden-Terrace-Imag-Large.jpeg",
      alt: "South Coast Plaza Garden Terrace",
      summary: "2시간 30분 안에 우선 매장과 점심을 끝내고 13:00에 UCI로 출발합니다.",
      points: ["Ralph Lauren → UNIQLO·LEGO 우선", "점심은 Din Tai Fung 또는 Marugame Udon"],
      source: "https://www.southcoastplaza.com/theedit/2022/03/about-south-coast-plaza/",
      sourceLabel: "South Coast Plaza 공식"
    },
    {
      kicker: "오후 · 캠퍼스 산책",
      title: "UC Irvine",
      image: "https://admissions.uci.edu/assets/images/campus-highlights-aldrich-park.jpg",
      alt: "UC Irvine의 Aldrich Park",
      summary: "아이들과 캠퍼스 분위기를 느끼고 가족의 추억을 돌아보는 90분 산책 코스입니다.",
      points: ["Student Center Parking Structure 이용", "The Hill → Aldrich Park → Ring Mall → Infinity Fountain"],
      source: "https://admissions.uci.edu/celebrate-uci/campus-highlights.php",
      sourceLabel: "UCI 공식 Campus Highlights"
    },
    {
      kicker: "늦은 오후 · 해변",
      title: "Huntington Beach",
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_716,q_75,w_639/v1/clients/surfcityusa-redesign/Huntington_City_Beach_webpage_a97bfba5-8516-4cc6-babf-2a10fa76b1b7.jpg",
      alt: "Huntington City Beach와 피어",
      summary: "피어를 중심으로 서핑 구경과 해변 산책을 즐기고 17:45 전후 호텔로 출발합니다.",
      points: ["피어 왕복 후 해변 또는 자전거 중 하나 선택", "Promenade 또는 피어 남·북쪽 주차장"],
      source: "https://www.surfcityusa.com/things-to-do/beaches/huntington-city-beach/",
      sourceLabel: "Huntington Beach 공식 안내"
    }
  ],
  9: [
    {
      kicker: "리조트 입성일",
      title: "Point Vicente → Terranea Resort",
      image: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/terranea-resort/terranea392412-1/site-images/accommodations/enjoy-breathtaking-views-at-terranea-resort-rancho-palos-verdes-california.jpg",
      alt: "Terranea Resort의 태평양 전망",
      summary: "Point Vicente는 전망과 짧은 산책만 즐기고, Terranea 체크인 뒤 해안 트레일과 저녁에 시간을 남겨두세요. 이 날의 목적지는 관광지보다 리조트 자체입니다.",
      points: ["체크인 전 도착하면 짐부터 맡기기", "mar’sel 예약시간을 기준으로 산책 종료"],
      source: "https://www.terranea.com/gallery",
      sourceLabel: "Terranea Resort 공식 갤러리"
    }
  ],
  10: [
    {
      kicker: "이동 없는 휴양일",
      title: "Terranea에서 천천히",
      image: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/terranea-resort/terranea392412-1/site-images/offers/third-night-complimentary-of-terranea-resort-rancho-palos-verdes-california.jpg",
      alt: "태평양 절벽 위 Terranea Resort",
      summary: "오전 해안 산책, 한낮 수영장, 늦은 오후 선셋으로 세 구간만 잡아두면 리조트를 충분히 누리면서도 일정에 쫓기지 않습니다.",
      points: ["아이들과 Resort Pool·워터슬라이드 운영시간 확인", "Cielo Point Pool은 만 21세 이상이므로 가족 동선에서 제외"],
      source: "https://www.terranea.com/gallery",
      sourceLabel: "Terranea Resort 공식 갤러리"
    }
  ],
  11: [
    {
      kicker: "귀국 동선",
      title: "Terranea → LAX",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e4cb43fe-da81-4b2d-9b08-0cca02e5b6e6",
      alt: "LAX 공항 이동 차량",
      summary: "차량 반납, 셔틀, 대한항공 체크인을 한 묶음으로 보고 역산하세요. 캐리어 4개와 가족이 함께 움직이므로 08:30 출발 계획을 늦추지 않는 편이 안전합니다.",
      points: ["주유 영수증과 렌터카 반납 완료 화면 저장", "대한항공 프레스티지 체크인 뒤 라운지 위치 확인"],
      source: "https://triple.guide/tna/products/f25c268a-d9f4-4c7c-a929-f2c4797120a3",
      sourceLabel: "트리플 LAX 이동 정보 참고"
    }
  ]
};

const santaMonicaActivities = [
  ["Route 66 표지", "피어 입구의 ‘End of the Trail’ 표지에서 가족사진"],
  ["Pacific Park", "Pacific Wheel 한 번 또는 아이들이 고른 게임 1–2개"],
  ["피어 아래 해변", "모래사장과 파도 구경 · 젖어도 되는 여벌 양말 준비"],
  ["Heal the Bay Aquarium", "피어 아래 소규모 수족관 · 운영시간이 맞을 때 선택"],
  ["Palisades Park", "피어 북쪽 절벽 공원에서 석양과 해안 전망"],
  ["Third Street Promenade", "피어에서 동쪽 두 블록 · 시간이 남을 때만 짧게"]
];

const attractionGuides = {
  4: {
    title: "Universal 대표 어트랙션",
    note: "키 제한은 공식 최소 신장입니다. 보호자 동반 조건은 현장에서 다시 확인하고, Thrill은 우리 가족 기준 체감 1–5입니다.",
    source: "https://www.universalstudioshollywood.com/web/en/us/ride-height-requirements",
    flow: "입장 직후 공식 앱에서 대기를 확인한 뒤 Super Nintendo World → Jurassic World → Mummy로 Lower Lot을 한 번에 봅니다. 점심 전후 Studio Tour, 오후 Harry Potter·Pets 순으로 올라오면 층간 이동을 줄일 수 있습니다.",
    items: [
      ["Mario Kart: Bowser’s Challenge", "102cm", "AR · 3D/4D 인터랙티브", 3],
      ["Jurassic World – The Ride", "107cm", "워터 라이드 · 급강하", 4],
      ["Harry Potter and the Forbidden Journey", "122cm", "모션 다크 라이드", 4],
      ["Revenge of the Mummy", "122cm", "실내 런치 코스터", 5],
      ["TRANSFORMERS: The Ride-3D", "102cm", "3D 모션 시뮬레이터", 4],
      ["Flight of the Hippogriff", "99cm", "패밀리 코스터", 3],
      ["The Secret Life of Pets", "86cm", "패밀리 다크 라이드", 1],
      ["Studio Tour", "공식 최소키 목록 없음", "트램 · 백롯 투어", 1]
    ]
  },
  6: {
    title: "Knott’s 인기 어트랙션",
    note: "키 제한은 공식 안내 기준이며, 보호자 동반 조건은 현장에서 다시 확인하세요. Thrill은 우리 가족 기준 체감 1–5입니다.",
    source: "https://www.sixflags.com/knotts/attractions",
    flow: "개장 직후 GhostRider를 먼저 확인하고 Ghost Town의 가족 라이드를 묶어 봅니다. 점심 뒤에는 스릴 라이드 팀과 Camp Snoopy·Bear-y Tales 팀으로 잠시 나눴다가 17:00 식사 전에 다시 합류하세요.",
    items: [
      ["GhostRider", "122cm", "대형 우든 코스터", 5],
      ["HangTime", "122–196cm", "다이브 코스터 · 96° 낙하", 5],
      ["Xcelerator", "132cm", "고속 런치 코스터", 5],
      ["Silver Bullet", "137cm", "인버티드 코스터", 5],
      ["Calico Mine Ride", "보호자 동반 시 제한 없음", "클래식 광산 다크 라이드", 1],
      ["Knott’s Bear-y Tales", "보호자 동반 시 제한 없음", "인터랙티브 다크 라이드", 1]
    ]
  },
  7: {
    title: "DCA 인기 어트랙션",
    note: "키 제한은 Disneyland 공식 최소 신장입니다. 여행일은 Soarin’ Across America의 2026년 7월 2일 개장 이후이며 당일 운영 여부는 공식 앱에서 확인하세요. Thrill은 우리 가족 기준 체감 1–5입니다.",
    source: "https://disneyland.disney.go.com/en-ca/attractions/disney-california-adventure/",
    flow: "입장 직후 Radiator Springs Racers 또는 Guardians 중 대기가 짧은 한 곳을 먼저 봅니다. Avengers Campus → Pixar Pier → Grizzly Peak 순으로 이동하고, 저녁에는 식사와 World of Color 관람 위치 확보에 시간을 남기세요.",
    items: [
      ["Radiator Springs Racers", "102cm", "Cars 다크 라이드 · 야외 레이스", 4],
      ["Guardians of the Galaxy – Mission: BREAKOUT!", "102cm", "프리폴 드롭 타워 · 실내", 5],
      ["Incredicoaster", "122cm", "런치 · 루프 코스터", 5],
      ["Soarin’ Across America", "102cm", "플라잉 시어터 · 80ft 돔", 2],
      ["Grizzly River Run", "107cm", "8인승 급류 래프트 · 젖음", 4],
      ["WEB SLINGERS: A Spider-Man Adventure", "제한 없음", "제스처 기반 인터랙티브 라이드", 2],
      ["Toy Story Midway Mania!", "제한 없음", "4D 슈팅 · 회전 다크 라이드", 2],
      ["The Little Mermaid", "제한 없음", "패밀리 다크 라이드", 1]
    ]
  }
};

const southCoastStores = [
  ["Victoria’s Secret", "Level 1 · Bloomingdale’s Wing", "10:30 첫 방문 · 선물과 원하는 사이즈를 먼저 확인"],
  ["Ralph Lauren", "Level 1 · Jewel Court", "가족 의류와 클래식 폴로를 먼저 확인"],
  ["UNIQLO", "Level 1 · Din Tai Fung Wing", "남녀·키즈·베이비 기본 아이템을 한 번에"],
  ["LEGO", "Level 1 · Din Tai Fung Wing", "Build-A-Mini와 Pick & Build Wall · 아이들 우선"],
  ["Bath & Body Works", "Level 1 · Din Tai Fung Wing", "미스트·로션·손 세정제 선물 · 100ml 초과 제품은 위탁수하물"],
  ["Nike", "Level 3 · Macy’s Home Store Wing", "가족용 신발과 스포츠웨어"],
  ["Apple Store", "Level 1 · Macy’s Home Store Wing", "필요한 액세서리가 있을 때 짧게"],
  ["The North Face", "Level 2 · Crate & Barrel Wing", "아웃도어 의류와 가족용 경량 재킷 확인"]
];

const southCoastLunch = [
  ["Din Tai Fung", "Level 2 · Din Tai Fung Wing", "샤오롱바오 · 매운 완탕 · 볶음밥", "예약 우선 · 가족 만족도 높음"],
  ["Marugame Udon", "Level 1 · Din Tai Fung Wing", "우동 · 튀김", "시간 절약용 1순위"],
  ["Ramen Nagi", "Level 1 · Crate & Barrel Wing", "돈코츠 라멘", "The North Face 동선과 연결"],
  ["Water Grill", "South Coast Drive Entrance", "해산물 · 생선 요리", "점심을 여유 있게 먹을 때"]
];

const huntingtonActivities = [
  ["Huntington Beach Pier", "1,850ft 피어를 왕복하며 서퍼와 해안 전망 보기"],
  ["City Beach", "피어 남쪽 모래사장 · 파도와 해변 산책"],
  ["Beach Bike Path", "피어 주변에서 자전거·탠덤·4인용 surrey를 45–60분 대여"],
  ["Main Street · Pacific City", "간식이나 이른 저녁 · 바다 전망 휴식"],
  ["선셋", "해변 또는 피어에서 일몰을 보고 17:45 전후 출발"]
];

const delAmoStores = [
  ["Nike Del Amo", "Main Level · Nordstrom 옆", "가족용 운동화와 스포츠웨어 · 첫 방문 추천"],
  ["FIFA World Cup 2026 Official Store", "Main Level · lululemon 근처", "축구 좋아하는 아이들과 공식 굿즈 확인"],
  ["Apple · Aritzia · Vuori", "Main Level · Nordstrom 구역", "서로 가까워 짧은 시간에 묶어 보기 좋은 매장군"],
  ["Nordstrom", "Main Level · Fashion Way", "가족 의류·신발·화장품을 한 번에 비교"],
  ["Victoria’s Secret", "Main Level · Lush와 Zara 사이", "Day 8에서 못 산 품목·사이즈를 11:30에 보완"],
  ["UNIQLO · Zara · H&M", "Main Level · Grand Entrance 구역", "기본 의류 중심 · 시간이 남을 때 두 번째 구역으로"],
  ["Shonen Jump Shop", "Outdoor Village · Lower Level", "애니메이션 굿즈에 관심 있는 아이가 있으면 선택"],
  ["Mitsuwa Marketplace", "Carson St · 별도 출입구", "일본 간식·식재료·Santouka 라멘 · 출차 직전 선택"]
];

const delAmoLunch = [
  ["North Italia", "Hawthorne Blvd · Barnes & Noble 근처", "피자 · 파스타 · 샐러드", "Terranea 방향 출차가 편한 1순위"],
  ["FRIDA", "Main Level · Nordstrom–Macy’s Women 사이", "타코 · 파히타 · 멕시칸 요리", "쇼핑 동선 안에서 식사"],
  ["Bazille at Nordstrom", "Nordstrom 내부", "샐러드 · 버거 · 비스트로 메뉴", "이동을 가장 줄이는 선택"],
  ["Santouka · Mitsuwa", "Mitsuwa Marketplace 내부", "시오 라멘 · 일본 푸드코트", "빠르고 익숙한 가족 식사"],
  ["Lucille’s Smokehouse BBQ", "Macy’s Women 외부 입구", "립 · 브리스킷 · 치킨", "미국식 BBQ를 원할 때"]
];

const day9GiftStops = [
  ["See’s Candies", "Del Amo · #310A", "초콜릿 선물은 쇼핑 마무리에 구매하고 보냉백에 보관"],
  ["Trader Joe’s", "2545 Pacific Coast Hwy · Rolling Hills Plaza", "메이플 리프 쿠키·시즈닝·에코백을 귀국 이틀 전에 구매"]
];

const day5Route = [
  ["09:00", "The Garland → Getty Center", "차량 25–35분", "1200 Getty Center Dr 주차장 → 트램 → 입구. 캐리어는 트렁크 안쪽에 가려 보관"],
  ["12:30", "Getty → Supreme", "차량 약 25분", "8801 Sunset Blvd 인근 유료주차 또는 발렛. 점심과 매장 방문을 한 번에"],
  ["13:50", "Supreme → Madhappy", "차량 5–10분", "8906 Melrose Ave. California 후디 색상·사이즈를 우선 확인하고 25–30분 안에 쇼핑"],
  ["14:20", "Madhappy → Glossier", "차량 5–10분", "8407 Melrose Ave 인근 유료주차. 매장 사이는 걷지 말고 차로 분리"],
  ["14:50", "Glossier → Stüssy", "차량 5–10분", "112 S La Brea Ave 인근 미터 주차 또는 유료주차"],
  ["15:20", "Stüssy → Tar Pits", "차량 5–10분", "5801 Wilshire Blvd · Curson Ave & 6th St 주차장. 카드만 가능 · $20 flat rate 기준"],
  ["16:20", "Tar Pits → Anaheim", "차량 75–120분", "1775 S Clementine St 도착 후 호텔 발렛. 러시아워가 심하면 Tar Pits 생략"]
];

const practicalGuides = {
  1: {
    title: "도착일 실행 순서",
    lead: "장거리 비행 뒤에는 선택지를 늘리지 말고 입국, 차량, 호텔, 저녁 네 단계만 순서대로 끝냅니다.",
    type: "route",
    items: [
      ["15:20–17:00", "입국 · 수하물", "LAX 도착 절차", "가족이 한 지점에서 다시 모인 뒤 렌터카 셔틀 승차장으로 이동"],
      ["17:00", "Hertz 차량 인수", "셔틀 → 계약 확인", "운전자 등록·연료 방식·기존 손상·캐리어 4개 적재 상태를 확인하고 사진 촬영"],
      ["19:00", "The Garland 체크인", "주차 → 프런트", "차량에 짐을 남기지 말고 보증금·주차 방식·Universal 셔틀 시간을 확인"],
      ["19:30", "첫 저녁", "In-N-Out 또는 호텔", "피로가 크면 운전을 추가하지 않고 The Front Yard로 바로 대체"]
    ]
  },
  10: {
    title: "Terranea 하루 선택지",
    lead: "모든 프로그램을 넣기보다 날씨와 가족 체력에 맞춰 산책, 수영장, Kids Club, 해양 체험 중 2–3가지만 고르세요.",
    type: "activity",
    items: [
      ["Coastal Trail", "아침 60–90분 산책 · Point Vicente와 해안 절벽 전망을 보며 무리 없는 구간만 왕복"],
      ["Resort Pool", "가족용 풀 08:00–20:00 · 140ft 워터슬라이드는 11:00–16:00 기준"],
      ["Kids Club", "만 3–12세, 배변 훈련 완료 조건의 drop-off 프로그램 · 부모는 리조트 안에 있어야 하며 예약 권장"],
      ["Tide Pool · Kayak", "바람과 파도에 따라 운영되는 유료 체험 · 전날 Experience Center에서 가능 시간 확인"],
      ["선셋과 저녁", "Nelson’s에서 캐주얼하게 보거나 mar’sel 예약을 기준으로 오후 활동 종료"]
    ],
    source: "https://www.terranea.com/experiences",
    sourceLabel: "Terranea 공식 Experiences"
  },
  11: {
    title: "귀국일 역산 체크",
    lead: "렌터카 반납부터 체크인, 라운지, 게이트 이동까지 한 단계씩 완료 화면을 남기면 가족이 흩어져도 진행 상황을 공유하기 쉽습니다.",
    type: "route",
    items: [
      ["07:30", "조식 · 체크아웃", "Terranea", "객실·금고·충전기 확인 후 프런트 최종 정산"],
      ["08:00", "LAX 방면 출발", "40–60분 + 정체 버퍼", "공항 직전 주유소 한 곳만 정하고 우회 동선은 만들지 않기"],
      ["09:00", "Hertz 반납", "차량 촬영 → 영수증", "연료·외관·트렁크를 촬영하고 반납 완료 화면 확인 후 셔틀 탑승"],
      ["09:30", "대한항공 체크인", "Prestige Class", "수하물 위탁 뒤 당일 이용 라운지 위치와 운영시간을 카운터에서 확인"],
      ["탑승 전", "라운지 → 게이트", "Boarding time 기준", "라운지에서 게이트까지 걸리는 시간을 확인하고 탑승 시작 전에 이동"]
    ],
    source: "https://www.koreanair.com/contents/plan-your-travel/at-the-airport/lounge",
    sourceLabel: "대한항공 공식 라운지 안내"
  }
};

const hotels = [
  {
    stay: "7/24–7/28 · 4박", name: "The Garland", address: "4222 Vineland Ave, North Hollywood, CA 91602",
    checkin: "15:00", checkout: "12:00", room: "Deluxe Room · Queen Bed 2개 · 금연", voucher: LINKS.garlandVoucher,
    image: "assets/info/hotel-garland.jpg", imageAlt: "The Garland 호텔과 트롤리", photoSource: "https://www.thegarland.com/hotel/gallery",
    tips: ["Universal 셔틀: 호텔 매시 정각 · 귀환 매시 :15 기준", "수영장 06:00–22:00", "The Front Yard는 파티오 좌석 요청", "셀프주차 $50+세금 · 발렛 $55+세금"]
  },
  {
    stay: "7/28–8/1 · 4박", name: "JW Marriott Anaheim", address: "1775 S Clementine St, Anaheim, CA 92802",
    checkin: "16:00", checkout: "11:00", room: "Deluxe Room · Queen Bed 2개 · Pool View · 금연", voucher: LINKS.jwVoucher,
    image: "assets/info/hotel-jw-anaheim.webp", imageAlt: "JW Marriott Anaheim 야외 수영장", photoSource: "https://www.marriott.com/en-us/hotels/snajw-jw-marriott-anaheim-resort/photos/",
    tips: ["DCA 전용 셔틀 없음 · 도보 이동", "Parkestry Rooftop에서 일부 불꽃놀이 조망 가능", "온수 야외 수영장과 JW Garden", "발렛 약 $68/일"]
  },
  {
    stay: "8/1–8/3 · 2박", name: "Terranea Resort", address: "100 Terranea Way, Rancho Palos Verdes, CA 90275",
    checkin: "16:00", checkout: "11:00", room: "Ocean Front Double · 금연", voucher: LINKS.terraneaVoucher,
    image: "assets/info/hotel-terranea.webp", imageAlt: "태평양을 바라보는 Terranea Resort", photoSource: "https://www.terranea.com/gallery",
    tips: ["객실 체크인 16:00 · 도착 즉시 짐 보관 가능", "Resort Pool 08:00–20:00", "워터슬라이드 11:00–16:00", "발렛 약 $75/박 · 리조트 피 약 $75/박"]
  }
];

const restaurants = [
  { day: "Day 1", name: "The Front Yard", mapQuery: "The Front Yard North Hollywood", rating: "4.4", reviews: "2,570", address: "4222 Vineland Ave, North Hollywood", menu: "Breakfast Buffet · French Toast · Burger", tip: "첫날 저녁 또는 조식, 파티오 권장", image: "assets/info/restaurant-front-yard.jpg", imageAlt: "The Front Yard 파티오 다이닝", photoSource: "https://www.thegarland.com/dine" },
  { day: "Day 1·4", name: "Porto’s Bakery and Cafe", mapQuery: "Porto's Bakery and Cafe Burbank", rating: "4.8", reviews: "26,096", address: "3614 W Magnolia Blvd, Burbank", menu: "Cheese Roll · Potato Ball · Guava Cheese Strudel", tip: "The Garland에서 차로 약 10–15분 · 아침 또는 간식 픽업", image: "assets/info/restaurant-portos.jpg", imageAlt: "Porto’s Bakery의 베이커리와 카페", photoSource: "https://www.portosbakery.com/" },
  { day: "Day 2", name: "Holbox", mapQuery: "Holbox Los Angeles Mercado La Paloma", rating: "4.8", reviews: "2,839", address: "3655 S Grand Ave #C9, Los Angeles", menu: "Fish Taco · Ceviche · Smoked Kanpachi Taco", tip: "Mercado La Paloma 점심", image: "assets/info/restaurant-holbox.jpg", imageAlt: "Holbox 세비체", photoSource: "https://www.holboxla.com/" },
  { day: "Day 3", name: "Musso & Frank Grill", mapQuery: "Musso & Frank Grill Hollywood", rating: "4.6", reviews: "3,862", address: "6667 Hollywood Blvd, Los Angeles", menu: "Prime Rib · Chicken Pot Pie · Grilled Steak", tip: "Hollywood의 클래식한 저녁 · 가격대 높고 예약 권장", image: "assets/info/restaurant-musso.jpg", imageAlt: "Musso & Frank Grill의 클래식한 다이닝룸", photoSource: "https://mussoandfrank.com/" },
  { day: "Day 3", name: "Pampas Grill", mapQuery: "Pampas Grill Churrascaria Farmers Market Los Angeles", rating: "4.5", reviews: "2,152", address: "6333 W 3rd St, Los Angeles", menu: "비프 스테이크 · 소시지 · 치킨", tip: "The Grove에서 가족 식사", image: "assets/info/restaurant-pampas.avif", imageAlt: "Pampas Grill 브라질식 슈하스코", photoSource: "https://www.pampas-grill.com/locations/culver-city" },
  { day: "Day 3", name: "Tar & Roses", mapQuery: "Tar & Roses Santa Monica", rating: "4.7", reviews: "1,110", address: "602 Santa Monica Blvd, Santa Monica", menu: "Oxtail Dumplings · Wood-roasted Cauliflower · Whole Fish", tip: "Santa Monica 저녁의 특별식 · 사전예약 권장", image: "assets/info/restaurant-tar-roses.webp", imageAlt: "Tar & Roses의 우드파이어 요리", photoSource: "https://www.tarandroses.com/" },
  { day: "Day 3", name: "UOVO Santa Monica", mapQuery: "UOVO Santa Monica", rating: "4.6", reviews: "1,867", address: "1320 2nd St Ste A, Santa Monica", menu: "Cacio e Pepe · Lasagna · Tagliatelle", tip: "산타모니카에서 아이들과 나누기 좋은 파스타 대안", image: "assets/info/restaurant-uovo.jpg", imageAlt: "UOVO의 생면 파스타", photoSource: "https://uovo.la/" },
  { day: "Day 4", name: "Toothsome", mapQuery: "The Toothsome Chocolate Emporium Universal CityWalk Hollywood", rating: "3.4", reviews: "978", address: "100 Universal City Plaza", menu: "Milkshake · Salmon · Steak", tip: "CityWalk, 예약 권장", image: "assets/info/restaurant-toothsome.jpg", imageAlt: "Toothsome 시그니처 밀크셰이크", photoSource: "https://media.universalparksusa.com/photos/toothsome-chocolate-emporium-at-ush-milkshakes/" },
  { day: "Day 5", name: "République", mapQuery: "République Los Angeles", rating: "4.5", reviews: "7,258", address: "624 S La Brea Ave, Los Angeles", menu: "Pastries · French Toast · Croque Madame", tip: "Getty 이후 La Brea·Melrose 이동 중 브런치 또는 이른 저녁", image: "assets/info/restaurant-republique.jpg", imageAlt: "République의 아치형 다이닝룸", photoSource: "https://republiquela.com/" },
  { day: "Day 5", name: "Anaheim Packing House", mapQuery: "Anaheim Packing District", rating: "4.6", reviews: "14,527", address: "440 S Anaheim Blvd, Anaheim", menu: "Naanwich · Fish & Chips · Shawarma", tip: "취향대로 고르기 쉬운 푸드홀", image: "assets/info/restaurant-packing-house.jpg", imageAlt: "Anaheim Packing House 내부", photoSource: "https://www.anaheimpackingdistrict.com/visitors" },
  { day: "Day 5·8", name: "Anaheim White House", mapQuery: "Anaheim White House Restaurant", rating: "4.8", reviews: "2,530", address: "887 S Anaheim Blvd, Anaheim", menu: "Filet Mignon · Pasta · Chilean Sea Bass", tip: "특별 저녁용 · 17:00 이후 영업, 예약 권장", image: "assets/info/restaurant-anaheim-white.webp", imageAlt: "Anaheim White House의 정원과 다이닝 공간", photoSource: "https://anaheimwhitehouse.com/" },
  { day: "Day 5·6", name: "Cortina’s Italian Market & Pizzeria", mapQuery: "Cortina's Italian Market & Pizzeria Anaheim", rating: "4.7", reviews: "3,899", address: "2175 W Orange Ave, Anaheim", menu: "Italian Sub · Pizza · Cannoli", tip: "호텔 또는 Knott’s 이동일의 캐주얼 테이크아웃", image: "assets/info/restaurant-cortinas.avif", imageAlt: "Cortina’s Italian Market & Pizzeria", photoSource: "https://cortinasitalianfood.com/" },
  { day: "Day 6", name: "Mrs. Knott’s Chicken Dinner", mapQuery: "Knott's Chicken Dinner Restaurant Buena Park", rating: "4.2", reviews: "5,666", address: "8039 Beach Blvd, Buena Park", menu: "Fried Chicken · Boysenberry Pie", tip: "대표 메뉴, 대기시간 확인", image: "assets/info/restaurant-knotts.webp", imageAlt: "Mrs. Knott’s Chicken Dinner Restaurant 다이닝룸", photoSource: "https://www.sixflags.com/knotts/dining/mrs-knotts-chicken-dinner-restaurant" },
  { day: "Day 7", name: "Lamplight Lounge", mapQuery: "Lamplight Lounge Disney California Adventure", rating: "4.1", reviews: "1,183", address: "1313 Disneyland Dr, Anaheim", menu: "Lobster Nachos · Fish Tacos · Sliders", tip: "Pixar Pier, 사전예약 권장", image: "assets/info/restaurant-lamplight.jpg", imageAlt: "Lamplight Lounge의 픽사 테마 좌석", photoSource: "https://disneyland.disney.go.com/en-ca/dining/disney-california-adventure/lamplight-lounge-boardwalk-dining/" },
  { day: "Day 8", name: "Din Tai Fung", mapQuery: "Din Tai Fung South Coast Plaza", rating: "4.5", reviews: "4,332", address: "3333 Bristol St, Costa Mesa", menu: "Xiao Long Bao · Spicy Wontons · Noodles", tip: "South Coast Plaza, 예약 권장", image: "assets/info/restaurant-dtf.webp", imageAlt: "Din Tai Fung 샤오롱바오", photoSource: "https://www.dintaifungusa.com/" },
  { day: "Day 8", name: "Round Table Pizza – Costa Mesa", mapQuery: "Round Table Pizza 1175 Baker Street Costa Mesa", rating: "4.0", reviews: "381", address: "1175 Baker St Suite A, Costa Mesa", menu: "Maui Zaui · King Arthur’s Supreme · Garlic Parmesan Twists", tip: "하와이에서 방문했던 동일 체인 · South Coast Plaza 전후 캐주얼 식사", image: "assets/info/restaurant-round-table.jpeg", imageAlt: "Round Table Pizza의 Maui Zaui 피자", photoSource: "https://www.roundtablepizza.com/menu/" },
  { day: "Day 8", name: "Water Grill", mapQuery: "Water Grill South Coast Plaza", rating: "4.6", reviews: "3,113", address: "3300 Bristol St, Costa Mesa", menu: "Oysters · Wild Fish · Lobster", tip: "South Coast Plaza 맞은편 · 해산물 특별식, 가격대 높음", image: "assets/info/restaurant-water-grill.jpg", imageAlt: "Water Grill South Coast Plaza의 다이닝 공간", photoSource: "https://www.watergrill.com/southcoast" },
  { day: "Day 8", name: "Duke’s Huntington Beach", mapQuery: "Duke's Huntington Beach", rating: "4.5", reviews: "5,028", address: "317 Pacific Coast Hwy, Huntington Beach", menu: "Fish Tacos · Fresh Fish · Hula Pie", tip: "피어 바로 앞 · 선셋 식사, 예약 권장", image: "assets/info/restaurant-dukes.jpg", imageAlt: "Duke’s Huntington Beach의 해변 분위기", photoSource: "https://www.dukeshuntington.com/" },
  { day: "Day 9", name: "King’s Hawaiian Bakery & Restaurant", mapQuery: "King's Hawaiian Bakery & Restaurant Torrance", rating: "4.6", reviews: "5,436", address: "2808 Sepulveda Blvd, Torrance", menu: "Loco Moco · Kalua Pork · Paradise Cake", tip: "Del Amo 쇼핑 전후 가족 점심 · 주차 편리", image: "assets/info/restaurant-kings-hawaiian.webp", imageAlt: "King’s Hawaiian Bakery의 시그니처 디저트", photoSource: "https://www.khbakery.com/" },
  { day: "Day 9–10", name: "Nelson’s", mapQuery: "Nelson's Terranea Resort", rating: "4.3", reviews: "1,775", address: "100 Terranea Way", menu: "Fish Tacos · Ahi Tuna Burger", tip: "가족 캐주얼 · 선셋", image: "assets/info/restaurant-nelsons.webp", imageAlt: "Nelson’s의 태평양 전망 야외 좌석", photoSource: "https://www.terranea.com/dining/nelsons" },
  { day: "Day 9–10", name: "mar’sel", mapQuery: "Mar'sel Terranea Resort", rating: "4.5", reviews: "389", address: "100 Terranea Way", menu: "Filet Mignon · Lobster · 계절 메뉴", tip: "특별 저녁, 사전예약 권장", image: "assets/info/restaurant-marsel.webp", imageAlt: "mar’sel의 오션뷰 브런치", photoSource: "https://www.terranea.com/dining/marsel" }
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
  "너츠베리 팜 티켓 예약 · 오프라인 저장",
  "미국용 유심/eSIM 설치 · 개통 확인"
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

function mapPlace(placeName) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;
}

function koreanAirAppUrl() {
  return appLaunchUrl(LINKS.koreanAir, "com.koreanair.passenger");
}

function hotelsAppUrl() {
  return appLaunchUrl(LINKS.hotels, "com.hcom.android");
}

function appLaunchUrl(webUrl, packageName) {
  if (!/Android/i.test(navigator.userAgent)) return webUrl;
  const destination = webUrl.replace(/^https?:\/\//, "");
  return `intent://${destination}#Intent;scheme=https;package=${packageName};S.browser_fallback_url=${encodeURIComponent(webUrl)};end`;
}

function dayMapEmbedUrl(dayNumber) {
  const source = DAY_MAPS[dayNumber] || LINKS.map;
  const mid = source.match(/[?&]mid=([^&]+)/)?.[1];
  const view = DAY_MAP_VIEWS[dayNumber];
  const viewport = view ? `&ll=${encodeURIComponent(view.center)}&z=${view.zoom}` : "";
  return mid ? `https://www.google.com/maps/d/embed?mid=${encodeURIComponent(mid)}&ehbc=2E312F&noprof=1${viewport}` : source;
}

function dayMapViewerUrl(dayNumber) {
  const source = DAY_MAPS[dayNumber] || LINKS.map;
  const view = DAY_MAP_VIEWS[dayNumber];
  return view ? `${source}&ll=${encodeURIComponent(view.center)}&z=${view.zoom}` : source;
}

function renderDayMap(day) {
  const source = dayMapViewerUrl(day.day);
  return `<section class="section day-map-section">
    <div class="day-map-head">
      <div><span class="section-kicker">DAY ${day.day} · ${day.date}</span><h2>지도</h2></div>
      <span class="map-day-chip">${day.timeline.length}개 일정</span>
    </div>
    <div class="day-map-frame"><iframe src="${dayMapEmbedUrl(day.day)}" title="Day ${day.day} 이동 지도" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    <div class="day-map-footer"><p>지도를 움직이거나 핀을 눌러 방문지와 메모를 확인하세요.</p><a href="${source}" target="_blank" rel="noopener">크게 보기 ↗</a></div>
  </section>`;
}

function renderHighlightCard(item) {
  const images = item.images || (item.image ? [item.image] : []);
  const primarySource = item.source || item.sources?.[0]?.[1] || "#";
  const media = images.length
    ? `<a class="place-media ${images.length > 1 ? "place-gallery" : ""}" href="${primarySource}" target="_blank" rel="noopener">${images.map((src, index) => `<img src="${src}" alt="${index === 0 ? item.alt : `${item.title} 추가 사진 ${index + 1}`}" loading="lazy" decoding="async">`).join("")}<span>${item.kicker}</span></a>`
    : `<div class="place-media placeholder"><span>${item.kicker}</span><strong>${item.title}</strong></div>`;
  const sources = item.sources
    ? `<div class="place-sources">${item.sources.map(([label, href]) => `<a class="place-source" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}</div>`
    : item.source ? `<a class="place-source" href="${item.source}" target="_blank" rel="noopener">사진·정보: ${item.sourceLabel} ↗</a>` : "";
  return `<article class="place-card">${media}<div class="place-body"><h3>${item.title}</h3><p>${item.summary}</p><ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul>${sources}</div></article>`;
}

function renderSantaMonicaGuide() {
  return `<section class="section feature-guide santa-guide">
    <div class="section-heading"><h2>Santa Monica에서 할 것</h2></div>
    <p class="guide-lead">쇼핑 일정은 그대로 두고, 18:15 도착부터 석양까지 피어 안에서 이동이 짧은 활동을 골라 즐기세요.</p>
    <div class="activity-grid">${santaMonicaActivities.map(([title, note], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${note}</p></div></article>`).join("")}</div>
    <div class="flow-note"><strong>추천 2시간 흐름</strong><p>Route 66 사진 → Pacific Wheel 또는 게임 → 해변 산책 → 피어 저녁 → Palisades Park 석양. Third Street는 시간이 남을 때만 추가.</p></div>
    <a class="guide-source" href="https://www.santamonica.com/things-to-do/" target="_blank" rel="noopener">Santa Monica 공식 관광 정보 ↗</a>
  </section>`;
}

function thrillMeter(level) {
  return `<span class="thrill-meter" aria-label="Thrill ${level} / 5"><i>${"●".repeat(level)}${"○".repeat(5 - level)}</i><b>Thrill ${level}/5</b></span>`;
}

function renderAttractionGuide(dayNumber) {
  const guide = attractionGuides[dayNumber];
  return `<section class="section feature-guide attraction-guide">
    <div class="section-heading"><h2>${guide.title}</h2></div>
    <p class="guide-lead">${guide.note}</p>
    <div class="attraction-grid">${guide.items.map(([name, height, type, thrill]) => `<article class="attraction-card"><h3>${name}</h3><dl><div><dt>키 제한</dt><dd>${height}</dd></div><div><dt>형태</dt><dd>${type}</dd></div></dl>${thrillMeter(thrill)}</article>`).join("")}</div>
    ${guide.flow ? `<div class="flow-note"><strong>추천 공략 흐름</strong><p>${guide.flow}</p></div>` : ""}
    <a class="guide-source" href="${guide.source}" target="_blank" rel="noopener">공식 어트랙션 안내 확인 ↗</a>
  </section>`;
}

function renderPracticalGuide(dayNumber) {
  const guide = practicalGuides[dayNumber];
  if (!guide) return "";
  const content = guide.type === "route"
    ? `<div class="route-list">${guide.items.map(([time, title, mode, note]) => `<article><time>${time}</time><div><h3>${title}</h3><span>${mode}</span><p>${note}</p></div></article>`).join("")}</div>`
    : `<div class="activity-grid">${guide.items.map(([title, note], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${note}</p></div></article>`).join("")}</div>`;
  const source = guide.source ? `<a class="guide-source" href="${guide.source}" target="_blank" rel="noopener">${guide.sourceLabel} ↗</a>` : "";
  return `<section class="section feature-guide practical-guide">
    <div class="section-heading"><h2>${guide.title}</h2></div>
    <p class="guide-lead">${guide.lead}</p>
    ${content}${source}
  </section>`;
}

function renderDay5Route() {
  return `<section class="section feature-guide route-guide">
    <div class="section-heading"><h2>차량 · 주차 · 도보 동선</h2></div>
    <p class="guide-lead">캐리어가 실린 날이라 매장 사이는 차량으로 나누어 이동하고, 주차 후 각 블록 안에서만 짧게 걷습니다.</p>
    <div class="route-list">${day5Route.map(([time, route, mode, note]) => `<article><time>${time}</time><div><h3>${route}</h3><span>${mode}</span><p>${note}</p></div></article>`).join("")}</div>
    <p class="route-alert">La Brea Tar Pits 박물관은 현재 공사 휴관 안내가 있으므로 야외 Hancock Park와 타르 피트만 짧게 보고, 출발 전 공식 사이트에서 운영 상태를 다시 확인하세요.</p>
    <div class="place-sources"><a class="guide-source" href="https://www.madhappy.com/pages/stores" target="_blank" rel="noopener">Madhappy 공식 매장·영업시간 ↗</a><a class="guide-source" href="https://tarpits.org/plan-your-visit/parking-and-directions" target="_blank" rel="noopener">Tar Pits 공식 주차·운영 안내 ↗</a></div>
  </section>`;
}

function renderDay8Guide() {
  return `<section class="section feature-guide shopping-guide">
    <div class="section-heading"><h2>오전 · South Coast Plaza</h2></div>
    <p class="guide-lead">10:30–12:00 쇼핑, 12:00–13:00 점심으로 나눕니다. 넓은 몰이라 모든 매장을 돌기보다 가족별 우선 매장만 연결하세요.</p>
    <div class="shopping-grid">${southCoastStores.map(([name, location, note]) => `<article><h3>${name}</h3><span>${location}</span><p>${note}</p></article>`).join("")}</div>
    <h3 class="subsection-title">점심 후보</h3>
    <div class="lunch-grid">${southCoastLunch.map(([name, location, menu, tip]) => `<article><div><h3>${name}</h3><span>${location}</span></div><p><b>${menu}</b><small>${tip}</small></p></article>`).join("")}</div>
    <div class="flow-note"><strong>추천 동선</strong><p>Victoria’s Secret → Ralph Lauren → UNIQLO·LEGO → Bath & Body Works → 12:00 Din Tai Fung. Nike·Apple은 필요한 물건이 있을 때만 추가하고 13:00에는 출차.</p></div>
    <div class="place-sources"><a class="guide-source" href="https://www.southcoastplaza.com/directory/victorias-secret/" target="_blank" rel="noopener">Victoria’s Secret 공식 안내 ↗</a><a class="guide-source" href="https://www.southcoastplaza.com/directory/" target="_blank" rel="noopener">South Coast Plaza 공식 디렉터리 ↗</a></div>
  </section>

  <section class="section feature-guide huntington-guide">
    <div class="section-heading"><h2>오후 · Huntington Beach</h2></div>
    <p class="guide-lead">15:30 도착 후 약 2시간만 머뭅니다. 피어를 중심으로 해변 또는 자전거 중 하나를 골라야 UCI 일정과 호텔 복귀 시간이 모두 지켜집니다.</p>
    <div class="activity-grid">${huntingtonActivities.map(([title, note], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${title}</h3><p>${note}</p></div></article>`).join("")}</div>
    <div class="flow-note"><strong>추천 2시간 흐름</strong><p>피어 왕복·서핑 구경 40분 → 해변 또는 자전거 50분 → Main Street·Pacific City 간식 20분 → 주차장 복귀.</p></div>
    <p class="route-alert">Promenade 주차장 또는 피어 남·북쪽 주차장을 이용하세요. 공식 관광 안내 기준 시간당 $2, 일일 최대 $15이며 변동될 수 있습니다. 7월 오후의 무료 화덕은 선착순 경쟁이 치열해 이번 일정에는 bonfire를 권하지 않습니다.</p>
    <a class="guide-source" href="https://www.surfcityusa.com/things-to-do/beaches/huntington-city-beach/" target="_blank" rel="noopener">Huntington City Beach 공식 안내 ↗</a>
  </section>`;
}

function renderDay9Guide() {
  return `<section class="section feature-guide shopping-guide del-amo-guide">
    <div class="section-heading"><h2>Del Amo · 매장과 점심</h2></div>
    <p class="guide-lead">10:30–12:10 쇼핑, 12:10–13:10 점심으로 잡습니다. Nordstrom 입구 쪽에 주차하면 우선 매장과 식당이 모여 있어 Point Vicente로 이동하기도 편합니다.</p>
    <div class="shopping-grid">${delAmoStores.map(([name, location, note]) => `<article><h3>${name}</h3><span>${location}</span><p>${note}</p></article>`).join("")}</div>
    <div class="flow-note"><strong>추천 쇼핑 순서</strong><p>Nike → FIFA World Cup 2026 Official Store → Nordstrom → Victoria’s Secret → See’s Candies. Apple·Aritzia·Vuori와 Zara·UNIQLO 구역은 필요한 품목이 있을 때만 추가.</p></div>
    <h3 class="subsection-title">점심 후보</h3>
    <div class="lunch-grid">${delAmoLunch.map(([name, location, menu, tip]) => `<article><div><h3>${name}</h3><span>${location}</span></div><p><b>${menu}</b><small>${tip}</small></p></article>`).join("")}</div>
    <h3 class="subsection-title">귀국 선물</h3>
    <div class="shopping-grid">${day9GiftStops.map(([name, location, note]) => `<article><h3>${name}</h3><span>${location}</span><p>${note}</p></article>`).join("")}</div>
    <div class="flow-note"><strong>선물 쇼핑 흐름</strong><p>Del Amo 안에서 See’s Candies 구매 → 점심 → 13:20 출차 → Rolling Hills Plaza Trader Joe’s 25분 → Point Vicente. 메이플 리프 쿠키는 시즌·지점별 재고가 달라 보이면 먼저 담으세요.</p></div>
    <p class="route-alert">Din Tai Fung은 Del Amo에도 있지만 Day 8 South Coast Plaza에서 이용할 가능성이 높아 Day 9 추천에서는 우선순위를 낮췄습니다. North Italia는 몰 외곽 Hawthorne Blvd 쪽이라 식사 후 바로 출차하기 좋습니다.</p>
    <div class="place-sources"><a class="guide-source" href="https://www.simon.com/mall/del-amo-fashion-center/stores/victorias-secret/specialty-shops" target="_blank" rel="noopener">Victoria’s Secret 공식 안내 ↗</a><a class="guide-source" href="https://www.simon.com/mall/del-amo-fashion-center/stores/print" target="_blank" rel="noopener">Del Amo 공식 매장 디렉터리 ↗</a><a class="guide-source" href="https://chocolateshops.sees.com/ca/torrance/chocolate_shops_torrance_ca_1ca070.html" target="_blank" rel="noopener">See’s Candies 공식 매장 ↗</a><a class="guide-source" href="https://locations.traderjoes.com/ca/torrance/29/" target="_blank" rel="noopener">Trader Joe’s 공식 지점 ↗</a><a class="guide-source" href="https://www.simon.com/mall/del-amo-fashion-center/dining" target="_blank" rel="noopener">공식 레스토랑 안내 ↗</a></div>
  </section>`;
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
  const saved = checklistState();
  const done = checklistItems.filter((_, index) => saved[index]).length;
  return `
    <div class="page">
      <section class="hero">
        <p class="eyebrow">Los Angeles · Summer 2026</p>
        <h1>우리 가족의 LA 여름</h1>
        <p>테마파크부터 축구, 쇼핑, 태평양 휴양까지. 이동 중 필요한 정보만 빠르게 꺼내보는 10박 11일 가이드.</p>
        <div class="countdown">${countdownText()}</div>
        <a class="hero-credit" href="https://experiences.myrealtrip.com/products/3859681" target="_blank" rel="noopener">사진 · LA 서부 해안 ↗</a>
      </section>

      <section class="section flight-section">
        <div class="section-heading"><h2>항공권</h2></div>
        <div class="flight-timeline" aria-label="왕복 항공편">
          <article class="flight-leg">
            <span class="flight-marker">↗</span>
            <div class="flight-card">
              <div class="flight-card-head"><span>갈 때</span><strong>7/24 금 · KE011</strong></div>
              <div class="flight-route"><span><small>출발</small><b>ICN T2</b><time>19:40</time></span><i>→</i><span><small>도착</small><b>LAX</b><time>15:20</time></span></div>
            </div>
          </article>
          <article class="flight-leg">
            <span class="flight-marker">↙</span>
            <div class="flight-card">
              <div class="flight-card-head"><span>올 때</span><strong>8/3 월 · KE018</strong></div>
              <div class="flight-route"><span><small>출발</small><b>LAX</b><time>12:30</time></span><i>→</i><span><small>도착 · 8/4</small><b>ICN</b><time>17:20</time></span></div>
            </div>
          </article>
        </div>
        <a class="airline-app-link" href="${koreanAirAppUrl()}"><span>✈️ 대한항공 My 앱</span><small>설치된 앱에서 열기 ↗</small></a>
      </section>

      <section class="section">
        <div class="section-heading"><h2>출발 전 Checklist</h2><span class="check-progress">${done} / ${checklistItems.length} 완료</span></div>
        <article class="home-checklist">
          <div class="home-checklist-scroll">${checklistItems.map((item, index) => `<label class="check-item"><input type="checkbox" data-check="${index}" ${saved[index] ? "checked" : ""}><span>${item}</span></label>`).join("")}</div>
        </article>
      </section>

      <section class="section">
        <div class="section-heading"><h2>숙소</h2></div>
        <div class="hotel-scroll-shell"><div class="hotel-timeline">${hotels.map((h, index) => `<article class="hotel-stop"><div class="hotel-marker"><span>${index + 1}</span></div><div class="hotel-card"><span class="tag">${h.stay}</span><h3>${h.name}</h3><div class="hotel-times"><span><b>체크인</b>${h.checkin}</span><span><b>체크아웃</b>${h.checkout}</span></div><p class="hotel-room">${h.room}</p><a class="address-link" href="${mapAddress(h.address)}" target="_blank" rel="noopener">${h.address} ↗</a><a class="voucher-link" href="${h.voucher}" target="_blank" rel="noopener">호텔 바우처 열기 ↗</a></div></article>`).join("")}</div></div>
        <a class="hotels-app-link" href="${hotelsAppUrl()}"><span>🏨 Hotels.com 앱</span><small>설치된 앱에서 열기 ↗</small></a>
      </section>

      <section class="section">
        <div class="section-heading"><h2>Day 바로가기</h2><a href="#days">전체 보기</a></div>
        <div class="home-day-grid">${days.slice(0, 10).map(d => `<a class="home-day-card" href="#day-${d.day}" title="${d.title}"><b>DAY ${d.day}</b><time>${d.date}</time><strong>${d.title}</strong></a>`).join("")}</div>
        <a class="home-day-last" href="#day-11"><span><b>DAY 11</b><time>8/3 월</time></span><strong>귀국</strong><span>›</span></a>
      </section>

      <section class="section">
        <div class="section-heading"><h2>빠른 실행</h2></div>
        <div class="quick-actions">
          ${extLink("Day 1 시작", "#day-1", "primary").replace('target="_blank" rel="noopener"', '')}
          ${extLink("Day 1 지도", "#day-1", "").replace('target="_blank" rel="noopener"', '')}
          ${extLink("원본 일정", LINKS.source)}
          ${extLink("Drive 폴더", LINKS.folder)}
        </div>
      </section>

    </div>`;
}

function renderDay(day) {
  const prev = day.day > 1 ? days[day.day - 2] : null;
  const next = day.day < days.length ? days[day.day] : null;
  const highlights = dayHighlights[day.day] || [];
  const detailActions = day.actions.filter(([, href]) => href !== LINKS.map);
  const visual = dayVisuals[day.day];
  return `
    <article class="page day-page" data-day="${day.day}">
      <header class="day-hero day-cover">
        <img src="${visual.image}" alt="${visual.alt}" decoding="async">
        <div class="day-cover-shade"></div>
        <div class="day-cover-content">
          <div class="day-meta"><span class="chip">DAY ${day.day}</span><span class="day-date">${day.date}</span></div>
          <h1>${day.title}</h1>
          <p class="theme">${day.theme}</p>
          <span class="day-hotel">숙소 · ${day.hotel}</span>
        </div>
        <a class="day-photo-source" href="${visual.source}" target="_blank" rel="noopener">사진 · ${visual.sourceLabel} ↗</a>
      </header>

      <nav class="day-tabs" aria-label="날짜 바로가기">${days.map(d => `<a href="#day-${d.day}" class="${d.day === day.day ? "active" : ""}"><b>day${d.day}</b><small>${d.date.split(" ")[0]}</small></a>`).join("")}</nav>

      ${renderDayMap(day)}

      <section class="section itinerary-section">
        <div class="section-heading itinerary-heading"><div><span class="section-kicker">${day.date} · ${day.hotel}</span><h2>오늘 일정</h2></div></div>
        <div class="timeline numbered-timeline">${day.timeline.map(([time, title, note], index) => `<article class="timeline-item"><span class="timeline-number">${index + 1}</span><time>${time}</time><div class="timeline-card"><p>${title}</p><small>${note}</small></div></article>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><div><span class="section-kicker">Photo guide</span><h2>장소 미리보기</h2></div></div>
        <div class="place-grid">${highlights.map(renderHighlightCard).join("")}</div>
      </section>

      ${day.day === 3 ? renderSantaMonicaGuide() : ""}
      ${attractionGuides[day.day] ? renderAttractionGuide(day.day) : ""}
      ${day.day === 5 ? renderDay5Route() : ""}
      ${day.day === 8 ? renderDay8Guide() : ""}
      ${day.day === 9 ? renderDay9Guide() : ""}
      ${practicalGuides[day.day] ? renderPracticalGuide(day.day) : ""}

      ${day.day !== 2 ? `<section class="section card-stack day-notes">
        <article class="info-card accent"><span class="note-icon">↗</span><div><h3>이동 · 주차</h3><ul class="info-list">${day.move.map(x => `<li>${x}</li>`).join("")}</ul></div></article>
        <article class="info-card warn"><span class="note-icon">!</span><div><h3>꼭 확인</h3><ul class="info-list">${day.tips.map(x => `<li>${x}</li>`).join("")}</ul></div></article>
      </section>` : ""}

      ${detailActions.length ? `<section class="section">
        <div class="section-heading"><h2>이 날 필요한 링크</h2></div>
        <div class="button-row">${detailActions.map(([label, href, kind]) => extLink(label, href, kind)).join("")}</div>
      </section>` : ""}

      <nav class="slide-controls" aria-label="날짜 이동">
        ${prev ? `<a href="#day-${prev.day}">← Day ${prev.day}<br>${prev.title}</a>` : `<a href="#home">← 여행 홈</a>`}
        ${next ? `<a href="#day-${next.day}">Day ${next.day} →<br>${next.title}</a>` : `<a href="#home">여행 홈 →</a>`}
      </nav>
    </article>`;
}

function renderDays() {
  return `<div class="page"><p class="eyebrow">10 nights · 11 days</p><h1 class="page-title">전체 일정</h1><p class="page-lead">날짜를 누르면 그날의 타임라인과 주차·예약 정보를 바로 확인할 수 있습니다.</p><div class="all-days">${days.map(d => `<a class="day-row" href="#day-${d.day}"><img src="${dayVisuals[d.day].image}" alt="" loading="lazy" decoding="async"><span class="day-number">${d.day}</span><span><small>DAY ${d.day} · ${d.date}</small><h3>${d.title}</h3><p>${d.theme}</p></span><span>›</span></a>`).join("")}</div></div>`;
}

function renderInfo() {
  return `
    <div class="page">
      <p class="eyebrow">Stay · Eat · Prepare</p>
      <h1 class="page-title">여행정보</h1>
      <p class="page-lead">호텔 이용 팁과 일정에 맞춘 식당을 한곳에 모았습니다.</p>

      <section class="section">
        <div class="section-heading"><h2>호텔 이용 팁</h2></div>
        <div class="hotel-info-grid">${hotels.map(h => `<article class="info-card hotel-block photo-card"><a class="photo-card-media" href="${h.photoSource}" target="_blank" rel="noopener"><img src="${h.image}" alt="${h.imageAlt}" loading="lazy"><span>공식 사진 ↗</span></a><div class="photo-card-body"><span class="tag">${h.stay}</span><h3>${h.name}</h3><div class="hotel-times"><span><b>체크인</b>${h.checkin}</span><span><b>체크아웃</b>${h.checkout}</span></div><p class="hotel-room">${h.room}</p><a class="address-link" href="${mapAddress(h.address)}" target="_blank" rel="noopener">${h.address} ↗</a><ul class="info-list">${h.tips.map(x => `<li>${x}</li>`).join("")}</ul><a class="voucher-link" href="${h.voucher}" target="_blank" rel="noopener">호텔 바우처 열기 ↗</a></div></article>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>추천 레스토랑</h2></div>
        <p class="rating-note">Google Maps 평점·리뷰 수는 2026. 7. 18–19 확인 기준이며 변동될 수 있습니다. 식당명을 누르면 지도에서 장소를 바로 확인할 수 있습니다.</p>
        <div class="restaurant-grid">${restaurants.map(r => `<article class="restaurant-card photo-card"><a class="photo-card-media" href="${r.photoSource}" target="_blank" rel="noopener"><img src="${r.image}" alt="${r.imageAlt}" loading="lazy"><span>${r.day} · 공식 사진 ↗</span></a><div class="photo-card-body"><div class="restaurant-title-row"><h3><a class="restaurant-name-link" href="${mapPlace(r.mapQuery || r.name)}" target="_blank" rel="noopener">${r.name} ↗</a></h3><span class="restaurant-rating" aria-label="Google Maps 평점 ${r.rating}, 리뷰 ${r.reviews}개">Google ★ ${r.rating} <small>(${r.reviews})</small></span></div><p class="menu">${r.menu}</p><p>${r.tip}</p><a class="address-link" href="${mapAddress(r.address)}" target="_blank" rel="noopener">${r.address} ↗</a></div></article>`).join("")}</div>
      </section>

      <section class="section quick-actions">${extLink("원본 일정", LINKS.source)}${extLink("Day별 지도", "#days").replace('target="_blank" rel="noopener"', '')}${extLink("Drive 폴더", LINKS.folder)}</section>
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
      <section class="section quick-actions"><a class="action-link" href="${koreanAirAppUrl()}">대한항공 My 앱 ↗</a>${extLink("Drive 폴더", LINKS.folder)}${extLink("여행 시작 · Day 1", "#day-1", "primary").replace('target="_blank" rel="noopener"', '')}</section>
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
  const done = checklistItems.filter((_, index) => saved[index]).length;
  document.querySelectorAll(".check-progress").forEach(progress => { progress.textContent = `${done} / ${checklistItems.length} 완료`; });
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
