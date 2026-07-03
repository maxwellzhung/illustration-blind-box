const resources = [
  {
    id: "undraw",
    name: "unDraw",
    url: "https://undraw.co/illustrations",
    licenseUrl: "https://undraw.co/license",
    style: "flat",
    formats: ["SVG", "PNG"],
    licenseType: "commercial",
    commercial: true,
    tone: ["#b7c8ff", "#f6f0ff", "#6f78c8"],
    tags: ["空状态", "SaaS", "可换色", "干净留白"],
    scene: "适合参考科技产品、后台工具、注册登录页和空状态插画。",
    prompt: "低饱和扁平矢量插画，大面积留白，简洁人物和抽象产品元素，适合网页空状态，清爽科技感",
    note: "适合作为风格和构图灵感；下载或商用前从原站授权页复核。",
  },
  {
    id: "opendoodles",
    name: "Open Doodles",
    url: "https://www.opendoodles.com/",
    licenseUrl: "https://www.opendoodles.com/",
    style: "handdrawn",
    formats: ["SVG", "PNG"],
    licenseType: "commercial",
    commercial: true,
    tone: ["#f5d06f", "#f6f2e8", "#262626"],
    tags: ["手绘", "人物姿态", "轻松", "线稿"],
    scene: "适合参考亲和型人物、轻量品牌视觉、贴纸和介绍页。",
    prompt: "松弛手绘人物插画，黑色自由线条，暖黄色点缀，简单姿势，轻松幽默，白色背景",
    note: "常用于开放灵感参考；使用素材文件前仍以原站说明为准。",
  },
  {
    id: "manypixels",
    name: "ManyPixels Gallery",
    url: "https://www.manypixels.co/gallery",
    licenseUrl: "https://www.manypixels.co/gallery",
    style: "flat",
    formats: ["SVG", "PNG"],
    licenseType: "commercial",
    commercial: true,
    tone: ["#a8d8cf", "#eef8f5", "#4f9c95"],
    tags: ["商务", "成套", "主题分类", "可换色"],
    scene: "适合参考营销页、办公场景、数据图表和功能介绍插画。",
    prompt: "商务主题扁平插画，统一色彩系统，人物与办公物件组合，清晰轮廓，适合产品介绍页",
    note: "图库有免费资源；实际下载和再使用前查看对应页面条款。",
  },
  {
    id: "drawkit",
    name: "DrawKit",
    url: "https://www.drawkit.com/free-vector-illustrations",
    licenseUrl: "https://www.drawkit.com/license",
    style: "editorial",
    formats: ["SVG", "PNG"],
    licenseType: "commercial",
    commercial: true,
    tone: ["#f0a98a", "#fff1e8", "#c46f55"],
    tags: ["编辑插画", "高完成度", "专题页", "品牌感"],
    scene: "适合参考博客头图、落地页主视觉、专题封面和品牌叙事。",
    prompt: "编辑类矢量插画，明确主题隐喻，温暖色彩，人物与场景结合，高完成度商业插画风",
    note: "免费包和付费包并存，收藏时建议记录具体包名和授权页。",
  },
  {
    id: "iradesign",
    name: "IRA Design",
    url: "https://iradesign.io/",
    licenseUrl: "https://iradesign.io/",
    style: "characters",
    formats: ["SVG", "PNG"],
    licenseType: "commercial",
    commercial: true,
    tone: ["#9cc9e6", "#eef7fb", "#d7a84a"],
    tags: ["人物", "渐变", "在线组合", "可定制"],
    scene: "适合参考人物组件、渐变背景和快速生成同风格场景。",
    prompt: "可组合人物插画，柔和渐变背景，简洁身体比例，明亮但克制的色彩，现代产品视觉",
    note: "适合快速找人物造型灵感；导出素材时复核当前许可。",
  },
  {
    id: "humaaans",
    name: "Humaaans",
    url: "https://www.humaaans.com/",
    licenseUrl: "https://www.humaaans.com/",
    style: "characters",
    formats: ["SVG", "PNG", "Sketch"],
    licenseType: "attribution",
    commercial: true,
    tone: ["#c9b8ff", "#f4f0ff", "#6d5fb3"],
    tags: ["人物组件", "姿势组合", "Sketch", "插画系统"],
    scene: "适合参考模块化人物系统、姿势库和角色造型组合方式。",
    prompt: "模块化人物插画系统，不同发型服装姿势可组合，现代扁平风，适合产品和社区场景",
    note: "不同分发渠道可能有署名或平台规则，正式使用前复核。",
  },
  {
    id: "icons8-ouch",
    name: "Icons8 Ouch!",
    url: "https://icons8.com/illustrations",
    licenseUrl: "https://icons8.com/license",
    style: "3d",
    formats: ["PNG", "SVG"],
    licenseType: "attribution",
    commercial: true,
    tone: ["#ffd6a5", "#fff7ea", "#e88d67"],
    tags: ["3D", "多风格", "人物场景", "视觉冲击"],
    scene: "适合参考 3D 插画、强风格页面、应用空状态和活动视觉。",
    prompt: "柔和 3D 插画，圆润人物与物件，明亮暖色，高光细腻，适合应用引导页和活动页",
    note: "免费使用通常有署名或下载限制，商用前必须看当前许可。",
  },
  {
    id: "blush",
    name: "Blush",
    url: "https://blush.design/collections",
    licenseUrl: "https://blush.design/pricing",
    style: "editorial",
    formats: ["PNG", "SVG"],
    licenseType: "check",
    commercial: true,
    tone: ["#f5b7c5", "#fff0f4", "#b85f7d"],
    tags: ["多作者", "角色生成", "插画集合", "情绪化"],
    scene: "适合参考不同插画师的角色语言、情绪表达和专题视觉。",
    prompt: "情绪化人物插画，多作者风格，柔和粉色系，清晰场景叙事，适合社群和内容专题",
    note: "免费层和付费层权益不同，下载格式与商用限制需要逐项确认。",
  },
];

