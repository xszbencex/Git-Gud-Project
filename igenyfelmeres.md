# Étterem igény követelményspecifikáció

***1. Áttekintés***<br>
A weboldal célja igényfelmérést készíteni egy étteremnek. A weboldal az összes elterjedt webböngészőn (Firefox, Chrome, Edge, Opera) működjön megfelelően, illetve rendelkezik Web és Android felülettel, mindkettő módon, elérhető az összes felhasználói funkció. Az úrlap eldönthető rövid kérdéseket tartalmaz, amelyek felmérik a lakosok étkezési szokásait (ételérzéékenység, fogyasztási szokások, ételkülönlegességek, stb.). A későbbi felhasználás miatt, a bekért adatokat egy adatbázisban tároljuk.

***2. Jelenlegi helyzet***<br>
- Az **Apetit étteremlánc** Magyarországon eddig 23 városban van jelen és szeretnénk éttermet nyitni Debrecenben is.
- Ehhez a cég szeretne igényfelmérést készíteni egy online űrlapon keresztül.
- Szeretnénk felmérni a debreceni lakosok étkezési szokásait:
    - milyen gyakran étkeznekházon kívül
    - milyen preferenciák alapján választanak éttermet (étterem közelsége, ételek változatossága, ételek egzotikussága, barátok javaslatára stb...).

***3. Vágyálom rendszer***<br>
- Az eredményes adatszerzés érdekében szükség van könnyen eldönthető rövid kérdésekre, és jól átlátható válaszlehetőségekre.
- Ezen felül szükséges egy adatbázis, amely eltárolja a lakosoktól bekért adatokat, és ezekből az adatokból statisztikát is lehessen készíteni.
- Elvárás hogy az űrlap platformfüggetlen legyen. Az online megjenés lehetőleg mobil telefonon, tableten is működjön, reszponzív felülettel.

***4. Jelenlegi üzleti folyamatok***<br>
- 4.1. A házon kívüli étkezések gyakoriságának felmérése (naponta, hetente, havonta, évente,...)
- 4.2. Milyen okokból étkeznek házon kívül (időmegtakarítás, társaság, nagyobb kínálat, jeles alkalmak megünneplése, gazdasági szempontok, ismerettség, kedvezmény, kényelem)
- 4.3. Mely étkezdéket részesítenek előnyben (étterem, menza, kifőzde, gyorsétterem, élelmiszerbolt, bevásárlóközpontok étkező részlege)
- 4.4. Mik a főbb szempontok, preferenciák egy étkezde kiválasztásában (közelség, ételek minősége, ár, kiszolgálás, népszerűség, megbízhatóság, ételek változatossága, ételérzékenység, környezettudatosság)
- 4.5. A legkedveltebb ételkülönlegességek felmérése (magyaros ízek, más országok, régiók fogásai, a séf ajánlata, gyermek menük)
- 4.6. Ételérzékenység figyelembe vétele (glutén-, laktózérzékenység, cukorbetegség, vegetáriánus, illetve vegán életmód)
- 4.7. Fogyasztási szokások: Elvitelre/az étteremben/házhozszállítással
- 4.8. Az étterem felszereltsége (etetőszék, légkondícionáló berendezés, svédasztal, önkiszolgáló ételrendelés, mosdólehetőség, drive kiszolgálás, bankártyás fizetés, parkolási lehetőség)
- 4.9. Kedvezmények, árajánlatok fontosságának felmérése (korlátlan üdítőfogyasztás, ajándék kiegészítők egyes menük választása esetén, kuponfüzet, nyereményjáték)


***5. A rendszerre vonatkozó szabályok***<br>
- A web felület szabványos eszközökkel készüljön, html/css/javascript.
- A jogszabályoknak megfelelően az adatvédelmi tájékoztó legyen megjelenítve a weboldalon.
- Cookie-k használata esetén a cookie szabályzat megjelenítése is kötelező.
- A weboldal az összes elterjedt webböngészőn (Firefox, Chrome, Edge, Opera) igényesen nézzen ki és működjön megfelelően.
- Elavult (deprecated) technológiákat kérjük ne használjanak, az időtállóság miatt
- A weboldal legyen modern, de egyszerű, az űrlapoknál fontos a feedback, hogy a felhasználó kijelölte az adott form-ot stb.
- A képek nagy felbontásúak legyenek, vízjel nélkül és png vagy jpg formátumúak
- A projektet ajánljuk valamilyen verziókezelő rendszer segítségével elkészíteni, a visszakövethetőség és az egyszerűbb csoportmunka miatt

***6. Igényelt üzleti folyamatok***<br>
- 6.1 Az űrlapot kitöltő egy olyan weboldalon akar válaszolni a kérdésekre, ahol a kérdések számozva jelennek meg, majd alattuk egymás alatt felsorakozva választhat a meglévő válaszlehetőségek közül.
- 6.2. A kitöltés megkezdése előtt egy üdvözlő, bemutatkozó szöveg köszöntené a válaszadót, amelyben ismertetjük az űrlap elkészítésének okát.
- 6.3. Amennyiben a kitöltő egy adott kérdésre 1-nél többet is kiválaszthat, arról tájékoztatást kap közvetlenül a kérdés után zárójelek között(válasszon ki egyet vagy többet).
- 6.4. Abban az esetben, ha saját ötletet akarna hozzáírni a megadott opciókon felül, szerepelni fog minden kérdésblokkban egy szövegdoboz is, ahol begépelhet véges számú karaktersorozatot.
- 6.5. A kitöltést követően egy köszönetnyilvánítási oldal fogadná a kitöltőt, melyben megköszönjük a kitöltést, illetve megadjuk további kérdés, javaslat írás igénye esetén elérhetőségünket.

***7. Riportok***<br>
Kérdőív irányított riporthoz.
Interjú kérdések az elektronikus web felület (űrlap) követelményspecifikációjának felállításához. Kérjük, lehető legjobb tudása szerint töltse ki. A kérdezőbiztos nem válaszolhat kérdéseire, hogy ne befolyásolja Önt.
- Mit gondol, egy megfelelően megválasztott kérdéseket tartalmazó űrlap kellőképpen fel tudja mérni a fogyasztói igényeket?
- Milyen előnyöket nyújt Ön szerint, ha az emberek főzés helyett inkább éttermi ételeket fogyasztanak?
- Milyen adatkezelési, biztonsági szintet kell kielégítenie Ön szerint egy elektronikus űrlapkitöltési felületnek?
- Milyen fő funkciókat vár el egy ilyen felülettől?
- Kérem írja körül, hogy Önöknél milyen webes funkciók az előírtak, preferáltak! Milyen nehézségek merültek fel a kivitelezésben?
- Kérem, soroljon előnyöket/hátrányokat az elektronikus illetve papíralapú igenyfelmérések relációjában!
- Az elektronikus űrlap esetén milyen szintű online megjelenést vár el a szerkesztőktől? Legyen a feleletkiválasztásos módon kívül válaszkifejtési lehetőség, esetleg pontozási sávok, ahol a kitöltők egy skálán tudnák rögzíteni folytonos értékekkel a válaszukat?
- Mit gondol, mely böngésző a leggyakrabban használt egy átlag ember esetén?
- Milyen kinézet, stílus a legkézenfekvőbb egy űrlap hatékony, gyors, egyszerű kitöltésére? Kérem, adjon képernyő terveket!
- Milyen tapasztalatai vannak az online űrlap készítés, kitörést illetően?
- Ön szerint hatékonynak bizonyul az online formában történő igények felmérése?
- Fizetne Ön egy jól megszerkesztett weboldalon elérhető űrlap kitöltő felületért?
