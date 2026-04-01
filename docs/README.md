# GitHub Pages 배포 가이드

이 프로젝트는 GitHub Pages를 통해 정적 웹사이트로 호스팅할 수 있습니다.

## 1단계: 사이트 빌드

```bash
node .site/build.js
```

빌드가 완료되면 `docs/index.html` 파일이 생성됩니다.

## 2단계: GitHub에 푸시

```bash
git add docs/
git commit -m "Add GitHub Pages site"
git push origin main
```

## 3단계: GitHub Pages 활성화

1. GitHub 저장소로 이동
2. **Settings** → **Pages** 클릭
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/docs` 선택
4. **Save** 클릭

## 4단계: 접속

몇 분 후 다음 URL로 접속 가능합니다:

```
https://[사용자명].github.io/[저장소명]/
```

---

## 자동 배포 (선택사항)

GitHub Actions를 사용하여 main 브랜치에 푸시할 때마다 자동으로 빌드하려면 `.github/workflows/deploy.yml` 파일을 생성하세요:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: node .site/build.js
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 문서 추가/수정 시

새로운 마크다운 파일을 추가하거나 기존 파일을 수정한 후:

```bash
node .site/build.js
git add docs/
git commit -m "Update documentation"
git push
```

GitHub Actions를 설정한 경우 자동으로 배포됩니다.