const storageKey = "illustration-inspiration-library";
const state = { saved: readSaved(), query: "", style: "all", license: "all" };
const $ = (selector) => document.querySelector(selector);
const elements = {
  savedCount: $("#saved-count"),
  totalCount: $("#total-count"),
  commercialCount: $("#commercial-count"),
  formatCount: $("#format-count"),
  libraryCount: $("#library-count"),
  resourceGrid: $("#resource-grid"),
  search: $("#search"),
  styleFilter: $("#style-filter"),
  licenseFilter: $("#license-filter"),
  collectAll: $("#collect-all"),
  exportJson: $("#export-json"),
  copyLinks: $("#copy-links"),
  clearLibrary: $("#clear-library"),
  resultNote: $("#result-note"),
  toast: $("#toast"),
};

function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]").filter((id) => resources.some((item) => item.id === id));
  } catch {
    return [];
  }
}

function saveLibrary() {
  localStorage.setItem(storageKey, JSON.stringify(state.saved));
}

function filteredResources() {
  const query = state.query.trim().toLowerCase();
  return resources.filter((resource) => {
    const text = [
      resource.name,
      resource.style,
      resource.scene,
      resource.prompt,
      resource.note,
      ...resource.tags,
      ...resource.formats,
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesStyle = state.style === "all" || resource.style === state.style;
    const matchesLicense =
      state.license === "all" ||
      (state.license === "commercial" && resource.commercial) ||
      resource.licenseType === state.license;
    return matchesQuery && matchesStyle && matchesLicense;
  });
}

function renderStats() {
  elements.savedCount.textContent = state.saved.length;
  elements.totalCount.textContent = resources.length;
  elements.commercialCount.textContent = resources.filter((item) => item.commercial).length;
  elements.formatCount.textContent = new Set(resources.flatMap((item) => item.formats)).size;
  elements.libraryCount.textContent = `${state.saved.length} 个来源`;
  elements.clearLibrary.disabled = state.saved.length === 0;
}

function renderResources() {
  const visible = filteredResources();
  elements.resultNote.textContent = visible.length
    ? `当前显示 ${visible.length} 个灵感来源，可收藏、打开原站或复制关键词。`
    : "没有匹配的灵感来源，换个关键词或筛选条件试试。";

  if (!visible.length) {
    elements.resourceGrid.innerHTML = `<div class="empty-state">没有找到匹配的插画灵感。</div>`;
    return;
  }

  elements.resourceGrid.innerHTML = visible.map(resourceCard).join("");
  elements.resourceGrid.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => toggleSaved(button.dataset.save));
  });
  elements.resourceGrid.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => copyPrompt(button.dataset.copy));
  });
}

