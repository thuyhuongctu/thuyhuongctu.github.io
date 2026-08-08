# thuyhuongctu.github.io

Trang gốc của tài khoản — tự chuyển hướng về **[BizOn Bật Nghiệp](https://thuyhuongctu.github.io/BizOn/)**.

- `index.html` — chuyển hướng tức thì về `/BizOn/`.
- `404.html` — nắn lại đường dẫn gõ sai hoa/thường của `/bizon`; mọi đường dẫn
  lạ khác hiện trang báo lỗi kèm liên kết tới BizOn, EnQuiz và M-AIDA thay vì
  chuyển hướng. Trước đây trang này đẩy hết mọi lỗi về `/BizOn/`, nên một site
  con bị hỏng lại trông như là vào nhầm trang game.
- `.well-known/assetlinks.json` — Digital Asset Links tại root origin cho package Android `vn.bizon.simulation`.

## Trạng thái Android

Fingerprint hiện tại xác minh **APK debug nội bộ** được build bởi workflow BizOn ngày 02/08/2026. Fingerprint không phải bí mật nhưng chỉ khớp với chứng thư ký của APK đó.

Trước Google Play production cần thêm fingerprint **Play App Signing SHA-256** thật vào cùng mảng `sha256_cert_fingerprints`; không xóa fingerprint đang dùng cho internal test cho đến khi kết thúc kiểm thử thiết bị.

© 2026 Đỗ Thùy Hương & Phan Anh Tú.
