const headlines = [
  "예시 기사 제목입니다",
  "예시 기사 제목입니다",
  "예시 기사 제목입니다",
];

const latestNews = [
  { category: "예시 카테고리", time: "00:00", title: "예시 기사 제목입니다", image: "card-image--1" },
  { category: "예시 카테고리", time: "00:00", title: "예시 기사 제목입니다", image: "card-image--2" },
  { category: "예시 카테고리", time: "00:00", title: "예시 기사 제목입니다", image: "card-image--3" },
  { category: "예시 카테고리", time: "00:00", title: "예시 기사 제목입니다", image: "card-image--4" },
];

const economyNews = [
  { category: "예시 카테고리", title: "예시 기사 제목입니다", image: "compact-thumb--a" },
  { category: "예시 카테고리", title: "예시 기사 제목입니다", image: "compact-thumb--b" },
  { category: "예시 카테고리", title: "예시 기사 제목입니다", image: "compact-thumb--c" },
];

const videos = [
  { title: "예시 영상 제목입니다", image: "video-thumb--1" },
  { title: "예시 영상 제목입니다", image: "video-thumb--2" },
  { title: "예시 영상 제목입니다", image: "video-thumb--3" },
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
  document.querySelector("#year").textContent = now.getFullYear();
};

render();
setDates();
setupNavigation();
