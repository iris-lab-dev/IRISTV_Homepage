const headlines = [
  "내일부터 달라지는 일상, 꼭 알아야 할 변화는",
  "지역에서 시작한 새로운 실험이 주목받는 이유",
  "숫자로 보는 한 주간의 경제 흐름",
];

const latestNews = [
  { category: "정치", time: "12:30", title: "국민의 삶을 중심에 둔 정책, 현장의 목소리를 듣다", image: "card-image--1" },
  { category: "문화", time: "11:45", title: "우리 동네에서 만나는 특별한 여름의 풍경", image: "card-image--2" },
  { category: "사회", time: "11:12", title: "변화하는 교육 현장, 아이들이 바라는 학교는", image: "card-image--3" },
  { category: "경제", time: "09:58", title: "일상 속 소비 트렌드, 지금 주목해야 할 것은", image: "card-image--4" },
];

const economyNews = [
  { category: "경제", title: "지속 가능한 성장의 조건, 현장에서 답을 찾다", image: "compact-thumb--a" },
  { category: "IT·과학", title: "AI 시대의 업무 방식, 무엇이 달라지고 있나", image: "compact-thumb--b" },
  { category: "경제", title: "청년 창업가들이 말하는 새로운 기회의 지도", image: "compact-thumb--c" },
];

const videos = [
  { title: "[아이리스 리포트] 우리 곁의 변화, 직접 가봤습니다", image: "video-thumb--1" },
  { title: "한 주를 읽는 시선: 이번 주 뉴스 브리핑", image: "video-thumb--2" },
  { title: "사람과 사람 사이, 따뜻한 연결의 이야기", image: "video-thumb--3" },
];

const render = () => {
  document.querySelector("#top-stories").innerHTML = headlines.map((title, index) => `
    <li><span>0${index + 1}</span><a href="#latest">${title}</a></li>
  `).join("");

  document.querySelector("#latest-news").innerHTML = latestNews.map((article) => `
    <article class="news-card">
      <div class="card-image ${article.image}" aria-hidden="true"></div>
      <p class="eyebrow">${article.category} <time>${article.time}</time></p>
      <h3><a href="#latest">${article.title}</a></h3>
    </article>
  `).join("");

  document.querySelector("#economy-news").innerHTML = economyNews.map((article) => `
    <article class="compact-item">
      <div><p class="eyebrow">${article.category}</p><h3><a href="#economy">${article.title}</a></h3></div>
      <div class="compact-thumb ${article.image}" aria-hidden="true"></div>
    </article>
  `).join("");

  document.querySelector("#video-news").innerHTML = videos.map((video) => `
    <article class="video-card">
      <div class="video-thumb ${video.image}" aria-hidden="true"><span class="play">▶</span></div>
      <p class="eyebrow">IRIS PLAY</p>
      <h3><a href="#video">${video.title}</a></h3>
    </article>
  `).join("");
};

const setupNavigation = () => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".main-nav");
  const searchToggle = document.querySelector("[data-search-toggle]");
  const searchPanel = document.querySelector("[data-search-form]");
  const searchInput = document.querySelector("#site-search");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  searchToggle.addEventListener("click", () => {
    const isOpen = searchPanel.classList.toggle("is-open");
    if (isOpen) searchInput.focus();
  });

  searchPanel.addEventListener("submit", (event) => {
    event.preventDefault();
    if (searchInput.value.trim()) window.alert(`'${searchInput.value.trim()}' 검색 기능은 준비 중입니다.`);
  });
};

const setDates = () => {
  const now = new Date();
  document.querySelector("#today").textContent = now.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  document.querySelector("#breaking-time").textContent = now.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
  document.querySelector("#year").textContent = now.getFullYear();
};

render();
setDates();
setupNavigation();
