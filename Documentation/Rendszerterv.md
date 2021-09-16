# Rendszerterv

***1. A rendszer célja***<br>
A rendszer célja, hogy a válaszadók egy jól átlátható, könnyen értelmezhető, űrlapot tölthessenek ki, ahol a kitöltés gyors és hatékony minden korosztály számára. A felhasználói élmény növeléséhez fontos, hogy a kérdések és válaszok egyértelműen legyenek megfogalmazva, kerülve a többszörösen összetett mondatokat, bonyolult kifejezéseket. Továbbá elengedhetetlen, hogy minden kérdésblokk egymástól jól látható módon, elkülönítve jelenjen meg. Többféle válaszadási mód is elérhető lesz a kitöltés során: legördülő menüből való kiválasztás, eldöntendő kérdésekre igen/nem válaszlehetősek kiválasztása, megjegyzés mezőbe további gondolatok írása. Az űrlap nem csak számítógépen, hanem okostelefonon vagy tableten is elérhető lesz mindenki részére a legelterjedtebb webböngészőkön keresztül. A kitöltők a sikeres kitöltés után (minden kötelező kérdésre válaszolva) egy köszönetnyilvánító visszajelzést kapnak, illetve láthatják a szervezők elérhetőségeit is.

***4. Követelmények***<br>
Követelmények, funkciók, melyek a megfelelő működéshez elengedhetetlenek.
- Funkcionális követelmények:
  - Kérdések, és az azokhoz tartozó válaszlehetőségek átlátható megjelenítése.
  - Eldöntendő kérdések esetében 2 választási lehetőség közül csakis egy kiválasztása (igen/nem).
  - Választó kérdések esetében egy vagy több válaszlehetőség kiválasztása legördülő menüből.
  - Egyes választó kérdések esetében egyéb gomb megjelenítése, melyre kattintva saját válaszlehetőség begépelése biztosított.
  - Kötelező jelleggel megjelölt kérdések (piros csillag a kérdőjel után közvetlenül) kihagyása esetén figyelmeztető szöveg megjelenítése.
  - Az utolsó kérdést követően szövegdoboz elhelyezése, amelybe kérdések, megjegyzések, véleményezés írására van lehetőség.
  - Androidon és webes környezeten való működés.
- Nem funkcionális követelmények:
  - Válaszlehetőség kiválasztása esetén gyors reagálás. A rendszer jelezze a kitöltő felé, hogy feldolgozta a kérést.
  - A rendszer minimális válaszidőn belül feldolgozza az adatokat.
  - Biztonságos működés.
  - Könnyű karbantarthatóság.
  - Működőképesség, használhatóság.
  - Adatok megbízhatósága és rendelkezésre állása.
- Törvényi előírások, szabványok:
  - GDPR-nak, ÁSZF-nek való megfelelés.
  - Szükség esetén Cookie szabályzat feltüntése a weboldalon.
  - Checkbox jóváhagyása nélkül az űrlapon feltüntetett válaszok elküldése nem engedélyezett. 

***6. Fizikai környezet***<br>
- Az űrlap Android és web platformra, hordozható eszközökre (okostelefonok, táblagépek) készül.
- Az összes elterjedt webböngészőn (Firefox, Chrome, Edge, Opera) megfelelően működik.
- Nincsenek megvásárolt komponenseink.
- Fejlesztői eszközök:
  - Visual Studio Code
  - Bootstrap
  - GIMP
  - Trello

  ***12. Telepítési terv***<br>
  - Webes alkalmazás
    - A szoftver webes felületéhez csak egy ajánlott böngésző telepítése szükséges (Google Chrome, Firefox, Opera, Safari), külön szoftver nem kell hozzá. A weboldalra közvetlenül
    az internetről kapcsolódnak rá a kliensek.