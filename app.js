const setupNavigation = () => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".main-nav");
  const searchToggle = document.querySelector("[data-search-toggle]");
  const searchPanel = document.querySelector("[data-search-form]");
  const searchInput = document.querySelector("#site-search");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (searchToggle && searchPanel && searchInput) {
    searchToggle.addEventListener("click", () => {
      const isOpen = searchPanel.classList.toggle("is-open");
      if (isOpen) searchInput.focus();
    });

    searchPanel.addEventListener("submit", (event) => {
      event.preventDefault();
      if (searchInput.value.trim()) window.alert(`'${searchInput.value.trim()}' 검색 기능은 준비 중입니다.`);
    });
  }
};

const setDates = () => {
  const now = new Date();
  document.querySelector("#today").textContent = now.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  document.querySelector("#year").textContent = now.getFullYear();
};

const setupAttachments = () => {
  document.querySelectorAll("article[data-attachments]").forEach((article) => {
    const attachments = article.dataset.attachments.split(",").map((name) => name.trim()).filter(Boolean);
    if (!attachments.length) return;

    const section = document.createElement("section");
    section.className = "attachments";
    section.setAttribute("aria-label", "첨부파일");
    section.innerHTML = "<h4>첨부파일</h4>";

    const list = document.createElement("ul");
    attachments.forEach((name) => {
      const link = document.createElement("a");
      link.href = `res/${encodeURIComponent(name)}`;
      link.textContent = name;

      if (/\.pdf$/i.test(name)) {
        link.target = "_blank";
        link.rel = "noopener";
      } else {
        link.download = name;
      }

      const item = document.createElement("li");
      item.append(link);
      list.append(item);
    });

    section.append(list);
    article.append(section);
  });
};

setDates();
setupNavigation();
setupAttachments();
