# 練習

純靜態網頁，沒有後端、不需編譯。

## 放上 GitHub Pages
1. 在 GitHub 建立新專案（Repository），名稱建議用英文，例如 `practice`。
2. 把這個資料夾裡的所有檔案（包含 `icons`、`fonts` 兩個資料夾）上傳到專案根目錄。
3. 專案的 Settings → Pages → Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾選 `/ (root)`。
4. 等一兩分鐘，網址是 `https://你的帳號.github.io/專案名/`。

## 加到手機桌面
- iPhone：Safari 開啟網址 → 分享 → 加入主畫面
- Android：Chrome 開啟網址 → 選單 → 安裝應用程式／加到主畫面

## 之後改版
重新上傳覆蓋檔案，並把 `sw.js` 第 2 行的 `VERSION` 改成新字串，使用者下次開啟就會更新。

## 其他
- 資料只存在每個人手機的瀏覽器裡；請定期用 App「設定」裡的備份。
- 已加上「不要被搜尋引擎收錄」標記（noindex、robots.txt），但這只是請求，不是保護。
