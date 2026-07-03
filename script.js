const COST = { one: 100, ten: 900 };
const DAILY = 300;
const PITY = { epic: 10, legendary: 40 };

const key = {
  credits: "illustration-box-credits",
  owned: "illustration-box-owned",
  epic: "illustration-box-epic",
  legendary: "illustration-box-legendary",
  total: "illustration-box-total",
  daily: "illustration-box-daily",
  lang: "illustration-box-lang",
};

const I = {
  zh: {
    htmlLang: "zh-CN",
    title: "插画抽卡盲盒",
    eyebrow: "ILLUSTRATION BLIND BOX",
    walletAria: "当前画券数量",
    progressAria: "抽取进度",
    ratesAria: "抽取概率",
    panelAria: "游戏面板",
    filterAria: "收藏筛选",
    currency: "画券",
    daily: `今日补给 +${DAILY}`,
    claimed: "今日已领",
    waiting: "等待抽取",
    unknown: "未知插画",
    intro: "投入画券，打开一张原创插画盲盒卡。",
    epic: "史诗保底",
    legendary: "传说保底",
    total: "总抽数",
    one: "抽 1 张",
    ten: "十连抽取",
    rates: ["普通 55%", "稀有 30%", "史诗 12%", "传说 3%"],
    results: "本次抽取",
    albumTab: "收藏册",
    resultsTitle: "抽取结果",
    emptyNote: "还没有抽卡，第一张会有仪式感。",
    emptyBody: "点击抽取后，这里会展示新获得的插画。",
    album: "插画册",
    collected: "已收集",
    filters: ["全部", "已拥有", "稀有+", "史诗+"],
    rarity: { common: "普通", rare: "稀有", epic: "史诗", legendary: "传说" },
    result1: "新插画已收入收藏册。",
    result10: "十连完成，最后一张已放到展示台。",
    highest: "最高稀有度",
    new: "新收藏",
    spent: "消耗画券",
    sheet: "张",
    locked: "未获得",
    mystery: "神秘插画",
    unlock: "继续抽取解锁",
    owned: (n) => `拥有 ${n} 张`,
    notEnough: "画券不够啦。可以领取今日补给。",
    dailyDone: "今天的补给已经领过了。",
    dailyToast: `补给到账：+${DAILY} 画券。`,
    close: "关闭",
    code: "编号",
    count: "拥有",
    lockedDesc: "这张插画还没有入册，继续抽取解锁完整信息。",
    print: (r) => `${r} PRINT`,
  },
  en: {
    htmlLang: "en",
    title: "Illustration Blind Box",
    eyebrow: "ILLUSTRATION BLIND BOX",
    walletAria: "Current ticket balance",
    progressAria: "Draw progress",
    ratesAria: "Draw rates",
    panelAria: "Game panel",
    filterAria: "Collection filters",
    currency: "Tickets",
    daily: `Daily +${DAILY}`,
    claimed: "Claimed Today",
    waiting: "Waiting",
    unknown: "Unknown Print",
    intro: "Spend tickets to open an original illustration blind-box card.",
    epic: "Epic Pity",
    legendary: "Legendary Pity",
    total: "Total Draws",
    one: "Draw 1",
    ten: "Draw 10",
    rates: ["Common 55%", "Rare 30%", "Epic 12%", "Legendary 3%"],
    results: "Results",
    albumTab: "Album",
    resultsTitle: "Draw Results",
    emptyNote: "No cards yet. The first reveal deserves a little ceremony.",
    emptyBody: "Draw a card and your new illustration will appear here.",
    album: "Illustration Album",
    collected: "collected",
    filters: ["All", "Owned", "Rare+", "Epic+"],
    rarity: { common: "Common", rare: "Rare", epic: "Epic", legendary: "Legendary" },
    result1: "New illustration added to your album.",
    result10: "Ten draws complete. The final print is on display.",
    highest: "Highest Rarity",
    new: "New",
    spent: "Tickets Spent",
    sheet: "prints",
    locked: "Locked",
    mystery: "Mystery Print",
    unlock: "Keep drawing to unlock",
    owned: (n) => `Owned ${n}`,
    notEnough: "Not enough tickets. Claim today's bonus.",
    dailyDone: "Today's bonus has already been claimed.",
    dailyToast: `Bonus claimed: +${DAILY} tickets.`,
    close: "Close",
    code: "Code",
    count: "Owned",
    lockedDesc: "This illustration is not in your album yet. Keep drawing to unlock its details.",
    print: (r) => `${r} PRINT`,
  },
};

