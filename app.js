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

setDates();
setupNavigation();
