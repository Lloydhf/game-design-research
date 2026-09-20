# İlk Beş Dakikayı Tasarlamak: Parkur Oyunlarında Öğretim Zamanlaması

**Tür:** Kaynaklara dayalı tasarım yazısı ve araştırma önerisi  
**Tarih:** 20 Eylül 2026  
**Durum:** Katılımcı verisi toplanmadı; deney koşulları henüz uygulanmadı. Metin OpenAI Codex desteğiyle hazırlanmış, Kuzey'in kişisel incelemesini bekleyen bir çalışma taslağıdır.

## Özet

Bir parkur oyununda oyuncunun ilk zıplamayı yapabilmesi, hareket sistemini anlamış olduğu anlamına gelmez. Oyuncu hangi mesafenin güvenli olduğunu, düşmenin sonucunu ve özel hareketi ne zaman kullanacağını da öğrenir. Bu yazı, aynı kısa açıklamanın oyun başlamadan önce veya ihtiyaç duyulduğu anda verilmesini karşılaştıran küçük bir araştırma önerir. Amaç bir öğretim yöntemini bütün oyunlar için üstün ilan etmek değil, belirli bir parkur bölümünü geliştirecek kanıt üretmektir. Mevcut çalışmalar bağlamın önemini gösterir; DASHER için sonuç üretmek ayrıca test gerektirir.

## 1. Tasarım problemi

DASHER, düşmenin başlangıca dönüşle sonuçlandığı bir Roblox parkur projesidir. Böyle bir sistemde oyuncu ilk denemede başarısız olduğunda iki farklı sorun ortaya çıkabilir: hareketi biliyor ama uygulamakta zorlanıyor olabilir; ya da kendisinden hangi hareketin beklendiğini hiç anlamamış olabilir. Bu durumlar aynı tasarım değişikliğini gerektirmez. Daha geniş platform bir uygulama sorununu azaltabilirken, anlaşılmayan bir kontrol için açıklamanın konumu daha önemli olabilir.

Bu nedenle araştırma sorusu dar tutulmalıdır: **Aynı kontrol açıklamasını kullanım noktasında göstermek, başlangıçta göstermeye göre ilk beş dakikadaki hedefe ulaşmayı değiştirir mi?** “Oyuncular oyunu daha çok sevdi mi?” sorusu da değerlidir, fakat tek bir beğeni puanı öğrenmeyi, zorluğu ve sunumu birbirinden ayırmaz.

## 2. Kaynaklar ne söylüyor?

Hunicke, LeBlanc ve Zubek'in MDA çerçevesi; kuralları, oyun sırasında ortaya çıkan davranışları ve oyuncu deneyimini birlikte düşünmek için bir dil sunar. Burada kontrol ve sıfırlama kuralları mekaniklerdir; deneme ve tekrar davranışları dinamiklerdir; hâkimiyet veya hayal kırıklığı hedeflenen ya da ortaya çıkabilecek deneyimlerdir. Bu çerçeve deneysel bir üstünlük kanıtı değildir; hangi bağlantıları inceleyeceğimizi belirlemeye yardım eder. [1]

Andersen ve çalışma arkadaşları, farklı karmaşıklıktaki üç oyunda sekiz öğretim tasarımını 45.000'den fazla oyuncuyla incelemiştir. Öğretimin yararı oyunlar arasında aynı değildir; daha karmaşık oyunda görülen kazanımlar daha basit iki oyunda aynı biçimde görülmemiştir. İhtiyaç anında sunulan açıklamalar da her bağlamda aynı sonucu vermemiştir. Buradan “her oyuna daha fazla açıklama ekle” sonucu çıkarılamaz. Çalışma, kendi projemizde açıklamanın zamanlamasını sınamak için gerekçe sağlar; kendi oyunumuzdaki etkinin büyüklüğünü vermez. [2]

Cao ve Liu'nun çalışması örtük öğretimi, yani oyuncuya her adımı açıkça söylemeden yol gösteren tasarımı ele alır. Pilot bulgular, önceki oyun deneyiminin bu tür yönlendirmeyle ilişkisini dikkate almanın önemine işaret eder. Buradaki öneri örtük ve açık öğretimin tamamını karşılaştırmaz: aynı metnin iki farklı zamanda sunulmasını karşılaştırır. Böylece birden fazla özelliğin birlikte değişmesinden doğacak belirsizlik azaltılır. [3]

Bu yazı sistematik literatür taraması değildir. Üç kaynak, kavramsal çerçeve ve doğrudan ilgili başlangıç kanıtı olarak seçilmiştir. Bütün oyun türlerini, erişilebilirlik ihtiyaçlarını veya güncel çalışmaları kapsama iddiası yoktur.

## 3. DASHER için önerilen tasarım

Canlı çok oyunculu turun tamamı ilk deney için fazla değişken içerir: başka oyuncular, bekleme süresi, rota seçimi ve geri sayım aynı anda deneyimi etkileyebilir. Bunun yerine tek oyunculu, kısa bir test parkuru hazırlanmalıdır. İlk hedef deney başlamadan işaretlenmeli; harita, karakter hızı, zıplama, kamera ve düşme davranışı iki koşulda aynı kalmalıdır.

A koşulunda açıklama parkur başlamadan kısa bir kartta görünür. B koşulunda aynı açıklama ilgili hareketin gerektiği ilk güvenli yaklaşım bölgesinde görünür. Metin, boyut, okunabilirlik, gösterim süresi ve kapatma davranışı aynı olmalıdır. Başlangıç kartı için geçen zaman da beş dakikalık pencereye dahil edilir. Böylece karşılaştırma, tüm ilk deneyimin maliyetini içerir; yalnızca hareket süresini ölçtüğü iddia edilmez.

