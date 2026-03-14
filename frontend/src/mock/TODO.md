# Frontend TODO

## Backend bağlantısında yapılacaklar

- [ ] Sonsuz scroll / pagination (20 post, aşağı kaydırınca 20 daha)
- [ ] Yorum bölümü (posta tıklayınca detay sayfası)
- [ ] Loading skeleton (veriler yüklenirken gri kutucuklar)
- [ ] Boş feed mesajı (kimseyi takip etmiyorsa yönlendirme)
- [ ] Stats kısmını dinamik yap (backend'den çek)
- [ ] OAuth2 butonlarını bağla (Spring Security endpoint)
- [ ] Form validasyonu (react-hook-form + zod)
- [ ] Protected routes (giriş yapmadan feed'e giremesin)

## Mimari Kararlar

- Feed/Keşfet sekmesi giriş yapmadan görünür (sadece okuma)
- Beğen/Yorum/Paylaş → giriş yapılmamışsa Login'e yönlendir
- Takip Ettiklerim sekmesi → sadece giriş yapılmışsa görünür
- Kitap arama → Frontend Open Library API'ye direkt istek atar
- Kullanıcı kitap ekleyince → sadece ISBN backend'e gönderilir
- Backend ISBN ile Open Library'den detayları çekip DB'ye kaydeder

## Eksik Sayfalar / Componentler

- [ ] Protected Route component'i
- [ ] Profil sayfası
- [ ] Kitap detay sayfası
- [ ] Arama sayfası
- [ ] Ayarlar sayfası
- [ ] Bildirim sistemi (WebSocket - STOMP)
- [ ] Post oluşturma modal'ı

## Kitap Durumları

- READING → Şu an okuyorum
- COMPLETED → Okudum
- WANT_TO_READ → Okumak istiyorum
- DROPPED → Yarıda bıraktım

## WebSocket (Backend hazır olunca)

- [ ] STOMP client kurulumu (sockjs-client + @stomp/stompjs)
- [ ] Bağlantıyı AuthContext'te aç/kapat
- [ ] Like/Comment anlık güncelleme
- [ ] Bildirim sistemi
