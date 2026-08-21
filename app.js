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

const getPosts = (type) => {
  const selector = type === "i" ? ".board-list--notice > li" : ".board-section[aria-labelledby='article-title'] .board-list > li";
  return [...document.querySelectorAll(selector)].reverse();
};

const openPostFromHash = () => {
  const match = window.location.hash.match(/^#([ia])\/(\d+)$/);
  if (!match) return;

  const post = getPosts(match[1])[Number(match[2]) - 1];
  if (!post) return;

  post.querySelector("details").open = true;
  post.scrollIntoView({ block: "center" });
};

const setupPostLinks = () => {
  ["i", "a"].forEach((type) => {
    getPosts(type).forEach((post, index) => {
      const url = new URL(window.location.href);
      url.hash = `${type}/${index + 1}`;

      const section = document.createElement("section");
      section.className = "post-permalink";
      section.setAttribute("aria-label", "게시물 주소");

      const label = document.createElement("span");
      label.textContent = "URL :";

      const address = document.createElement("span");
      address.className = "post-permalink__address";
      address.textContent = url.href;

      const copyLink = document.createElement("a");
      copyLink.href = `#${type}/${index + 1}`;
      copyLink.textContent = "복사";
      copyLink.addEventListener("click", async (event) => {
        event.preventDefault();
        try {
          await navigator.clipboard.writeText(url.href);
        } catch {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(address);
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand("copy");
          selection.removeAllRanges();
        }
        copyLink.textContent = "복사됨";
        window.setTimeout(() => { copyLink.textContent = "복사"; }, 1500);
      });

      section.append(label, address, copyLink);
      post.querySelector("article").append(section);
    });
  });

  openPostFromHash();
  window.addEventListener("hashchange", openPostFromHash);
};

setDates();
setupNavigation();
setupAttachments();
setupPostLinks();