Oyuncuya aynı parkuru iki yöntemle peş peşe oynatmak öğrenme etkisi yaratabilir. Küçük pilotta her katılımcının yalnızca bir koşula atanması bu sorunu azaltır. Atama rastgele yapılmalı ve önceki parkur deneyimi ayrıca kaydedilmelidir. Gruplar yine dengesiz kalabilir; bu sınırlama raporda gösterilmelidir.

## 4. Başarı nasıl tanımlanmalı?

Birincil ölçüt, ilk beş dakikada işaretlenmiş hedefe ulaşan katılımcı oranıdır. Süre, ilk öğretim veya kontrol sunumundan itibaren başlar; bekleme odası ya da yükleme ekranı bu pencereye dahil edilmez. Hedefe ulaşmadan ayrılan katılımcı sessizce analizden çıkarılmamalıdır. Çıkış nedeni ve gözlenen süre kaydedilir.

İkincil ölçütler hedefe ulaşma süresi, başarısızlık sayısı ve oturum sonunda sorulan kontrol açıklığı puanıdır. Yalnızca başarılı oyuncuların ortalama süresini karşılaştırmak yanıltıcı olabilir: çok az kişinin bitirdiği bir koşulda kalan kişiler deneyimli oyuncular olabilir. Bu yüzden tamamlanma oranı önce, başarılı katılımcıların süresi ise açıkça koşullu bir betimleme olarak raporlanır.

“Kontrolleri anladım”, “zorluk bana adil geldi” ve “yeniden denemek isterim” ayrı sorulardır. Bir oyuncu kontrolü anladığı halde zorluğu sevmeyebilir. Bu üç puan tek bir başarı notuna dönüştürülmemelidir. Gözlemci yardımı gerekirse yardımı kaydetmeli; yardım alan oturumu bağımsız tamamlanma olarak saymamalıdır.

## 5. Pilotun kapsamı

Önerilen ilk çalışma, toplam 12 gönüllü yetişkinle uygulanabilirlik pilotudur. Bu sayı istatistiksel güç hesabına dayanmaz ve güvenilir bir genel etki tahmini için yeterli olduğu ileri sürülmez. Asıl amaç talimatları, kayıt yöntemini ve parkurun uzunluğunu sınamaktır. Küçük gruplarda tek kişinin sonucu oranı belirgin biçimde değiştireceği için ham sayılar, paydalar ve belirsizlik aralıkları birlikte verilmelidir.

Katılım gönüllü olmalı, oyuncu istediği anda durabilmelidir. Gerçek kullanıcı adları, Discord kimlikleri, ses kayıtları ve hesap bilgileri araştırma verisi olarak toplanmamalıdır. Rastgele oturum kodları kullanılmalı; kodlanmış satırların da kişisel veriyle ilişkilendirilebileceği unutulmamalıdır. Açık depoya yalnızca uygun izinle hazırlanmış toplu sonuçlar konulmalıdır.

## 6. Sonuçlara göre tasarım kararı

B koşulunda daha çok oyuncu hedefe ulaşırsa ilk yorum, bu parkur ve bu katılımcılar için kullanım noktasındaki açıklamanın umut verici olduğudur. Bunun bütün oyunun oyuncu tutma oranını artırdığı söylenemez. Ters sonuçta metnin görüşü kapatması, oyuncunun hareket anında okumaya zaman bulamaması veya başlangıç bilgisinin planlamaya yardım etmesi olası açıklamalardır; bunlar ayrıca sınanmalıdır.

İki koşul benzer görünürse bu, kesin olarak eşdeğer oldukları anlamına gelmez. Pilot küçük olabilir veya parkur zaten kolayca öğreniliyor olabilir. Sonraki tasarım değişikliği verinin desteklediği soruna göre seçilmelidir: bir görsel ipucu, daha güvenli deneme alanı veya farklı platform aralığı gibi.

## 7. Portföye katkısı

Bu çalışma ancak karar sürecini görünür kıldığında değer kazanır. Depoda sürüm bilgisi, iki koşulun ekran görüntüsü, yöntem, toplu sonuçlar ve sonuçtan sonra yapılan tek bir tasarım değişikliği birlikte yer almalıdır. Bugün mevcut olan çıktı, kaynaklı bir yazı ve uygulanabilir protokoldür. Kişisel değerlendirme, katılımcı bulgusu veya araştırma başarısı henüz eklenmemiştir. GitHub'da yayımlamak, akademik hakem değerlendirmesi veya üniversite onayı anlamına gelmez.

## Kaynakça

1. Hunicke, R., LeBlanc, M., & Zubek, R. (2004). *MDA: A Formal Approach to Game Design and Game Research*. AAAI Workshop. [Yayın sayfası](https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/).
2. Andersen, E., O'Rourke, E., Liu, Y.-E., Snider, R., Lowdermilk, J., Truong, D., Cooper, S., & Popović, Z. (2012). *The Impact of Tutorials on Games of Varying Complexity*. CHI 2012, 59–68. [Yazar kurumundaki tam metin](https://grail.cs.washington.edu/projects/game-abtesting/chi2012/chi2012.pdf).
3. Cao, S., & Liu, F. (2022). *Learning to play: understanding in-game tutorials with a pilot study on implicit tutorials*. Heliyon, 8(11), e11482. [DOI](https://doi.org/10.1016/j.heliyon.2022.e11482) · [Yayın kaydı](https://pubmed.ncbi.nlm.nih.gov/36419670/).
