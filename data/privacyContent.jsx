import React from "react";
import Layout from "../components/MyLayout";
import Link from "next/link";
import { withTranslation } from "../server/i18n";

export default withTranslation("common")(function privacyData(props) {
  return (
    <Layout {...props}>
      <div
        style={{
          margin: "50px auto",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            padding: "50px",
            margin: "50px auto",
            width: "800px",
            backgroundColor: "white",
          }}
        >
          <Link href="/">
            <div
              style={{
                paddingBottom: "50px",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >{`< vissza`}</div>
          </Link>
          <p>
            <h1>ADATVÉDELMI NYILATKOZAT</h1>
          </p>
          <p>
            A One Properties Kft. (a továbbiakban: Adatkezelő), ezen
            tájékoztatón keresztül teszi közzé a személyes találkozáson,
            weboldalon (
            <a href="https://www.safepalwallet.hu">
              https://www.safepalwallet.hu/
            </a>
            ) illetve e-mailben, telefonon történő kommunikáció, megrendelés
            valamint egyéb kapcsolatfelvétel során az Adatkezelő birtokába
            kerülő személyes adatok adatkezelésére vonatkozó szabályokat,
            adatvédelmi, adatkezelési elveket.
          </p>
          <p>1. Az Adatkezelő adatai</p>
          <p>
            Az adatok kezelője a One Properties Korlátolt Felelősségű Társaság
            <br />
            székhely: 1039 Budapest, Királyok útja 245.
          </p>
          <p>cégjegyzékszám: 01-09-941251</p>
          <p>adószám: 22736529-2-41</p>
          <p>telefonszám: +36 70 669 86 56</p>
          <p>
            e-mail cím:{" "}
            <a href="mailto:info@rawfoods.hu">info@safepalwallet.hu</a>
            <br />
            Képviseli: Stocker Gábor ügyvezető
          </p>
          <p>2. Kezelt adatok köre, az adatkezelés jogalapja</p>
          <p>a. Honlap látogatása esetén</p>
          <p>
            Társaságunk által üzemeltett weboldal regisztráció nélkül
            látogatható. Honlapunk felkeresésekor az oldal adatokat gyűjt(het)
            ügynevezett sütik /cookie-k/ segítségével.
            <br />
            Honlapunkra látogatásakor a felhasználó egy kattintással
            elfogadhatja, hogy a honlap a jelen tájékoztató alapján személyek
            azonosítására alkalmatlan -sütiket használ.
          </p>
          <p>
            Önnek lehetősége van arra, hogy karbantartsa és/vagy tetszés szerint
            törölje a cookie-kat. Amennyiben ezzel kapcsolatosan bővebb
            információkat szeretne megtudni, kérjük látogasson el a{" "}
            <a href="http://www.aboutcookies.org/">www.aboutcookies.org</a>{" "}
            webhelyre. Ön törölni tudja a számítógépén tárolt összes sütit, és a
            böngészőprogramok többségében le tudja tiltani a telepítésüket.
            Ebben az esetben előfordulhat, hogy minden alkalommal, amikor
            ellátogat egy adott oldalra, manuálisan el kell végeznie egyes
            beállításokat, és számolnia kell azzal is, hogy bizonyos
            szolgáltatások és funkciók esetleg nem működnek.
          </p>
          <p>b. Hírlevélre történő feliratkozáskor</p>
          <p>
            Honlapunkon lehetősége van teljes nevének és email címének
            megadásával feliratkozni hírlevél szolgáltatásunkra. Ezen
            szolgáltatás keretében marketing célú megkereséseket küldünk az Ön
            részére. Az Ön által megadott személyes adatai (teljes név, email
            cím) kezelésének a jogalapja az Ön önkéntes hozzájárulása.
            Tájékoztatjuk, hogy hozzájárulását bármikor visszavonhatja,
            illetőleg leiratkozhat a hírlevélről, mely esetben a kezelt
            személyes adatai törlésre kerülnek.
          </p>
          <p>c. Szolgáltatás igénybevétele esetén</p>
          <p>
            Amennyiben szolgáltatást kíván igénybe venni Társaságunktól, úgy ezt
            megteheti Webáruházunkban (https://safepalwallet.hu/) a következő
            személyes adatok megadásával:
          </p>
          <p> teljes név;</p>
          <p> e-mail cím;</p>
          <p> telefonszám;</p>
          <p> szállítási cím;</p>
          <p>
            Ezen személyes adatok megadása a kapcsolat felvételéhez,
            szolgáltatás megrendeléséhez, illetve teljesítéséhez szükségesek,
            így az adatkezelés jogalapja a szerződés teljesítéséhez, illetve a
            szerződés megkötését megelőző intézkedések megtételéhez szükséges
            /GDPR 6. cikk 1) bekezdés b) pont/.
          </p>
          <p>d. Kapcsolatfelvétel esetén</p>
          <p>
            Amennyiben Társaságunkkal felveszi a kapcsolatot bármely célból a
            kapcsolat felvételkor Ön által megadott személyes adatokat
            Társaságunk kezeli. Az adatkezelés jogalapja ezen esetben az Ön
            önkéntes hozzájárulása. Tájékoztatjuk, hogy hozzájárulását bármikor
            visszavonhatja, mely esetben adatai azonnal törlésre kerülnek,
            kivéve, ha bármely jogi kötelezettség, vagy igényérvényesítés miatt
            szükséges az adatok megőrzése.
          </p>
          <p>3. Adatkezelés célja és időtartama</p>
          <p>a. Honlap használata esetén</p>
          <p>
            Az adatkezelés célja Honlapunk zavartalan látogatása, böngészése. A
            böngészés esetében működő cookie-k által történő adatgyűjtés célja a
            felhasználói élmény javítása, az oldal használatának könnyítése.
          </p>
          <p>Adatkezelés időtartama: Ezen cookie-kat Ön bármikor törölheti.</p>
          <p>b. Hírlevélre történő feliratkozáskor</p>
          <p>
            Az adatkezelés célja: az Adatkezelő saját ajánlataival,
            programajánlataival történő marketing célú megkeresése, az Ön
            adatainak marketing célból történő nyilvántartása, illetve az Önnel
            történő kapcsolattartás.
          </p>
          <p>
            Adatkezelés időtartama: az Adatkezelő a személyes adatokat az
            adatkezelés céljának fennállása alatt mindaddig kezeli, amíg Ön nem
            kéri az adatai törlését, illetve nem vonja vissza a hozzájárulását.
            A személyes adatok az adatkezelés céljának megszűnésével
            egyidejűleg, illetve az Ön kérésére haladéktalanul törlésre
            kerülnek, kivéve azon adatokat, amelyeket Adatkezelő jogszabályi
            kötelezettség alapján a kötelező adatkezelést elrendelő
            jogszabályban meghatározott ideig megőrizni köteles.
          </p>
          <p>c. Szolgáltatás igénybevétele esetén</p>
          <p>
            Az adatkezelés célja: az Ön által megrendelt szolgáltatás
            előkészítése, megfelelő tájékoztatás nyújtása, a kért információk,
            szolgáltatások teljesítése.
          </p>
          <p>
            Adatkezelés időtartama: a szerződés létrejötte estén a fennálló
            szerződések rész az irányadó, szerződéskötés hiányában az utolsó
            megkeresésétől számított 30 napig tároljuk az adatokat.
          </p>
          <p>d. Fennálló szerződés esetén</p>
          <p>
            Az adatkezelés célja csak a szerződés megkötéséhez, módosításához, a
            szerződésből származó követelések megítéléséhez szükséges cél.
          </p>
          <p>
            Az adatkezelés időtartama: a jogviszony fennállása alatt, valamint
            azon időtartamig kezeli, ameddig a jogviszonnyal kapcsolatban igény
            érvényesíthető.
          </p>
          <p>
            A számlán szereplő személyes adatokat a számviteli törvény
            előírásainak megfelelően 8 évig őrizzük meg.
          </p>
          <p>e. Kapcsolatfelvétel</p>
          <p>
            Adatkezelés célja: Ön által feltett kérések, kérdések
            megválaszolása.
          </p>
          <p>
            Adatkezelés időtartama: Ön által megadott hozzájárulás
            visszavonásáig célhoz kötötten kezeljük ezen adatokat.
          </p>
          <p>
            4. A személyes adatok megismerésére jogosultak köre, adatfeldolgozás
          </p>
          <p>
            A személyes adatok megismerésére az Adatkezelő, és annak
            munkatársai, valamint az általa igénybe vett Adatfeldolgozók és az
            Adatkezelő üzleti partnerei (további Adatkezelők) jogosultak a
            hatályos jogszabályok alapján.
          </p>
          <p>
            Az adatok feldolgozását az Adatkezelő megbízásából eljáró
            adatfeldolgozók listája jelen tájékoztató elválaszthatatlan részét
            képező 1. számú mellékletében találhatók.
          </p>
          <p>
            <br />
            Adatkezelő fenntartja a jogot, hogy a jövőben további
            adatfeldolgozókat vonjon be az adatkezelésbe, amelyről a jelen
            Tájékoztató módosításával tájékoztatja az Érintetteket.
            <br /> <br />
            Az Adatkezelő kifejezett jogszabályi rendelkezés hiányában csak az
            adott Ügyfél kifejezett hozzájárulásával adja át harmadik
            személyeknek a személyes azonosítására alkalmas adatokat kivéve
            jelen tájékoztató 8. pontjában megjelölt adattovábbítást.
          </p>
          <p>5. Azadatkezelés helye</p>
          <p>A Társaság székhelye és fióktelepe.</p>
          <p>6. Adattovábbítás</p>
          <p>
            Adatok továbbításának minősül az adatok valamely harmadik fél (nem a
            Társaság és nem az érintett) részére történő továbbadása vagy
            rendelkezésre bocsátása.
          </p>
          <p>
            Minden adattovábbítást megelőzően vizsgálni kell, hogy az
            adatkezelés jogalapja fennáll-e.
          </p>
          <p>
            Harmadik felek részére az adattovábbítás szükségszerű a GDPR. 6.
            cikk (1) b) pontja alapján a szerződés teljesítéséhez, illetve
            megkötéséhez szükséges lépések megtétele érdekében kivéve, ha az az
            érintett, illetve a Társaság jogos érdekének érvényesítése céljából
            elengedhetetlenül szükséges.
          </p>
          <p>Minden adattovábbításról nyilvántartást kell vezetni.</p>
          <p>
            Abban az esetben, ha a Társaság részére hivatalos megkeresés érkezik
            – az adatátadás okának megjelölésével – a jogszabály által erre
            feljogosított hatóság vagy bíróság részéről meghatározott személyes
            adatok kötelező átadására vonatkozóan, úgy Társaságunk ezen
            kötelezettségének teljesítése érdekében jogosult és köteles a
            hatóság, illetve bíróság által kért személyes adatokat továbbítani.
          </p>
          <p>
            Az Adatkezelő tájékoztatja továbbá az adatkezeléssel érintett
            természetes személyeket, hogy adataikat Társaságunk a jelen pontban
            írtakon túlmenően sem az Unión belül, sem harmadik országba nem
            továbbítja sem adatkezelők, sem adatfeldolgozók, sem nemzetközi
            szervezetek, sem egyéb címzettek részére.
          </p>
          <p>8. Az érintettek jogai</p>
          <p>
            <br />
            Tájékoztatás és hozzáférés a személyes adatokhoz
          </p>
          <p>
            Adatkezelő az Ön kérésére tájékoztatást ad arról, hogy személyes
            adataira vonatkozóan az Adatkezelő folytat-e adatkezelést, és
            amennyiben igen, hozzáférést ad számára a személyes adatokhoz,
            valamint tájékoztatja őt a következő információkról:
          </p>
          <p>- az adatkezelés célja(i);</p>
          <p>
            - az adatkezeléssel érintett személyes adatok fajtái, kategóriái;
          </p>
          <p>
            - az Ön személyes adatainak továbbítása esetén az adattovábbítás
            jogalapja és címzettje(i);
          </p>
          <p>- az adatkezelés tervezett időtartama;</p>
          <p>
            - az Ön jogai a személyes adatok helyesbítésével, törlésével és
            kezelésének korlátozásával, valamint a személyes adatok kezelése
            elleni tiltakozásával összefüggésben;
          </p>
          <p>
            - a Hatósághoz való fordulás lehetősége, panasz benyújtásának joga;
          </p>
          <p>- az adatok forrása;</p>
          <p>
            - automatizált döntéshozatal ténye, ideértve a profilalkotást is,
            illetve ezekben az esetekben az alkalmazott logikára és arra
            vonatkozó érthető információkat, azt, hogy az ilyen adatkezelés
            milyen jelentőséggel bír, és Önre nézve milyen várható
            következménnyel jár;
          </p>
          <p>
            - az adatfeldolgozók nevéről, címéről és az adatkezeléssel
            összefüggő tevékenységéről.
          </p>
          <p>
            <br />
            Az Adatkezelő az adatkezelés tárgyát képező személyes adatok
            másolatát díjmentesen az Ön rendelkezésére bocsátja. Az Ön által
            kért további másolatokért az Adatkezelő az adminisztratív
            költségeken alapuló, ésszerű mértékű díjat számíthat fel.
            <br /> <br />
            Ha az Ön kérelme egyértelműen megalapozatlan, vagy – különösen
            ismétlődő jellege miatt – túlzó, az Adatkezelő, figyelemmel a kért
            információ vagy tájékoztatás nyújtásával vagy a kért intézkedés
            meghozatalával járó adminisztratív költségekre, ésszerű összegű
            díjat számíthat fel, vagy megtagadhatja a kérelem alapján történő
            intézkedést.
            <br />A kérelem egyértelműen megalapozatlan vagy túlzó jellegének
            bizonyítása az Adatkezelőt terheli.
            <br />
            Ha Ön elektronikus úton nyújtotta be a kérelmet, az információkat
            széles körben használt elektronikus formátumban kell rendelkezésre
            bocsátani, kivéve, ha azérintett másként kéri.
            <br /> <br />
            Adatkezelő köteles indokolatlan késedelem nélkül, de a kérelem
            benyújtásától számított legkésőbb 1 hónapon belül (amely szükség
            esetén, figyelembe véve a kérelem összetettségét és a kérelmek
            számát, további két hónappal meghosszabbítható; a meghosszabbításról
            az Adatkezelő a késedelem okainak megjelölésével a kérelem
            kézhezvételétől számított egy hónapon belül tájékoztatja Önt),
            közérthető formában megadni a tájékoztatást. Ön a hozzáférés iránti
            kérelmét az{" "}
            <a href="mailto:info@safepalwallet.hu">
              info@safepalwallet.hu
            </a>{" "}
            e-mail címre, vagy One Properties Korlátolt Felelősségű Társaság
            1037 Budapest, Kanász utca 14. fszt. 1. postai címre nyújthatja be.
          </p>
          <p>
            {" "}
            <br />
            Ha az Adatkezelőnek megalapozott kétségei vannak a kérelmet benyújtó
            természetes személy kilétével kapcsolatban, a GDPR 11. cikke sérelme
            nélkül további, az érintett személyazonosságának megerősítéséhez
            szükséges információk nyújtását kérheti.
            <br />A GDPR 11. cikke szerint ha azok a célok, amelyekből az
            Adatkezelő a személyes adatokat kezeli, nem vagy már nem teszik
            szükségessé az Ön Adatkezelő általiazonosítását, az Adatkezelő nem
            köteles kiegészítő információkat megőrizni, beszerezni vagy kezelni
            annak érdekében, hogy pusztán azért azonosítsa a Önt, hogy
            megfeleljen a GDPR rendeletnek. Ha ezekben az említett esetekben az
            Adatkezelő bizonyítani tudja, hogy nincs abban a helyzetben, hogy
            azonosítsa Önt, erről lehetőség szerint Önt megfelelő módon
            tájékoztatja. Ilyen esetekben Ön jogaira vonatkozó rendelkezések nem
            alkalmazandóak, kivéve, ha Ön abból a célból, hogy az említett
            jogait gyakorolja, az azonosítását lehetővé tevő kiegészítő
            információkat nyújt. A kérelem teljesítése akkor tagadható meg, ha
            az Adatkezelő bizonyítja, hogy Önt nem áll módjában azonosítani.
          </p>
          <p>Kezelt adatok helyesbítése</p>
          <p>
            Ön jogosult kérni az Adatkezelőnél (info@safepalwallet.hu e-mail
            címre, vagy One Properties Korlátolt Felelősségű Társaság 1037
            Budapest, Kanász utca 14. fszt. 1.) pontatlan személyes adatai
            helyesbítését, illetve hiányos adatainak kiegészítését (megjelölve a
            helyes adatokat) az adatkezelés céljának figyelembe vételével
            személyazonosságának igazolásával. Adatkezelő a helyesbítést
            indokolatlan késedelem nélkül elvégzi a nyilvántartásában, és ennek
            megtörténtéről írásban értesíti Önt.
          </p>
          <p>Kezelt adatok törlése</p>
          <p>
            Ön kérelmezheti, hogy az Adatkezelő indokolatlan késedelem nélkül
            törölje az Önre vonatkozó személyes adatokat, az Adatkezelő pedig
            köteles arra, hogy a vonatkozó személyes adatokat indokolatlan
            késedelem nélkül törölje, ha az alábbi indokok valamelyike fennáll:
          </p>
          <p>
            a. a személyes adatokra már nincs szükség abból a célból, amelyből
            azokat gyűjtötték vagy más módon kezelték;
          </p>
          <p>
            b. Ön visszavonja hozzájárulását és az adatkezelésnek más jogalapja
            nincs;
          </p>
          <p>c. Ön tiltakozik személyes adatai kezelése miatt;</p>
          <p>d. a személyes adatok kezelése jogellenesen történt;</p>
          <p>
            e. a személyes adatokat az Adatkezelőre alkalmazandó uniós vagy
            tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni
            kell;
          </p>
          <p>
            f. a személyes adatok hozzájáruláson alapuló gyűjtéséreaz
            információs társadalommal összefüggő szolgáltatások gyermekek
            részére történő kínálásával kapcsolatosan került sor.
          </p>
          <p>
            <br />
            Ha az Adatkezelő nyilvánosságra hozta (harmadik személy számára
            elérhetővé tette) a személyes adatot, és azt a fentiekben foglaltak
            alapján törölni köteles, az elérhető technológia és a megvalósítás
            költségeinek figyelembe vételével meg kell tennie az ésszerűen
            elvárható lépéseket, intézkedéseket annak érdekében, hogy
            tájékoztassa az Ön személyes adatait kezelő további Adatkezelőket,
            hogy Ön kérelmezte tőle a szóban forgó személyes adatokra mutató
            linkek vagy e személyes adatok másolatának, illetve másodpéldányának
            törlését (elfeledéshez való jog).
          </p>
          <p>
            A személyes adatokat nem kell törölni abban az esetben, amennyiben
            az adatkezelés szükséges:
          </p>
          <ul>
            <li>
              a véleménynyilvánítás szabadságához és a tájékozódáshoz való jog
              gyakorlása céljából;
            </li>
            <li>
              a személyes adatok kezelését előíró, az Adatkezelőre alkalmazandó
              uniós vagy tagállami jog szerinti kötelezettség teljesítése,
              illetve közérdekből vagy az Adatkezelőre ruházott közhatalmi
              jogosítvány gyakorlása keretében végzett feladat végrehajtása
              céljából;
            </li>
            <li>a népegészségügy területét érintő közérdek alapján;</li>
            <li>
              a közérdekű archiválás céljából, tudományos és történelmi kutatási
              célból vagy statisztikai célból, amennyiben a törléshez fűződő jog
              valószínűsíthetően lehetetlenné tenné vagy komolyan veszélyeztetné
              ezt az adatkezelést; vagy
            </li>
            <li>
              jogi igények előterjesztéséhez, érvényesítéséhez, illetve
              védelméhez.
            </li>
          </ul>
          <p>Adatkezelés korlátozása</p>
          <p>
            Ön jogosult arra, hogy kérésére az Adatkezelő a személyes adatok
            helyesbítése vagy törlése helyett korlátozza az adatkezelést, ha az
            alábbiak valamelyike teljesül:
            <br />
          </p>
          <p>
            - Ön vitatja a személyes adatok pontosságát, ez esetben a korlátozás
            arra az időtartamra vonatkozik, amely lehetővé teszi, hogy az
            Adatkezelő ellenőrizze a személyes adatok pontosságát;
          </p>
          <p>
            - az adatkezelés jogellenes, és Ön ellenzi az adatok törlését, és e
            helyett kéri azok felhasználásának korlátozását;
          </p>
          <p>
            - az Adatkezelőnek már nincs szüksége a személyes adatokra
            adatkezelés céljából, de Ön igényli azokat jogi igények
            előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy
          </p>
          <p>
            - Ön tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra
            az időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az
            Adatkezelő jogos indokai elsőbbséget élveznek-e az érintett jogos
            indokaival szemben.
          </p>
          <p>
            Ha az adatkezelés korlátozás alá esik, az ilyen személyes adatokat a
            tárolás kivételével csak az Ön hozzájárulásával, vagy jogi igények
            előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más
            természetes vagy jogi személyjogainak védelme érdekében, vagy az
            Európai Unió, illetve valamely Európai Uniós tagállam fontos
            közérdekéből lehet kezelni.
            <br /> <br />
            Az Adatkezelő Önt, akinek a kérésére korlátozták az adatkezelést, az
            adatkezelés korlátozásának feloldásáról előzetesen tájékoztatja.
          </p>
          <p>
            A személyes adatok helyesbítéséhez vagy törléséhez, illetve az
            adatkezelés korlátozásához kapcsolódó értesítési kötelezettség
          </p>
          <p>
            Az Adatkezelő minden olyan címzettet tájékoztat a személyes adatok
            helyesbítéséről, törléséről vagy az adatkezelés korlátozásról,
            akivel, illetve amellyel a személyes adatot közölték, kivéve, ha ez
            lehetetlennek bizonyul, vagy aránytalanul nagy erőfeszítést igényel.
            Az Ön kérésére az Adatkezelő tájékoztatja e címzettekről.
          </p>
          <p>Az adathordozhatósághoz való jog</p>
          <p>
            Ön jogosult arra, hogy az Önre vonatkozó, Ön által egy Adatkezelő
            rendelkezésére bocsátott személyes adatokat tagolt, széles körben
            használt, géppel olvasható formátumban megkapja, továbbá jogosult
            arra, hogy ezeket az adatokat egy másik Adatkezelőnek továbbítsa
            anélkül, hogy ezt akadályozná az az Adatkezelő, amelynek a személyes
            adatokat a rendelkezésére bocsátotta, ha:
          </p>
          <p>a) Az adatkezelés hozzájáruláson vagy szerződésen alapul; és</p>
          <p>b) Az adatkezelés automatizált módon történik.</p>
          <p>
            Az adatok hordozhatóságához való jog gyakorlása során Ön jogosult
            arra, hogy – ha ez technikailag megvalósítható – kérje a személyes
            adatok adatkezelők közötti közvetlen továbbítását.
          </p>
          <p>
            Az e bekezdésében említett jog gyakorlása nem sértheti a törléshez,
            illetve elfeledtetéshez való jogot. Az említett jog nem alkalmazandó
            abban az esetben, ha az adatkezelés közérdekű vagy az adatkezelőre
            ruházott közhatalmi jogosítványai gyakorlásának keretében végzett
            feladat végrehajtásához szükséges.
          </p>
          <p>
            Az adathordozhatósághoz való jog nem érintheti hátrányosan mások
            jogait és szabadságait.
          </p>
          <p>Tiltakozáshoz való jog</p>
          <p>
            Ön abban az esetben tiltakozhat személyes adatának kezelése ellen,
            ha az adatkezelés
          </p>
          <ul>
            <li>
              közérdekű vagy az Adatkezelőre ruházott közhatalmi jogosítvány
              gyakorlásának keretében végzett feladat végrehajtásához szükséges;
            </li>
            <li>
              az Adatkezelő vagy egy harmadik fél jogos érdekeinek
              érvényesítéséhez szükséges.
            </li>
          </ul>
          <p>
            Az Ön tiltakozása esetén az Adatkezelő a személyes adatokat nem
            kezelheti tovább, kivéve, ha bizonyítja, hogy az adatkezelést olyan
            kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget
            élveznek az Ön érdekeivel, jogaival és szabadságaival szemben, vagy
            amelyek jogi igények előterjesztéséhez, érvényesítéséhez vagy
            védelméhez kapcsolódnak.
            <br /> <br />
            Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében
            történik, Ön jogosult arra, hogy bármikor tiltakozzon az Önre
            vonatkozó személyes adatok e célból történő kezelése ellen. Ha Ön
            tiltakozik a személyes adatok közvetlen üzletszerzés érdekében
            történő kezelése ellen, akkor a személyes adatok at ovábbiakban e
            célból nem kezelhetők.
            <br /> <br />
            Az Adatkezelő indokolatlan késedelem nélkül, de legkésőbb a kérelem
            beérkezésétől számított 1 hónapon belül tájékoztatja Önt a
            hozzáférés, helyesbítés, törlés, korlátozás, a tiltakozás, valamint
            az adathordozhatóság iránti kérelem nyomán hozott intézkedésekről.
            Szükség esetén, figyelembe véve a kérelem összetettségét és a
            kérelmek számát, ez a határidő további két hónappal
            meghosszabbítható. A határidő meghosszabbításáról az Adatkezelő a
            késedelem okainak megjelölésével a kérelem kézhezvételétől számított
            egy hónapon belül tájékoztatja Önt. Ha Ön elektronikus úton
            nyújtotta be a kérelmet, a tájékoztatást lehetőség szerint
            elektronikus úton kell megadni, kivéve, ha Ön azt másként kéri.
          </p>
          <p>
            <br />
            Ha az Adatkezelő nem tesz intézkedéseket az Ön kérelme nyomán,
            késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított 1
            hónapon belül tájékoztatja Önt az intézkedés elmaradásának okairól,
            valamint arról, hogy panaszt nyújthat be valamely felügyeleti
            hatóságnál, és élhet bírósági jogorvoslati jogával.
          </p>
          <p>
            Az Ön kérelme esetén az információkat, a tájékoztatást és a kérelme
            alapján megtett intézkedést díjmentesen kell biztosítani. Ha az Ön
            kérelme egyértelműen megalapozatlan vagy – különösen ismétlődő
            jellege miatt – túlzó, az Adatkezelő, figyelemmel a kért információ
            vagy tájékoztatás nyújtásával vagy a kért intézkedés meghozatalával
            járó adminisztratív költségekre, az Adatkezelő ésszerű összegű díjat
            számíthat fel, vagy megtagadhatja a kérelem alapján történő
            intézkedést. A kérelem egyértelműen megalapozatlan vagy túlzó
            jellegének bizonyítása az Adatkezelőt terheli.
          </p>
          <p>9. Adatvédelmi hatásvizsgálat</p>
          <p>
            Ha azadatkezelés valamely – különösen új technológiákat alkalmazó –
            típusa –, figyelemmel annak jellegére, hatókörére, körülményére és
            céljaira, valószínűsíthetően magas kockázattal jár a természetes
            személyek jogaira és szabadságaira nézve, akkor az Adatkezelő az
            adatkezelést megelőzően hatásvizsgálatot végez arra vonatkozóan,
            hogy a tervezett adatkezelési műveletek a személyes adatok védelmét
            hogyan érintik. Olyan egymáshoz hasonló típusú adatkezelési
            műveletek, amelyek egymáshoz hasonló magas kockázatokat jelentenek,
            egyetlen hatásvizsgálat keretei között is értékelhetőek.
          </p>
          <p>
            Ha van kijelölt adatvédelmi tisztviselő (DPO), az Adatkezelő az
            adatvédelmi hatásvizsgálat elvégzésekor az adatvédelmi tisztviselő
            szakmai tanácsát köteles kikérni.
          </p>
          <p>
            Az adatvédelmi hatásvizsgálatot különösen az alábbi esetekben kell
            elvégezni:
          </p>
          <ol>
            <li>
              természetes személyekre vonatkozó egyes személyes jellemzők olyan
              módszeres és kiterjedt értékelése, amely automatizált
              adatkezelésen – ideértve a profilalkotást is –alapul, és amelyre a
              természetes személy tekintetében joghatással bíró vagy a
              természetes személyt hasonlóképpen jelentős mértékben érintő
              döntések épülnek;
            </li>
          </ol>
          <ol>
            <li>
              a személyes adatok különleges kategóriái, vagy a büntetőjogi
              felelősség megállapítására vonatkozó határozatokra és
              bűncselekményekre vonatkozó személyes adatok nagy számban történő
              kezelése; vagy nyilvános helyek nagymértékű, módszeres
              megfigyelése.
            </li>
          </ol>
          <p>
            A hatásvizsgálat kiterjed legalább: a tervezett adatkezelési
            műveletek módszeres leírására és az adatkezelés céljainak
            ismertetésére, beleértve adott esetben az Adatkezelő által
            érvényesíteni kívánt jogos érdeket;
          </p>
          <p>
            a. az adatkezelés céljaira figyelemmel az adatkezelési műveletek
            szükségességi és arányossági vizsgálatára;
          </p>
          <p>
            b. az érintett jogait és szabadságait érintő kockázatok
            vizsgálatára; és
          </p>
          <p>
            c. a kockázatok kezelését célzó intézkedések bemutatására, ideértve
            a személyes adatok védelmét és az e rendelettel való összhang
            igazolását szolgáló, az érintettek és más személyek jogait és
            jogosérdekeit figyelembe vevő garanciákat, biztonsági intézkedéseket
            és mechanizmusokat.
          </p>
          <p>
            <br />
            Az adatkezelők, illetve adatfeldolgozók által végzett adatkezelési
            műveletek hatásainak értékelése – különösen az adatvédelmi
            hatásvizsgálatok – során megfelelően figyelembe kell venni, hogy a
            szóban forgó adatkezelők, illetve adatfeldolgozók teljesítik-e a
            GDPR 40. cikkben említett jóváhagyott magatartási kódexek
            előírásait.
            <br />
            Az Adatkezelő adott esetben – a kereskedelmi érdekek vagy a közérdek
            védelmének vagy az adatkezelési műveletek biztonságának sérelme
            nélkül – kikéri az érintettek vagy képviselőik véleményét a
            tervezett adatkezelésről.
          </p>
          <p>
            <br />
            Az Adatkezelő szükség szerint, de legalább az adatkezelési műveletek
            által jelentett kockázat változása esetén ellenőrzést folytat le
            annak értékelése céljából, hogy a személyes adatok kezelése az
            adatvédelmi hatásvizsgálatnak megfelelően történik-e.
          </p>
          <p>10. Adatbiztonság</p>
          <p>
            {" "}
            <br />
            Az Adatkezelő kötelezi magát arra, hogy gondoskodik az adatok
            biztonságáról, megteszi továbbá azokat a technikai és szervezési
            intézkedéseket, és kialakítja azokat az eljárási szabályokat,
            amelyek biztosítják, hogy a felvett, tárolt, illetve kezelt adatok
            védettek legyenek, illetőleg megakadályozza azok megsemmisülését,
            jogosulatlan felhasználását és jogosulatlan megváltoztatását.
            Kötelezi magát arra is, hogy minden olyan harmadik felet, akiknek az
            adatokat az Ön hozzájárulása alapján továbbítja vagy átadja,
            felhívja, hogy eleget tegyenek az adatbiztonság követelményének.
          </p>
          <p>
            Adatkezelő gondoskodik arról, hogy a kezelt adatokhoz illetéktelen
            személy ne férhessen hozzá, ne hozhassa nyilvánosságra, ne
            továbbíthassa, valamint azokat ne módosíthassa, törölhesse. A kezelt
            adatokat kizárólag Adatkezelő, valamint alkalmazottai, illetve az
            általa igénybe vett Adatfeldolgozó(k) ismerhetik meg, azokat
            Adatkezelő harmadik, az adat megismerésére jogosultsággal nem
            rendelkező személynek nem adja át.
          </p>
          <p>
            Adatkezelő megtesz minden tőle telhetőt annak érdekében, hogy az
            adatok véletlenül se sérüljenek, illetve semmisüljenek meg. A fenti
            kötelezettségvállalást Adatkezelő az adatkezelési tevékenységben
            részt vevő munkavállalói részére előírja.
          </p>
          <p>
            Ön elismeri és elfogadja, hogy személyes adatainak a weboldalon,
            e-mailben való megadása esetén – annak ellenére, hogy az Adatkezelő
            az adatokhoz való jogosulatlan hozzáférésnek vagy azok
            kifürkészésének megelőzésére korszerű biztonsági eszközökkel
            rendelkezik –, az adatok védelme teljes mértékben az Interneten nem
            garantálható. Jogosulatlan hozzáférés vagy adatmegismerés
            erőfeszítéseink ellenére történő bekövetkezése esetén az Adatkezelő
            nem felelős ilyen jellegű adatmegszerzésért vagy jogosulatlan
            hozzáférésért vagy Önnél ezen okokból kifolyólag keletkezett
            bármilyen kárért. Ezen felül Ön is megadhatja személyes adatait
            harmadik személyeknek, akik azt jogellenes célra vagy módon is
            felhasználhatják.
          </p>
          <p>
            {" "}
            <br />
            Adatkezelő csak a szerződés teljesítéséhez és előkészítéséhez
            szükséges mértékben azon kívül semmilyen körülmények között nem
            gyűjt különleges adatokat, azaz olyan adatokat, amelyek faji
            eredetre, a nemzeti és etnikai kisebbséghez tartozásra, a politikai
            véleményre vagy pártállásra, a vallásos vagy más világnézeti
            meggyőződésre, az érdekképviseleti szervezeti tagságra, az egészségi
            állapotra, a kóros szenvedélyre, a szexuális életre, valamint
            büntetett előéletre vonatkoznak.
          </p>
          <p>
            <br />
            Az adatbiztonság szempontjából fontos, hogy a nyilvános helyen,
            közös számítógépeken történő internetezéskor a használatot követően
            mindenképpe njelentkezzen ki a weboldalról. Ha saját számítógépéről
            látogatja oldalunkat, akkor alkalmazástól függően bizonyos ideig
            bejelentkezve marad. Ez esetben is legyen körültekintő, hogy
            idegenek a számítógépéhez ne férjenek hozzá, ne tudjanak az Ön
            nevében tranzakciókat végrehajtani.
          </p>
          <p>11. Adatvédelmi incidensek kezelése és bejelentése</p>
          <p>
            {" "}
            <br />
            Adatvédelmi incidensnek minősül minden olyan esemény, amely az
            Adatkezelő által kezelt, továbbított, tárolt vagy feldolgozott
            személyes adatokkal kapcsolatban a személyes adat jogellenes
            kezelését vagy feldolgozását, így különösen jogosulatlan vagy
            véletlen hozzáférését, megváltoztatását, közlését, törlését,
            elvesztését vagy megsemmisítését, valamint véletlen megsemmisülését
            és sérülését eredményezi.
          </p>
          <p>
            Adatkezelő indokolatlan késedelem nélkül, de legkésőbb 72 órával
            azután, hogy az adatvédelmi incidens a tudomására jutott, köteles
            bejelenteni a Nemzeti Adatvédelmi és Információszabadság Hivatal
            (NAIH) részére az adatvédelmi incidenst, kivéve, ha az Adatkezelő
            bizonyítani tudja, hogy az adatvédelmi incidens valószínűsíthetően
            nem jár kockázattal a természetes személyek jogaira és szabadságaira
            nézve. Ha a bejelentés 72 órán belül nem tehető meg, abban meg kell
            jelölni a késedelem okát, az előírt információkat pedig – további
            indokolatlan késedelem nélkül – részletekben is közölni lehet. A
            NAIH részére történő bejelentés legalább a következő információkat
            tartalmazza:
          </p>
          <p>
            - az adatvédelmi incidens jellege, az érintettek és a személyes
            adatok száma és kategóriája;
          </p>
          <p>- Adatkezelő neve, elérhetősége;</p>
          <p>
            - az adatvédelmi incidensből származó, valószínűsíthető
            következmények;
          </p>
          <p>
            - a megtett vagy tervezett intézkedések az adatvédelmi incidens
            kezelésére, elhárítására, orvoslására.
          </p>
          <p>
            Adatkezelő az adatvédelmi incidens észlelését követő 72 órán belül
            tájékoztatja az érintetteket az adatvédelmi incidensről az
            Adatkezelő honlapján keresztül. A tájékoztatásnak legalább a jelen
            pontban meghatározott adatokat kell tartalmaznia.
          </p>
          <p>
            Az adatvédelmi incidensekről az Adatkezelő az adatvédelmi
            incidenssel kapcsolatos intézkedések ellenőrzése, valamint az
            érintettek tájékoztatása céljából nyilvántartást vezet. A
            nyilvántartás az alábbi adatokat tartalmazza:
          </p>
          <p>- az érintett személyes adatok köre;</p>
          <p>- az érintettek köre és száma;</p>
          <p>- az adatvédelmi incidens időpontja;</p>
          <p>- az adatvédelmi incidens körülményei, hatásai;</p>
          <p>- az adatvédelmi incidens elhárítására megtett intézkedések.</p>
          <p>
            A nyilvántartásban szereplő adatokat Adatkezelő az adatvédelmi
            incidens észlelésétől számított 5 évig őrzi meg.
          </p>
          <p>12. Jogérvényesítési lehetőségek</p>
          <p>
            {" "}
            <br />
            Az Adatkezelő mindent elkövet, hogy a személyes adatok kezelése a
            jogszabályoknak megfelelően történjék, amennyiben úgy érzi ennek nem
            feleltünk meg, úgy kérjük, írjon nekünk az{" "}
            <a href="mailto:info@safepalwallet.hu">
              info@safepalwallet.hu
            </a>{" "}
            e-mail címre, vagy One Properties Korlátolt Felelősségű Társaság
            1037 Budapest, Kanász utca 14. fszt. 1. postai címre.
          </p>
          <p>
            Amennyiben úgy érzi, hogy megsértették a személyes adatok védelméhez
            való jogát az irányadó jogszabályok szerint jogorvoslattal élhet a
            hatáskörrel rendelkező szerveknél
            <br />
          </p>
          <ul>
            <li>
              Nemzeti Adatvédelmi és Információszabadság Hatóságnál (cím: 1125
              Budapest, Szilágyi Erzsébet fasor 22/C.,{" "}
              <a href="mailto:ugyfelszolgalat@naih.hu">
                ugyfelszolgalat@naih.hu
              </a>
              ; <a href="http://www.naih.hu/">www.naih.hu</a>)
            </li>
            <li>bíróságnál</li>
          </ul>
          <p>
            Az elektronikus úton küldött reklámokkal kapcsolatban a Nemzeti
            Média- és Hírközlési Hatóság jár el, a részletes szabályozás az
            információs önrendelkezési jogról és az információszabadságról szóló
            2011. évi CXII.törvényben, valamint az elektronikus kereskedelmi
            szolgáltatások, valamint az információs társadalommal összefüggő
            szolgáltatások egyes kérdéseiről szóló a 2001. évi CVIII. törvényben
            olvashatók.
          </p>
          <p>13. Egyéb rendelkezések</p>
          <p>
            {" "}
            <br />
            Jelen Tájékoztatóra az Európai Parlament és a Tanács (EU) a
            természetes személyeknek a személyes adatok kezelése tekintetében
            történő védelméről és az ilyen adatok szabad áramlásáról, valamint a
            95/46/EK rendelet hatályon kívül helyezéséről szóló 2016/679
            rendelete (2016. április 27.), az információs önrendelkezési jogról
            és az információszabadságról szóló 2011. évi CXII.törvény
            rendelkezései az irányadók.
          </p>
          <p> 1. számú melléklet</p>
          <p>Adatfeldolgozók listája</p>
          <p>‍</p>
          <p>Adatfeldolgozó megnevezése: Ecwid, Inc</p>
          <p>
            Székhelye: 687 S. Coast Highway 101, Encinitas, California 92024,
            USA
          </p>
          <p>
            Feladata: a shop.safepalwallet.hu webáruház technikai feltételeinek
            biztosítása, online tárhely biztosítása, ügyfél és rendelési adatok
            adminisztrálása
          </p>{" "}
        </div>{" "}
      </div>
    </Layout>
  );
});
