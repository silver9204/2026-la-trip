const LINKS = {
  source: "https://docs.google.com/document/d/18_CN5PKEOzxEM2C20XvUiABuTWzk2Xhnpyu9H3GLzXk/edit",
  map: "https://www.google.com/maps/d/viewer?mid=1HDBAhbqSJALyHLK1yXfpzf2gUGklVGo",
  folder: "https://drive.google.com/drive/folders/10d8-uJmbaPHdm5j_aLDck_LpcMknNUJU",
  hertz: "https://drive.google.com/file/d/1n4RbqTsmLqsF6W36lnjnECPBhD9DXsqJ/view",
  universal: "https://drive.google.com/file/d/1mu5aKltSfMGIJHqJNVyjdx9pPxzojKAv/view",
  getty: "https://drive.google.com/file/d/1zRCB5cFEWJu3z897usy7MG2uUhhb_kgb/view",
  dcaAdult: "https://drive.google.com/file/d/1Pd8tk-KyJ3P-w_2mV1KPJcnA822WSdL5/view",
  dcaChild: "https://drive.google.com/file/d/1Bk9hOInXEMFvfmMSt-yhn9b5zPVTQukf/view",
  garlandVoucher: "https://drive.google.com/file/d/1Ns5me4KjwAJ79fyC4aAgY3r8aKyr2jSB/view",
  jwVoucher: "https://drive.google.com/file/d/1GWdQgHtiDaIwToTWPZFugliDR0kplaY2/view",
  terraneaVoucher: "https://drive.google.com/file/d/1PSAntwTzj-9QdCg-CYTRrxEvG_V7jq4Z/view",
  koreanAirAndroid: "https://play.google.com/store/apps/details?id=com.koreanair.passenger",
  koreanAirIOS: "https://apps.apple.com/kr/app/korean-air-my/id1512918989",
  hotelsAndroid: "https://play.google.com/store/apps/details?id=com.hcom.android",
  hotelsIOS: "https://apps.apple.com/kr/app/hotels-com-book-hotels-more/id284971959"
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
    actions: [["Hertz 예약 확인서", LINKS.hertz, "ticket"], ["The Garland 바우처", LINKS.garlandVoucher, "ticket"], ["지도", LINKS.map]]
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
    actions: [["Day 2 상세 메모", LINKS.source], ["지도", LINKS.map]]
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
      ["10:30", "South Coast Plaza", "쇼핑과 점심"],
      ["13:30", "UC Irvine", "90분 캠퍼스 산책"],
      ["15:00", "UCI 출발", "Huntington Beach 이동"],
      ["15:30", "Huntington Beach", "해변 산책"],
      ["18:30", "호텔 복귀", "체력 시 루프톱"]
    ],
    move: ["UCI Student Center Parking Structure", "General 2시간권 $8 권장", "Student Center → The Hill → Aldrich Park → Ring Mall → Infinity Fountain"],
    tips: ["UCI는 90분 산책으로 압축", "South Coast Plaza는 Polo·Patagonia 우선", "해변 주차 약 $15 예상"],
    actions: [["지도", LINKS.map]]
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
    tips: ["Vista Pool은 만 13세 이상", "Kids Club 이용 중 부모는 리조트 안에 있어야 함", "Resort Pool 운영 08:00–20:00 기준"],
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
      kicker: "공항 도착 체크",
      title: "LAX · 렌터카 픽업",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e4cb43fe-da81-4b2d-9b08-0cca02e5b6e6",
      alt: "LAX 공항 이동 차량",
      summary: "트리플의 LAX 이동 상품도 4–5인용 미니밴 적재 기준을 캐리어 4개까지로 안내합니다. 렌터카를 받을 때 네 개가 모두 들어가는지 직접 확인하는 것이 핵심입니다.",
      points: ["차량 인수 전에 캐리어 4개를 실제로 적재", "뒷유리 시야와 외부 노출 여부까지 확인"],
      source: "https://triple.guide/tna/products/f25c268a-d9f4-4c7c-a929-f2c4797120a3",
      sourceLabel: "트리플 LAX 이동 정보 참고"
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
      kicker: "경기 전 준비",
      title: "BMO Stadium · LAFC HQ",
      summary: "아침에 주차한 뒤 LAFC HQ에서 유니폼 사이즈, 영문 이름과 등번호를 확정하세요. 당일 마킹 완료 시각을 받아두고 경기 입장 전에 수령하는 흐름이 가장 안전합니다.",
      points: ["주문서와 영수증을 사진으로 저장", "16:30 전후 수령 가능 여부를 주문할 때 확답" ]
    }
  ],
  3: [
    {
      kicker: "LA 대표 동선",
      title: "Hollywood → Beverly Hills → Santa Monica",
      image: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/604781a9-d550-4ccc-9033-7fa1141d2af3",
      alt: "로스앤젤레스 서부 주요 명소",
      summary: "트리플의 LA 서부 투어도 할리우드, 로데오 드라이브, 산타모니카를 한 축으로 묶습니다. 현재 일정처럼 동쪽에서 서쪽으로 이동하면 역주행을 줄일 수 있습니다.",
      points: ["Hollywood에서는 Walk of Fame·Chinese Theatre 중심", "Santa Monica는 피어와 석양 시간을 넉넉하게"],
      source: "https://triple.guide/tna/products/a85deaa3-21a8-4fbb-9049-b1447baad6ca",
      sourceLabel: "트리플에서 명소·사진 보기"
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
    }
  ],
  6: [
    {
      kicker: "가족 테마파크",
      title: "Knott’s Berry Farm",
      summary: "오전에는 가족이 함께 탈 인기 어트랙션을 먼저 보고, 오후에는 아이들 선호에 따라 스릴 라이드와 Camp Snoopy를 나누어 움직이세요.",
      points: ["입장 직후 당일 운영 중단 시설 확인", "19:00 복귀 목표를 지켜 다음 날 체력 확보"]
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
      kicker: "오렌지카운티 하루",
      title: "South Coast Plaza · UCI · Huntington Beach",
      summary: "쇼핑을 오전에 끝낸 뒤 UCI는 추억과 캠퍼스 분위기에 집중한 90분 산책으로 압축하세요. 해변은 관광지 추가보다 산책과 저녁에 무게를 두는 편이 좋습니다.",
      points: ["UCI Student Center Parking Structure 이용", "The Hill → Aldrich Park → Ring Mall → Infinity Fountain"]
    }
  ],
  9: [
    {
      kicker: "리조트 입성일",
      title: "Point Vicente → Terranea Resort",
      summary: "Point Vicente는 전망과 짧은 산책만 즐기고, Terranea 체크인 뒤 해안 트레일과 저녁에 시간을 남겨두세요. 이 날의 목적지는 관광지보다 리조트 자체입니다.",
      points: ["체크인 전 도착하면 짐부터 맡기기", "mar’sel 예약시간을 기준으로 산책 종료"]
    }
  ],
  10: [
    {
      kicker: "이동 없는 휴양일",
      title: "Terranea에서 천천히",
      summary: "오전 해안 산책, 한낮 수영장, 늦은 오후 선셋으로 세 구간만 잡아두면 리조트를 충분히 누리면서도 일정에 쫓기지 않습니다.",
      points: ["아이들과 Resort Pool·워터슬라이드 운영시간 확인", "Vista Pool은 만 13세 이상이므로 가족 동선에서 제외"]
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

const hotels = [
  {
    stay: "7/24–7/28 · 4박", name: "The Garland", address: "4222 Vineland Ave, North Hollywood, CA 91602",
    checkin: "15:00", checkout: "12:00", room: "Deluxe Room · Queen Bed 2개 · 금연", voucher: LINKS.garlandVoucher,
    tips: ["Universal 셔틀: 호텔 매시 정각 · 귀환 매시 :15 기준", "수영장 06:00–22:00", "The Front Yard는 파티오 좌석 요청", "셀프주차 $50+세금 · 발렛 $55+세금"]
  },
  {
    stay: "7/28–8/1 · 4박", name: "JW Marriott Anaheim", address: "1775 S Clementine St, Anaheim, CA 92802",
    checkin: "16:00", checkout: "11:00", room: "Deluxe Room · Queen Bed 2개 · Pool View · 금연", voucher: LINKS.jwVoucher,
    tips: ["DCA 전용 셔틀 없음 · 도보 이동", "Parkestry Rooftop에서 일부 불꽃놀이 조망 가능", "온수 야외 수영장과 JW Garden", "발렛 약 $68/일"]
  },
  {
    stay: "8/1–8/3 · 2박", name: "Terranea Resort", address: "100 Terranea Way, Rancho Palos Verdes, CA 90275",
    checkin: "16:00", checkout: "11:00", room: "Ocean Front Double · 금연", voucher: LINKS.terraneaVoucher,
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

function koreanAirAppUrl() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ? LINKS.koreanAirIOS : LINKS.koreanAirAndroid;
}

function hotelsAppUrl() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ? LINKS.hotelsIOS : LINKS.hotelsAndroid;
}

function renderHighlightCard(item) {
  const media = item.image
    ? `<a class="place-media" href="${item.source}" target="_blank" rel="noopener"><img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async"><span>${item.kicker}</span></a>`
    : `<div class="place-media placeholder"><span>${item.kicker}</span><strong>${item.title}</strong></div>`;
  return `<article class="place-card">${media}<div class="place-body"><h3>${item.title}</h3><p>${item.summary}</p><ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul>${item.source ? `<a class="place-source" href="${item.source}" target="_blank" rel="noopener">사진·정보: ${item.sourceLabel} ↗</a>` : ""}</div></article>`;
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
        <a class="airline-app-link" href="${koreanAirAppUrl()}" target="_blank" rel="noopener"><span>✈️ 대한항공 My 앱</span><small>체크인 · 탑승권 열기 ↗</small></a>
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
        <a class="hotels-app-link" href="${hotelsAppUrl()}" target="_blank" rel="noopener"><span>🏨 Hotels.com 앱</span><small>예약 · 바우처 확인 ↗</small></a>
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
          ${extLink("My Maps", LINKS.map)}
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
  return `
    <article class="page day-page" data-day="${day.day}">
      <header class="day-hero">
        <div class="day-meta"><span class="chip">DAY ${day.day} · ${day.date}</span><span class="chip hotel">${day.hotel}</span></div>
        <h1>${day.title}</h1>
        <p class="theme">${day.theme}</p>
      </header>

      <div class="day-map-action">${extLink("지도", LINKS.map, "primary")}</div>

      <section class="section">
        <div class="section-heading"><h2>오늘의 흐름</h2></div>
        <div class="timeline">${day.timeline.map(([time, title, note]) => `<div class="timeline-item"><time>${time}</time><div><p>${title}</p><small>${note}</small></div></div>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>방문지 미리보기</h2></div>
        <div class="place-grid">${highlights.map(renderHighlightCard).join("")}</div>
      </section>

      <section class="section card-stack">
        <article class="info-card accent"><h3>🚗 이동 · 주차</h3><ul class="info-list">${day.move.map(x => `<li>${x}</li>`).join("")}</ul></article>
        <article class="info-card warn"><h3>✓ 꼭 확인</h3><ul class="info-list">${day.tips.map(x => `<li>${x}</li>`).join("")}</ul></article>
      </section>

      ${detailActions.length ? `<section class="section">
        <div class="section-heading"><h2>이 날 필요한 링크</h2></div>
        <div class="button-row">${detailActions.map(([label, href, kind]) => extLink(label, href, kind)).join("")}</div>
      </section>` : ""}

      <nav class="slide-controls" aria-label="날짜 이동">
        ${prev ? `<a href="#day-${prev.day}">← Day ${prev.day}<br>${prev.title}</a>` : `<a href="#home">← 여행 홈</a>`}
        ${next ? `<a href="#day-${next.day}">Day ${next.day} →<br>${next.title}</a>` : `<a href="#home">여행 홈 →</a>`}
      </nav>
      <p class="slide-hint">화면을 좌우로 밀어서 이전·다음 Day로 이동할 수 있어요.</p>
    </article>`;
}

function renderDays() {
  return `<div class="page"><p class="eyebrow">10 nights · 11 days</p><h1 class="page-title">전체 일정</h1><p class="page-lead">날짜를 누르면 그날의 타임라인과 주차·예약 정보를 바로 확인할 수 있습니다.</p><div class="all-days">${days.map(d => `<a class="day-row" href="#day-${d.day}"><span class="day-number">DAY ${d.day}</span><span><h3>${d.title}</h3><p>${d.date} · ${d.hotel}</p></span><span>›</span></a>`).join("")}</div></div>`;
}

function renderInfo() {
  return `
    <div class="page">
      <p class="eyebrow">Stay · Eat · Prepare</p>
      <h1 class="page-title">여행정보</h1>
      <p class="page-lead">호텔 이용 팁과 일정에 맞춘 식당을 한곳에 모았습니다.</p>

      <section class="section">
        <div class="section-heading"><h2>호텔 이용 팁</h2></div>
        <div class="card-stack">${hotels.map(h => `<article class="info-card hotel-block"><span class="tag">${h.stay}</span><h3>${h.name}</h3><div class="hotel-times"><span><b>체크인</b>${h.checkin}</span><span><b>체크아웃</b>${h.checkout}</span></div><p class="hotel-room">${h.room}</p><a class="address-link" href="${mapAddress(h.address)}" target="_blank" rel="noopener">${h.address} ↗</a><ul class="info-list">${h.tips.map(x => `<li>${x}</li>`).join("")}</ul><a class="voucher-link" href="${h.voucher}" target="_blank" rel="noopener">호텔 바우처 열기 ↗</a></article>`).join("")}</div>
      </section>

      <section class="section">
        <div class="section-heading"><h2>추천 레스토랑</h2></div>
        <div class="restaurant-grid">${restaurants.map(([day, name, address, menu, tip]) => `<article class="restaurant-card"><span class="chip">${day}</span><h3>${name}</h3><p class="menu">${menu}</p><p>${tip}</p><a class="address-link" href="${mapAddress(address)}" target="_blank" rel="noopener">${address} ↗</a></article>`).join("")}</div>
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
