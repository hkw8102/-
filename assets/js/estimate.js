/* ============================================================
   PLUSWIN — estimate / application sheet builder
   Prices: PLUSWIN HALL OSAKA rate card (tax excluded).
   The input UI follows JP/KR/EN; the A4 sheet is always the
   official Japanese form.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- price table (税別) ---------- */
  var RATE = {
    weekday: { "12": 150000, am: 50000, pm: 110000 },
    holiday: { "12": 280000, am: 190000, pm: 190000 }
  };
  var OPT = { mic: 2700, ext: 25000, drum: 5000, trash: 1000, led: 10000, piano: 5000 };
  /* operator: sound+lighting / sound only / lighting only (tax excluded) */
  var OP_FEE = { both: 60000, sound: 30000, light: 30000 };
  var MGMT_FEE = { both: 20000, sound: 10000, light: 10000 };
  var OP_NAME = { both: "音響と照明オペレーター", sound: "音響のみオペレーター", light: "照明のみオペレーター" };
  var MGMT_NAME = { both: "音響と照明", sound: "音響のみ", light: "照明のみ" };
  var TAX_RATE = 0.1;
  var WD = ["日", "月", "火", "水", "木", "金", "土"];

  /* ---------- UI dictionary ---------- */
  var Q = {
    ja: {
      back: "料金表へ戻る", eyebrow: "ESTIMATE SHEET", title: "見積書・利用申込書",
      lead: "PLUSWIN HALL OSAKA のご利用料金を選ぶだけで、税別の見積りと「ご利用申込書」（A4・1枚）をその場で作成できます。金額はすべて税別の目安で、最終金額は日程・内容を確認のうえご案内します。",
      backBtn: "レンタル料金表を見る", availBtn: "レンタル相談へ",
      savePdf: "見積書・申込書をPDF保存 (A4)", print: "印刷", reset: "リセット",
      toolsHint: "「PDF保存」を押すと、A4・1ページのPDFがそのまま保存されます。印刷するときは「印刷」を押してください。",
      pdfBusy: "PDFを作成しています…",
      pdfDone: "PDFを作成しました。保存されないときは、下の「PDFを開く」から開いて「共有 → ファイルに保存」で保存できます。",
      pdfOpen: "PDFを開く", pdfShare: "共有",
      pdfFail: "PDFを作成できませんでした。印刷画面から保存してください。",
      g1k: "EVENT", g1: "公演情報",
      date: "公演日", rateClass: "料金区分",
      rateAuto: "自動（曜日で判定）", rateWeekday: "平日（月〜金）", rateHoliday: "土日祝",
      hintWeekday: "{d} → 平日料金を適用します。",
      hintHoliday: "{d} → 土日祝料金を適用します。",
      hintHolidayManual: "{d} は平日です。祝日の場合は「土日祝」を選んでください。",
      inTime: "入り時刻", outTime: "退出時刻", rehearsal: "リハーサル", rehearsePh: "15:00〜16:30",
      open1: "開場 ①", open2: "開場 ②",
      start1: "本番 ① 開演", end1: "本番 ① 終演", start2: "本番 ② 開演", end2: "本番 ② 終演",
      g2k: "SHOW", g2: "公演内容",
      showTitle: "タイトル", titlePh: "公演タイトル", artist: "出演者", artistPh: "出演者名",
      cap: "集客予定（名）", adv: "入場料 前売（円）", door: "入場料 当日（円）", drink: "ドリンク代",
      drinkSep: "別（入場時に600円）", drinkInc: "込（券売数×600円を精算時）",
      g3k: "RENTAL & OPTIONS", g3: "ご利用料金",
      plan: "時間", plan12: "12時間パック 10:00〜22:00", planAm: "10:00〜16:00（6時間）", planPm: "16:00〜22:00（6時間）",
      qty: "数量", planHint: "平日 12時間 ¥150,000 ／ 土日祝 12時間 ¥280,000",
      optOp: "音響・照明オペレーター", optOpNone: "なし",
      optOpBoth: "音響と照明（¥60,000）", optOpSound: "音響のみ（¥30,000）", optOpLight: "照明のみ（¥30,000）",
      optMul: "オペレーター倍率", optMul1: "1", optMul15: "1.5（2公演・本番3時間超）",
      optMgmt: "オペレーター乗込み時管理費", optMgmtNone: "なし",
      optMgmtBoth: "音響と照明（¥20,000）", optMgmtSound: "音響のみ（¥10,000）", optMgmtLight: "照明のみ（¥10,000）",
      optMgmtNote: "主催者様でPA・照明オペを手配されたとき（音響10,000＋照明10,000）",
      optMic: "ワイヤレスマイク（1本）", optExt: "延長（1時間）", optDrum: "ドラムセット一式",
      optTrash: "ごみ処理費", optTrashNote: "ホールがごみ処理を行う場合の金額です。お持ち帰りの場合はかかりません。",
      optLed: "LED使用料", optPiano: "電子ピアノ（YAMAHA C4）", othersHead: "その他（自由入力）",
      sumItems: "合計金額（税別）", sumTax: "消費税（10%）", sumGrand: "ご契約金額計",
      g4k: "APPLICANT", g4: "お申込み者",
      company: "御社名", person: "ご担当者名", addr: "ご住所", tel: "TEL／FAX",
      mobile: "ご担当携帯電話", email: "e-mail", pay: "ご精算方法",
      pay1: "1. 事前お振込み（請求書をお出しします）", pay2: "2. 当日現金精算", issued: "申込日",
      previewHint: "A4・1枚（印刷プレビュー）", paperLabel: "PLUSWINHALL 大阪 ご利用申込書",
      resetConfirm: "入力内容をすべて消去します。よろしいですか？",
      printTitle: "PLUSWINHALL大阪_ご利用申込書"
    },
    ko: {
      back: "요금표로 돌아가기", eyebrow: "ESTIMATE SHEET", title: "견적서·이용신청서",
      lead: "PLUSWIN HALL OSAKA의 이용 요금을 고르기만 하면 세금 별도 견적과 「이용신청서」(A4 1장)를 바로 만들 수 있습니다. 금액은 모두 세금 별도의 참고 금액이며, 최종 금액은 일정과 내용을 확인한 뒤 안내해 드립니다.",
      backBtn: "대관 요금표 보기", availBtn: "대관 문의로",
      savePdf: "PDF 파일 저장 (A4)", print: "인쇄", reset: "초기화",
      toolsHint: "「PDF 파일 저장」을 누르면 A4 1장 PDF가 바로 저장됩니다. 인쇄할 때는 「인쇄」를 누르세요.",
      pdfBusy: "PDF 만드는 중…",
      pdfDone: "PDF를 만들었습니다. 저장이 안 되면 아래 「PDF 열기」를 눌러 「공유 → 파일에 저장」으로 저장하세요.",
      pdfOpen: "PDF 열기", pdfShare: "공유",
      pdfFail: "PDF를 만들지 못했습니다. 인쇄 화면에서 저장해 주세요.",
      g1k: "EVENT", g1: "공연 정보",
      date: "공연일", rateClass: "요금 구분",
      rateAuto: "자동 (요일로 판정)", rateWeekday: "평일 (월~금)", rateHoliday: "토·일·공휴일",
      hintWeekday: "{d} → 평일 요금이 적용됩니다.",
      hintHoliday: "{d} → 토·일·공휴일 요금이 적용됩니다.",
      hintHolidayManual: "{d} 평일 요금입니다. 공휴일이면 ‘토·일·공휴일’을 골라 주세요.",
      inTime: "입장(반입) 시각", outTime: "퇴장 시각", rehearsal: "리허설", rehearsePh: "15:00〜16:30",
      open1: "개장 ①", open2: "개장 ②",
      start1: "본 공연 ① 시작", end1: "본 공연 ① 종료", start2: "본 공연 ② 시작", end2: "본 공연 ② 종료",
      g2k: "SHOW", g2: "공연 내용",
      showTitle: "타이틀", titlePh: "공연 타이틀", artist: "출연자", artistPh: "출연자 이름",
      cap: "예상 관객(명)", adv: "입장료 예매(엔)", door: "입장료 당일(엔)", drink: "드링크비",
      drinkSep: "별도 (입장 시 600엔)", drinkInc: "포함 (판매 수×600엔 정산 시)",
      g3k: "RENTAL", g3: "이용 요금",
      plan: "시간", plan12: "12시간 패키지 10:00〜22:00", planAm: "10:00〜16:00 (6시간)", planPm: "16:00〜22:00 (6시간)",
      qty: "수량", planHint: "평일 12시간 ¥150,000 ／ 토·일·공휴일 12시간 ¥280,000",
      optOp: "음향·조명 오퍼레이터", optOpNone: "없음",
      optOpBoth: "음향+조명 (¥60,000)", optOpSound: "음향만 (¥30,000)", optOpLight: "조명만 (¥30,000)",
      optMul: "오퍼레이터 배율", optMul1: "1", optMul15: "1.5 (2회 공연·본공연 3시간 초과)",
      optMgmt: "오퍼레이터 상주 시 관리비", optMgmtNone: "없음",
      optMgmtBoth: "음향+조명 (¥20,000)", optMgmtSound: "음향만 (¥10,000)", optMgmtLight: "조명만 (¥10,000)",
      optMgmtNote: "주최 측이 PA·조명 오퍼레이터를 직접 준비한 경우 (음향 10,000 + 조명 10,000)",
      optMic: "무선 마이크 (1개)", optExt: "연장 (1시간)", optDrum: "드럼 세트",
      optTrash: "쓰레기 처리비", optTrashNote: "홀이 쓰레기를 처리하는 경우의 금액입니다. 직접 가져가시면 발생하지 않습니다.",
      optLed: "LED 사용료", optPiano: "전자 피아노 (YAMAHA C4)", othersHead: "그 외 (자유 입력)",
      sumItems: "합계 금액 (세금 별도)", sumTax: "소비세 (10%)", sumGrand: "계약 금액 합계",
      g4k: "APPLICANT", g4: "신청자 정보",
      company: "회사명", person: "담당자명", addr: "주소", tel: "TEL／FAX",
      mobile: "담당자 휴대전화", email: "e-mail", pay: "결제 방법",
      pay1: "1. 사전 송금 (청구서를 발행합니다)", pay2: "2. 당일 현금 정산", issued: "신청일",
      previewHint: "A4 1장 (인쇄 미리보기)", paperLabel: "PLUSWINHALL 오사카 이용신청서 (일본어 양식)",
      resetConfirm: "입력한 내용을 모두 지웁니다. 계속할까요?",
      printTitle: "PLUSWINHALL오사카_이용신청서"
    },
    en: {
      back: "Back to rate card", eyebrow: "ESTIMATE SHEET", title: "Quote & Application",
      lead: "Pick the PLUSWIN HALL OSAKA rates you need and this page builds a tax-excluded quote and the official one-page A4 application sheet. All prices are tax-excluded estimates; we confirm the final amount once we have checked your date and plans.",
      backBtn: "See the rate card", availBtn: "Rental enquiry",
      savePdf: "Save as PDF (A4)", print: "Print", reset: "Reset",
      toolsHint: "“Save as PDF” writes the one-page A4 PDF straight away. Use “Print” for the print dialog.",
      pdfBusy: "Making the PDF…",
      pdfDone: "The PDF is ready. If it did not download, open it with “Open PDF” below and use Share → Save to Files.",
      pdfOpen: "Open PDF", pdfShare: "Share",
      pdfFail: "The PDF could not be made. Please save it from the print dialog.",
      g1k: "EVENT", g1: "Event details",
      date: "Event date", rateClass: "Rate type",
      rateAuto: "Automatic (by weekday)", rateWeekday: "Weekday (Mon–Fri)", rateHoliday: "Weekend & holidays",
      hintWeekday: "{d} → weekday rate applied.",
      hintHoliday: "{d} → weekend / holiday rate applied.",
      hintHolidayManual: "{d} is a weekday. Choose “Weekend & holidays” if it is a national holiday.",
      inTime: "Load-in", outTime: "Load-out", rehearsal: "Rehearsal", rehearsePh: "15:00–16:30",
      open1: "Doors ①", open2: "Doors ②",
      start1: "Show ① start", end1: "Show ① end", start2: "Show ② start", end2: "Show ② end",
      g2k: "SHOW", g2: "The show",
      showTitle: "Title", titlePh: "Show title", artist: "Artist", artistPh: "Artist name",
      cap: "Expected audience", adv: "Advance ticket (¥)", door: "Door ticket (¥)", drink: "Drink fee",
      drinkSep: "Separate (¥600 at entry)", drinkInc: "Included (¥600 × tickets, settled after)",
      g3k: "RENTAL", g3: "Rental & options",
      plan: "Hours", plan12: "12-hour pack 10:00–22:00", planAm: "10:00–16:00 (6 h)", planPm: "16:00–22:00 (6 h)",
      qty: "Quantity", planHint: "Weekday 12 h ¥150,000 ／ Weekend & holidays 12 h ¥280,000",
      optOp: "Sound & lighting operator", optOpNone: "None",
      optOpBoth: "Sound + lighting (¥60,000)", optOpSound: "Sound only (¥30,000)", optOpLight: "Lighting only (¥30,000)",
      optMul: "Operator multiplier", optMul1: "1", optMul15: "1.5 (two shows / show over 3 h)",
      optMgmt: "Operator attendance fee", optMgmtNone: "None",
      optMgmtBoth: "Sound + lighting (¥20,000)", optMgmtSound: "Sound only (¥10,000)", optMgmtLight: "Lighting only (¥10,000)",
      optMgmtNote: "When the organiser brings their own PA & lighting operator (sound 10,000 + lighting 10,000)",
      optMic: "Wireless microphone (each)", optExt: "Extension (per hour)", optDrum: "Drum kit",
      optTrash: "Waste disposal", optTrashNote: "Charged when the hall disposes of your waste. Free if you take it away.",
      optLed: "LED screen use", optPiano: "Digital piano (YAMAHA C4)", othersHead: "Other items",
      sumItems: "Subtotal (tax excl.)", sumTax: "Consumption tax (10%)", sumGrand: "Contract total",
      g4k: "APPLICANT", g4: "Applicant",
      company: "Company", person: "Contact name", addr: "Address", tel: "TEL／FAX",
      mobile: "Mobile", email: "e-mail", pay: "Payment",
      pay1: "1. Bank transfer in advance (we issue an invoice)", pay2: "2. Cash on the day", issued: "Date issued",
      previewHint: "One A4 page (print preview)", paperLabel: "PLUSWINHALL Osaka application (Japanese form)",
      resetConfirm: "Clear everything you entered?",
      printTitle: "PLUSWINHALL_Osaka_application"
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var val = function (id) { var el = $(id); return el ? String(el.value || "").trim() : ""; };
  var num = function (id) { var n = parseInt(val(id), 10); return isNaN(n) ? 0 : n; };
  var checked = function (id) { var el = $(id); return !!(el && el.checked); };
  var yen = function (n) { return "¥" + Math.round(n).toLocaleString("en-US"); };
  function set(id, html) {
    var el = $(id);
    if (el) el.innerHTML = html === "" || html == null ? "&nbsp;" : html;
  }

  function currentLang() {
    var l = document.documentElement.getAttribute("data-lang") || "ja";
    return Q[l] ? l : "ja";
  }

  /* ---------- language pass ---------- */
  function applyLang() {
    var d = Q[currentLang()];
    Array.prototype.forEach.call(document.querySelectorAll("[data-q]"), function (el) {
      var k = el.getAttribute("data-q");
      if (d[k] !== undefined) el.textContent = d[k];
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-q-ph]"), function (el) {
      var k = el.getAttribute("data-q-ph");
      if (d[k] !== undefined) el.setAttribute("placeholder", d[k]);
    });
    render();
  }

  /* ---------- date helpers ---------- */
  function parseDate(v) {
    if (!v) return null;
    var p = v.split("-");
    if (p.length !== 3) return null;
    var y = +p[0], m = +p[1], d = +p[2];
    if (!y || !m || !d) return null;
    return { y: y, m: m, d: d, dow: new Date(y, m - 1, d).getDay() };
  }
  function jpDate(dt) { return dt.y + "年" + dt.m + "月" + dt.d + "日（" + WD[dt.dow] + "）"; }
  /* the rate hint sits in the input UI, so its date follows the page language;
     the A4 sheet below is the official Japanese form and keeps jpDate */
  var DOW_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MON_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var DOW_KO = ["일", "월", "화", "수", "목", "금", "토"];
  function uiDate(dt) {
    var l = currentLang();
    if (l === "ko") return dt.y + "년 " + dt.m + "월 " + dt.d + "일 (" + DOW_KO[dt.dow] + ")";
    if (l === "en") return DOW_EN[dt.dow] + " " + dt.d + " " + MON_EN[dt.m - 1] + " " + dt.y;
    return jpDate(dt);
  }

  function rateMode() {
    var forced = val("f-rate");
    if (forced === "weekday" || forced === "holiday") return forced;
    var dt = parseDate(val("f-date"));
    if (!dt) return "weekday";
    return dt.dow === 0 || dt.dow === 6 ? "holiday" : "weekday";
  }

  /* ---------- render ---------- */
  function render() {
    var d = Q[currentLang()];
    var dt = parseDate(val("f-date"));
    var mode = rateMode();
    var plan = val("f-plan") || "12";
    var qty = num("f-qty");

    /* rate hint */
    var hint = $("rateHint");
    if (hint) {
      if (!dt) hint.textContent = "";
      else {
        var tpl = mode === "holiday" ? d.hintHoliday : d.hintWeekday;
        var txt = tpl.replace("{d}", uiDate(dt));
        if (val("f-rate") === "auto" && mode === "weekday") txt = d.hintHolidayManual.replace("{d}", uiDate(dt));
        hint.textContent = txt;
      }
    }

    /* sheet: header date */
    var iss = parseDate(val("f-issued"));
    set("s-issued-y", iss ? String(iss.y) : "");
    set("s-issued-m", iss ? String(iss.m) : "");
    set("s-issued-d", iss ? String(iss.d) : "");

    /* sheet: event */
    set("s-datecell", dt
      ? '<span class="strong" style="font-size:10.5pt">' + dt.y + " 年 " + dt.m + " 月 " + dt.d + " 日</span>（" + WD[dt.dow] + "）"
      : "");
    set("s-rehearsal", esc(val("f-rehearsal")));
    set("s-open1", esc(val("f-open1")));
    set("s-open2", esc(val("f-open2")));
    set("s-start1", esc(val("f-start1")));
    set("s-end1", esc(val("f-end1")));
    set("s-start2", esc(val("f-start2")));
    set("s-end2", esc(val("f-end2")));
    set("s-in", esc(val("f-in")));
    set("s-out", esc(val("f-out")));
    set("s-title", esc(val("f-title")));
    set("s-artist", esc(val("f-artist")));
    set("s-cap", val("f-cap") ? esc(val("f-cap")) + " 名" : "");

    var adv = num("f-adv"), door = num("f-door");
    var priceBits = [];
    if (adv) priceBits.push("【前売】" + yen(adv));
    if (door) priceBits.push("【当日】" + yen(door));
    set("s-price", esc(priceBits.join("　")));

    var drink = val("f-drink") === "inc" ? "込" : "別";
    var drinkEl = $("s-drinkcell");
    if (drinkEl) {
      drinkEl.innerHTML =
        '<span class="strong">《' + drink + '》</span>' +
        '<span class="sub">《込》の場合、券売数×600円を精算時に頂きます。<br>《別》の場合、入場時に入場者が600円徴収します。</span>';
    }

    /* sheet: rental row */
    ["s-q-wd-12", "s-q-wd-am", "s-q-wd-pm", "s-q-hd-12", "s-q-hd-am", "s-q-hd-pm"].forEach(function (id) { set(id, ""); });
    ["s-a-wd-12", "s-a-wd-am", "s-a-wd-pm", "s-a-hd-12", "s-a-hd-am", "s-a-hd-pm"].forEach(function (id) { set(id, ""); });

    var prefix = mode === "holiday" ? "hd" : "wd";
    var rentalAmount = 0;
    if (qty > 0) {
      rentalAmount = RATE[mode][plan] * qty;
      set("s-q-" + prefix + "-" + plan, String(qty));
      set("s-a-" + prefix + "-" + plan, (RATE[mode][plan] * qty).toLocaleString("en-US"));
    }

    /* options */
    var opSel = val("f-op") || "0";
    var opBase = OP_FEE[opSel] || 0;
    var opMul = val("f-opmul") === "1.5" ? 1.5 : 1;
    var opAmount = opBase * opMul;
    set("s-n-op", esc(opBase ? OP_NAME[opSel] : "音響、照明オペレーター"));
    set("s-u-op", (opBase || 60000).toLocaleString("en-US"));
    set("s-q-op", opBase ? (opMul === 1.5 ? "1.5" : "1") : "");
    set("s-a-op", opBase ? opAmount.toLocaleString("en-US") : "");

    var mgmtSel = val("f-mgmt") || "0";
    var mgmt = MGMT_FEE[mgmtSel] || 0;
    set("s-n-mgmt", mgmt
      ? 'オペレーター乗込み時管理費<span class="sub">' + esc(MGMT_NAME[mgmtSel]) + "</span>"
      : "オペレーター乗込み時管理費");
    set("s-u-mgmt", (mgmt || 20000).toLocaleString("en-US"));
    set("s-q-mgmt", mgmt ? "1" : "");
    set("s-a-mgmt", mgmt ? mgmt.toLocaleString("en-US") : "");

    var micQ = checked("f-mic") ? Math.max(1, num("f-micq")) : 0;
    set("s-q-mic", micQ ? String(micQ) : "");
    set("s-a-mic", micQ ? (OPT.mic * micQ).toLocaleString("en-US") : "");

    var extQ = checked("f-ext") ? Math.max(1, num("f-extq")) : 0;
    set("s-q-ext", extQ ? String(extQ) : "");
    set("s-a-ext", extQ ? (OPT.ext * extQ).toLocaleString("en-US") : "");

    var drum = checked("f-drum") ? OPT.drum : 0;
    set("s-q-drum", drum ? "1" : "");
    set("s-a-drum", drum ? OPT.drum.toLocaleString("en-US") : "");

    var trash = checked("f-trash") ? OPT.trash : 0;
    set("s-q-trash", trash ? "1" : "");
    set("s-a-trash", trash ? OPT.trash.toLocaleString("en-US") : "");

    var led = checked("f-led") ? OPT.led : 0;
    set("s-q-led", led ? "1" : "");
    set("s-a-led", led ? OPT.led.toLocaleString("en-US") : "");

    var piano = checked("f-piano") ? OPT.piano : 0;
    set("s-q-piano", piano ? "1" : "");
    set("s-a-piano", piano ? OPT.piano.toLocaleString("en-US") : "");

    /* others */
    var otherSum = 0;
    [1, 2, 3].forEach(function (i) {
      var nm = val("f-o" + i + "n"), am = num("f-o" + i + "a");
      set("s-o" + i + "n", esc(nm));
      set("s-o" + i + "a", am ? am.toLocaleString("en-US") : "");
      otherSum += am;
    });

    /* totals */
    var subtotal = rentalAmount + opAmount + mgmt + OPT.mic * micQ + OPT.ext * extQ + drum + trash + led + piano + otherSum;
    var tax = Math.floor(subtotal * TAX_RATE);
    var grand = subtotal + tax;

    set("s-total", subtotal ? subtotal.toLocaleString("en-US") : "");
    set("s-tax", tax ? tax.toLocaleString("en-US") : "");
    set("s-grand", grand ? grand.toLocaleString("en-US") : "");

    var sS = $("sum-sub"), sT = $("sum-tax"), sG = $("sum-grand");
    if (sS) sS.textContent = yen(subtotal);
    if (sT) sT.textContent = yen(tax);
    if (sG) sG.textContent = yen(grand);

    /* applicant */
    set("s-company", esc(val("f-company")));
    set("s-person", esc(val("f-person")));
    set("s-addr", esc(val("f-addr")));
    set("s-tel", esc(val("f-tel")));
    set("s-mobile", esc(val("f-mobile")));
    set("s-email", esc(val("f-email")));

    /* payment mark */
    var pay = val("f-pay") || "1";
    var p1 = $("s-pay1"), p2 = $("s-pay2");
    if (p1) p1.classList.toggle("is-on", pay === "1");
    if (p2) p2.classList.toggle("is-on", pay === "2");

    fit();
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------- fit the A4 sheet into its column ---------- */
  function fit() {
    var holder = $("paperHolder"), paper = $("paper");
    if (!holder || !paper) return;
    var w = holder.clientWidth;
    if (!w) return;
    var pw = paper.offsetWidth || 794;
    var ph = paper.offsetHeight || 1123;
    var s = Math.min(1, w / pw);
    /* on the wide layout the sheet is pinned under the header, so also fit its height */
    if (window.matchMedia("(min-width:1081px)").matches) {
      var avail = window.innerHeight - 92 - 34;
      s = Math.min(s, Math.max(0.42, avail / ph));
    }
    paper.style.transform = "translateX(-50%) scale(" + s + ")";
    holder.style.height = Math.round(ph * s) + "px";
  }

  /* ============================================================
     Direct PDF export
     iOS (and in-app browsers such as WKWebView) silently ignore
     window.print(), so the sheet is also rendered to a real A4 PDF
     with html2canvas + jsPDF and downloaded straight away.
     The libraries are served from this site (assets/js/vendor) and
     fall back to the CDN only if the local copy cannot run.
     ============================================================ */
  var A4 = { w: 210, h: 297, scale: 3 };
  var VENDOR = {
    /* html2canvas-pro 2.6.5, not html2canvas 1.4.1: the original paints the
       text of every table cell a few pixels too low, so the row rules cut
       through the glyphs and the sheet reads as broken. The fork keeps the
       same html2canvas(element, options) API and lays text out correctly. */
    html2canvas: {
      local: "assets/js/vendor/html2canvas.min.js",
      cdn: "https://cdn.jsdelivr.net/npm/html2canvas-pro@2.6.5/dist/html2canvas-pro.min.js",
      ok: function () { return typeof window.html2canvas === "function"; }
    },
    jspdf: {
      local: "assets/js/vendor/jspdf.umd.min.js",
      cdn: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
      ok: function () { return !!(window.jspdf && window.jspdf.jsPDF); }
    }
  };
  var libPromise = null;
  var pdfState = { busy: false, url: "", name: "", blob: null };

  function nextFrame() {
    return new Promise(function (resolve) {
      if (window.requestAnimationFrame) window.requestAnimationFrame(function () { resolve(); });
      else setTimeout(resolve, 16);
    });
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("could not load " + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  function ensureLib(spec) {
    if (spec.ok()) return Promise.resolve();
    return loadScript(spec.local)
      .then(function () { if (!spec.ok()) throw new Error("local copy did not initialise"); })
      .catch(function () { return loadScript(spec.cdn); })
      .then(function () { if (!spec.ok()) throw new Error("library unavailable"); });
  }

  function ensurePdfLibs() {
    if (!libPromise) {
      libPromise = ensureLib(VENDOR.html2canvas).then(function () { return ensureLib(VENDOR.jspdf); });
      libPromise.catch(function () { libPromise = null; });
    }
    return libPromise;
  }

  function pdfFileName() {
    var extra = (val("f-company") || val("f-title") || "")
      .replace(/[\\/:*?"<>|\r\n\t]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    var base = Q[currentLang()].printTitle + (extra ? "_" + extra : "");
    return base.slice(0, 90).replace(/\s+$/, "") + ".pdf";
  }

  /* a clean, untransformed copy of the sheet, parked at the top of the
     viewport under the “making the PDF” overlay */
  function paperStage() {
    var src = $("paper");
    if (!src) return null;
    var stage = document.createElement("div");
    stage.className = "pdf-stage";
    stage.setAttribute("aria-hidden", "true");
    var clone = src.cloneNode(true);
    clone.removeAttribute("id");
    stage.appendChild(clone);
    document.body.appendChild(stage);
    return stage;
  }

  function buildPdf() {
    render();
    var stage = paperStage();
    if (!stage) return Promise.reject(new Error("sheet not found"));
    var clone = stage.firstElementChild;
    var w = Math.ceil(clone.offsetWidth) || 794;
    var h = Math.ceil(clone.offsetHeight) || 1123;
    return nextFrame().then(nextFrame).then(function () {
      return window.html2canvas(clone, {
        scale: A4.scale,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        windowWidth: Math.max(window.innerWidth, w),
        windowHeight: Math.max(window.innerHeight, h),
        scrollX: 0,
        scrollY: 0
      });
    }).then(function (canvas) {
      var doc = new window.jspdf.jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
      doc.addImage(canvas.toDataURL("image/jpeg", 0.94), "JPEG", 0, 0, A4.w, A4.h, undefined, "FAST");
      var name = pdfFileName();
      doc.setProperties({
        title: name.replace(/\.pdf$/i, ""),
        subject: "PLUSWIN HALL OSAKA - estimate & application sheet",
        author: "PLUSWIN HALL OSAKA",
        creator: "PLUSWIN HALL OSAKA web estimate builder"
      });
      var out = { blob: doc.output("blob"), name: name };
      stage.remove();
      return out;
    }).then(null, function (err) {
      stage.remove();
      throw err;
    });
  }

  function pdfFile(blob, name) {
    try { return new File([blob], name, { type: "application/pdf" }); } catch (e) { return null; }
  }

  function canSharePdf(blob, name) {
    var f = pdfFile(blob, name);
    return !!(f && navigator.canShare && navigator.canShare({ files: [f] }));
  }

  function setPdfBusy(on) {
    pdfState.busy = !!on;
    var btn = $("btnSavePdf");
    var label = btn && btn.querySelector("[data-q]");
    if (btn) {
      btn.classList.toggle("is-loading", !!on);
      btn.setAttribute("aria-busy", on ? "true" : "false");
    }
    if (label) label.textContent = Q[currentLang()][on ? "pdfBusy" : "savePdf"];
    var overlay = $("pdfBusy");
    if (overlay) overlay.hidden = !on;
    document.documentElement.classList.toggle("pdf-is-busy", !!on);
  }

  function showPdfNote(message, url, name, shareable) {
    var note = $("pdfNote"), text = $("pdfNoteText"), link = $("pdfOpen"), share = $("btnShare");
    if (!note) return;
    if (text) text.textContent = message;
    if (link) {
      link.hidden = !url;
      if (url) { link.href = url; link.download = name; }
    }
    if (share) share.hidden = !(url && shareable);
    note.hidden = false;
  }

  function offerPdf(blob, name) {
    if (pdfState.url) { try { URL.revokeObjectURL(pdfState.url); } catch (e) {} }
    var url = URL.createObjectURL(blob);
    pdfState.url = url;
    pdfState.name = name;
    pdfState.blob = blob;

    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    if ("download" in a) a.click();
    setTimeout(function () { a.remove(); }, 4000);

    showPdfNote(Q[currentLang()].pdfDone, url, name, canSharePdf(blob, name));
  }

  function sharePdf() {
    var f = pdfState.blob ? pdfFile(pdfState.blob, pdfState.name) : null;
    if (!f || !navigator.share) return;
    navigator.share({ files: [f], title: pdfState.name.replace(/\.pdf$/i, "") }).catch(function () {});
  }

  function printSheet() {
    var prev = document.title;
    var k = val("f-company") || val("f-title");
    document.title = Q[currentLang()].printTitle + (k ? "_" + k : "");
    var restore = function () {
      document.title = prev;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    try { window.print(); } catch (e) {}
    /* some browsers never fire afterprint on a cancelled dialog */
    setTimeout(restore, 20000);
  }

  function savePdf() {
    if (pdfState.busy) return;
    var note = $("pdfNote");
    if (note) note.hidden = true;
    setPdfBusy(true);
    ensurePdfLibs()
      .then(buildPdf)
      .then(function (out) {
        setPdfBusy(false);
        offerPdf(out.blob, out.name);
      })
      .catch(function (err) {
        if (window.console && console.warn) console.warn("[estimate] PDF export failed:", err);
        setPdfBusy(false);
        showPdfNote(Q[currentLang()].pdfFail, "", "", false);
        printSheet();
      });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    if ($("f-issued") && !$("f-issued").value) $("f-issued").value = iso;

    var panel = document.querySelector(".est-panel");
    if (panel) {
      panel.addEventListener("input", render);
      panel.addEventListener("change", render);
    }

    var btnSave = $("btnSavePdf");
    if (btnSave) btnSave.addEventListener("click", savePdf);

    var btnShare = $("btnShare");
    if (btnShare) btnShare.addEventListener("click", sharePdf);

    var btnPrint = $("btnPrint");
    if (btnPrint) btnPrint.addEventListener("click", printSheet);

    var btnReset = $("btnReset");
    if (btnReset) {
      btnReset.addEventListener("click", function () {
        if (!window.confirm(Q[currentLang()].resetConfirm)) return;
        var pdfNote = $("pdfNote");
        if (pdfNote) pdfNote.hidden = true;
        ["f-date", "f-rehearsal", "f-open2", "f-start2", "f-end2", "f-title", "f-artist", "f-cap",
         "f-adv", "f-door", "f-o1n", "f-o1a", "f-o2n", "f-o2a", "f-o3n", "f-o3a",
         "f-company", "f-person", "f-addr", "f-tel", "f-mobile", "f-email"].forEach(function (id) {
          if ($(id)) $(id).value = "";
        });
        if ($("f-in")) $("f-in").value = "10:00";
        if ($("f-out")) $("f-out").value = "22:00";
        if ($("f-open1")) $("f-open1").value = "17:00";
        if ($("f-start1")) $("f-start1").value = "17:30";
        if ($("f-end1")) $("f-end1").value = "19:30";
        if ($("f-qty")) $("f-qty").value = "1";
        if ($("f-micq")) $("f-micq").value = "1";
        if ($("f-extq")) $("f-extq").value = "1";
        ["f-mic", "f-ext", "f-drum", "f-trash", "f-led", "f-piano"].forEach(function (id) {
          if ($(id)) $(id).checked = false;
        });
        if ($("f-rate")) $("f-rate").value = "auto";
        if ($("f-plan")) $("f-plan").value = "12";
        if ($("f-op")) $("f-op").value = "0";
        if ($("f-opmul")) $("f-opmul").value = "1";
        if ($("f-mgmt")) $("f-mgmt").value = "0";
        if ($("f-drink")) $("f-drink").value = "sep";
        if ($("f-pay")) $("f-pay").value = "1";
        if ($("f-issued")) $("f-issued").value = iso;
        if (window.pwFields) window.pwFields.syncAll();
        render();
      });
    }

    applyLang();

    var ro = window.ResizeObserver ? new ResizeObserver(function () { fit(); }) : null;
    if (ro) ro.observe(document.querySelector(".est-preview"));
    window.addEventListener("resize", fit);
    window.addEventListener("beforeprint", fit);
    document.addEventListener("pw:lang", applyLang);
  });
})();
