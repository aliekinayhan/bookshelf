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
- [ ] Post detay sayfası (/post/:id) — yorumlar burada
- [ ] Okuma ilerlemesi güncelleme (kitap üzerine gelince buton)
- [ ] Kitaba tıklayınca kitap detay sayfasına git
- [ ] Yazar takip sistemi backend bağlantısı
- [ ] Yazarlar feed sekmesi backend bağlantısı (GET /api/feed/authors)

## Mimari Kararlar

- Feed/Keşfet sekmesi giriş yapmadan görünür (sadece okuma)
- Beğen/Yorum/Paylaş → giriş yapılmamışsa Login'e yönlendir
- Takip Ettiklerim sekmesi → sadece giriş yapılmışsa görünür
- Kitap arama → Frontend Open Library API'ye direkt istek atar
- Kullanıcı kitap ekleyince → sadece ISBN backend'e gönderilir
- Backend ISBN ile Open Library'den detayları çekip DB'ye kaydeder
- Feed yazarlar sekmesi → pagination ile çalışır (sayfa başı 20 post)
- Yazar takip et → profilde "Takip Ettiğim Yazarlar" listesi oluşur
- Yazar sayfası → Open Library'den çekilir, backend normalize eder

## Eksik Sayfalar / Componentler

- [ ] Protected Route component'i
- [x] Profil sayfası
- [x] Kitap detay sayfası
- [ ] Arama sayfası
- [ ] Ayarlar sayfası
- [ ] Bildirim sistemi (WebSocket - STOMP)
- [ ] Post oluşturma modal'ı
- [ ] Takipçi/Takip listesi modal'ı (profil sayfasında)
- [ ] Yazar sayfası (/author/:id)

## Kitap Durumları

- READING → Şu an okuyorum (profilde öne çıkar)
- COMPLETED → Okudum
- WANT_TO_READ → Okuyacağım
- DROPPED → Yarım Bıraktım

## Feed Sekmeleri

- Takip Ettiklerim → takip ettiğin kullanıcıların paylaşımları
- Yazarlar → takip ettiğin yazarların kitaplarına yapılan paylaşımlar
- Keşfet → herkesten paylaşımlar (giriş yapmadan da görünür)

## WebSocket (Backend hazır olunca)

- [ ] STOMP client kurulumu (sockjs-client + @stomp/stompjs)
- [ ] Bağlantıyı AuthContext'te aç/kapat
- [ ] Like/Comment anlık güncelleme
- [ ] Bildirim sistemi

## Backend API Endpoint'leri (Frontend bitince yazılacak)

- [ ] GET /api/feed?type=following
- [ ] GET /api/feed?type=explore
- [ ] GET /api/feed/authors
- [ ] GET /api/books/:id
- [ ] GET /api/books/:id/reviews
- [ ] GET /api/books/:id/quotes
- [ ] GET /api/books/:id/editions
- [ ] POST /api/books/:id/like
- [ ] POST /api/books/:id/rate
- [ ] POST /api/user/library
- [ ] GET /api/authors/:id
- [ ] POST /api/authors/:id/follow
- [ ] GET /api/users/:username
- [ ] GET /api/users/:username/posts
- [ ] GET /api/users/:username/library
- [ ] POST /api/users/:username/follow