const cards = [
  ["c01", "common", ["#e7c86f", "#f4dfbd", "#8db7d7"], ["午后云丘", "Afternoon Cloud Hill"], ["云朵停在山丘边缘，像一页刚晾干的水彩。", "Clouds rest on a hillside like a freshly dried watercolor page."]],
  ["c02", "common", ["#8db7d7", "#dbeaf0", "#d97670"], ["蓝窗来信", "Letter by the Blue Window"], ["窗边、信纸和浅蓝晨光组成的安静小画。", "A quiet print of a window, a letter, and pale blue morning light."]],
  ["c03", "common", ["#e6ad59", "#f8e7c5", "#c98370"], ["橘色屋顶", "Orange Rooftops"], ["一排被夕阳照亮的小屋，线条像铅笔刚画完。", "Tiny houses lit by sunset, with lines that feel freshly penciled."]],
  ["c04", "common", ["#78b7a3", "#d9eee3", "#e7c86f"], ["薄荷花园", "Mint Garden"], ["低饱和的花园页，适合放在画册第一页。", "A muted garden page, perfect for the first page of an album."]],
  ["r01", "rare", ["#d97670", "#f5d5cf", "#4f9c95"], ["草莓灯塔", "Strawberry Lighthouse"], ["海边灯塔被草莓色晚霞包住，像一页小绘本。", "A lighthouse wrapped in strawberry dusk, like a tiny picture book page."]],
  ["r02", "rare", ["#4f9c95", "#d7eee9", "#d7a84a"], ["海盐星夜", "Sea-Salt Star Night"], ["星光落进海面，整张画带着细细的盐粒感。", "Starlight falls into the sea, giving the print a fine salt-grain texture."]],
  ["r03", "rare", ["#c95661", "#f1c7bd", "#27231f"], ["樱桃剧场", "Cherry Theater"], ["小剧场幕布半开，红色椅子等待故事开始。", "A small theater with half-open curtains and red chairs waiting for a story."]],
  ["e01", "epic", ["#796bb3", "#ded9f0", "#d7a84a"], ["月面图书馆", "Moon Library"], ["月光、书架和漂浮纸页安静地悬着。", "Moonlight, shelves, and floating pages hang quietly in the air."]],
  ["e02", "epic", ["#d79a4a", "#f6e3b2", "#d97670"], ["焦糖远行", "Caramel Journey"], ["一条通往山后的路，像刚从旅行手账里撕下来。", "A road curling behind the mountains, as if torn from a travel journal."]],
  ["e03", "epic", ["#8db7d7", "#e8f3f5", "#796bb3"], ["透明城市", "Transparent City"], ["玻璃般的城市轮廓叠在一起，像一张清透的梦。", "Glasslike city silhouettes layered into a lucid dream."]],
  ["l01", "legendary", ["#d7a84a", "#d97670", "#8db7d7"], ["彩虹原稿", "Rainbow Original"], ["传说隐藏页。颜色像刚被画笔第一次唤醒。", "A legendary hidden page, its colors freshly awakened by the brush."]],
  ["l02", "legendary", ["#27231f", "#d7a84a", "#fff1c8"], ["金色展厅", "Golden Gallery"], ["灯光、画框和沉静的金色空气组成限定插画。", "A limited print of light, frames, and still golden air."]],
].map(([id, rarity, tone, name, desc]) => ({
  id,
  rarity,
  tone,
  name: { zh: name[0], en: name[1] },
  desc: { zh: desc[0], en: desc[1] },
}));

