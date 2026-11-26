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
  { title: "Kik5o FAN CONCERT RE:BORN IN OSAKA 2026", when: "2026.11" },
  { title: "KO TAEWOON 1st FANMEETING in JAPAN [New Chapter:LINK]", when: "2026.10 – 11" },
  { title: "2026 BAE JINYOUNG JAPAN FANMEETING [Autumn Breeze]", when: "2026.09 – 10" }
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
const state = { filter: "all", openId: null };

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
      <article class="event-card reveal is-in" data-id="${e.id}">
        <div class="event-card-media"><img src="${e.poster}" alt="" loading="lazy"></div>
        <div class="event-card-inner">
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

function renderPast() {
  const ul = $("#pastList");
  if (!ul) return;
  ul.innerHTML = PAST.map((p) => `<li><b>${esc(p.title)}</b><span>${esc(p.when)}</span></li>`).join("");
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
function openDrawer(id) {
  const e = EVENTS.find((x) => x.id === id);
  if (!e) return;
  state.openId = id;
  const addrKey = lang === "ko" ? "addrKo" : lang === "en" ? "addrEn" : "addrJa";
  const content = $("#drawerContent");
  content.innerHTML = `
    <div class="dr-hero"><img src="${e.poster}" alt=""></div>
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

      <div class="dr-actions">
        <a class="btn btn-solid" href="${e.ticket}" target="_blank" rel="noopener">${t("events.ticket")}
          <svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
        </a>
        <a class="btn btn-line" href="${e.venues[0].map}" target="_blank" rel="noopener">${t("events.access")}</a>
      </div>
      <p class="dr-note">${esc(e.ticketNote[lang])}　—　${esc(e.priceLabel[lang])}</p>
    </div>`;

  const root = $("#drawerRoot");
  root.classList.add("is-open");
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  const drawer = $(".drawer", root);
  setTimeout(() => drawer && drawer.focus(), 60);
}

function closeDrawer() {
  const root = $("#drawerRoot");
  if (!root) return;
  root.classList.remove("is-open");
  root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  state.openId = null;
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
    if (card && !ev.target.closest("a,button")) openDrawer(card.getAttribute("data-id"));
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      closeDrawer();
      const nav = $("#mainNav");
      if (nav && nav.classList.contains("is-open")) toggleMenu(false);
    }
  });

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
