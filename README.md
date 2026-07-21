# IRIS TV Homepage

GitHub Pages에 배포할 수 있는 바닐라 HTML, CSS, JavaScript 기반의 아이리스TV 뉴스 홈페이지 베이스입니다.

## 로컬 확인

`index.html`을 브라우저에서 열거나, 정적 웹 서버로 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## GitHub Pages 배포

1. 이 디렉터리를 GitHub 저장소로 푸시합니다.
2. GitHub 저장소의 **Settings → Pages**로 이동합니다.
3. **Build and deployment**의 Source에서 **Deploy from a branch**를 선택합니다.
4. 배포 브랜치로 `main`, 폴더로 `/(root)`를 선택하고 저장합니다.
5. 제공되는 Pages URL에서 사이트를 확인합니다.

`index.html`이 루트에 있으므로 별도 빌드 과정이 필요 없습니다.