const rank = { common: 0, rare: 1, epic: 2, legendary: 3 };
const weights = [["common", 55], ["rare", 30], ["epic", 12], ["legendary", 3]];
const $ = (selector) => document.querySelector(selector);

const state = {
  lang: localStorage.getItem(key.lang) === "en" ? "en" : "zh",
  credits: num(key.credits, 1200),
  owned: readOwned(),
  epic: num(key.epic, 0),
  legendary: num(key.legendary, 0),
  total: num(key.total, 0),
  daily: localStorage.getItem(key.daily) || "",
  filter: "all",
  last: [],
  cost: 0,
  drawing: false,
};

const el = {
  credits: $("#credits"),
  daily: $("#daily-bonus"),
  one: $("#draw-one"),
  ten: $("#draw-ten"),
  card: $("#featured-card"),
  art: $("#featured-art"),
  rarity: $("#featured-rarity"),
  name: $("#featured-name"),
  desc: $("#featured-desc"),
  epic: $("#epic-pity"),
  legendary: $("#legendary-pity"),
  total: $("#total-draws"),
  results: $("#results-grid"),
  note: $("#result-note"),
  summary: $("#result-summary"),
  collection: $("#collection-grid"),
  owned: $("#owned-count"),
  totalCount: $("#total-count"),
  toast: $("#toast"),
  dialog: $("#card-dialog"),
};

function T() {
  return I[state.lang];
}

function num(k, d) {
  const raw = localStorage.getItem(k);
  if (raw === null) return d;
  const v = Number(raw);
  return Number.isFinite(v) ? v : d;
}

function readOwned() {
  try {
    return JSON.parse(localStorage.getItem(key.owned) || "{}");
  } catch {
    return {};
  }
}

function save() {
  localStorage.setItem(key.lang, state.lang);
  localStorage.setItem(key.credits, state.credits);
  localStorage.setItem(key.owned, JSON.stringify(state.owned));
  localStorage.setItem(key.epic, state.epic);
  localStorage.setItem(key.legendary, state.legendary);
  localStorage.setItem(key.total, state.total);
  localStorage.setItem(key.daily, state.daily);
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function cn(c) {
  return c.name[state.lang];
}

function cd(c) {
  return c.desc[state.lang];
}

function rr(r) {
  return T().rarity[r];
}

function pickRarity() {
  if (state.legendary >= PITY.legendary - 1) return "legendary";
  if (state.epic >= PITY.epic - 1) return Math.random() < 0.84 ? "epic" : "legendary";
  let roll = Math.random() * 100;
  let sum = 0;
  for (const [r, w] of weights) {
    sum += w;
    if (roll <= sum) return r;
  }
  return "common";
}

function pickCard() {
  const r = pickRarity();
  const pool = cards.filter((c) => c.rarity === r);
  return pool[Math.floor(Math.random() * pool.length)];
}

function record(c) {
  const isNew = !state.owned[c.id];
  state.owned[c.id] = (state.owned[c.id] || 0) + 1;
  state.total++;
  if (c.rarity === "legendary") {
    state.legendary = 0;
    state.epic = 0;
  } else {
    state.legendary++;
    state.epic = c.rarity === "epic" ? 0 : state.epic + 1;
  }
  return { card: c, isNew };
}

function draw(n) {
  if (state.drawing) return;
  const cost = n === 10 ? COST.ten : COST.one;
  if (state.credits < cost) return toast(T().notEnough);
  state.credits -= cost;
  state.drawing = true;
  renderCredits();
  $(".machine").classList.add("is-drawing");
  setTimeout(() => {
    const res = Array.from({ length: n }, () => record(pickCard()));
    state.last = res;
    state.cost = cost;
    state.drawing = false;
    $(".machine").classList.remove("is-drawing");
    save();
    renderAll();
    switchTab("results");
  }, 520);
}

function claimDaily() {
  if (state.daily === today()) return toast(T().dailyDone);
  state.daily = today();
  state.credits += DAILY;
  save();
  renderAll();
  toast(T().dailyToast);
}

function renderText() {
  document.documentElement.lang = T().htmlLang;
  document.title = T().title;
  $("#eyebrow").textContent = T().eyebrow;
  $("#game-title").textContent = T().title;
  $("#wallet").setAttribute("aria-label", T().walletAria);
  $(".pity-board").setAttribute("aria-label", T().progressAria);
  $("#rates").setAttribute("aria-label", T().ratesAria);
  $(".tabs").setAttribute("aria-label", T().panelAria);
  $(".filter-bar").setAttribute("aria-label", T().filterAria);
  $("#currency-label").textContent = T().currency;
  $("#epic-label").textContent = T().epic;
  $("#legendary-label").textContent = T().legendary;
  $("#total-label").textContent = T().total;
  el.one.innerHTML = `${T().one} <span>${COST.one}</span>`;
  el.ten.innerHTML = `${T().ten} <span>${COST.ten}</span>`;
  $("#rates").innerHTML = T().rates.map((x) => `<span>${x}</span>`).join("");
  document.querySelectorAll(".tab")[0].textContent = T().results;
  document.querySelectorAll(".tab")[1].textContent = T().albumTab;
  $("#results-title").textContent = T().resultsTitle;
  $("#collection-title").textContent = T().album;
  $("#collected-label").textContent = T().collected;
  document.querySelectorAll(".filter").forEach((b, i) => {
    b.textContent = T().filters[i];
  });
  $("#dialog-close").textContent = T().close;
  $("#dialog-close").setAttribute("aria-label", T().close);
  $("#dialog-code-label").textContent = T().code;
  $("#dialog-count-label").textContent = T().count;
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === state.lang);
  });
  if (!state.last.length) {
    el.rarity.textContent = T().waiting;
    el.name.textContent = T().unknown;
    el.desc.textContent = T().intro;
    el.note.textContent = T().emptyNote;
    el.summary.hidden = true;
    el.results.classList.add("empty-state");
    el.results.innerHTML = `<p>${T().emptyBody}</p>`;
  }
}

