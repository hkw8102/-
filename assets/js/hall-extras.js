/* ============================================================
   PLUSWIN HALL OSAKA — hall.html extras
   · FAQ accordion (12 questions, JP / KR / EN)
   · rental availability calendar (○ / △ / ×) from hall-availability.js
   · picking a date pre-fills the rental enquiry form
   ============================================================ */

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  {
    q: { ja: "ドリンク代はかかりますか？", ko: "드링크비가 있나요?", en: "Is there a drink fee?" },
    a: {
      ja: "入場時に、チケット代とは別に1ドリンク代 ¥600 が必要です。",
      ko: "입장할 때 티켓 값과는 별도로 1드링크비 ¥600이 필요합니다.",
      en: "A ¥600 one-drink fee is required at entry, separate from the ticket price."
    }
  },
  {
    q: { ja: "ロッカーはありますか？", ko: "사물함이 있나요?", en: "Are there lockers?" },
    a: {
      ja: "会場（地下1階）にロッカーがあります。数や利用料金は公演ごとにご案内が異なるため、当日会場のスタッフにお尋ねください。",
      ko: "공연장(지하 1층)에 사물함이 있습니다. 개수와 이용 요금은 공연마다 안내가 다르므로 당일 현장 스태프에게 문의해 주세요.",
      en: "Lockers are available on B1. Counts and fees differ by show, so please ask the venue staff on the day."
    }
  },
  {
    q: { ja: "途中で再入場できますか？", ko: "중간에 다시 입장할 수 있나요?", en: "Can I re-enter during the show?" },
    a: {
      ja: "再入場の可否は公演により異なります。当日、会場スタッフにご確認ください。",
      ko: "재입장 가능 여부는 공연마다 다릅니다. 당일 현장 스태프에게 확인해 주세요.",
      en: "Re-entry depends on the show. Please ask the venue staff on the day."
    }
  },
  {
    q: { ja: "写真・動画の撮影はできますか？", ko: "사진·영상 촬영을 할 수 있나요?", en: "Can I take photos or videos?" },
    a: {
      ja: "公演中の録音・録画・撮影は禁止です。特典会のスマートフォン撮影はスタッフが行い、画面録画とLive Photosは使用できません。",
      ko: "공연 중 녹음·녹화·촬영은 금지입니다. 특전회의 스마트폰 촬영은 스태프가 진행하며, 화면 녹화와 Live Photos는 사용할 수 없습니다.",
      en: "Recording, filming and photography during the show are not allowed. At fan events staff take the smartphone photos; screen recording and Live Photos cannot be used."
    }
  },
  {
    q: { ja: "年齢制限はありますか？", ko: "나이 제한이 있나요?", en: "Is there an age limit?" },
    a: {
      ja: "3歳未満のお子様はご入場いただけません。公演ごとに条件が異なる場合は、各公演の案内をご確認ください。",
      ko: "만 3세 미만은 입장할 수 없습니다. 공연마다 조건이 다른 경우에는 각 공연 안내를 확인해 주세요.",
      en: "Children under 3 are not admitted. Where a show has different conditions, please check that show's notice."
    }
  },
  {
    q: { ja: "車椅子・ベビーカーで行けますか？", ko: "휠체어·유모차로 갈 수 있나요?", en: "Can I come with a wheelchair or stroller?" },
    a: {
      ja: "会場はビルの地下1階です。車椅子・ベビーカーのご利用や、お足元に不安がある場合は、事前にお問い合わせください。公演ごとにご案内します。",
      ko: "공연장은 빌딩 지하 1층입니다. 휠체어·유모차 이용이나 발밑이 불안하신 경우에는 미리 문의해 주세요. 공연마다 안내드립니다.",
      en: "The hall is on B1 of the building. If you use a wheelchair or stroller, or are unsure about the stairs, please contact us in advance — we will advise for each show."
    }
  },
  {
    q: { ja: "スタンド花・バルーンは送れますか？", ko: "스탠드 화환·벌룬을 보낼 수 있나요?", en: "Can I send a flower or balloon stand?" },
    a: {
      ja: "プラスウイン主催公演のみ、事前申請制で受け付けます（開催1か月前から）。搬入・撤去の時間は申請後にお知らせします。お花屋様への引き取り手配もあわせてお願いします。他会場のレンタルイベントは対象外です。",
      ko: "플러스윈 주최 공연만 사전 신청제로 접수합니다(공연 1개월 전부터). 반입·철수 시간은 신청 후에 안내드립니다. 꽃집에 수거 준비도 함께 부탁해 주세요. 다른 공연장의 대관 이벤트는 대상이 아닙니다.",
      en: "Only for PLUSWIN-produced shows, by advance application from one month before the date. Delivery and removal times are confirmed after you apply, and collection must be arranged with your florist. Rented-in events at other venues are not covered."
    }
  },
  {
    q: { ja: "物販や特典会はありますか？", ko: "굿즈 판매나 특전회가 있나요?", en: "Is there merchandise or a fan event?" },
    a: {
      ja: "物販・特典会の内容は公演ごとに異なります。特典会への参加には、入場チケットと当日配布の参加券が必要です。詳しくは各公演の案内をご確認ください。",
      ko: "굿즈 판매·특전회 내용은 공연마다 다릅니다. 특전회 참가에는 입장권과 당일 배포되는 참가권이 필요합니다. 자세한 내용은 각 공연 안내를 확인해 주세요.",
      en: "Merchandise and fan events differ by show. Entry to a fan event needs your admission ticket plus the participation ticket handed out on the day — see each show's notice."
    }
  },
  {
    q: { ja: "チケットのキャンセル・払い戻しはできますか？", ko: "티켓을 취소하거나 환불받을 수 있나요?", en: "Can I cancel or get a refund?" },
    a: {
      ja: "ご購入後のキャンセル・払い戻し・公演日の変更はできません。公演が中止となった場合は、公式SNSと販売サイトでご案内します。",
      ko: "구매 후 취소·환불·공연일 변경은 불가합니다. 공연이 중지된 경우에는 공식 SNS와 판매 사이트에서 안내합니다.",
      en: "Cancellations, refunds and date changes are not possible after purchase. If a show is cancelled, we will announce it on our official SNS and at the ticket seller."
    }
  },
  {
    q: { ja: "落とし物をしたときは？", ko: "분실물이 생기면 어떻게 하나요?", en: "What if I lose something?" },
    a: {
      ja: "会場でお預かりしています。公演日・お名前・品物の特徴を添えて、06-6536-2002 または info@pluswin.jp までご連絡ください。",
      ko: "공연장에서 보관하고 있습니다. 공연일·이름·물건의 특징을 적어 06-6536-2002 또는 info@pluswin.jp로 연락해 주세요.",
      en: "Lost items are kept at the venue. Please contact 06-6536-2002 or info@pluswin.jp with the show date, your name and a description of the item."
    }
  },
  {
    q: { ja: "会場への行き方を教えてください。", ko: "공연장까지 가는 길을 알려 주세요.", en: "How do I get to the hall?" },
    a: {
      ja: "地下鉄 日本橋駅2番出口から徒歩約4分、なんば駅から徒歩約8分です。堺筋を北へ進み、宗右衛門町を千年町筋方面へ入ると美松ビルがあります。会場は地下1階です。道順は上の「アクセス」をご覧ください。",
      ko: "지하철 니혼바시역 2번 출구에서 도보 약 4분, 난바역에서 도보 약 8분입니다. 사카이스지를 북쪽으로 올라가 소에몬초에서 지토세마치스지 방향으로 들어가면 미마츠빌딩이 있습니다. 공연장은 지하 1층입니다. 자세한 길은 위의 '오시는 길'을 봐 주세요.",
      en: "About 4 minutes on foot from Nihonbashi Station Exit 2, and about 8 minutes from Namba Station. Walk north along Sakaisuji, then head from Soemoncho towards Chitose-machi-suji to reach the Mimatsu Building; the hall is on B1. See Access above for the step-by-step route."
    }
  },
  {
    q: { ja: "開場・開演に遅れた場合は入れますか？", ko: "개장·개연 시간에 늦으면 들어갈 수 있나요?", en: "What if I arrive after the doors open?" },
    a: {
      ja: "開場・開演時間はチケットと各公演の案内に記載のとおりです。開演後にご到着の場合は、公演の進行に合わせてスタッフがご案内します。",
      ko: "개장·개연 시간은 티켓과 각 공연 안내에 적힌 대로입니다. 개연 후에 도착하신 경우에는 공연 진행에 맞춰 스태프가 안내합니다.",
      en: "Door and start times are printed on your ticket and each show's notice. If you arrive after the start, staff will seat you at a suitable point in the show."
    }
  }
];

function renderFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;
  list.innerHTML = FAQ_ITEMS.map((item, i) => `
    <details class="faq-item">
      <summary>
        <span class="faq-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="faq-q">${esc(item.q[lang] || item.q.ja)}</span>
        <i aria-hidden="true"></i>
      </summary>
      <p class="faq-a">${esc(item.a[lang] || item.a.ja)}</p>
    </details>`).join("");
}

/* ---------- availability calendar ---------- */
const AVAIL_WEEK = {
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
  en: ["S", "M", "T", "W", "T", "F", "S"]
};
const AVAIL_MONTH_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let availMonth = null;
let availPicked = null;

function monthLabel(key) {
  const [y, m] = key.split("-");
  const mi = Number(m) - 1;
  if (lang === "ko") return `${y}년 ${Number(m)}월`;
  if (lang === "en") return `${AVAIL_MONTH_EN[mi]} ${y}`;
  return `${y}年${Number(m)}月`;
}

function availStateFor(key, day) {
  const map = (typeof HALL_AVAILABILITY !== "undefined" && HALL_AVAILABILITY[key]) || {};
  return map[day] || "o";
}

function renderAvail() {
  const grid = document.getElementById("availGrid");
  const tabs = document.getElementById("availTabs");
  if (!grid || !tabs || typeof HALL_AVAILABILITY === "undefined") return;

  const months = Object.keys(HALL_AVAILABILITY).sort();
  if (!months.length) return;
  if (!availMonth || months.indexOf(availMonth) === -1) availMonth = months[0];

  tabs.innerHTML = months.map((m) => `
    <button type="button" role="tab" class="avail-tab${m === availMonth ? " is-active" : ""}"
      aria-selected="${m === availMonth}" data-avail-month="${m}">${monthLabel(m)}</button>`).join("");

  const [y, mo] = availMonth.split("-").map(Number);
  const daysInMonth = new Date(y, mo, 0).getDate();
  const firstDow = new Date(y, mo - 1, 1).getDay();

  let html = AVAIL_WEEK[lang].map((d) => `<span class="avail-wd">${d}</span>`).join("");
  for (let i = 0; i < firstDow; i += 1) html += `<span class="avail-cell is-empty" aria-hidden="true"></span>`;

  for (let d = 1; d <= daysInMonth; d += 1) {
    const st = availStateFor(availMonth, d);
    const iso = `${availMonth}-${String(d).padStart(2, "0")}`;
    const picked = availPicked === iso ? " is-picked" : "";
    if (st === "x") {
      html += `<span class="avail-cell is-busy${picked}" aria-label="${d} ${t("avail.busy")}"><b>${d}</b><i>×</i></span>`;
    } else {
      const sym = st === "d" ? "△" : "○";
      const cls = st === "d" ? "is-part" : "is-open";
      html += `<button type="button" class="avail-cell ${cls}${picked}" data-avail-day="${iso}"
        aria-label="${iso} ${st === "d" ? t("avail.part") : t("avail.open")}"><b>${d}</b><i>${sym}</i></button>`;
    }
  }
  grid.innerHTML = html;

  const pickedBox = document.getElementById("availPicked");
  if (pickedBox) {
    pickedBox.innerHTML = availPicked
      ? `<b>${availPicked.replace(/-/g, ".")}</b> <span>${t("avail.picked")}</span>
         <a href="#rental-form" class="avail-cta">${t("avail.ask")}</a>`
      : "";
    pickedBox.classList.toggle("is-on", !!availPicked);
  }
}

function pickAvailDate(iso) {
  availPicked = iso;
  const field = document.getElementById("f-date");
  if (field) field.value = iso;
  renderAvail();
  const form = document.getElementById("rental-form");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindAvail() {
  const tabs = document.getElementById("availTabs");
  const grid = document.getElementById("availGrid");
  if (tabs) {
    tabs.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-avail-month]");
      if (!btn) return;
      availMonth = btn.getAttribute("data-avail-month");
      renderAvail();
    });
  }
  if (grid) {
    grid.addEventListener("click", (ev) => {
      const cell = ev.target.closest("[data-avail-day]");
      if (!cell) return;
      pickAvailDate(cell.getAttribute("data-avail-day"));
    });
  }
}

function renderHallExtras() {
  renderFaq();
  renderAvail();
}

/* fonts of the calendar/FAQ are rebuilt after content changes; nothing to preload here */