function resourceCard(resource) {
  const saved = state.saved.includes(resource.id);
  const [a, b, c] = resource.tone;
  return `
    <article class="resource-card ${saved ? "is-saved" : ""}">
      <div class="resource-preview" style="--tone-a:${a};--tone-b:${b};--tone-c:${c}">
        <span>${resource.formats.join(" / ")}</span>
        <div class="postcard-art" aria-hidden="true">
          <i class="moon"></i><i class="route"></i><i class="stamp"></i>
          <div class="figure"><b></b><i></i><i></i></div>
        </div>
      </div>
      <div class="resource-body">
        <div class="resource-meta">${styleLabel(resource.style)} · ${licenseLabel(resource)}</div>
        <h3>${resource.name}</h3>
        <p>${resource.scene}</p>
        <p class="story">灵感关键词：${resource.prompt}</p>
        <div class="tags">${resource.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
      <div class="resource-footer">
        <p class="license">${resource.note}</p>
        <div class="resource-actions">
          <a href="${resource.url}" target="_blank" rel="noreferrer">打开原站</a>
          <a href="${resource.licenseUrl}" target="_blank" rel="noreferrer">查看授权</a>
          <button type="button" data-copy="${resource.id}">复制关键词</button>
          <button type="button" data-save="${resource.id}">${saved ? "已收藏" : "收藏灵感"}</button>
        </div>
      </div>
    </article>
  `;
}

function styleLabel(style) {
  return {
    flat: "扁平矢量",
    handdrawn: "手绘线稿",
    characters: "人物角色",
    editorial: "编辑叙事",
    "3d": "3D / 立体",
  }[style];
}

function licenseLabel(resource) {
  if (resource.licenseType === "commercial") return "可商用友好";
  if (resource.licenseType === "attribution") return "可能需署名";
  return "需逐项复核";
}

function toggleSaved(id) {
  state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
  saveLibrary();
  render();
  showToast(state.saved.includes(id) ? "已收藏到灵感库。" : "已从灵感库移除。");
}

function collectAllVisible() {
  const ids = filteredResources().map((item) => item.id);
  state.saved = Array.from(new Set([...state.saved, ...ids]));
  saveLibrary();
  render();
  showToast(`已收集 ${ids.length} 个当前筛选下的灵感来源。`);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("浏览器不允许直接复制，可以从卡片里手动选取文字。");
  }
}

function copyPrompt(id) {
  const resource = resources.find((item) => item.id === id);
  if (resource) copyText(resource.prompt, `已复制「${resource.name}」灵感关键词。`);
}

function copyVisiblePrompts() {
  const prompts = filteredResources()
    .map((resource) => `${resource.name}\n${resource.prompt}\n${resource.url}`)
    .join("\n\n");
  if (!prompts) return showToast("当前没有可复制的关键词。");
  copyText(prompts, "当前灵感关键词已复制。");
}

function exportJson() {
  const selected = resources.filter((resource) => state.saved.includes(resource.id));
  const payload = {
    name: "免费插画灵感素材库",
    purpose: "收集免费插画来源作为风格、构图、配色和创作提示词灵感。",
    reminder: "素材下载、改编和商用前请打开原站与授权页复核最新条款。",
    resources: selected.length ? selected : filteredResources(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "illustration-inspiration-library.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast(selected.length ? "已导出收藏灵感清单。" : "收藏为空，已导出当前筛选灵感。");
}

function clearLibrary() {
  state.saved = [];
  saveLibrary();
  render();
  showToast("灵感库已清空。");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

function render() {
  renderStats();
  renderResources();
}

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderResources();
});
elements.styleFilter.addEventListener("change", (event) => {
  state.style = event.target.value;
  renderResources();
});
elements.licenseFilter.addEventListener("change", (event) => {
  state.license = event.target.value;
  renderResources();
});
elements.collectAll.addEventListener("click", collectAllVisible);
elements.copyLinks.addEventListener("click", copyVisiblePrompts);
elements.exportJson.addEventListener("click", exportJson);
elements.clearLibrary.addEventListener("click", clearLibrary);

render();