function renderCredits() {
  el.credits.textContent = state.credits;
  el.daily.textContent = state.daily === today() ? T().claimed : T().daily;
  el.daily.disabled = state.daily === today();
  el.one.disabled = state.drawing || state.credits < COST.one;
  el.ten.disabled = state.drawing || state.credits < COST.ten;
}

function renderProgress() {
  el.epic.textContent = Math.max(1, PITY.epic - state.epic);
  el.legendary.textContent = Math.max(1, PITY.legendary - state.legendary);
  el.total.textContent = state.total;
}

function art(target, c) {
  const [a, b, d] = c.tone;
  target.style.setProperty("--a", a);
  target.style.setProperty("--b", b);
  target.style.setProperty("--c", d);
  target.innerHTML = `<div class="illustration-frame"><span>${T().print(rr(c.rarity))}</span><div class="illustration-scene"><i class="sun"></i><i class="moon"></i><i class="hill hill-a"></i><i class="hill hill-b"></i><i class="tree"></i><i class="bird bird-a"></i><i class="bird bird-b"></i></div><small>${c.id.toUpperCase()}</small></div>`;
}

function renderFeatured(c) {
  el.card.className = `art-card ${c.rarity} reveal`;
  el.rarity.textContent = rr(c.rarity);
  el.name.textContent = cn(c);
  el.desc.textContent = cd(c);
  art(el.art, c);
  setTimeout(() => el.card.classList.remove("reveal"), 820);
}

function renderResults(res, cost) {
  const hi = res.reduce((b, x) => (rank[x.card.rarity] > rank[b.card.rarity] ? x : b));
  const newc = res.filter((x) => x.isNew).length;
  el.note.textContent = res.length === 10 ? T().result10 : T().result1;
  el.summary.hidden = false;
  el.summary.innerHTML = `<div class="summary-pill"><span>${T().highest}</span><strong>${rr(hi.card.rarity)}</strong></div><div class="summary-pill"><span>${T().new}</span><strong>${newc} ${T().sheet}</strong></div><div class="summary-pill"><span>${T().spent}</span><strong>${cost}</strong></div>`;
  el.results.classList.remove("empty-state");
  el.results.innerHTML = res.map((x) => miniCard(x.card, false, state.owned[x.card.id], x.isNew)).join("");
  hydrate(el.results, res.map((x) => x.card));
}

