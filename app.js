/* ============================================================
   PLUSWIN renewal prototype — i18n data, rendering, interactions
   ============================================================ */

const LANGS = ["ja", "ko", "en"];
const LANG_KEY = "pluswin.lang";
const MAIL_RENTAL = "info@pluswin.jp";

/* ---------- UI dictionary ---------- */
const T = {
  ja: {
    metaTitle: "PLUSWIN | プラスウイン株式会社 — ライブホール PLUSWIN HALL OSAKA・イベント制作",
    metaDesc: "プラスウイン株式会社（PLUSWIN Co., Ltd.）は大阪・心斎橋のライブホール PLUSWIN HALL OSAKA を拠点に、ホールの運営・レンタルとイベントの企画・制作・運営を行うライブエンターテインメントカンパニーです。",
    "brand.sub": "プラスウイン株式会社",
    "nav.events": "公演情報",
    "nav.business": "事業内容",
    "nav.venues": "ホール",
    "nav.rental": "レンタル",
        "nav.about": "会社概要",
    "nav.contactCta": "お問い合わせ",
    "hero.eyebrow": "LIVE ENTERTAINMENT COMPANY ・ OSAKA",
    "hero.title": "舞台から、<br>エンターテインメントを<br class=\"only-m\"><span class=\"hl\">動かす</span>。",
    "hero.sub": "大阪・心斎橋のライブホール PLUSWIN HALL OSAKA を拠点に、ホールの運営・レンタルと、イベントの企画・制作・運営を一社で手がけています。",
    "hero.cta1": "公演情報を見る",
    "hero.cta2": "ホール利用の相談",
    "hero.next": "NEXT",
    "hero.stat1": "着席収容",
    "hero.stat2": "スタンディング",
    "hero.stat3": "設立",
    "events.eyebrow": "UPCOMING",
    "events.title": "公演情報",
    "events.desc": "PLUSWIN HALL OSAKA をはじめ、大阪・東京で開催する公演。各公演の詳細・チケット・会場アクセスはカードから。",
    "events.filterAll": "すべて",
    "events.filterOsaka": "大阪",
    "events.filterTokyo": "東京",
    "events.pastHead": "PAST 2026",
    "events.pastEyebrow": "TRACK RECORD",
    "events.pastTitle": "過去公演アーカイブ",
    "events.pastDesc": "2012年以降、プラスウインが企画・制作・運営してきた公演の一部です。ポスターを選ぶと、公演の詳細と注意事項を表示します。",
    "events.pastAll": "すべて",
    "events.pastMore": "もっと見る",
    "events.pastLess": "閉じる",
    "events.pastShows": "公演",
    "past.openLabel": "詳細を見る",
    "past.kicker": "PAST EVENT",
    "past.date": "公演日",
    "past.venue": "会場",
    "past.producedBy": "企画・制作・運営：プラスウイン株式会社",
    "past.source": "pluswin.net で見る",
    "guide.title": "注意事項・ガイドライン",
    "guide.lead": "以下はプラスウイン主催公演に共通するルールです。公演ごとに内容が異なる場合がありますので、各公演の案内もあわせてご確認ください。",
    "events.ticket": "チケット",
    "events.access": "アクセス",
    "events.detail": "詳細",
    "events.onsale": "販売中",
    "events.soon": "まもなく発売",
    "events.ended": "終了",
    "business.eyebrow": "WHAT WE DO",
    "business.title": "事業内容",
    "business.desc": "ホールを貸すだけでは終わらない。企画・制作・運営まで、ライブに必要な機能を自社で持っています。",
    "venues.eyebrow": "VENUE",
    "venues.title": "ホール",
    "venues.desc": "当社が運営するライブホールは PLUSWIN HALL OSAKA の1館。着席220名／スタンディング500名、音響・照明・高精細LED・配信環境を常設しています。",
    "venues.tagOsaka": "OSAKA / SHINSAIBASHI",
    "venues.osakaLead": "心斎橋の中心に生まれた多目的ライブスペース。最新の音響・照明設備と高精細LEDパネルを常設し、生配信にも対応します。",
    "venues.specAddress": "所在地",
    "venues.specCapacity": "収容",
    "venues.specStage": "ステージ",
    "venues.specLed": "LED",
    "venues.specEquip": "設備",
    "venues.osakaAddress": "〒542-0084 大阪市中央区宗右衛門町2-3 美松ビル B1",
    "venues.osakaCapacity": "着席 220名 / スタンディング 500名",
    "venues.osakaLed": "W600 × H250 cm 高精細ピッチパネル",
    "venues.osakaEquip": "音響・照明・プロジェクター・生配信環境",
    "venues.hallSite": "ホールサイト",
    "venues.rentalCta": "レンタルの相談",
    "venues.singleNote": "レンタル（貸出）は PLUSWIN HALL OSAKA のみ承ります。",
    "rental.eyebrow": "VENUE RENTAL",
    "rental.title": "ホールレンタル",
    "rental.lead": "心斎橋・宗右衛門町。ライブ、ファンミーティング、ショーケース、撮影・配信、リハーサルまで。常設の音響・照明・高精細LEDを備えたホールを、1日単位でご利用いただけます。見学も随時受け付けています。",
    "rental.point1": "音響・照明・高精細LED（W600 × H250cm）を常設",
    "rental.point2": "着席220名／スタンディング500名、ステージ W762 × D500 × H50cm",
    "rental.point3": "生配信・収録に対応した配信環境",
    "rental.point4": "レンタルは PLUSWIN HALL OSAKA のみ（他会場の貸出は行っていません）",
    "rental.contactLabel": "レンタル窓口",
    "rental.priceNote": "料金・空き状況はお問い合わせください。見学のご希望もこちらから。",
    "rental.formTitle": "レンタル・見学のお問い合わせ",
    "rental.formSub": "必要事項をご記入のうえ送信してください。担当者より2〜3営業日以内にご連絡します。",
    "form.name": "お名前",
    "form.company": "会社・団体名",
    "form.email": "メールアドレス",
    "form.tel": "電話番号",
    "form.date": "ご希望の日程",
    "form.purpose": "利用目的",
    "form.people": "予定人数",
    "form.message": "ご相談内容",
    "form.namePh": "山田 太郎",
    "form.companyPh": "株式会社〇〇",
    "form.emailPh": "you@example.com",
    "form.telPh": "090-0000-0000",
    "form.messagePh": "公演内容、ご希望の時間帯、機材の有無など",
    "form.purpose1": "ライブ・コンサート",
    "form.purpose2": "ファンミーティング・イベント",
    "form.purpose3": "撮影・配信・収録",
    "form.purpose4": "リハーサル・稽古",
    "form.purpose5": "その他",
    "form.submit": "入力内容をメールで送る",
    "form.note": "送信ボタンを押すとメールソフトが開きます（試作版のため、フォームから直接送信はされません）。",
    "form.status": "メールソフトを開きました。送信内容をご確認ください。",
    "form.required": "必須",
    "about.eyebrow": "COMPANY",
    "about.title": "会社概要",
    "about.lead": "2005年の設立以来、大阪・南堀江を拠点に、ライブホールという「場」と、イベントの企画・制作・運営という「中身」の両方を持ち続けてきました。韓国アーティストの来日公演も数多く手がけています。",
    "about.hqLabel": "本社",
    "about.hqAddress": "〒550-0015 大阪府大阪市西区南堀江1-15-11 WINビル 4F",
    "about.mapLink": "Google マップで見る",
    "about.rowNameK": "社名",
    "about.rowNameV": "プラスウイン株式会社（PLUSWIN Co., Ltd.）",
    "about.rowFoundedK": "設立",
    "about.rowFoundedV": "2005年3月31日",
    "about.rowCapitalK": "資本金",
    "about.rowCapitalV": "4,000万円",
    "about.rowTelK": "TEL",
    "about.rowFaxK": "FAX",
    "about.rowMailK": "MAIL",
    "about.rowHoursK": "受付時間",
    "about.rowHoursV": "平日 13:00 – 18:00",
    "about.rowTicketK": "チケット窓口",
    "about.rowBizK": "事業内容",
    "about.rowBizV": "ライブホール運営・レンタル（PLUSWIN HALL OSAKA）／イベント企画・制作・運営",
    "contact.eyebrow": "CONTACT",
    "contact.title": "お問い合わせ",
    "contact.desc": "公演・チケット、ホールの利用・レンタル、イベント制作のご相談まで。内容に合わせた窓口へご連絡ください。",
    "contact.card1k": "TICKETS / SHOWS",
    "contact.card1t": "公演・チケットについて",
    "contact.card1h": "平日 13:00 – 18:00",
    "contact.card2k": "HALL & RENTAL",
    "contact.card2t": "ホールの利用・レンタルについて",
    "contact.card2h": "10:00 – 18:00（平日 13:00 – 18:00）",
    "contact.card3k": "PRODUCTION / OTHER",
    "contact.card3t": "イベント制作・その他のご相談",
    "contact.card3h": "平日 13:00 – 18:00",
    "contact.addrLabel": "本社",
    "contact.addr": "〒550-0015 大阪府大阪市西区南堀江1-15-11 WINビル 4F",
    "contact.hallLabel": "PLUSWIN HALL OSAKA",
    "contact.hallAddr": "〒542-0084 大阪市中央区宗右衛門町2-3 美松ビル B1",
    "footer.tagline": "ステージから、エンターテインメントを動かす。",
    "footer.menuHead": "MENU",
    "footer.contactHead": "CONTACT",
    "footer.infoHead": "INFORMATION",
    "footer.telEvent": "公演・チケット 06-6539-9770",
    "footer.telMain": "代表 06-6536-2002",
    "footer.addr": "〒550-0015 大阪府大阪市西区南堀江1-15-11 WINビル 4F",
    "footer.hours": "受付時間 平日 13:00 – 18:00",
    "footer.hallSite": "PLUSWIN HALL OSAKA サイト",
    "footer.copyright": "© 2026 PLUSWIN Co., Ltd. プラスウイン株式会社",
    "footer.toTop": "ページ上部へ",
    labels: { open: "開場", start: "開演", venue: "会場", sessions: "公演スケジュール", notes: "ご案内", tickets: "チケット", access: "アクセス" },
    dateFmt: (y, m, d, w) => `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")} (${w})`
  },

  ko: {
    metaTitle: "PLUSWIN | 주식회사 플러스윈 — 라이브홀 PLUSWIN HALL OSAKA·이벤트 제작",
    metaDesc: "플러스윈(PLUSWIN Co., Ltd.)은 오사카 신사이바시의 라이브홀 PLUSWIN HALL OSAKA를 거점으로 홀 운영·대관과 이벤트 기획·제작·운영을 하는 라이브 엔터테인먼트 기업입니다.",
    "brand.sub": "플러스윈 주식회사",
    "nav.events": "공연 정보",
    "nav.business": "사업 내용",
    "nav.venues": "홀",
    "nav.rental": "대관",
        "nav.about": "회사 개요",
    "nav.contactCta": "문의하기",
    "hero.eyebrow": "LIVE ENTERTAINMENT COMPANY ・ OSAKA",
    "hero.title": "무대에서,<br>엔터테인먼트를<br class=\"only-m\"> <span class=\"hl\">움직입니다</span>.",
    "hero.sub": "오사카 신사이바시의 라이브홀 PLUSWIN HALL OSAKA를 거점으로, 홀 운영·대관과 이벤트 기획·제작·운영을 한 회사가 맡습니다.",
    "hero.cta1": "공연 정보 보기",
    "hero.cta2": "홀 대관 상담",
    "hero.next": "NEXT",
    "hero.stat1": "지정석 수용",
    "hero.stat2": "스탠딩",
    "hero.stat3": "설립",
    "events.eyebrow": "UPCOMING",
    "events.title": "공연 정보",
    "events.desc": "PLUSWIN HALL OSAKA를 비롯해 오사카·도쿄에서 열리는 공연. 상세 정보와 예매, 오시는 길은 카드에서 확인하세요.",
    "events.filterAll": "전체",
    "events.filterOsaka": "오사카",
    "events.filterTokyo": "도쿄",
    "events.pastHead": "PAST 2026",
    "events.pastEyebrow": "TRACK RECORD",
    "events.pastTitle": "지난 공연 아카이브",
    "events.pastDesc": "2012년 이후 플러스윈이 기획·제작·운영한 공연들입니다. 포스터를 선택하면 공연 상세 정보와 주의사항을 볼 수 있습니다.",
    "events.pastAll": "전체",
    "events.pastMore": "더 보기",
    "events.pastLess": "접기",
    "events.pastShows": "공연",
    "past.openLabel": "상세 보기",
    "past.kicker": "PAST EVENT",
    "past.date": "공연일",
    "past.venue": "공연장",
    "past.producedBy": "기획·제작·운영: 플러스윈 주식회사",
    "past.source": "pluswin.net에서 보기",
    "guide.title": "공연·특전회 주의사항",
    "guide.lead": "아래는 플러스윈 주최 공연의 공통 규칙입니다. 공연마다 내용이 다를 수 있으니 각 공연 안내도 함께 확인해 주세요.",
    "events.ticket": "예매하기",
    "events.access": "오시는 길",
    "events.detail": "상세",
    "events.onsale": "판매 중",
    "events.soon": "곧 발매",
    "events.ended": "종료",
    "business.eyebrow": "WHAT WE DO",
    "business.title": "사업 내용",
    "business.desc": "홀을 빌려주는 데서 끝나지 않습니다. 기획·제작·운영까지, 공연에 필요한 기능을 자사가 갖추고 있습니다.",
    "venues.eyebrow": "VENUE",
    "venues.title": "홀",
    "venues.desc": "당사가 운영하는 라이브홀은 PLUSWIN HALL OSAKA 한 곳입니다. 지정석 220석·스탠딩 500명, 음향·조명·고정밀 LED·중계 설비를 상설로 갖추고 있습니다.",
    "venues.tagOsaka": "OSAKA / SHINSAIBASHI",
    "venues.osakaLead": "신사이바시 중심에 자리한 다목적 라이브 공간. 최신 음향·조명 설비와 고정밀 LED 패널을 상설로 갖추고 생중계에도 대응합니다.",
    "venues.specAddress": "주소",
    "venues.specCapacity": "수용 인원",
    "venues.specStage": "무대",
    "venues.specLed": "LED",
    "venues.specEquip": "설비",
    "venues.osakaAddress": "〒542-0084 오사카시 주오구 소에몬초 2-3 미마츠빌딩 B1",
    "venues.osakaCapacity": "지정석 220석 / 스탠딩 500명",
    "venues.osakaLed": "W600 × H250 cm 고정밀 피치 패널",
    "venues.osakaEquip": "음향·조명·프로젝터·생중계 환경",
    "venues.hallSite": "홀 사이트",
    "venues.rentalCta": "대관 상담",
    "venues.singleNote": "대관(임대)은 PLUSWIN HALL OSAKA에서만 진행합니다.",
    "rental.eyebrow": "VENUE RENTAL",
    "rental.title": "홀 대관",
    "rental.lead": "신사이바시 소에몬초. 라이브, 팬미팅, 쇼케이스, 촬영·중계, 리허설까지. 상설 음향·조명·고정밀 LED를 갖춘 홀을 일 단위로 이용하실 수 있습니다. 사전 답사도 언제든 환영합니다.",
    "rental.point1": "음향·조명·고정밀 LED(W600 × H250cm) 상설",
    "rental.point2": "지정석 220석 / 스탠딩 500명, 무대 W762 × D500 × H50cm",
    "rental.point3": "생중계·녹화에 대응하는 중계 환경",
    "rental.point4": "대관은 PLUSWIN HALL OSAKA만 진행합니다(타 공연장 임대는 하지 않습니다)",
    "rental.contactLabel": "대관 문의",
    "rental.priceNote": "요금·예약 가능일은 문의해 주세요. 답사 희망도 이쪽으로.",
    "rental.formTitle": "대관·답사 문의",
    "rental.formSub": "필요한 내용을 적어 보내주세요. 담당자가 2~3영업일 내에 연락드립니다.",
    "form.name": "이름",
    "form.company": "회사·단체명",
    "form.email": "이메일",
    "form.tel": "전화번호",
    "form.date": "희망 일자",
    "form.purpose": "이용 목적",
    "form.people": "예상 인원",
    "form.message": "문의 내용",
    "form.namePh": "홍길동",
    "form.companyPh": "(주)○○",
    "form.emailPh": "you@example.com",
    "form.telPh": "010-0000-0000",
    "form.messagePh": "공연 내용, 희망 시간대, 장비 사용 여부 등",
    "form.purpose1": "라이브·콘서트",
    "form.purpose2": "팬미팅·이벤트",
    "form.purpose3": "촬영·중계·녹화",
    "form.purpose4": "리허설·연습",
    "form.purpose5": "기타",
    "form.submit": "메일로 문의 보내기",
    "form.note": "버튼을 누르면 메일 앱이 열립니다(시안 버전이라 폼에서 바로 전송되지는 않습니다).",
    "form.status": "메일 앱을 열었습니다. 내용을 확인해 주세요.",
    "form.required": "필수",
    "about.eyebrow": "COMPANY",
    "about.title": "회사 개요",
    "about.lead": "2005년 설립 이래 오사카 미나미호리에를 거점으로 라이브홀이라는 '공간'과 이벤트 기획·제작·운영이라는 '내용'을 함께 갖춰 왔습니다. 한국 아티스트의 일본 공연도 다수 진행했습니다.",
    "about.hqLabel": "본사",
    "about.hqAddress": "〒550-0015 오사카부 오사카시 니시구 미나미호리에 1-15-11 WIN빌딩 4F",
    "about.mapLink": "Google 지도에서 보기",
    "about.rowNameK": "회사명",
    "about.rowNameV": "플러스윈 주식회사(PLUSWIN Co., Ltd.)",
    "about.rowFoundedK": "설립",
    "about.rowFoundedV": "2005년 3월 31일",
    "about.rowCapitalK": "자본금",
    "about.rowCapitalV": "4,000만 엔",
    "about.rowTelK": "TEL",
    "about.rowFaxK": "FAX",
    "about.rowMailK": "MAIL",
    "about.rowHoursK": "상담 시간",
    "about.rowHoursV": "평일 13:00 – 18:00",
    "about.rowTicketK": "티켓 창구",
    "about.rowBizK": "사업 내용",
    "about.rowBizV": "라이브홀 운영·대관(PLUSWIN HALL OSAKA)／이벤트 기획·제작·운영",
    "contact.eyebrow": "CONTACT",
    "contact.title": "문의",
    "contact.desc": "공연·티켓, 홀 이용·대관, 이벤트 제작 상담까지. 내용에 맞는 창구로 연락 주세요.",
    "contact.card1k": "TICKETS / SHOWS",
    "contact.card1t": "공연·티켓 문의",
    "contact.card1h": "평일 13:00 – 18:00",
    "contact.card2k": "HALL & RENTAL",
    "contact.card2t": "홀 이용·대관 문의",
    "contact.card2h": "10:00 – 18:00 (평일 13:00 – 18:00)",
    "contact.card3k": "PRODUCTION / OTHER",
    "contact.card3t": "이벤트 제작·기타 문의",
    "contact.card3h": "평일 13:00 – 18:00",
    "contact.addrLabel": "본사",
    "contact.addr": "〒550-0015 오사카부 오사카시 니시구 미나미호리에 1-15-11 WIN빌딩 4F",
    "contact.hallLabel": "PLUSWIN HALL OSAKA",
    "contact.hallAddr": "〒542-0084 오사카시 주오구 소에몬초 2-3 미마츠빌딩 B1",
    "footer.tagline": "무대에서, 엔터테인먼트를 움직입니다.",
    "footer.menuHead": "MENU",
    "footer.contactHead": "CONTACT",
    "footer.infoHead": "INFORMATION",
    "footer.telEvent": "공연·티켓 06-6539-9770",
    "footer.telMain": "대표 06-6536-2002",
    "footer.addr": "〒550-0015 오사카부 오사카시 니시구 미나미호리에 1-15-11 WIN빌딩 4F",
    "footer.hours": "상담 시간 평일 13:00 – 18:00",
    "footer.hallSite": "PLUSWIN HALL OSAKA 사이트",
    "footer.copyright": "© 2026 PLUSWIN Co., Ltd. 주식회사 플러스윈",
    "footer.toTop": "맨 위로",
    labels: { open: "입장", start: "공연 시작", venue: "회장", sessions: "공연 일정", notes: "안내", tickets: "티켓", access: "오시는 길" },
    dateFmt: (y, m, d, w) => `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")} (${w})`
  },

  en: {
    metaTitle: "PLUSWIN | Pluswin Co., Ltd. — Live Hall PLUSWIN HALL OSAKA & Event Production",
    metaDesc: "Pluswin Co., Ltd. is a live entertainment company based at PLUSWIN HALL OSAKA in Shinsaibashi, Osaka — operating a live hall and rental venue and producing events.",
    "brand.sub": "Pluswin Co., Ltd.",
    "nav.events": "Events",
    "nav.business": "Business",
    "nav.venues": "Hall",
    "nav.rental": "Rental",
        "nav.about": "Company",
    "nav.contactCta": "Contact",
    "hero.eyebrow": "LIVE ENTERTAINMENT COMPANY ・ OSAKA",
    "hero.title": "We move<br>entertainment from<br class=\"only-m\"> <span class=\"hl\">the stage</span>.",
    "hero.sub": "A live hall and rental venue in Shinsaibashi, Osaka — PLUSWIN HALL OSAKA — with event production in house, from first plan to show night.",
    "hero.cta1": "See upcoming shows",
    "hero.cta2": "Ask about the hall",
    "hero.next": "NEXT",
    "hero.stat1": "Seated",
    "hero.stat2": "Standing",
    "hero.stat3": "Established",
    "events.eyebrow": "UPCOMING",
    "events.title": "Upcoming events",
    "events.desc": "Shows at PLUSWIN HALL OSAKA and venues in Osaka and Tokyo. Open a card for details, tickets and access.",
    "events.filterAll": "All",
    "events.filterOsaka": "Osaka",
    "events.filterTokyo": "Tokyo",
    "events.pastHead": "PAST 2026",
    "events.pastEyebrow": "TRACK RECORD",
    "events.pastTitle": "Past events",
    "events.pastDesc": "A selection of shows PLUSWIN has planned, produced and operated since 2012. Select a poster for details and guidelines.",
    "events.pastAll": "All",
    "events.pastMore": "Show more",
    "events.pastLess": "Show less",
    "events.pastShows": "shows",
    "past.openLabel": "View details",
    "past.kicker": "PAST EVENT",
    "past.date": "Date",
    "past.venue": "Venue",
    "past.producedBy": "Planned, produced and operated by PLUSWIN",
    "past.source": "View on pluswin.net",
    "guide.title": "Guidelines & precautions",
    "guide.lead": "These rules apply to PLUSWIN-produced shows. Details can differ by event, so please also check each show's own notice.",
    "events.ticket": "Tickets",
    "events.access": "Access",
    "events.detail": "Details",
    "events.onsale": "On sale",
    "events.soon": "On sale soon",
    "events.ended": "Ended",
    "business.eyebrow": "WHAT WE DO",
    "business.title": "What we do",
    "business.desc": "Not just a hall for hire. Planning, production and operation — the capabilities a live show needs, in house.",
    "venues.eyebrow": "VENUE",
    "venues.title": "The hall",
    "venues.desc": "We operate one live hall: PLUSWIN HALL OSAKA. 220 seated or 500 standing, with permanent sound, lighting, high-definition LED and streaming facilities.",
    "venues.tagOsaka": "OSAKA / SHINSAIBASHI",
    "venues.osakaLead": "A multipurpose live space in the heart of Shinsaibashi, with the latest sound and lighting and a high-definition LED panel — and live streaming capability.",
    "venues.specAddress": "Address",
    "venues.specCapacity": "Capacity",
    "venues.specStage": "Stage",
    "venues.specLed": "LED",
    "venues.specEquip": "Equipment",
    "venues.osakaAddress": "B1 Mimatsu Bldg., 2-3 Soemoncho, Chuo-ku, Osaka 542-0084",
    "venues.osakaCapacity": "220 seated / 500 standing",
    "venues.osakaLed": "600 × 250 cm high-density pitch panel",
    "venues.osakaEquip": "Sound, lighting, projector, live streaming",
    "venues.hallSite": "Hall website",
    "venues.rentalCta": "Rental enquiry",
    "venues.singleNote": "Venue rental is offered only at PLUSWIN HALL OSAKA.",
    "rental.eyebrow": "VENUE RENTAL",
    "rental.title": "Hall rental",
    "rental.lead": "Soemoncho, Shinsaibashi. Live shows, fan meetings, showcases, filming and streaming, rehearsals. A hall with permanent sound, lighting and high-definition LED, available by the day. Site visits are welcome any time.",
    "rental.point1": "Permanent sound, lighting and high-definition LED (600 × 250 cm)",
    "rental.point2": "220 seated / 500 standing; stage W762 × D500 × H50 cm",
    "rental.point3": "Streaming and recording-ready infrastructure",
    "rental.point4": "Rental is only at PLUSWIN HALL OSAKA — we do not rent other venues",
    "rental.contactLabel": "Rental desk",
    "rental.priceNote": "Rates and availability on request — site visits too, just ask.",
    "rental.formTitle": "Rental & site visit enquiry",
    "rental.formSub": "Tell us what you need. Our team replies within 2–3 business days.",
    "form.name": "Name",
    "form.company": "Company / organisation",
    "form.email": "Email",
    "form.tel": "Phone",
    "form.date": "Preferred date",
    "form.purpose": "Purpose",
    "form.people": "Expected attendance",
    "form.message": "Your enquiry",
    "form.namePh": "Taro Yamada",
    "form.companyPh": "Company name",
    "form.emailPh": "you@example.com",
    "form.telPh": "+81 90 0000 0000",
    "form.messagePh": "Show details, preferred time slot, equipment needs…",
    "form.purpose1": "Live / concert",
    "form.purpose2": "Fan meeting / event",
    "form.purpose3": "Filming / streaming / recording",
    "form.purpose4": "Rehearsal",
    "form.purpose5": "Other",
    "form.submit": "Send enquiry by email",
    "form.note": "The button opens your email app (this is a prototype, so nothing is sent directly from the form).",
    "form.status": "Your email app has opened — please review the message.",
    "form.required": "required",
    "about.eyebrow": "COMPANY",
    "about.title": "Company",
    "about.lead": "Since 2005, from our base in Minamihorie, Osaka, we have kept both halves of the business: the room — a live hall — and the content — event planning, production and operation. We have produced many Japan shows for Korean artists.",
    "about.hqLabel": "Head office",
    "about.hqAddress": "WIN Bldg. 4F, 1-15-11 Minamihorie, Nishi-ku, Osaka 550-0015",
    "about.mapLink": "Open in Google Maps",
    "about.rowNameK": "Company",
    "about.rowNameV": "Pluswin Co., Ltd. (プラスウイン株式会社)",
    "about.rowFoundedK": "Founded",
    "about.rowFoundedV": "31 March 2005",
    "about.rowCapitalK": "Capital",
    "about.rowCapitalV": "¥40,000,000",
    "about.rowTelK": "TEL",
    "about.rowFaxK": "FAX",
    "about.rowMailK": "MAIL",
    "about.rowHoursK": "Office hours",
    "about.rowHoursV": "Weekdays 13:00 – 18:00",
    "about.rowTicketK": "Tickets",
    "about.rowBizK": "Business",
    "about.rowBizV": "Live hall operation & rental (PLUSWIN HALL OSAKA) / event planning, production & operation",
    "contact.eyebrow": "CONTACT",
    "contact.title": "Contact",
    "contact.desc": "Tickets and shows, hall hire and rental, production enquiries — reach the right desk.",
    "contact.card1k": "TICKETS / SHOWS",
    "contact.card1t": "Tickets & shows",
    "contact.card1h": "Weekdays 13:00 – 18:00",
    "contact.card2k": "HALL & RENTAL",
    "contact.card2t": "Hall hire & rental",
    "contact.card2h": "10:00 – 18:00 (weekdays 13:00 – 18:00)",
    "contact.card3k": "PRODUCTION / OTHER",
    "contact.card3t": "Production & general enquiries",
    "contact.card3h": "Weekdays 13:00 – 18:00",
    "contact.addrLabel": "Head office",
    "contact.addr": "WIN Bldg. 4F, 1-15-11 Minamihorie, Nishi-ku, Osaka 550-0015",
    "contact.hallLabel": "PLUSWIN HALL OSAKA",
    "contact.hallAddr": "B1 Mimatsu Bldg., 2-3 Soemoncho, Chuo-ku, Osaka 542-0084",
    "footer.tagline": "We move entertainment from the stage.",
    "footer.menuHead": "MENU",
    "footer.contactHead": "CONTACT",
    "footer.infoHead": "INFORMATION",
    "footer.telEvent": "Tickets 06-6539-9770",
    "footer.telMain": "Office 06-6536-2002",
    "footer.addr": "WIN Bldg. 4F, 1-15-11 Minamihorie, Nishi-ku, Osaka 550-0015",
    "footer.hours": "Office hours: weekdays 13:00 – 18:00",
    "footer.hallSite": "PLUSWIN HALL OSAKA website",
    "footer.copyright": "© 2026 PLUSWIN Co., Ltd.",
    "footer.toTop": "Back to top",
    labels: { open: "Doors", start: "Show", venue: "Venue", sessions: "Schedule", notes: "Notes", tickets: "Tickets", access: "Access" },
    dateFmt: (y, m, d, w) => `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y} (${w})`
  }
};

