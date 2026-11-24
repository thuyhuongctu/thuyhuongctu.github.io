# thuyhuongctu.github.io

Trang gốc của tài khoản: tự chuyển hướng về **[Je m'appelle Hương](https://jemappellehuong.com/)** (trang học thuật cá nhân).

- `index.html`: chuyển hướng tức thì về `https://jemappellehuong.com/`.
- `404.html`: bắt các đường dẫn gõ sai: tên kho cũ `ThuyHuong_Digital-2026-Games` về `https://games.jemappellehuong.com/` (giữ phần đường dẫn còn lại); tên cũ `JESUISHUONG_WEBSITE_2026` và biến thể sai hoa/thường về `https://jemappellehuong.com/`; `/bizon/` sai hoa/thường về `/BizOn/`; còn lại về `https://jemappellehuong.com/`.
- `ThuyHuong_Digital-2026-Games/index.html`: trang chuyển hướng cho app Su Viet Games bản 1 trên CH Play (gói `io.github.thuyhuongctu.suvietgames`, mở địa chỉ cũ). Giữ đến khi mọi máy đã lên bản dựng trỏ `games.jemappellehuong.com`.
- `.well-known/assetlinks.json`: Digital Asset Links tại origin `thuyhuongctu.github.io` cho các app Android bản dựng cũ còn mở địa chỉ `thuyhuongctu.github.io/<kho>/`. Từ 24/11/2026 các app chuyển dần sang tên miền con riêng (`games.`, `domaine.`, `bureau.`, `comdraft.jemappellehuong.com`; `enquiz.`, `gravity.bizonland.com`); mỗi tên miền con có `assetlinks.json` riêng trong kho của app. Không xóa mục ở đây khi máy người dùng còn bản cũ.

## Trạng thái Android

Fingerprint hiện tại xác minh **APK debug nội bộ** được build bởi workflow BizOn ngày 02/08/2026. Fingerprint không phải bí mật nhưng chỉ khớp với chứng thư ký của APK đó.

Trước Google Play production cần thêm fingerprint **Play App Signing SHA-256** thật vào cùng mảng `sha256_cert_fingerprints`; không xóa fingerprint đang dùng cho internal test cho đến khi kết thúc kiểm thử thiết bị.

© 2026 Đỗ Thùy Hương & Phan Anh Tú.