function renderCollection() {
  const visible = cards.filter((c) =>
    state.filter === "owned"
      ? state.owned[c.id]
      : state.filter === "rare"
        ? rank[c.rarity] >= rank.rare
        : state.filter === "epic"
          ? rank[c.rarity] >= rank.epic
          : true
  );
  el.owned.textContent = Object.keys(state.owned).length;
  el.totalCount.textContent = cards.length;
  document.querySelectorAll(".filter").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.filter === state.filter);
  });
  el.collection.innerHTML = visible.map((c) => miniCard(c, !state.owned[c.id], state.owned[c.id] || 0)).join("");
  hydrate(el.collection, visible);
}

function miniCard(c, locked, count = 0, isNew = false) {
  return `<article class="mini-card ${c.rarity} ${locked ? "is-locked" : ""} ${isNew ? "is-new" : ""}" data-card-id="${c.id}" role="button" tabindex="0"><div class="mini-art"></div><div class="mini-copy"><span class="mini-rarity">${locked ? T().locked : rr(c.rarity)}</span><strong>${locked ? T().mystery : cn(c)}</strong><small>${locked ? T().unlock : T().owned(count)}</small></div></article>`;
}

function hydrate(root, arr) {
  root.querySelectorAll(".mini-card").forEach((n, i) => art(n.querySelector(".mini-art"), arr[i]));
}

function openDialog(id) {
  const c = cards.find((x) => x.id === id);
  if (!c) return;
  const count = state.owned[id] || 0;
  const locked = count === 0;
  $("#dialog-rarity").textContent = locked ? T().locked : rr(c.rarity);
  $("#dialog-name").textContent = locked ? T().mystery : cn(c);
  $("#dialog-desc").textContent = locked ? T().lockedDesc : cd(c);
  $("#dialog-code").textContent = locked ? "--" : c.id.toUpperCase();
  $("#dialog-count").textContent = `${count} ${T().sheet}`;
  art($("#dialog-art"), c);
  el.dialog.showModal();
}

function switchTab(t) {
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === t));
  $("#results-panel").classList.toggle("is-active", t === "results");
  $("#collection-panel").classList.toggle("is-active", t === "collection");
}

function renderAll() {
  renderText();
  renderCredits();
  renderProgress();
  if (state.last.length) {
    renderFeatured(state.last.at(-1).card);
    renderResults(state.last, state.cost);
  }
  renderCollection();
}

function toast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.toast.classList.remove("show"), 2400);
}

el.one.addEventListener("click", () => draw(1));
el.ten.addEventListener("click", () => draw(10));
el.daily.addEventListener("click", claimDaily);
document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => switchTab(b.dataset.tab)));
document.querySelectorAll(".filter").forEach((b) => {
  b.addEventListener("click", () => {
    state.filter = b.dataset.filter;
    renderCollection();
  });
});
document.querySelectorAll(".lang-btn").forEach((b) => {
  b.addEventListener("click", () => {
    state.lang = b.dataset.lang;
    save();
    renderAll();
  });
});
[el.results, el.collection].forEach((root) => {
  root.addEventListener("click", (e) => {
    const c = e.target.closest(".mini-card");
    if (c) openDialog(c.dataset.cardId);
  });
  root.addEventListener("keydown", (e) => {
    const c = e.target.closest(".mini-card");
    if (c && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openDialog(c.dataset.cardId);
    }
  });
});
$("#dialog-close").addEventListener("click", () => el.dialog.close());
el.dialog.addEventListener("click", (e) => {
  if (e.target === el.dialog) el.dialog.close();
});

art(el.art, cards[0]);
renderAll();