/* ---------- venue constants ---------- */
const HALL_OSAKA_MAP = "https://www.google.com/maps/search/?api=1&query=PLUSWIN+HALL+OSAKA+%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%AE%97%E5%8F%B3%E8%A1%9B%E9%96%80%E7%94%BA2-3";
const HALL_OSAKA = {
  name: "PLUSWIN HALL OSAKA",
  addrJa: "〒542-0084 大阪市中央区宗右衛門町2-3 美松ビル B1",
  addrKo: "〒542-0084 오사카시 주오구 소에몬초 2-3 미마츠빌딩 B1",
  addrEn: "B1 Mimatsu Bldg., 2-3 Soemoncho, Chuo-ku, Osaka 542-0084",
  map: HALL_OSAKA_MAP
};
const SONORRA = { name: "SONORRA", addrJa: "東京都", addrKo: "도쿄도", addrEn: "Tokyo", map: "https://sonorra.net/access/" };
const PO_HALL = { name: "P.O. Minamiaoyama Hall", addrJa: "東京都港区南青山", addrKo: "도쿄도 미나토구 미나미아오야마", addrEn: "Minamiaoyama, Minato-ku, Tokyo", map: "https://po-hall.jp/#access" };

/* ---------- events ---------- */
const EVENTS = [
  {
    id: "ken",
    poster: "assets/img/event-ken.jpg",
    title: "2026 KEN MEET&GREET IN JAPAN",
    city: "both",
    cityLabel: "OSAKA / TOKYO",
    month: 12, day: 5, weekday: { ja: "土", ko: "토", en: "SAT" },
    dateShort: "12.05",
    year: 2026,
    status: "onsale",
    ticket: "https://eplus.jp/ken-japanlive/",
    venueShort: { ja: "PLUSWIN HALL OSAKA / P.O. Minamiaoyama Hall", ko: "PLUSWIN HALL OSAKA / P.O. Minamiaoyama Hall", en: "PLUSWIN HALL OSAKA / P.O. Minamiaoyama Hall" },
    sub: {
      ja: "VIXXのメインボーカル、KEN。ミュージカル俳優としても活躍する彼と過ごす、冬のひととき。",
      ko: "VIXX 메인보컬 KEN. 뮤지컬 배우로도 활약하는 그와 함께하는 겨울의 시간.",
      en: "KEN, main vocalist of VIXX and a musical actor in his own right — an intimate winter meet & greet."
    },
    priceLabel: { ja: "全席指定 ¥12,000", ko: "전석 지정석 ¥12,000", en: "Reserved ¥12,000" },
    priceFrom: "¥12,000",
    venues: [HALL_OSAKA, PO_HALL],
    dates: [
      { ja: "2026.12.05 (土)・12.06 (日) — PLUSWIN HALL OSAKA", ko: "2026.12.05 (토)・12.06 (일) — PLUSWIN HALL OSAKA", en: "05–06 Dec 2026 (Sat–Sun) — PLUSWIN HALL OSAKA" },
      { ja: "2026.12.19 (土)・12.20 (日) — P.O. Minamiaoyama Hall", ko: "2026.12.19 (토)・12.20 (일) — P.O. Minamiaoyama Hall", en: "19–20 Dec 2026 (Sat–Sun) — P.O. Minamiaoyama Hall" }
    ],
    sessions: [
      { name: { ja: "1部", ko: "1부", en: "Part 1" }, open: "12:00", start: "13:00", price: "¥12,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "当日券 ¥13,000", ko: "당일권 ¥13,000", en: "Door ¥13,000" } },
      { name: { ja: "2部", ko: "2부", en: "Part 2" }, open: "17:00", start: "18:00", price: "¥12,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "当日券 ¥13,000", ko: "당일권 ¥13,000", en: "Door ¥13,000" } }
    ],
    notes: [
      { ja: "各公演後に特典会を予定しています。", ko: "각 공연 후 팬사인회(특전회)를 예정하고 있습니다.", en: "A fan event follows each show." },
      { ja: "東京公演は日程・会場が変更になりました。最新の案内をご確認ください。", ko: "도쿄 공연은 일정·회장이 변경되었습니다. 최신 안내를 확인해 주세요.", en: "The Tokyo dates and venue have changed — please check the latest notice." },
      { ja: "お一人様4枚まで予約可。3歳未満は入場不可。", ko: "1인 4매까지 예매 가능. 만 3세 미만 입장 불가.", en: "Up to 4 tickets per person. Children under 3 not admitted." }
    ],
    ticketNote: { ja: "発売中（イープラス・先着）", ko: "판매 중 (이플러스·선착순)", en: "On sale now (e+, first come)" }
  },
  {
    id: "eru",
    poster: "assets/img/event-eru.jpg",
    title: "2026 ERU FAN MEETING [Winter Memories] IN JAPAN",
    city: "osaka",
    cityLabel: "OSAKA",
    month: 12, day: 11, weekday: { ja: "金", ko: "금", en: "FRI" },
    dateShort: "12.11",
    year: 2026,
    status: "onsale",
    ticket: "https://livepocket.jp/t/pluswin_eru",
    venueShort: { ja: "PLUSWIN HALL OSAKA", ko: "PLUSWIN HALL OSAKA", en: "PLUSWIN HALL OSAKA" },
    sub: {
      ja: "韓国の実力派バラード歌手・ERU、日本初のファンミーティング。",
      ko: "한국의 실력파 발라드 가수 ERU, 일본 첫 팬미팅.",
      en: "Korean ballad singer ERU's first fan meeting in Japan."
    },
    priceLabel: { ja: "全席指定 ¥11,000", ko: "전석 지정석 ¥11,000", en: "Reserved ¥11,000" },
    priceFrom: "¥11,000",
    venues: [HALL_OSAKA],
    dates: [
      { ja: "2026.12.11 (金) 19:00 開演", ko: "2026.12.11 (금) 19:00 개연", en: "11 Dec 2026 (Fri) — show 19:00" },
      { ja: "2026.12.12 (土) 18:00 開演（13:00の部は中止）", ko: "2026.12.12 (토) 18:00 개연 (13:00 공연은 중지)", en: "12 Dec 2026 (Sat) — show 18:00 (13:00 performance cancelled)" }
    ],
    sessions: [
      { name: { ja: "12/11 (金)", ko: "12/11 (금)", en: "11 Dec (Fri)" }, open: "18:30", start: "19:00", price: "¥11,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "当日券 ¥12,000", ko: "당일권 ¥12,000", en: "Door ¥12,000" } },
      { name: { ja: "12/12 (土)", ko: "12/12 (토)", en: "12 Dec (Sat)" }, open: "17:30", start: "18:00", price: "¥11,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "当日券 ¥12,000／13:00の部は中止", ko: "당일권 ¥12,000 / 13:00 공연은 중지", en: "Door ¥12,000 / 13:00 performance cancelled" } }
    ],
    notes: [
      { ja: "各公演後に特典会を予定しています。", ko: "각 공연 후 특전회를 예정하고 있습니다.", en: "A fan event follows each show." },
      { ja: "全席指定・先着販売。お一人様4枚まで。", ko: "전석 지정석·선착순 판매. 1인 4매까지.", en: "Reserved seating, first come. Up to 4 tickets per person." },
      { ja: "3歳未満は入場不可。", ko: "만 3세 미만 입장 불가.", en: "Children under 3 not admitted." }
    ],
    ticketNote: { ja: "発売中（LivePocket・先着）", ko: "판매 중 (LivePocket·선착순)", en: "On sale now (LivePocket, first come)" }
  },
  {
    id: "hyuk",
    poster: "assets/img/event-hyuk.jpg",
    title: "2026 HYUK FANMEETING [LAST HOLIDAY X-MAS]",
    city: "osaka",
    cityLabel: "OSAKA",
    month: 12, day: 26, weekday: { ja: "土", ko: "토", en: "SAT" },
    dateShort: "12.26",
    year: 2026,
    status: "onsale",
    ticket: "https://eplus.jp/hyuk/",
    venueShort: { ja: "PLUSWIN HALL OSAKA", ko: "PLUSWIN HALL OSAKA", en: "PLUSWIN HALL OSAKA" },
    sub: {
      ja: "VIXXのHYUKが、クリスマスの余韻が残る年末に日本のファンと過ごす特別な2日間。",
      ko: "VIXX 혁(HYUK)이 크리스마스의 여운이 남은 연말, 일본 팬들과 보내는 특별한 이틀.",
      en: "VIXX's HYUK closes the year with two special days for Japanese fans."
    },
    priceLabel: { ja: "全席指定 ¥12,000〜", ko: "지정석 ¥12,000~", en: "From ¥12,000" },
    priceFrom: "¥5,000",
    venues: [HALL_OSAKA],
    dates: [{ ja: "2026.12.26 (土)・12.27 (日) — PLUSWIN HALL OSAKA", ko: "2026.12.26 (토)・12.27 (일) — PLUSWIN HALL OSAKA", en: "26–27 Dec 2026 (Sat–Sun) — PLUSWIN HALL OSAKA" }],
    sessions: [
      { name: { ja: "1部：特典会", ko: "1부: 특전회", en: "Part 1 — Fan event" }, open: "13:00", start: "14:00", price: "¥5,000", seat: { ja: "整理番号付き自由席", ko: "정리번호 있는 자유석", en: "Free seating, numbered" }, note: { ja: "当日券 ¥5,500／チェキ・スマホ撮影・サイン会（歌唱なし）", ko: "당일권 ¥5,500 / 체키·스마트폰 촬영·사인회(노래 없음)", en: "Door ¥5,500 / photo & signing session, no performance" } },
      { name: { ja: "2部：FAN-CON", ko: "2부: FAN-CON", en: "Part 2 — FAN-CON" }, open: "17:00", start: "18:00", price: "¥12,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "当日券 ¥13,000／入場時ワンドリンク別途", ko: "당일권 ¥13,000 / 입장 시 원드링크 별도", en: "Door ¥13,000 / one drink at entry" } }
    ],
    notes: [
      { ja: "特典会への参加には、入場チケットと当日配布の参加用チケットが必要です。", ko: "특전회 참가는 입장권과 당일 배포되는 참가권이 필요합니다.", en: "The fan event requires an entry ticket plus the participation ticket handed out on the day." },
      { ja: "お一人様4枚まで（特典会入場券は1枚まで）。", ko: "1인 4매까지(특전회 입장권은 1매까지).", en: "Up to 4 tickets per person (1 for the fan-event entry)." },
      { ja: "3歳未満は入場不可。", ko: "만 3세 미만 입장 불가.", en: "Children under 3 not admitted." }
    ],
    ticketNote: { ja: "発売中（イープラス・先着）", ko: "판매 중 (이플러스·선착순)", en: "On sale now (e+, first come)" }
  },
  {
    id: "jinho",
    poster: "assets/img/event-jinho.jpg",
    title: "2027 JINHO’s NEW YEAR PARTY! [JIN-UARY PARTY]",
    city: "both",
    cityLabel: "TOKYO / OSAKA",
    month: 1, day: 10, weekday: { ja: "日", ko: "일", en: "SUN" },
    dateShort: "01.10",
    year: 2027,
    status: "soon",
    ticket: "https://eplus.jp/jinho/",
    venueShort: { ja: "SONORRA / PLUSWIN HALL OSAKA", ko: "SONORRA / PLUSWIN HALL OSAKA", en: "SONORRA / PLUSWIN HALL OSAKA" },
    sub: {
      ja: "PENTAGONデビュー10周年を経て、ソロとして新たな1年へ。実力派ボーカリスト JINHO の NEW YEAR PARTY。",
      ko: "펜타곤 데뷔 10주년을 지나 솔로로 새해를 여는, 실력파 보컬리스트 JINHO의 NEW YEAR PARTY.",
      en: "After PENTAGON's 10th anniversary, JINHO opens a new year solo — a New Year party with the vocalist."
    },
    priceLabel: { ja: "全席指定 ¥12,000", ko: "지정석 ¥12,000", en: "From ¥12,000" },
    priceFrom: "¥5,000",
    venues: [SONORRA, HALL_OSAKA],
    dates: [
      { ja: "2027.01.10 (日)・01.11 (月祝) — SONORRA（東京）", ko: "2027.01.10 (일)・01.11 (월·공휴일) — SONORRA (도쿄)", en: "10–11 Jan 2027 (Sun–Mon holiday) — SONORRA, Tokyo" },
      { ja: "2027.01.16 (土)・01.17 (日) — PLUSWIN HALL OSAKA", ko: "2027.01.16 (토)・01.17 (일) — PLUSWIN HALL OSAKA", en: "16–17 Jan 2027 (Sat–Sun) — PLUSWIN HALL OSAKA" }
    ],
    sessions: [
      { name: { ja: "1部：特典会", ko: "1부: 특전회", en: "Part 1 — Fan event" }, open: "12:00", start: "13:00", price: "¥5,000", seat: { ja: "整理番号付き自由席", ko: "정리번호 있는 자유석", en: "Free seating, numbered" }, note: { ja: "当日券 ¥5,500", ko: "당일권 ¥5,500", en: "Door ¥5,500" } },
      { name: { ja: "2部：JIN-UARY PARTY!", ko: "2부: JIN-UARY PARTY!", en: "Part 2 — JIN-UARY PARTY!" }, open: "16:00", start: "17:00", price: "¥12,000", seat: { ja: "全席指定", ko: "전석 지정석", en: "Reserved seating" }, note: { ja: "入場時ワンドリンク別途", ko: "입장 시 원드링크 별도", en: "One drink at entry" } },
      { name: { ja: "3部：特典会", ko: "3부: 특전회", en: "Part 3 — Fan event" }, open: "19:30", start: "20:00", price: "¥5,000", seat: { ja: "整理番号付き自由席", ko: "정리번호 있는 자유석", en: "Free seating, numbered" }, note: { ja: "当日券 ¥5,500／チェキ・スマホ撮影・ハイタッチ（サイン会なし）", ko: "당일권 ¥5,500 / 체키·스마트폰 촬영·하이터치(사인회 없음)", en: "Door ¥5,500 / photos & hi-bye, no signing" } }
    ],
    notes: [
      { ja: "チケット発売：東京公演 11/30 (月) 18:00〜／大阪公演 11/30 (月) 19:00〜。", ko: "티켓 발매: 도쿄 공연 11/30 (월) 18:00~ / 오사카 공연 11/30 (월) 19:00~.", en: "Tickets: Tokyo from 30 Nov (Mon) 18:00 / Osaka from 30 Nov (Mon) 19:00." },
      { ja: "2部はお一人様4枚まで、特典会入場券は1枚まで。", ko: "2부는 1인 4매까지, 특전회 입장권은 1매까지.", en: "Part 2: up to 4 tickets per person; fan-event entry: 1." },
      { ja: "3歳未満は入場不可。", ko: "만 3세 미만 입장 불가.", en: "Children under 3 not admitted." }
    ],
    ticketNote: { ja: "11/30 (月) 18:00 販売開始", ko: "11/30 (월) 18:00 판매 시작", en: "On sale 30 Nov (Mon) 18:00" }
  }
];

const PAST = [
  { key: "kik5o-2026", artist: "Kik5o", title: "FAN CONCERT RE:BORN IN OSAKA 2026", date: "2026.11.15", sort: "2026-11-15", year: "2026", venue: "PLUSWIN HALL VILLEBOA", poster: "assets/img/past/kik5o-2026.jpg", url: "https://www.pluswin.net/news-1-1/kik5o-japanlive" },
  { key: "hanse-2026", artist: "HANSE", title: "JAPAN LIVE 2026 - Shine Forever", date: "2026.11 - 12", sort: "2026-11-24", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/hanse-2026.jpg", url: "https://www.pluswin.net/news-1-1/dohanse-japan-event" },
  { key: "ko-taewoon", artist: "KO TAEWOON", title: "1st FANMEETING in JAPAN [New Chapter:LINK]", date: "2026.10.10 - 11.01", sort: "2026-10-10", year: "2026", venue: "OSAKA / TOKYO", poster: "assets/img/past/ko-taewoon.jpg", url: "https://www.pluswin.net/news-1-1/kotaewoon" },
  { key: "bae-jinyoung", artist: "BAE JINYOUNG", title: "JAPAN FANMEETING [Autumn Breeze]", date: "2026.09.11 - 10.04", sort: "2026-09-11", year: "2026", venue: "GOTANDA / OSAKA", poster: "assets/img/past/bae-jinyoung.jpg", url: "https://www.pluswin.net/news-1-1/baejinyoung" },
  { key: "ehjm", artist: "EHJM", title: "2026 CONCERT IN OSAKA", date: "2026.08.22", sort: "2026-08-22", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/ehjm.jpg", url: "https://www.pluswin.net/news-1-1/ehjm-event" },
  { key: "jeon-woong", artist: "JEON WOONG", title: "JAPAN FANMEETING [WOONG SUMMER NIGHT]", date: "2026.08.01 - 02", sort: "2026-08-01", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/jeon-woong.jpg", url: "https://www.pluswin.net/news-1-1/jeonwoong" },
  { key: "klovers-2026-summer", artist: "K-LOVERS FES", title: "2026 SUMMER", date: "2026.08.01", sort: "2026-08-01", year: "2026", venue: "TEMPO HARBOR THEATER", poster: "assets/img/past/klovers-2026-summer.jpg", url: "https://www.pluswin.net/news-1-1/kloversfes2026summer" },
  { key: "yeeun", artist: "YEEUN", title: "JAPAN FANMEETING 'Scent of Memories'", date: "2026.07.24 - 25", sort: "2026-07-24", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/yeeun.jpg", url: "https://www.pluswin.net/news-1-1/yeeun" },
  { key: "cho-byeong-kyu", artist: "CHO BYEONG KYU", title: "JAPAN FAN MEETING -Welcome to CAFE BK-", date: "2026.07.18 - 19", sort: "2026-07-18", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/cho-byeong-kyu.jpg", url: "https://www.pluswin.net/news-1-1/chobyeongkyu-event" },
  { key: "zelo", artist: "ZELO", title: "FANCONCERT [COMIGO:NEXT CHAPTER] in Japan", date: "2026.07.04 - 05", sort: "2026-07-04", year: "2026", venue: "TIAT SKY HALL", poster: "assets/img/past/zelo.jpg", url: "https://www.pluswin.net/news-1-1/zelo" },
  { key: "wooseung", artist: "WOOSEUNG", title: "1st Fanmeeting in Osaka [MAY BE]", date: "2026.05.08 - 10", sort: "2026-05-08", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/wooseung.jpg", url: "https://www.pluswin.net/news-1-1/wooseung" },
  { key: "jinho-dear-you", artist: "JINHO", title: "FAN CONCERT 'Dear. you' in JAPAN", date: "2026.04.25 - 05.01", sort: "2026-04-25", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/jinho-dear-you.jpg", url: "https://www.pluswin.net/news-1-1/jinho20260405" },
  { key: "lee-jinsol", artist: "LEE JINSOL", title: "'from. Sagittarius' RELEASE LIVE in JAPAN", date: "2026.04.22 - 26", sort: "2026-04-22", year: "2026", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/lee-jinsol.jpg", url: "https://www.pluswin.net/news-1-1/jinsol" },
  { key: "klovers-2026-spring", artist: "K-LOVERS FES", title: "2026 SPRING", date: "2026.04.18 - 19", sort: "2026-04-18", year: "2026", venue: "TEMPO HARBOR THEATER", poster: "assets/img/past/klovers-2026-spring.jpg", url: "https://www.pluswin.net/news-1-1/kloversfes" },
  { key: "eastshine", artist: "EASTSHINE", title: "JAPAN LIVE 2026", date: "2026.04.17 - 05.06", sort: "2026-04-17", year: "2026", venue: "OSAKA / TOKYO", poster: "assets/img/past/eastshine.jpg", url: "https://www.pluswin.net/news-1-1/eastshine-tour" },
  { key: "jung-dae-hyun", artist: "JUNG DAE HYUN", title: "FANMEETING IN JAPAN <BLOOMING>", date: "2026.03.25 - 29", sort: "2026-03-25", year: "2026", venue: "OSAKA / TOKYO", poster: "assets/img/past/jung-dae-hyun.jpg", url: "https://www.pluswin.net/news-1-1/daehyun" },
  { key: "kik", artist: "KIK", title: "Asia Tour 2026", date: "2026.03.12 - 15", sort: "2026-03-12", year: "2026", venue: "OSAKA / TOKYO", poster: "assets/img/past/kik.jpg", url: "https://www.pluswin.net/news-1-1/wooseok-live" },
  { key: "jinho-winter-bloom", artist: "JINHO", title: "FAN-CON 'WINTER BLOOM' IN JAPAN", date: "2026.01.22 - 27", sort: "2026-01-22", year: "2026", venue: "TOKYO / OSAKA", poster: "assets/img/past/jinho-winter-bloom.jpg", url: "https://www.pluswin.net/news-1-1/jinho" },
  { key: "hanse-winter", artist: "HANSE", title: "JAPAN LIVE 2025 WINTER", date: "2025.12.16 - 26", sort: "2025-12-16", year: "2025", venue: "PLUSWIN HALL OSAKA / VILLEBOA", poster: "assets/img/past/hanse-winter.jpg", url: "https://www.pluswin.net/news-1-1/hanse-japanlive" },
  { key: "hayeon", artist: "HAYEON", title: "The First Bloom in Osaka 2025", date: "2025.12.12 - 21", sort: "2025-12-12", year: "2025", venue: "PLUSWIN HALL OSAKA / VILLEBOA", poster: "assets/img/past/hayeon.jpg", url: "https://www.pluswin.net/news-1-1/hayeon-japanlive" },
  { key: "lim-seul-ong", artist: "LIM SEUL-ONG", title: "SOLO Fan Concert 'ONGBOARDING'", date: "2025.11.07", sort: "2025-11-07", year: "2025", venue: "OSAKA / TOKYO", poster: "assets/img/past/lim-seul-ong.jpg", url: "https://www.pluswin.net/news-1-1/ongboarding" },
  { key: "xin", artist: "X:IN", title: "JAPAN 1st SHOWCASE 2025 'READY X:IN'", date: "2025.10.25 - 29", sort: "2025-10-25", year: "2025", venue: "TOKYO / OSAKA", poster: "assets/img/past/xin.jpg", url: "https://www.pluswin.net/news-1-1/xin-event" },
  { key: "everglow", artist: "EVERGLOW", title: "ASIA FANMEETING TOUR: 4EVERGLOW IN OSAKA", date: "2025.10.21 - 22", sort: "2025-10-21", year: "2025", venue: "BIGCAT", poster: "assets/img/past/everglow.jpg", url: "https://www.pluswin.net/news-1-1/everglow-osaka2025" },
  { key: "2face-tour", artist: "2FACE", title: "LIVE TOUR 2025 ~LOVE TONIGHT~", date: "2025.09.14 - 15", sort: "2025-09-14", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/2face-tour.jpg", url: "https://www.pluswin.net/news-1-1/2face-202504" },
  { key: "unicode-aing", artist: "UNICODE", title: "LIVE TOUR 2025 'Aing'", date: "2025.09.07 - 26", sort: "2025-09-07", year: "2025", venue: "OSAKA", poster: "assets/img/past/unicode-aing.jpg", url: "https://www.pluswin.net/news-1-1/unicode-event" },
  { key: "crazangel", artist: "CRAZANGEL", title: "JAPAN PRE-DEBUT SHOWCASE", date: "2025.08.30", sort: "2025-08-30", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/crazangel.jpg", url: "https://www.pluswin.net/news-1-1/2025-crazangel-japanlive" },
  { key: "kik5o-2025", artist: "Kik5o", title: "SUMMER LIVE in OSAKA 2025", date: "2025.07.22", sort: "2025-07-22", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/kik5o-2025.jpg", url: "https://www.pluswin.net/news-1-1/2025-kik5o-japanlive" },
  { key: "ken-tokyo", artist: "KEN", title: "MEET&GREET in TOKYO", date: "2025.07.19 - 20", sort: "2025-07-19", year: "2025", venue: "TIAT SKY HALL", poster: "assets/img/past/ken-tokyo.jpg", url: "https://www.pluswin.net/news-1-1/ken2025" },
  { key: "han", artist: "HAN", title: "SOLO LIVE in OSAKA", date: "2025.07.13 - 20", sort: "2025-07-13", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/han.jpg", url: "https://www.pluswin.net/news-1-1/han-live" },
  { key: "epts-ookini", artist: "EPTS", title: "SPECIAL LIVE & FANMEETING 'OOKINI'", date: "2025.06.29 - 30", sort: "2025-06-29", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/epts-ookini.jpg", url: "https://www.pluswin.net/news-1-1/2025-epts-ookini" },
  { key: "choi-sung-yun", artist: "CHOI SUNG YUN", title: "FAN MEETING 'ALL about Yun'", date: "2025.06.21 - 07.06", sort: "2025-06-21", year: "2025", venue: "OSAKA / TOKYO", poster: "assets/img/past/choi-sung-yun.jpg", url: "https://www.pluswin.net/news-1-1/choisungyun-the1stfanmeeting" },
  { key: "klovers-2025", artist: "K-LOVERS FES", title: "2025 SPRING", date: "2025.05.20 / 08.28", sort: "2025-05-20", year: "2025", venue: "Namba Hatch", poster: "assets/img/past/klovers-2025.jpg", url: "https://www.pluswin.net/news-1-1/kloversfes2025spring" },
  { key: "seo-jisuk", artist: "SEO JISUK", title: "2025 FAN MEETING [reboot]", date: "2025.04.26", sort: "2025-04-26", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/seo-jisuk.jpg", url: "https://www.pluswin.net/news-1-1/seojisuk-202506" },
  { key: "high4", artist: "HIGH4", title: "'HIGH4 WAVE' JAPAN LIVE", date: "2025.01.09 / 04.11 - 13", sort: "2025-01-09", year: "2025", venue: "OSAKA / TOKYO", poster: "assets/img/past/high4.jpg", url: "https://www.pluswin.net/news-1-1/%22high4-waev%22--japan-live-osaka" },
  { key: "jung-seungwon", artist: "JUNG SEUNGWON", title: "KR TRAIN FOR OSAKA BALLAD LINE VOL.4", date: "2025.03.29 - 30", sort: "2025-03-29", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/jung-seungwon.jpg", url: "https://www.pluswin.net/news-1-1/jung-seungwon202503" },
  { key: "2face-showcase", artist: "2FACE", title: "SHOWCASE OSAKA", date: "2025.02.24", sort: "2025-02-24", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/2face-showcase.jpg", url: "https://www.pluswin.net/news-1-1/2face-live" },
  { key: "sion", artist: "SION", title: "OUT OF THE BOX SION IN JAPAN", date: "2025.02.23", sort: "2025-02-23", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/sion.jpg", url: "https://www.pluswin.net/news-1-1/sion-in-japanlive" },
  { key: "zior-park", artist: "ZIOR PARK", title: "REST IN PEACE ZIOR PARK IN JAPAN", date: "2025.02.22", sort: "2025-02-22", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/zior-park.jpg", url: "https://www.pluswin.net/news-1-1/rest-in-peace-zior-park-in-japan" },
  { key: "lim-youngmin-valentine", artist: "LIM YOUNGMIN", title: "Valentine Concert in OSAKA 2025", date: "2025.02.15", sort: "2025-02-15", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/lim-youngmin-valentine.jpg", url: "https://www.pluswin.net/news-1-1/limyoungmin-osaka202502" },
  { key: "kr-train-vol3", artist: "KR TRAIN", title: "FOR OSAKA, BALLAD LINE VOL.3", date: "2025.02.08 - 09", sort: "2025-02-08", year: "2025", venue: "PLUSWIN HALL VILLEBOA", poster: "", url: "https://www.pluswin.net/news-1-1/kr-train-for-osaka%2Cballad-line-vol.3-" },
  { key: "bumjin", artist: "BUMJIN", title: "BUMJIN-STATION", date: "2025.01.11", sort: "2025-01-11", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/bumjin-station-" },
  { key: "unicode-together", artist: "UNICODE", title: "LIVE TOUR TOGETHER UNICODE! 2024-2025", date: "2025.01.04 - 02.09", sort: "2025-01-04", year: "2025", venue: "PLUSWIN HALL OSAKA", poster: "assets/img/past/unicode-together.jpg", url: "https://www.pluswin.net/news-1-1/unicode-live-tour--together-unicod812024-2025" },
  { key: "choi-seon", artist: "CHOI SEON", title: "JAPAN LIVE 2024", date: "2024.11.02 - 23", sort: "2024-11-02", year: "2024", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/choi-seon-japan-live-2024" },
  { key: "kr-train-vol1", artist: "KR TRAIN", title: "FOR OSAKA HIPHOP STATION vol.1", date: "2024.11.15 - 17", sort: "2024-11-15", year: "2024", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/kr-train--for-osaka-hiphop-station-vol.1-" },
  { key: "friends", artist: "FRIENDS Vol.1", title: "Presented by WOOSEOK", date: "2024.10.22", sort: "2024-10-22", year: "2024", venue: "KT Zepp Yokohama", poster: "assets/img/past/friends.jpg", url: "https://www.pluswin.net/news-1-1/friends-vol%EF%BD%A51-presented-by-wooseok" },
  { key: "lee-seong-jong", artist: "LEE SEONG JONG", title: "ASIA TOUR IN OSAKA", date: "2024.09.21 - 22", sort: "2024-09-21", year: "2024", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/2024-lee-seong-jong-asia-tour-in-osaka" },
  { key: "klovers-2024-summer", artist: "K-LOVERS FES", title: "2024 SUMMER", date: "2024.07.26", sort: "2024-07-26", year: "2024", venue: "Namba Hatch", poster: "", url: "https://www.pluswin.net/news-1-1/k-lovers-fes-2024-summer-%E9%96%8B%E5%82%AC%EF%BC%81" },
  { key: "klovers-2024-spring", artist: "K-LOVERS FES", title: "2024 SPRING", date: "2024.03.22", sort: "2024-03-22", year: "2024", venue: "Namba Hatch", poster: "", url: "https://www.pluswin.net/news-1-1/k-lovers-fes-2024-spring" },
  { key: "lim-youngmin-hanami", artist: "LIM YOUNGMIN", title: "花見ん会 -OSAKA", date: "2024.03.21 - 23", sort: "2024-03-21", year: "2024", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/lim-youngmin-%E3%81%8A%E8%8A%B1%E8%A6%8B%E3%82%93%E4%BC%9A-osaka-%E9%96%8B%E5%82%AC!" },
  { key: "wooseok-bulmung", artist: "WOOSEOK", title: "2024 JAPAN FAN MEETING 'BULMUNG'", date: "2024.03.01 - 15", sort: "2024-03-01", year: "2024", venue: "OSAKA / TOKYO", poster: "assets/img/past/wooseok-bulmung.jpg", url: "https://www.pluswin.net/news-1-1/wooseok%E3%80%88%E3%82%A6%E3%82%BD%E3%82%AF%E3%80%89-2024-japan-fan-meeting-%E2%80%9Cbulmung%E2%80%9D%E9%96%8B%E5%82%AC!" },
  { key: "go-wooseok", artist: "WOOSEOK", title: "Go WOOSEOK in JAPAN 2024", date: "2024", sort: "2024-06-01", year: "2024", venue: "OSAKA / TOKYO", poster: "", url: "https://www.pluswin.net/news-1-1/go-wooseok-in-japan-%E5%A4%A7%E9%98%AA%E5%85%AC%E6%BC%94%E3%81%8C%E6%B1%BA%E5%AE%9A%EF%BC%81" },
  { key: "lee-youngji", artist: "LEE YOUNGJI", title: "1st ASIA TOUR 'THE MAIN CHARACTER' -TOKYO", date: "2024.01.30", sort: "2024-01-30", year: "2024", venue: "TOYOSU PIT", poster: "assets/img/past/lee-youngji.jpg", url: "https://www.pluswin.net/news-1-1/lee-youngji-%E3%80%88%E3%82%A4%EF%BD%A5%E3%83%A8%E3%83%B3%E3%82%B8%E3%80%891st-asia-tour-%22the-main-character%22-tokyo-%E9%96%8B%E5%82%AC!" },
  { key: "lim-youngmin-xmas", artist: "LIM YOUNGMIN", title: "BIRTHDAY & CHRISTMAS FAN CONCERT", date: "2023.12.25 - 26", sort: "2023-12-25", year: "2023", venue: "PLUSWIN HALL OSAKA", poster: "", url: "https://www.pluswin.net/news-1-1/lim-youngmin--birthday-%EF%BC%86-christmas---fan-concert-%E9%96%8B%E5%82%AC!" },
];

const GUIDES = [
  {
    ja: { t: "チケットについて", li: ["ご購入後のキャンセル・払い戻し・公演日の変更はできません。", "ご入場にはチケットが必要です。紛失・破損の場合も再発行はできません。", "3歳未満のお子様はご入場いただけません。", "お一人様4枚までご購入いただけます（公演により異なります）。", "会場の構造上、ステージが見えにくい席となる場合があります。"] },
    ko: { t: "티켓 안내", li: ["구매 후 취소·환불·공연일 변경은 불가합니다.", "입장에는 티켓이 필요하며, 분실·훼손 시에도 재발급되지 않습니다.", "만 3세 미만은 입장할 수 없습니다.", "1인당 4매까지 구매할 수 있습니다(공연별로 다를 수 있음).", "공연장 구조상 무대가 잘 보이지 않는 좌석이 있을 수 있습니다."] },
    en: { t: "Tickets", li: ["Cancellations, refunds and date changes are not possible after purchase.", "A ticket is required for entry. Lost or damaged tickets cannot be reissued.", "Children under 3 are not admitted.", "Up to 4 tickets per person (varies by show).", "Some seats may have a restricted view of the stage."] },
  },
  {
    ja: { t: "特典会について", li: ["特典会への参加には、当日配布の参加券と有効な特典券が必要です。", "特典券は有料で、各公演の当日のみ有効です。", "列の往復や、繰り返しの並び直しは禁止です。", "特典券の購入枚数には上限があります。"] },
    ko: { t: "특전회 안내", li: ["특전회 참가에는 당일 배포되는 참가권과 유효한 특전권이 필요합니다.", "특전권은 유료이며, 각 공연 당일만 유효합니다.", "줄을 왕복하거나 반복해서 다시 서는 행위는 금지됩니다.", "특전권 구매 매수에는 상한이 있습니다."] },
    en: { t: "Fan events", li: ["Entry to a fan event requires the participation ticket handed out on the day and a valid event ticket.", "Event tickets are paid and valid only on the day of each show.", "Returning to the queue or re-queuing repeatedly is not allowed.", "There is a purchase limit on event tickets."] },
  },
  {
    ja: { t: "撮影について", li: ["スマートフォン撮影はスタッフが行います。画面録画機能とLive Photosは使用できません。", "撮影前にスタッフが端末の設定を確認します。", "ポーズは撮影前に決めてください。撮り直しは原則できません。", "アーティストへの過度な身体接触や、持ち物を持たせての撮影はできません。"] },
    ko: { t: "촬영 안내", li: ["스마트폰 촬영은 스태프가 진행합니다. 화면 녹화 기능과 Live Photos는 사용할 수 없습니다.", "촬영 전 스태프가 기기 설정을 확인합니다.", "포즈는 촬영 전에 정해 주세요. 원칙적으로 다시 찍을 수 없습니다.", "아티스트와 과도한 신체 접촉, 소지품을 들려주는 촬영은 할 수 없습니다."] },
    en: { t: "Photos", li: ["Staff take smartphone photos. Screen recording and Live Photos are not allowed.", "Staff check your device settings before shooting.", "Decide your pose beforehand. Retakes are generally not possible.", "No excessive physical contact with the artist, and no posing with personal items."] },
  },
  {
    ja: { t: "サイン会について", li: ["A5サイズのサインカード、またはA4サイズまでの私物にサインします。", "お名前を入れる場合は、事前にメモに書いてスタッフへお渡しください。", "ご本人のみ参加できます。ご同伴の方は参加できません。"] },
    ko: { t: "사인회 안내", li: ["A5 사이즈 사인 카드 또는 A4 사이즈까지의 소지품에 사인합니다.", "이름을 적는 경우 미리 메모에 적어 스태프에게 전달해 주세요.", "본인만 참여할 수 있으며 동반자는 참여할 수 없습니다."] },
    en: { t: "Signings", li: ["We sign A5 sign cards or personal items up to A4 size.", "If you would like your name written, write it on a note beforehand and hand it to staff.", "Only the ticket holder may take part; companions cannot join."] },
  },
  {
    ja: { t: "公演中のマナー", li: ["公演中の録音・録画・撮影は禁止です。", "泥酔状態でのご入場、および会場内での飲酒はご遠慮ください。", "お荷物を置いて席を取る行為は禁止です。", "他のお客様の視界を遮る行為、出演者へのやじや話しかけはご遠慮ください。"] },
    ko: { t: "공연 중 매너", li: ["공연 중 녹음·녹화·촬영은 금지입니다.", "만취 상태로 입장하거나 공연장 안에서 음주하는 것은 삼가 주세요.", "짐을 놓아 자리를 맡는 행위는 금지입니다.", "다른 관객의 시야를 가리는 행위, 출연자에게 야유하거나 말을 거는 행위는 삼가 주세요."] },
    en: { t: "During the show", li: ["Recording, filming and photography during the show are prohibited.", "Do not enter intoxicated or drink excessively inside the venue.", "Saving seats with bags or belongings is not allowed.", "Do not block other guests' view or shout at the performers."] },
  },
  {
    ja: { t: "プレゼント・差し入れ", li: ["現金、生き物、電子機器、手作りの食品、生もの、宗教関連の品、大きすぎる・重すぎる物はお受けできません。", "開封済み・使用済みの品物はお受けできません。", "お受けできない品物は会場で処分します。返却はできません。"] },
    ko: { t: "선물·서포트", li: ["현금, 살아있는 동물·곤충, 전자기기, 직접 만든 음식, 날것, 종교 관련 물품, 너무 크거나 무거운 물품은 받을 수 없습니다.", "개봉했거나 사용한 물품은 받을 수 없습니다.", "받을 수 없는 물품은 현장에서 폐기하며 반환하지 않습니다."] },
    en: { t: "Gifts and support", li: ["We cannot accept cash, living creatures, electronics, homemade food, fresh or raw food, religious items, or items that are too large or heavy.", "Opened or used items cannot be accepted.", "Items we cannot accept are disposed of at the venue and cannot be returned."] },
  },
  {
    ja: { t: "入場・禁止事項", li: ["入場チケット・特典券のコピーや偽造は固く禁止します。", "他のお客様への迷惑行為、勧誘・宣伝行為はご遠慮ください。", "スタッフの指示に従えない場合、ご退場いただくことがあります。"] },
    ko: { t: "입장·금지 사항", li: ["입장권·특전권의 복사나 위조는 엄격히 금지합니다.", "다른 관객에게 피해를 주는 행위, 권유·홍보 행위는 삼가 주세요.", "스태프의 안내에 따르지 않을 경우 퇴장을 요청할 수 있습니다."] },
    en: { t: "Entry and prohibited conduct", li: ["Copying or forging entry tickets or event tickets is strictly prohibited.", "Please do not disturb other guests or solicit or promote other events.", "Guests who do not follow staff instructions may be asked to leave."] },
  },
];

/* ---------- business pillars ---------- */
const PILLARS = [
  {
    num: "01",
    en: "LIVE HALL & RENTAL",
    title: { ja: "ライブホール運営・レンタル", ko: "라이브홀 운영·대관", en: "Live hall & venue rental" },
    desc: {
      ja: "心斎橋の PLUSWIN HALL OSAKA。着席220名／スタンディング500名、高精細LEDと音響・照明、生配信環境を常設。レンタルは同ホールのみで承ります。",
      ko: "신사이바시의 PLUSWIN HALL OSAKA. 지정석 220석·스탠딩 500명, 고정밀 LED와 음향·조명, 생중계 환경을 상설. 대관은 이 홀에서만 진행합니다.",
      en: "PLUSWIN HALL OSAKA in Shinsaibashi: 220 seated or 500 standing, with permanent LED, sound, lighting and streaming. Rental is offered at this hall only."
    },
    tags: { ja: ["220席", "500名", "高精細LED", "生配信"], ko: ["220석", "500명", "고정밀 LED", "생중계"], en: ["220 seats", "500 standing", "HD LED", "Streaming"] }
  },
  {
    num: "02",
    en: "EVENT PRODUCTION",
    title: { ja: "イベント企画・制作・運営", ko: "이벤트 기획·제작·운영", en: "Event planning & production" },
    desc: {
      ja: "ライブ、ファンミーティング、ショーケースまで。企画・制作・運営・出演者ブッキングを一貫して手がけます。韓国アーティストの来日公演を数多く担当。",
      ko: "라이브, 팬미팅, 쇼케이스까지. 기획·제작·운영·출연자 섭외를 일관되게 진행합니다. 한국 아티스트의 일본 공연을 다수 담당했습니다.",
      en: "From live shows and fan meetings to showcases — planning, production, operation and booking in one flow. Many Japan shows for Korean artists."
    },
    tags: { ja: ["企画", "制作", "運営", "ブッキング"], ko: ["기획", "제작", "운영", "섭외"], en: ["Planning", "Production", "Operation", "Booking"] }
  },
];

/* ---------- state ---------- */
let lang = "ja";
const state = { filter: "all", openId: null, openPastKey: null, pastYear: "all", pastLimit: 12 };

/* ---------- helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => {
  const lookup = (dict) => {
    if (dict[key] !== undefined) return dict[key];
    if (key.indexOf(".") !== -1) {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur == null) return undefined;
        cur = cur[p];
      }
      if (cur !== undefined) return cur;
    }
    return undefined;
  };
  const v = lookup(T[lang]);
  if (v !== undefined) return v;
  const fallback = lookup(T.ja);
  return fallback !== undefined ? fallback : key;
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function monthName(m, l) {
  const names = {
    ja: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    ko: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    en: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  };
  return names[l][m - 1];
}

/* ---------- static translation pass ---------- */
function applyStatic() {
  const dict = T[lang];
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val === undefined) return;
    if (val.indexOf("<") !== -1) el.innerHTML = val;
    else el.textContent = val;
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const val = dict[el.getAttribute("data-i18n-ph")];
    if (val !== undefined) el.setAttribute("placeholder", val);
  });

  document.title = dict.metaTitle;
  const meta = $('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.metaDesc);

  $$("[data-lang-btn]").forEach((b) => {
    b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang ? "true" : "false");
  });
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
}

/* ---------- renderers ---------- */
function renderEvents() {
  const grid = $("#eventGrid");
  if (!grid) return;
  const list = EVENTS.filter((e) => state.filter === "all" || e.city === state.filter || e.city === "both");
  grid.innerHTML = list.map((e) => {
    const statusCls = e.status === "soon" ? "is-soon" : "";
    const statusTxt = e.status === "soon" ? t("events.soon") : t("events.onsale");
    return `
      <article class="event-card" data-id="${e.id}">
        <div class="event-card-poster" style="--poster:url('${e.poster}')">
          <img src="${e.poster}" alt="${esc(e.title)}" loading="lazy" decoding="async">
        </div>
        <div class="event-card-body">
          <div class="ev-date">
            <span class="m">${monthName(e.month, lang)}</span>
            <span class="d">${String(e.day).padStart(2, "0")}</span>
            <span class="w">${e.weekday[lang]}</span>
          </div>
          <div class="ev-main">
            <div class="ev-cityrow">
              <span class="ev-city">${esc(e.cityLabel)}</span>
              <span class="ev-status ${statusCls}">${statusTxt}</span>
            </div>
            <button type="button" class="ev-card-title" data-open="${e.id}">${esc(e.title)}</button>
            <p class="ev-card-sub">${esc(e.sub[lang])}</p>
            <div class="ev-card-meta">
              <span><b>${esc(e.venueShort[lang])}</b></span>
              <span>${esc(e.priceLabel[lang])}</span>
            </div>
            <div class="ev-card-actions">
              <a class="ev-mini is-primary" href="${e.ticket}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M3 8.5h18v2.1a1.9 1.9 0 0 0 0 3.8v2.1H3v-2.1a1.9 1.9 0 0 0 0-3.8z"/><path d="M9.5 8.5v8" stroke-dasharray="1.6 2"/></svg>
                ${t("events.ticket")}
              </a>
              <a class="ev-mini" href="${e.venues[0].map}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>
                ${t("events.access")}
              </a>
              <button type="button" class="ev-mini" data-open="${e.id}">${t("events.detail")}</button>
            </div>
          </div>
        </div>
      </article>`;
  }).join("");
}

function pastFiltered() {
  return PAST.filter((p) => state.pastYear === "all" || p.year === state.pastYear);
}

function renderPast() {
  const grid = $("#pastGrid");
  if (!grid) return;
  const all = pastFiltered();
  const shown = state.pastLimit === "all" ? all : all.slice(0, state.pastLimit);
  grid.innerHTML = shown.map((p) => {
    const poster = p.poster
      ? `<div class="arch-poster" style="--poster:url('${p.poster}')"><img src="${p.poster}" alt="${esc(p.artist)} — ${esc(p.title)}" loading="lazy" decoding="async"></div>`
      : `<div class="arch-poster"><span class="arch-typo-inner"><span class="arch-typo-mark" aria-hidden="true"></span><span class="arch-typo-name">${esc(p.artist)}</span><span class="arch-typo-year">${esc(p.year)}</span></span></div>`;
    return `
      <article class="arch-card${p.poster ? "" : " is-typo"}" data-past="${p.key}" tabindex="0" role="button" aria-label="${esc(p.artist)} — ${esc(p.title)}, ${esc(p.date)}, ${esc(p.venue)}">
        ${poster}
        <div class="arch-info">
          <h4 class="arch-artist">${esc(p.artist)}</h4>
          <p class="arch-title">${esc(p.title)}</p>
          <p class="arch-meta"><span>${esc(p.date)}</span><span class="arch-venue">${esc(p.venue)}</span></p>
        </div>
      </article>`;
  }).join("");
  const count = $("#pastCount");
  if (count) count.textContent = String(all.length);
  const more = $("#pastMore");
  if (more) {
    const expanded = state.pastLimit === "all";
    more.hidden = all.length <= 12;
    more.textContent = expanded ? t("events.pastLess") : t("events.pastMore");
    more.setAttribute("aria-expanded", expanded ? "true" : "false");
  }
}

function renderPillars() {
  const wrap = $("#pillars");
  if (!wrap) return;
  wrap.innerHTML = PILLARS.map((p) => `
    <article class="pillar reveal is-in">
      <span class="pillar-num">${p.num}</span>
      <h3>${esc(p.en)}<span>${esc(p.title[lang])}</span></h3>
      <p>${esc(p.desc[lang])}</p>
      <div class="pillar-tags">${p.tags[lang].map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    </article>`).join("");
}

function renderNextChip() {
  const e = EVENTS[0];
  const chip = $("#nextChip");
  if (!chip || !e) return;
  chip.innerHTML = `
    <span class="next-chip-label">${t("hero.next")}</span>
    <span class="next-chip-date">${e.dateShort}</span>
    <span class="next-chip-title">${esc(e.title)}</span>
    <span class="next-chip-venue">${esc(e.venueShort[lang])}</span>`;
}

/* ---------- drawer ---------- */
function guideMarkup() {
  return `
      <div class="dr-section dr-guide">
        <h4>${t("guide.title")}</h4>
        <p class="dr-guide-lead">${t("guide.lead")}</p>
        <div class="guide-list">
          ${GUIDES.map((g, i) => `
            <details class="guide-item">
              <summary><span class="guide-num">${String(i + 1).padStart(2, "0")}</span><b>${esc(g[lang].t)}</b><i aria-hidden="true"></i></summary>
              <ul>${g[lang].li.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            </details>`).join("")}
        </div>
      </div>`;
}

function openRoot() {
  const root = $("#drawerRoot");
  if (!root) return;
  const sc = $(".drawer-scroll", root);
  if (sc) sc.scrollTop = 0;
  root.classList.add("is-open");
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  const drawer = $(".drawer", root);
  setTimeout(() => drawer && drawer.focus(), 60);
}

function openPast(key) {
  const p = PAST.find((x) => x.key === key);
  if (!p) return;
  state.openPastKey = key;
  const content = $("#drawerContent");
  const hero = p.poster
    ? `<div class="dr-hero dr-hero-past" style="--poster:url('${p.poster}')"><img src="${p.poster}" alt="${esc(p.artist)} — ${esc(p.title)}"></div>`
    : `<div class="dr-hero dr-hero-past"><div class="dr-hero-fallback"><span>${esc(p.artist)}</span></div></div>`;
  content.innerHTML = `
    ${hero}
    <div class="dr-body">
      <div class="dr-kicker">
        <span class="ev-city">${esc(p.year)}</span>
        <span class="ev-city">${t("past.kicker")}</span>
      </div>
      <h3 class="dr-title" id="drawerTitle">${esc(p.artist)}</h3>
      <p class="dr-sub">${esc(p.title)}</p>
      <div class="dr-meta-grid">
        <div><span>${t("past.date")}</span><b>${esc(p.date)}</b></div>
        <div><span>${t("past.venue")}</span><b>${esc(p.venue)}</b></div>
      </div>
      ${guideMarkup()}
      <div class="dr-actions">
        <a class="btn btn-line" href="${p.url}" target="_blank" rel="noopener">${t("past.source")}</a>
      </div>
      <p class="dr-note">${t("past.producedBy")}</p>
    </div>`;
  openRoot();
}

function openDrawer(id) {
  const e = EVENTS.find((x) => x.id === id);
  if (!e) return;
  state.openId = id;
  const addrKey = lang === "ko" ? "addrKo" : lang === "en" ? "addrEn" : "addrJa";
  const content = $("#drawerContent");
  content.innerHTML = `
    <div class="dr-hero" style="--poster:url('${e.poster}')"><img src="${e.poster}" alt="${esc(e.title)}"></div>
    <div class="dr-body">
      <div class="dr-kicker">
        <span class="ev-city">${esc(e.cityLabel)}</span>
        <span class="ev-status ${e.status === "soon" ? "is-soon" : ""}">${e.status === "soon" ? t("events.soon") : t("events.onsale")}</span>
      </div>
      <h3 class="dr-title" id="drawerTitle">${esc(e.title)}</h3>
      <p class="dr-sub">${esc(e.sub[lang])}</p>

      <div class="dr-section">
        <h4>${t("labels.venue")}</h4>
        <ul class="dr-list">
          ${e.dates.map((d) => `<li>${esc(d[lang])}</li>`).join("")}
        </ul>
      </div>

      <div class="dr-section">
        <h4>${t("labels.sessions")}</h4>
        <div class="dr-sessions">
          ${e.sessions.map((s) => `
            <div class="dr-session">
              <div class="dr-session-top">
                <span class="dr-session-name">${esc(s.name[lang])}</span>
                <span class="dr-session-price">${esc(s.price)}</span>
              </div>
              <div class="dr-session-time">${t("labels.open")} ${s.open} / ${t("labels.start")} ${s.start}</div>
              <div class="dr-session-note">${esc(s.seat[lang])}${s.note ? " — " + esc(s.note[lang]) : ""}</div>
            </div>`).join("")}
        </div>
      </div>

      <div class="dr-section">
        <h4>${t("labels.notes")}</h4>
        <ul class="dr-list">${e.notes.map((n) => `<li>${esc(n[lang])}</li>`).join("")}</ul>
      </div>

      <div class="dr-section">
        <h4>${t("labels.access")}</h4>
        <ul class="dr-list">
          ${e.venues.map((v) => `<li>${esc(v.name)} — ${esc(v[addrKey])} <a class="link-arrow" style="margin-left:8px" href="${v.map}" target="_blank" rel="noopener">MAP</a></li>`).join("")}
        </ul>
      </div>

      ${guideMarkup()}

      <div class="dr-actions">
        <a class="btn btn-solid" href="${e.ticket}" target="_blank" rel="noopener">${t("events.ticket")}
          <svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn btn-line" href="${e.venues[0].map}" target="_blank" rel="noopener">${t("events.access")}</a>
      </div>
      <p class="dr-note">${esc(e.ticketNote[lang])}　—　${esc(e.priceLabel[lang])}</p>
    </div>`;

  openRoot();
}

function closeDrawer() {
  const root = $("#drawerRoot");
  if (!root) return;
  root.classList.remove("is-open");
  root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  state.openId = null;
  state.openPastKey = null;
}

/* ---------- language ---------- */
function setLang(next, opts = {}) {
  if (!LANGS.includes(next)) next = "ja";
  lang = next;
  try { localStorage.setItem(LANG_KEY, lang); } catch (err) { /* ignore */ }
  applyStatic();
  renderEvents();
  renderPast();
  renderPillars();
  renderNextChip();
  if (state.openId) openDrawer(state.openId);
  else if (state.openPastKey) openPast(state.openPastKey);
  if (opts.updateUrl !== false && window.location.protocol !== "file:") {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
}

function initialLang() {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q && LANGS.includes(q.toLowerCase())) return q.toLowerCase();
  const saved = (() => { try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; } })();
  if (saved && LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "ja").slice(0, 2).toLowerCase();
  return nav === "ko" ? "ko" : nav === "en" ? "en" : "ja";
}

/* ---------- interactions ---------- */
function bind() {
  $$("[data-lang-btn]").forEach((b) => {
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang-btn")));
  });

  document.addEventListener("click", (ev) => {
    const opener = ev.target.closest("[data-open]");
    if (opener) { ev.preventDefault(); openDrawer(opener.getAttribute("data-open")); return; }
    if (ev.target.closest("[data-drawer-close]")) { closeDrawer(); return; }
    const card = ev.target.closest(".event-card");
    if (card && !ev.target.closest("a,button")) { openDrawer(card.getAttribute("data-id")); return; }
    const past = ev.target.closest("[data-past]");
    if (past) openPast(past.getAttribute("data-past"));
  });

  document.addEventListener("keydown", (ev) => {
    const active = document.activeElement;
    if ((ev.key === "Enter" || ev.key === " ") && active && active.matches("[data-past]")) {
      ev.preventDefault();
      openPast(active.getAttribute("data-past"));
      return;
    }
    if (ev.key === "Escape") {
      closeDrawer();
      const nav = $("#mainNav");
      if (nav && nav.classList.contains("is-open")) toggleMenu(false);
    }
  });

  const pastFilters = $("#pastFilters");
  if (pastFilters) {
    pastFilters.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-past-filter]");
      if (!btn) return;
      state.pastYear = btn.getAttribute("data-past-filter");
      state.pastLimit = 12;
      $$("[data-past-filter]", pastFilters).forEach((b) => b.classList.toggle("is-active", b === btn));
      renderPast();
    });
  }

  const pastMore = $("#pastMore");
  if (pastMore) {
    pastMore.addEventListener("click", () => {
      state.pastLimit = state.pastLimit === "all" ? 12 : "all";
      renderPast();
      if (state.pastLimit === 12) {
        const sec = $("#archive");
        if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  const filterRow = $("#eventFilter");
  if (filterRow) {
    filterRow.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-filter]");
      if (!btn) return;
      state.filter = btn.getAttribute("data-filter");
      $$("[data-filter]", filterRow).forEach((b) => b.classList.toggle("is-active", b === btn));
      renderEvents();
      applyStatic();
    });
  }

  // header scroll state
  const header = $("#siteHeader");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile menu
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  function toggleMenu(force) {
    if (!nav || !toggle) return;
    const open = force !== undefined ? force : !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("is-locked", open);
  }
  if (toggle) toggle.addEventListener("click", () => toggleMenu());
  $$("#mainNav a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

  // reveal on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal").forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  // rental form -> mailto
  const form = $("#rentalForm");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const data = new FormData(form);
      const get = (k) => (data.get(k) || "").toString().trim();
      const subject = `[PLUSWIN HALL OSAKA] レンタル相談 — ${get("name") || "(no name)"}`;
      const lines = [
        `お名前 / Name: ${get("name")}`,
        `会社・団体名 / Company: ${get("company")}`,
        `メール / Email: ${get("email")}`,
        `電話 / Tel: ${get("tel")}`,
        `希望日 / Preferred date: ${get("date")}`,
        `利用目的 / Purpose: ${get("purpose")}`,
        `予定人数 / Attendance: ${get("people")}`,
        "",
        `ご相談内容 / Message:`,
        get("message"),
        "",
        "—— sent from pluswin.net (renewal prototype)"
      ];
      window.location.href = `mailto:${MAIL_RENTAL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      const status = $("#formStatus");
      if (status) status.classList.add("is-on");
    });
  }
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  lang = initialLang();
  applyStatic();
  renderEvents();
  renderPast();
  renderPillars();
  renderNextChip();
  bind();
  // reflect the deep-link language once, without polluting the URL on first load
  if (!new URLSearchParams(window.location.search).get("lang") && window.location.protocol !== "file:") {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
});
