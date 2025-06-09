import React, { useState } from 'react'
import { FaBook, FaShieldAlt, FaCookieBite } from 'react-icons/fa'
import Newsletter from '../components/Newsletter'

const PoliciesPage = () => {
  const [activeTab, setActiveTab] = useState('terms')

  return (
    <div>
      <div className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Politici și Termeni de utilizare</h1>
          <p className="text-xl max-w-3xl">Informații importante despre modul în care funcționează platforma noastră și cum sunt protejate datele dumneavoastră.</p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row border-b border-gray-200 mb-8">
          <button 
            className={`flex items-center px-6 py-4 text-lg font-medium ${activeTab === 'terms' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('terms')}
          >
            <FaBook className="mr-2" />
            Termeni și condiții
          </button>
          <button 
            className={`flex items-center px-6 py-4 text-lg font-medium ${activeTab === 'privacy' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('privacy')}
          >
            <FaShieldAlt className="mr-2" />
            Politica de confidențialitate și GDPR
          </button>
          <button 
            className={`flex items-center px-6 py-4 text-lg font-medium ${activeTab === 'cookies' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('cookies')}
          >
            <FaCookieBite className="mr-2" />
            Politica de utilizare cookie-uri
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          {activeTab === 'terms' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Termeni și condiții</h2>
              <div className="prose max-w-none">
                <p>Acest document se refera la conditiile in care poate fi utilizat website-ul www.traveldeal.ro</p>
                <p>Accesand sau utilizand website-ul www.traveldeal.ro, acceptati automat termenii si conditiile de mai jos.</p>
                <p>Termenii si conditiile se aplica tuturor utilizatorilor site-ului. Acest website este detinut si administrat de PopaP.Sorin Petru ii.</p>
                <p>Datorita domeniului de activitate dinamic, disponibilitatea ofertelor oferite de agentiile partenere se poate modifica de la un moment la altul. www.traveldeal.ro nu este responsabila pentru eventualele neconcordante care pot aparea intre informatiile din site si informatiile primite in platforma.</p>
                <p>Touroperatorii au responsabilitatea ofertelor listate, www.traveldeal.ro nu face decat sa expuna ofertele agentiilor partenere.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Drepturile utilizatorului:</h3>
                <p>Utilizatorul www.traveldeal.ro are dreptul sa vizualizeze site-ul pe monitorul calculatorului sau telefonului, sa tipareasca parti ale continutului site-ului pe suport de hartie si sa salveze pagini in format electronic doar in scopuri personale, non-comerciale si sa primeasca ofertele solicitate pe email sau telefon. Oricand se poate dezabona la serviciul de ofertare.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Obligatiile utilizatorului www.traveldeal.ro</h3>
                <p>Sunteti de acord sa respectati urmatoarele obligatii incluzand (fara a se limita):</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>responsabilitatea financiara pentru toate tranzactiile efectuate in contul sau in numele dvs.</li>
                  <li>aveti varsta peste 18 ani si capacitatea legala de a initia actiuni juridice</li>
                  <li>garantarea veridicitatii datelor furnizate despre dvs. sau membrii familiei dvs.</li>
                  <li>interzicerea transmiterii materialelor politice, pornografice, rasiste sau a altor materiale care contravin legii</li>
                  <li>obligativitatea de a nu altera, copia, transmite, distribui, vinde, afisa, licentia sau reproduce continutul site-ului cu exceptia utilizarii in scop personal si necomercial a unei singure copii a informatiei continuta in site.</li>
                </ul>
                <p>Utilizatorul www.traveldeal.ro nu are dreptul sa foloseasca (in forma existenta sau modificata) in scop comercial continutul site-ului</p>
                <p>Utilizatorul www.traveldeal.ro nu are dreptul sa inlature notificarea despre drepturile de autor si/sau marca inregistrata de pe copiile continutului. Copiile vor fi facute doar conform termenilor de utilizare.</p>
                <p>Utilizatorul www.traveldeal.ro nu are dreptul de a crea baze de date sau manuale prin descarcarea pagina cu pagina a continutului site-ului.</p>
                <p>Solicitarile privind republicarea sau redistribuirea de continut vor fi adresate catre www.traveldeal.ro la adresa traveldeal@gmail.com</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Conditii generale de rezervare si achizitionare servicii pe www.traveldeal.ro</h3>
                <p>www.traveldeal.ro nu rezerva, nu incaseaza bani, nu anuleaza rezervari. Orice oferta vizibila pe www.traveldeal.ro este redirectionata de pe un website partener. Odata accesata oferta, clientul va fi redirectionat pe webite-ul partener de unde aceasta oferta poate fi achizitionata.</p>
                <p>Ofertele sunt valabile in limita locurilor disponibile. www.traveldeal.ro nu este responsabil pentru eventualele neconcordante care pot aparea intre informatiile privind tarifele si alte informatii din platforma si informatiile afisate direct pe website-urile partenere. In aceste cazuri vor avea prioritate, intotdeauna, informatiile de pe website-urile partenere.</p>
                <p>Toate serviciile turistice publicate pe site sunt in functie de disponibilitatea furnizorilor. Termenii si conditiile sunt ale furnizorilor (incluzand regulile de transport al pasagerilor impus de liniile aeriene) se vor aplica aditional Termenilor si Conditiilor acestora.</p>
                <p>In momentul navigarii dvs. pe site, veti putea observa referiri la diferite conditii aplicabile ofertelor speciale. Acestea sunt conditiile furnizorilor nu ale www.traveldeal.ro.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Anulari/ Modificari:</h3>
                <p>Anularea sau modificarea serviciului rezervat sau achizitionat se va face in functie de Termenii si Conditiile fiecarui furnizor. In cazul in care doriti anularea sau modificarea unui serviciu rezervat sau achizitionat, este responsabilitatea dvs de a informa in scris sau telefonic agentia de unde ati achizitionat serviciul.</p>
                <p>In anumite cazuri este posibil sa nu puteti anula/ modifica anumite servicii turistice sau va trebui sa respectati anumite cerinte pentru aceste actiuni.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Plata:</h3>
                <p>www.traveldeal.ro nu incaseaza bani pentru nici un serficiu turistic prezentat pe platforma!</p>
                <p>www.traveldeal.ro are un serviciu platit pentru clientii premium, aceasta taxa este anuala si se percepe o singura data pe an, aceasta fiind accesibila doar din zona clienti premium. Serviciul de incasare nu se face direct pe www.traveldeal.ro, ci se efectueaza prin serviciul securizat specializat prin 3D Secure care inseamna o noua abordare globala a autentificarii cumparatorilor si vanzatorilor in tranzactii sigure pe Internet. Aceasta masura de siguranta presupune redirectionarea utilizatorului in momentul efectuarii platii pe o pagina securizata unde inregistrarea fiecarui detinator de card se face prin atribuirea unui cod de autorizare pentru fiecare tranzactie online. Cardurile acceptate la plata sunt cele emise sub siglele VISA (Classic si Electron) si MASTERCARD (inclusiv Maestro, daca au cod CVV/CV2).</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRAREA DATELOR PERSONALE</h3>
                <p>Noua lege a Uniunii Europene referitoare la protectia datelor cu caracter personal, GDPR ("General Data Protection Regulation") a intrat in vigoare in 25 mai 2016, si a devenit aplicabila in toate tarile membre ale Uniunii Europene la data de 25 mai 2018. Aceasta lege reprezinta cea mai mare schimbare in domeniul protectiei datelor cu caracter personal din ultimii 20 de ani si are obiective care trec mult peste simpla protectie a spatiului privat.</p>
                <p>Protectia datelor dumneavoastra cu caracter personal este importanta pentru noi, prin urmare, acordam o atentie deosebita protejarii vietii private a tuturor celor care ne-au pus la dispozitie datele lor prin transmiterea datelor prin intermediul formularului de contact aflat pe www.traveldeal.ro, prin participarea la evenimente/campanii organizate de noi, a persoanelor care ne transmit date cu caracter personal in vederea procesarii unei solicitari, a celor ale caror date ne-au fost furnizate prin intermediul contractelor, precum si a celor ale caror date cu caracter personal ne-au fost furnizate de o terta parte, sau la care am avut acces dintr-o alta sursa, in conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European si al Consiliului din data de 27 aprilie 2016 privind protectia persoanelor fizice in ceea ce priveste prelucrarea datelor cu caracter personal si libera circulatie a acestor date (denumit in continuare "GDPR").</p>
                <p>Va rugam sa acordati o atentie deosebita lecturarii urmatoarei Politici (denumita in continuare "PPD") pentru a intelege modul in care vor fi tratate informatiile dumneavoastra ("date personale").</p>
                <p>PPD explica practicile Popa P. Sorin Petru ii. (in continuare denumita "www.traveldeal.ro"), referitoare la aplicarea prevederilor GDPR, precum si drepturile de care beneficiati cu privire la modul in care informatiile dumneavoastra sunt prelucrate de catre www.traveldeal.ro.</p>
                <p>Prelucrarea datelor cu caracter personal efectuata de www.traveldeal.ro se va realiza intotdeauna in conformitate cu prevederile GDPR, precum si cu reglementarile privind protectia datelor cu caracter personal.</p>
                <p>Prin PPD, www.traveldeal.ro doreste sa informeze persoanele vizate cu privire la natura datelor cu caracter personal pe care le colectam si le procesam, precum si cu privire la scopurile prelucrarii. In plus, persoanele vizate sunt informate prin intermediul PPD si cu privire la drepturile de care beneficiaza.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CE SUNT DATELE CU CARACTER PERSONAL?</h3>
                <p>"Date personale" înseamnă orice informație sau informații care vă pot identifica direct (de exemplu, numele dumneavoastră) sau indirect (de exemplu, prin intermediul datelor pseudonime, cum ar fi un număr de identificare unic). Aceasta înseamnă că datele personale includ lucruri precum adresa de e-mail, domiciliul, telefonul mobil, numele de utilizator, fotografiile de profil, preferințele personale și obiceiurile de cumpărături, conținutul generat de utilizatori, informațiile financiare și informațiile privind situația financiară. Acesta ar putea include și identificatori numerici unici, cum ar fi adresa IP a computerului dumneavoastră sau adresa MAC a dispozitivului dumneavoastră mobil, precum și modulele cookie.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CE INSEAMNA PRELUCRAREA DATELOR CU CARACTER PERSONAL?</h3>
                <p>"Prelucrarea" inseamna orice operatiune sau set de operatiuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu caracter personal, cu sau fara utilizarea de mijloace automatizate, cum ar fi colectarea, inregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea, consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispozitie in orice alt mod, alinierea sau combinarea, restrictionarea, stergerea sau distrugerea.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CARE SUNT DATELE DVS. CU CARACTER PERSONAL PE CARE LE PRELUCRAM?</h3>
                <p>Datele dvs. cu caracter personal care vor fi prelucrate sunt urmatoarele: nume si prenume, adresa de e-mail, numar de telefon.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">OPERATOR DE DATE CU CARACTER PERSONAL</h3>
                <p>Operatorul de date cu caracter personal (denumit in continuare "operatorul") este www.traveldeal.ro.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRINCIPII PRIVIND PRELUCRAREA DATELOR</h3>
                <p>www.traveldeal.ro se obliga sa respecte principiile de protectie a datelor cu caracter personal (denumite in continuare „Principiile") prevazute de GDPR, pentru a se asigura ca toate datele sunt:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Prelucrate in mod corect, legal si transparent;</li>
                  <li>Colectate in scopuri specificate, explicite si legitime;</li>
                  <li>Adecvate, relevante si limitate in raport cu scopurile pentru care sunt prelucrate;</li>
                  <li>Corecte si actualizate;</li>
                  <li>Pastrate intr-o forma care nu permite identificarea persoanelor vizate mai mult timp decat este necesar in raport de scopul prelucrarii;</li>
                  <li>Procesate in conformitate cu drepturile persoanei vizate, intr-un mod care sa asigure o securitate adecvata a prelucrarii, astfel incat datele sa fie integre, confidentiale si disponibile.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">TEMEIUL SI SCOPURILE PRELUCRARII DATELOR CU CARACTER PERSONAL</h3>
                <p>In scopul incheierii si executarii contractelor - Conform art. 6 alin. 1 lit. b) din GDPR, pot fi prelucrate date personale in scopul incheierii sau executarii contractului. Pentru a putea sa va oferim produsele si serviciile noastre, este nevoie sa prelucram date cu caracter personal care va apartin.</p>
                <p>In scopul indeplinirii unor obligatii legale - Conform art. 6 alin. 1 lit. c) din GDPR, pot fi prelucrate date personale in scopul indeplinirii unor obligatii legale. Solicitam o serie de date personale, inclusiv, in anumite situatii, codul numeric personal, in scopul de a ne indeplini obligatiile impuse de catre autoritatile fiscale in legatura cu facturarea si raportarile catre autoritatile fiscale.</p>
                <p>In scop de marketing - Conform art. 6 alin. 1 lit. a) din GDPR, pot fi prelucrate date personale daca persoana vizata si-a dat consimtamantul pentru prelucrarea datelor sale cu caracter personal pentru unul sau mai multe scopuri specifice. Astfel, in anumite situatii, datele dumneavoastra cu caracter personal vor fi utilizate cu scopul de a va transmite mesaje de marketing, oferte, stiri, viitoare campanii, invitatii la diverse evenimente.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PROCESAREA FORMULARULUI DE CONTACT</h3>
                <p>www.traveldeal.ro va folosi informatiile pe care le furnizati in sectiunea corespunzatoare de contact, existenta pe site, exclusiv cu scopul de a procesa solicitarea dumneavoastra.</p>
                <p>Prin furnizarea oricaror date cu caracter personal prin intermediul www.traveldeal.ro, intelegeti si sunteti de acord ca datele dumneavoastra vor fi prelucrate in conformitate cu prevederile PPD a www.traveldeal.ro.</p>
                <p>www.traveldeal.ro se obliga sa nu prelucreze datele cu caracter personal furnizate in alt scop decat acela pentru care au fost transmise, cu exceptia situatiilor in care exista consimtamantul dumneavoastra expres pentru a le utiliza si in alte scopuri.</p>
                <p>De asemenea, este posibil ca www.traveldeal.ro sa aiba acces si la alte date cu caracter personal prin stabilirea de catre dvs. a unei legaturi cu www.traveldeal.ro, prin prelucrarea datelor comunicate in urma conversatiilor telefonice, conversatii e-mail, prezentarea la sediul nostru in vederea obtinerii de informatii, etc.</p>
                <p>Prin contactarea www.traveldeal.ro in oricare mod stipulat mai sus sau oricare alta metoda care presupune o comunicare mijlocita sau nemijlocita intre dvs. si www.traveldeal.ro, intelegeti si sunteti de acord ca datele dumneavoastra vor fi prelucrate in conformitate cu prevederile PPD a www.traveldeal.ro.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">DIVULGAREA DATELOR CU CARACTER PERSONAL CATRE TERTI</h3>
                <p>Datele cu caracter personal prelucrate de catre www.traveldeal.ro vor putea fi divulgate si/sau transferate catre terti doar in situatia in care exista consimtamantul dumneavoastra expres pentru a proceda in acest sens, cu exceptia situatiilor in care exista o obligatie legala/ contractuala pentru www.traveldeal.ro de a proceda in acest mod.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRAREA DATELOR DE CATRE TERTI, ALTE SITE-URI SI SPONSORI</h3>
                <p>Site-ul www.traveldeal.ro poate contine, la un moment dat, link-uri de acces catre alte site-uri ale caror politici de prelucrare a datelor pot fi diferite de cele ale www.traveldeal.ro</p>
                <p>Va rugam sa aveti in vedere si sa consultati politicile privind protectia datelor cu caracter personal ale celorlalte site-uri, www.traveldeal.ro neasumandu-si responsabilitatea cu privire la informatiile trimise sau colectate de aceste terte parti.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRARE AUTOMATA DE DATE. COOKIE</h3>
                <p>Site-ul www.traveldeal.ro foloseste identificatori de tip Cookie. In acest sens puteti consulta Politica noastra de Cookie, disponibila pe site, si va puteti exercita dreptul de a dezactiva Cookies, astfel cum este mai jos precizat.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PERIOADA STOCARII DATELOR</h3>
                <p>www.traveldeal.ro poate pastra datele prelucrate pentru diferite perioade de timp, apreciate ca fiind rezonabile, in conformitate cu scopurile indicate anterior. Pastram datele dumneavoastra numai pentru perioada necesara pentru atingerea scopului pentru care detinem datele, pentru a satisface nevoile dumneavoastra sau pentru a ne indeplini obligatiile impuse de lege, in special in ce priveste datele necesare incheierii contractelor de asigurare.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">DREPTURILE PERSOANELOR VIZATE</h3>
                <p>In conformitate cu GDPR, aveti o serie de drepturi cu privire la datele personale pe care www.traveldeal.ro le prelucreaza:</p>
                <p><strong>Dreptul de acces la datele prelucrare</strong> - Aveți dreptul de a accesa datele personale pe care le deținem. Prima furnizare de informatii se va face fara a percepe niciun fel de taxa. Daca veti mai avea nevoie de copii ale informatiilor deja furnizate, este posibil să percepem o taxă rezonabilă ținând cont de costurile administrative de furnizare a informațiilor. Solicitările vădit neîntemeiate, excesive sau repetate pot să nu primească un răspuns.</p>
                <p><strong>Dreptul la rectificarea datelor</strong> - Aveți dreptul să cereți ca Datele dumneavoastră să fie rectificate dacă sunt inexacte sau învechite și/ sau să le completați dacă acestea sunt incomplete. Dacă aveți un cont, poate fi mai ușor să vă corectați propriile date prin intermediul funcției "Contul meu".</p>
                <p><strong>Dreptul la stergerea datelor ("dreptul de a fi uitat")</strong> - În unele cazuri, aveți dreptul de a obține ștergerea sau distrugerea Datelor dumneavoastră. Acesta nu este un drept absolut, deoarece uneori s-ar putea să fim forțați să păstrăm Datele dumneavoastră din motive legale sau juridice.</p>
                <p><strong>Dreptul la restrictionarea prelucrarii</strong> - Aveți dreptul să solicitați restricționarea procesării Datelor dumneavoastră. Acest lucru înseamnă că prelucrarea Datelor dumneavoastră este limitată, astfel încât să putem păstra Datele, dar să nu le utilizăm sau să le procesăm. Acest drept se aplică în circumstanțe specifice prevăzute de Regulamentul general privind protecția datelor, și anume:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>exactitatea Datelor este contestată de persoana vizată (adică de dumneavoastră), pentru o perioadă care permite operatorului (adică www.traveldeal.ro) să verifice corectitudinea Datelor;</li>
                  <li>prelucrarea este ilegală și persoana vizată (adică dumneavoastră) se opune ștergerii Datelor și solicită restricția de utilizare a acestora;</li>
                  <li>operatorul (de exemplu, www.traveldeal.ro) nu mai are nevoie de Date pentru prelucrare, dar acestea sunt solicitate de persoana vizată (adică de dumneavoastră) pentru stabilirea, exercitarea sau apărarea unor pretenții legale;</li>
                  <li>persoana vizată (adică dumneavoastră) a ridicat obiecții procesării bazată pe motive legitime din partea operatorului (în acest caz www.traveldeal.ro) în temeiul verificării dacă motivele legitime ale operatorului (www.traveldeal.ro) depășesc pe cele ale persoanei vizate (adică dumneavoastră).</li>
                </ul>
                <p><strong>Dreptul la portabilitatea datelor</strong> - Aveți dreptul să mutați, să copiați sau să transferați datele care vă interesează din baza noastră de date într-o alta. Acest lucru se aplică numai datelor pe care le-ați furnizat, atunci când procesarea se bazează pe consimțământul dumneavoastră sau pe baza unui contract și este implementată prin mijloace automate.</p>
                <p><strong>Dreptul de opozitie</strong> - Vă puteți opune în orice moment prelucrării datelor dumneavoastră atunci când o astfel de prelucrare se bazează pe un interes legitim.</p>
                <p><strong>Dreptul de a retrage consimtamantul in orice moment</strong> - Vă puteți retrage consimțământul în ceea ce privește prelucrarea datelor dumneavoastră atunci când o astfel de procesare se bazează pe consimțământ. Retragerea consimțământului nu afectează legalitatea prelucrării pe baza consimțământului înainte de retragerea acestuia.</p>
                <p><strong>Dreptul de a depune o plangere la autoritatea de supraveghere competenta</strong> - Aveți dreptul să depuneți o plângere în fața autorității de protecție a datelor din țara dumneavoastră de resedinta sau de domiciliu pentru a contesta practicile de protecție a datelor oferite de www.traveldeal.ro.</p>
                <p><strong>Dreptul de a va opune prelucrarii datelor dumneavoastra in scopuri de marketing direct</strong> - Vă puteți dezabona sau renunța la comunicarea noastră de marketing direct în orice moment. Este mai ușor să faceți acest lucru dând clic pe linkul "dezabonare" în orice e-mail sau comunicare pe care vi le trimitem.</p>
                <p><strong>Dreptul de a va opune prelucrarii datelor dumneavoastra de catre noi atunci cand desfasuram actiuni in interes public sau in interesele legitime proprii sau ale unui tert</strong> - Vă puteți opune în orice moment prelucrării datelor dumneavoastră atunci când o astfel de prelucrare se bazează pe un interes legitim.</p>
                <p><strong>Dreptul de a dezactiva Cookies</strong> - aveți dreptul să dezactivați modulele cookie. Setările din browser-ele de Internet sunt de obicei programate în mod implicit pentru a accepta modulele cookie, dar puteți să le reglați ușor modificând setările browser ului. Multe module cookie sunt utilizate pentru a spori gradul de utilizare sau funcționalitate a site-urilor web / aplicațiilor; prin urmare, dezactivarea modulelor cookie vă poate împiedica să utilizați anumite părți ale site-urilor sau aplicațiilor noastre, așa cum este detaliat în tabelul Cookie relevant. Dacă doriți să restricționați sau să blocați toate cookie-urile stabilite de site-urile web / aplicațiile noastre (care vă pot împiedica să utilizați anumite părți ale site-ului) sau orice alte site-uri / aplicații, puteți face acest lucru prin setările browserului. Funcția Ajutor din browserul dumneavoastră vă va spune cum. Pentru mai multe informații, consultați următoarele linkuri: http://www.aboutcookies.org/;</p>
                <p>Va puteti exercita oricare dintre aceste drepturi in ceea ce priveste datele personale pe care www.traveldeal.ro le prelucreaza prin adresarea unei simple cereri catre DPO-ul www.traveldeal.ro. Intr-o astfel de situatie este foarte posibil sa solicitam o dovada a identitatii dumneavoastra.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">SOLICITARI JURIDICE</h3>
                <p>Accesam, pastram si oferim informatiile dumneavoastra autoritatilor de reglementare, factorilor de aplicare a legii sau altor entitati:</p>
                <p>Ca raspuns la o solicitare de natura juridica, atunci cand consideram, cu buna-credinta, ca legea ne impune acest lucru. De asemenea, este posibil sa raspundem la solicitari de natura juridica atunci cand consideram, cu buna-credinta, ca raspunsul impus de legile din jurisdictia respectiva afecteaza utilizatorii din acea jurisdictie si este conform cu standardele recunoscute la nivel international.</p>
                <p>Atunci cand consideram, cu buna credinta, ca este necesar pentru: a detecta, a preveni si a raspunde la acte de frauda, utilizarea neautorizata a oricarui material care ne apartine, incalcari ale conditiilor sau politicilor noastre sau alte activitati daunatoare sau ilegale, pentru a ne proteja pe noi (inclusiv drepturile, bunurile sau materialele noastre), pe dumneavoastra si pe altii, inclusiv in cadrul investigatiilor sau al anchetelor autoritatilor de reglementare sau pentru a preveni decesul sau vatamarea corporala iminenta. De exemplu, daca este relevant, furnizam informatii catre si primim informatii de la terti parteneri despre fiabilitatea contului dumneavoastra, pentru a preveni frauda, abuzul si alte activitati daunatoare in cadrul si in afara materialelor noastre.</p>
                <p>Informatiile pe care le primim despre dumneavoastra pot fi accesate si stocate o perioada mai lunga de timp atunci cand fac obiectul unei solicitari de natura juridica sau unei obligatii legale, al unei anchete guvernamentale, sau al unor investigatii privind posibile incalcari ale conditiilor sau politicilor noastre, sau in alte cazuri pentru a preveni prejudiciile.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">RELATIILE CU ALTI OPERATORI</h3>
                <p>In functie de context, s-ar putea sa ne gasim in situatia necesitatii absolute de a oferi informatii la un nivel mai inalt, atat global, cat si intern sau extern, partenerilor nostri si celor cu care facem transfer de date cu respectarea GDPR, in virtutea asigurarii oferirii unor servicii cat mai profesionale cu putinta. Informatiile controlate de www.traveldeal.ro ar putea fi transferate, transmise sau stocate si prelucrate in UE sau in alte tari decat tara in care locuiti, in scopurile descrise in aceasta politica. Aceste transferuri de date sunt necesare pentru a putea furniza servicii la cel mai inalt nivel, precum si a continua sa va furnizam materialele noastre la cel mai bun nivel profesional.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">SECURITATEA PRELUCRARII</h3>
                <p>www.traveldeal.ro a adoptat masuri tehnice si organizatorice de prelucrare a datelor, actualizate in conformitate cu cerintele GDPR, cu scopul de a proteja datele dumneavoastra cu caracter personal impotriva oricaror actiuni de acces neautorizat, utilizare necorespunzatoare sau divulgare, modificare neautorizata, distrugere sau pierdere accidentala. Toti angajatii si colaboratorii www.traveldeal.ro, precum si orice terte parti care actioneaza in numele si pe seama www.traveldeal.ro sunt obligati sa respecte confidentialitatea informatiilor dumneavoastra si cerintele GDPR, in conformitate cu prevederile PPD.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">EXONERARE DE RASPUNDERE</h3>
                <p>Site-ul www.traveldeal.ro poate contine legaturi catre alte site-uri si/sau alte pagini web care nu sunt proprietatea www.traveldeal.ro. www.traveldeal.ro nu isi asuma nicio responsabilitate cu privire la continutul acestor site-uri si, prin urmare, nu va putea fi tinuta raspunzatoare pentru continutul, publicitatea, bunurile, serviciile, software-ul, informatiile sau alte materiale disponibile pe sau prin intermediul acestor site-uri. www.traveldeal.ro nu va fi responsabila de pierderea datelor cu caracter personal, de orice efecte negative asupra datelor personale ale vizitatorilor sau de alte daune morale si/ sau patrimoniale cauzate de accesul la respectivele site-uri.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">ACTUALIZAREA POLITICII DE PROTECTIE SI PRELUCRARE A DATELOR CU CARACTER PERSONAL</h3>
                <p>Va rugam sa aveti in vedere faptul ca prezenta Politica poate face obiectul unor modificari periodice de continut, prin actualizarea site-ului www.traveldeal.ro</p>
                <p>Cum va vom anunta despre modificarile aduse acestei Politici?</p>
                <p>Vom afisa pe www.traveldeal.ro informare cu privire la modificarea PPD.</p>
                <p>Va rugam sa nu continuati sa utilizati site-ul www.traveldeal.ro daca nu sunteti de acord cu astfel de modificari.</p>
                <p>De asemenea, va recomandam sa verificati aceasta pagina pentru orice actualizare.</p>
                <p>Termenii PPD se interpreteaza in conformitate cu legislatia aplicabila.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CONTACT</h3>
                <p>Dacă aveți întrebări sau preocupări cu privire la modul în care tratăm și folosim datele dumneavoastră cu caracter personal sau doriți să vă exercitați oricare dintre drepturile dumneavoastră, vă rugăm să ne contactați accesand datele de contact ale DPO-ului nostru.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Clauze de neraspundere:</h3>
                <p>Site-ul www.traveldeal.ro este un site cu continut informativ. www.traveldeal.ro nu isi asuma nicio responsabilitate cu privire la corectitudinea si exactitatea acelor informatii.</p>
                <p>www.traveldeal.ro nu garanteaza in niciun fel, explicit sau implicit, realitatea, actualitatea si integralitatea datelor si informatiilor prezentate pe site. Eventualele neconcordante sau erori care pot aparea la un moment dat intre continutul site-ului si informatiile reale nu implica nicio raspundere, de orice natura, pentru www.traveldeal.ro.</p>
                <p>Datele si informatiile accesibile publicului pe acest site nu constituie recomandari, garantii, consultanta sau angajament din partea www.traveldeal.ro.</p>
                <p>www.traveldeal.ro nu va putea fi adusa raspunzatoare fata de nicio persoana/ entitate pentru niciun fel de daune care ar rezulta, direct sau indirect, din utilizarea site-ului www.traveldeal.ro sau ca urmare a oricarei erori sau omisiuni.</p>
                <p>www.traveldeal.ro actioneaza si ca agent pentru terti furnizori cum sunt: website-uri partenere, liniile aeriene, hoteluri, companii de inchiriat masini precum si alti Furnizori de Servicii Turistice - denumiti in continuare Furnizori.</p>
                <p>www.traveldeal.ro nu-si asuma nicio responsabilitate pentru produsele si serviciile turistice oferite de Furnizori si nu garanteaza in niciun fel (fie explicit sau implicit) acuratetea sau calitatea produselor si a serviciilor reflectate pe acest site.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Modificari in termenii si conditiile de utilizare:</h3>
                <p>www.traveldeal.ro poate aduce modificari termenilor si conditiilor de utilizare, fara a anunta acest lucru anterior in continutul site-ului. Va rugam, deci, sa recititi termenii si conditiile de utilizare de fiecare data cand accesati sau utilizati acest site. Utilizarea site-ului de catre dumneavoastra, ulterior modificarii acestor termeni, constituie acceptarea de catre dumneavoastra a termenilor si conditiilor modificate.</p>
                <p>Aceste reguli sunt in conformitate cu legislatia romana in vigoare. Incalcarea prevederilor acestui document constituie o violare a drepturilor www.traveldeal.ro si poate atrage raspunderea civila, contraventionala sau, dupa caz, penala a persoanei in culpa. Conflictele aparute in legatura cu termenii de utilizare ale site-ului vor fi supuse spre solutionare instantelor judecatoresti.</p>
                <p>Acest site poate contine link-uri catre diverse site-uri. Atunci cand accesati aceste site-uri, va aflati implicit in afara site-ului www.traveldeal.ro si aveti obligatia de a respecta termenii si conditiile de utilizare ale noilor site-uri accesate.</p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Politica de confidențialitate și GDPR</h2>
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRAREA DATELOR PERSONALE</h3>
                <p>Noua lege a Uniunii Europene referitoare la protectia datelor cu caracter personal, GDPR ("General Data Protection Regulation") a intrat in vigoare in 25 mai 2016, si a devenit aplicabila in toate tarile membre ale Uniunii Europene la data de 25 mai 2018. Aceasta lege reprezinta cea mai mare schimbare in domeniul protectiei datelor cu caracter personal din ultimii 20 de ani si are obiective care trec mult peste simpla protectie a spatiului privat.</p>
                <p>Protectia datelor dumneavoastra cu caracter personal este importanta pentru noi, prin urmare, acordam o atentie deosebita protejarii vietii private a tuturor celor care ne-au pus la dispozitie datele lor prin transmiterea datelor prin intermediul formularului de contact aflat pe www.traveldeal.ro, prin participarea la evenimente/campanii organizate de noi, a persoanelor care ne transmit date cu caracter personal in vederea procesarii unei solicitari, a celor ale caror date ne-au fost furnizate prin intermediul contractelor, precum si a celor ale caror date cu caracter personal ne-au fost furnizate de o terta parte, sau la care am avut acces dintr-o alta sursa, in conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European si al Consiliului din data de 27 aprilie 2016 privind protectia persoanelor fizice in ceea ce priveste prelucrarea datelor cu caracter personal si libera circulatie a acestor date (denumit in continuare "GDPR").</p>
                <p>Va rugam sa acordati o atentie deosebita lecturarii urmatoarei Politici (denumita in continuare "PPD") pentru a intelege modul in care vor fi tratate informatiile dumneavoastra ("date personale").</p>
                <p>PPD explica practicile Popa P.Sorin Petru ii. (in continuare denumita "www.traveldeal.ro"), referitoare la aplicarea prevederilor GDPR, precum si drepturile de care beneficiati cu privire la modul in care informatiile dumneavoastra sunt prelucrate de catre www.traveldeal.ro.</p>
                <p>Prelucrarea datelor cu caracter personal efectuata de www.traveldeal.ro se va realiza intotdeauna in conformitate cu prevederile GDPR, precum si cu reglementarile privind protectia datelor cu caracter personal, specifice fiecarei tari in care www.traveldeal.ro opereaza.</p>
                <p>Prin PPD, www.traveldeal.ro doreste sa informeze persoanele vizate cu privire la natura datelor cu caracter personal pe care le colectam si le procesam, precum si cu privire la scopurile prelucrarii.</p>
                <p>In plus, persoanele vizate sunt informate prin intermediul PPD si cu privire la drepturile de care beneficiaza.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CINE SUNTEM?</h3>
                <p>Suntem Popa P.Sorin Petru ii., o intreprindere individuala cu sediul social in Bucuresti, Sos.Berceni Nr80A</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CE SUNT DATELE CU CARACTER PERSONAL?</h3>
                <p>"Date personale" inseamna orice informatie sau informatii care va pot identifica direct (de exemplu, numele dumneavoastra) sau indirect (de exemplu, prin intermediul datelor pseudonime, cum ar fi un numar de identificare unic).</p>
                <p>Aceasta inseamna ca datele personale includ lucruri precum adresa de e-mail, domiciliul, telefonul mobil, numele de utilizator, fotografiile de profil, preferintele personale si obiceiurile de cumparaturi, continutul generat de utilizatori, informatiile financiare si informatiile privind situatia financiara.</p>
                <p>Acesta ar putea include si identificatori numerici unici, cum ar fi adresa IP a computerului dumneavoastra sau adresa MAC a dispozitivului dumneavoastra mobil, precum si modulele cookie.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CE INSEAMNA PRELUCRAREA DATELOR CU CARACTER PERSONAL?</h3>
                <p>"Prelucrarea" inseamna orice operatiune sau set de operatiuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu caracter personal, cu sau fara utilizarea de mijloace automatizate, cum ar fi colectarea, inregistrarea, organizarea, structurarea, stocarea, adaptarea sau modificarea, extragerea, consultarea, utilizarea, divulgarea prin transmitere, diseminarea sau punerea la dispozitie in orice alt mod, alinierea sau combinarea, restrictionarea, stergerea sau distrugerea.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CARE SUNT DATELE DVS. CU CARACTER PERSONAL PE CARE LE PRELUCRAM?</h3>
                <p>Datele dvs. cu caracter personal care vor fi prelucrate sunt urmatoarele: nume si prenume, adresa de e-mail, numar de telefon.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRINCIPII PRIVIND PRELUCRAREA DATELOR</h3>
                <p>www.traveldeal.ro se obliga sa respecte principiile de protectie a datelor cu caracter personal (denumite in continuare „Principiile") prevazute de GDPR, pentru a se asigura ca toate datele sunt:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Prelucrate in mod corect, legal si transparent;</li>
                  <li>Colectate in scopuri specificate, explicite si legitime;</li>
                  <li>Adecvate, relevante si limitate in raport cu scopurile pentru care sunt prelucrate;</li>
                  <li>Corecte si actualizate;</li>
                  <li>Pastrate intr-o forma care nu permite identificarea persoanelor vizate mai mult timp decat este necesar in raport de scopul prelucrarii;</li>
                  <li>Procesate in conformitate cu drepturile persoanei vizate, intr-un mod care sa asigure o securitate adecvata a prelucrarii, astfel incat datele sa fie integre, confidentiale si disponibile.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">TEMEIUL SI SCOPURILE PRELUCRARII DATELOR CU CARACTER PERSONAL</h3>
                <p>In scopul incheierii si executarii contractelor - Conform art. 6 alin. 1 lit. b) din GDPR, pot fi prelucrate date personale in scopul incheierii sau executarii contractului.</p>
                <p>Pentru a putea sa va oferim produsele si serviciile noastre, este nevoie sa prelucram date cu caracter personal care va apartin.</p>
                <p>In scopul indeplinirii unor obligatii legale - Conform art. 6 alin. 1 lit. c) din GDPR, pot fi prelucrate date personale in scopul indeplinirii unor obligatii legale.</p>
                <p>Solicitam o serie de date personale, inclusiv, in anumite situatii, codul numeric personal, in scopul de a ne indeplini obligatiile impuse de catre autoritatile fiscale in legatura cu facturarea si raportarile catre autoritatile fiscale.</p>
                <p>In scop de marketing - Conform art. 6 alin. 1 lit. a) din GDPR, pot fi prelucrate date personale daca persoana vizata si-a dat consimtamantul pentru prelucrarea datelor sale cu caracter personal pentru unul sau mai multe scopuri specifice.</p>
                <p>Astfel, in anumite situatii, datele dumneavoastra cu caracter personal vor fi utilizate cu scopul de a va transmite mesaje de marketing, oferte, stiri, viitoare campanii, invitatii la diverse evenimente.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PROCESAREA FORMULARULUI DE CONTACT</h3>
                <p>www.traveldeal.ro va folosi informatiile pe care le furnizati in sectiunea corespunzatoare de contact, existenta pe site, exclusiv cu scopul de a procesa solicitarea dumneavoastra si pentru campanii de informare.</p>
                <p>Prin furnizarea oricaror date cu caracter personal prin intermediul www.traveldeal.ro, intelegeti si sunteti de acord ca datele dumneavoastra vor fi prelucrate in conformitate cu prevederile PPD a www.traveldeal.ro.</p>
                <p>Va rugam sa aveti in vedere faptul ca pentru a putea procesa solicitarile dumneavoastra transmise in sectiunea de contact a site-ului, este posibil ca, in anumite circumstante, sa avem obligatia de a divulga datele dumneavoastra partenerilor cu care www.traveldeal.ro colaboreaza si/ sau altor terti furnizori de servicii ai www.traveldeal.ro.</p>
                <p>Cu toate acestea, www.traveldeal.ro a adoptat masuri tehnice si organizatorice adecvate pentru a asigura securitatea transferului de date, precum si prelucrarea in conformitate cu cerintele GDPR a datelor dumneavoastra de catre entitatile mentionate anterior.</p>
                <p>www.traveldeal.ro se obliga sa nu prelucreze datele cu caracter personal furnizate in alt scop decat acela pentru care au fost transmise, cu exceptia situatiilor in care exista consimtamantul dumneavoastra expres pentru a le utiliza si in alte scopuri.</p>
                <p>De asemenea, este posibil ca www.traveldeal.ro sa aiba acces si la alte date cu caracter personal prin stabilirea de catre dvs. a unei legaturi cu www.traveldeal.ro, prin prelucrarea datelor comunicate in urma conversatiilor telefonice, conversatii e-mail, prezentarea la sediul nostru in vederea obtinerii de informatii, etc.</p>
                <p>Prin contactarea www.traveldeal.ro in oricare mod stipulat mai sus sau oricare alta metoda care presupune o comunicare mijlocita sau nemijlocita intre dvs. si www.traveldeal.ro, intelegeti si sunteti de acord ca datele dumneavoastra vor fi prelucrate in conformitate cu prevederile PPD a www.traveldeal.ro.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">DIVULGAREA DATELOR CU CARACTER PERSONAL CATRE TERTI</h3>
                <p>Datele cu caracter personal prelucrate de catre www.traveldeal.ro vor putea fi divulgate si/sau transferate catre terti doar in situatia in care exista consimtamantul dumneavoastra expres pentru a proceda in acest sens, cu exceptia situatiilor in care exista o obligatie legala/ contractuala pentru www.traveldeal.ro de a proceda in acest mod.</p>
                <p>Va rugam sa aveti in vedere faptul ca este posibil ca in anumite circumstante sa avem obligatia de a divulga datele dumneavoastra cu caracter personal, partenerilor cu care www.traveldeal.ro colaboreaza si/sau altor terti furnizori de servicii ai www.traveldeal.ro.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRAREA DATELOR DE CATRE TERTI, ALTE SITE-URI SI SPONSORI</h3>
                <p>Site-ul www.traveldeal.ro poate contine, la un moment dat, link-uri de acces catre alte site-uri ale caror politici de prelucrare a datelor pot fi diferite de cele ale www.traveldeal.ro.</p>
                <p>Va rugam sa aveti in vedere si sa consultati politicile privind protectia datelor cu caracter personal ale celorlalte site-uri, www.traveldeal.ro neasumandu-si responsabilitatea cu privire la informatiile trimise sau colectate de aceste terte parti.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PRELUCRARE AUTOMATA DE DATE. COOKIE</h3>
                <p>Site-ul www.traveldeal.ro foloseste identificatori de tip Cookie. In acest sens puteti consulta Politica noastra de Cookie, disponibila pe site, si va puteti exercita dreptul de a dezactiva Cookies, astfel cum este mai jos precizat.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">PERIOADA STOCARII DATELOR</h3>
                <p>www.traveldeal.ro poate pastra datele prelucrate pentru diferite perioade de timp, apreciate ca fiind rezonabile, in conformitate cu scopurile indicate anterior. Pastram datele dumneavoastra numai pentru perioada necesara pentru atingerea scopului pentru care detinem datele, pentru a satisface nevoile dumneavoastra sau pentru a ne indeplini obligatiile impuse de lege, in special in ce priveste datele necesare incheierii contractelor de asigurare.</p>
                <p>Pentru a sti cat timp pot fi pastrate datele dumneavoastra, folosim urmatoarele criterii:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>In cazul in care v-ati oferit consimtamantul pentru marketing, pastram datele dumneavoastra personale pana cand va retrageti consimtamantul si solicitati sa le stergem;</li>
                  <li>In cazul in care modulele cookie sunt stocate pe computer, le pastram atata timp cat este necesar pentru ca acestea sa isi atinga scopurile (de exemplu, pe durata unei sesiuni pentru cookie-urile de cos de cumparaturi sau cookie-urile pentru ID-uri de sesiune) si pentru o perioada definita in conformitate cu reglementarile si indrumarile locale. In acest sens, mentionam ca datele prelucrate prin modulele cookies folosite pentru a furniza publicitate comportamentala online, pentru a ne personaliza serviciile pentru dumneavoastra si pentru a permite distribuirea continutului nostru pe site-uri de socializare (butoane de distribuire destinate afisarii site-ului), vor fi pastrate pentru o perioada de maxim 3 ani de la colectarea acestora.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">DREPTURILE PERSOANELOR VIZATE</h3>
                <p>In conformitate cu GDPR, aveti o serie de drepturi cu privire la datele personale pe care www.traveldeal.ro le prelucreaza:</p>
                <p><strong>Dreptul de acces la datele prelucrare</strong> - Aveti dreptul de a accesa datele personale pe care le detinem. Prima furnizare de informatii se va face fara a percepe niciun fel de taxa.</p>
                <p>Daca veti mai avea nevoie de copii ale informatiilor deja furnizate, este posibil să percepem o taxa rezonabila tinand cont de costurile administrative de furnizare a informatiilor. Solicitarile vadit neintemeiate, excesive sau repetate pot sa nu primeasca un raspuns.</p>
                <p><strong>Dreptul la rectificarea datelor</strong> - Aveti dreptul sa cereti ca Datele dumneavoastra sa fie rectificate daca sunt inexacte sau invechite si/ sau sa le completati daca acestea sunt incomplete. Daca aveti un cont, poate fi mai usor sa va corectati propriile date prin intermediul functiei "Contul meu".</p>
                <p><strong>Dreptul la stergerea datelor ("dreptul de a fi uitat")</strong> - In unele cazuri, aveti dreptul de a obtine stergerea sau distrugerea Datelor dumneavoastra. Acesta nu este un drept absolut, deoarece uneori s-ar putea sa fim fortati sa pastram Datele dumneavoastra din motive legale sau juridice.</p>
                <p><strong>Dreptul la restrictionarea prelucrarii</strong> - Aveti dreptul sa solicitati restrictionarea procesarii Datelor dumneavoastra. Acest lucru inseamna ca prelucrarea Datelor dumneavoastra este limitata, astfel incat sa putem pastra Datele, dar sa nu le utilizam sau sa le procesam. Acest drept se aplica in circumstante specifice prevazute de Regulamentul general privind protectia datelor, si anume:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Exactitatea Datelor este contestata de persoana vizata (adica de dumneavoastra), pentru o perioada care permite operatorului (adica www.traveldeal.ro) sa verifice corectitudinea Datelor;</li>
                  <li>Prelucrarea este ilegala si persoana vizata (adica dumneavoastra) se opune stergerii Datelor si solicita restrictia de utilizare a acestora;</li>
                  <li>Operatorul (de exemplu, www.traveldeal.ro) nu mai are nevoie de Date pentru prelucrare, dar acestea sunt solicitate de persoana vizata (adica de dumneavoastra) pentru stabilirea, exercitarea sau apararea unor pretentii legale;</li>
                  <li>Persoana vizata (adica dumneavoastra) a ridicat obiectii procesarii bazata pe motive legitime din partea operatorului (in acest caz www.traveldeal.ro) in temeiul verificarii daca motivele legitime ale operatorului (www.traveldeal.ro) depasesc pe cele ale persoanei vizate (adica dumneavoastra).</li>
                </ul>
                <p><strong>Dreptul la portabilitatea datelor</strong> - Aveti dreptul sa mutati, sa copiati sau sa transferati datele care va intereseaza din baza noastra de date intr-o alta.</p>
                <p>Acest lucru se aplica numai datelor pe care le-ati furnizat, atunci cand procesarea se bazeaza pe consimtamantul dumneavoastra sau pe baza unui contract si este implementata prin mijloace automate.</p>
                <p><strong>Dreptul de opozitie</strong> - Va puteti opune in orice moment prelucrarii datelor dumneavoastra atunci cand o astfel de prelucrare se bazeaza pe un interes legitim.</p>
                <p><strong>Dreptul de a retrage consimtamantul in orice moment</strong> - Va puteti retrage consimtamantul in ceea ce priveste prelucrarea datelor dumneavoastra atunci cand o astfel de procesare se bazeaza pe consimtamant. Retragerea consimtamantului nu afecteaza legalitatea prelucrarii pe baza consimtamantului inainte de retragerea acestuia.</p>
                <p><strong>Dreptul de a depune o plangere la autoritatea de supraveghere competenta</strong> - Aveti dreptul sa depuneti o plangere in fata autoritatii de protectie a datelor din tara dumneavoastra de resedinta sau de domiciliu pentru a contesta practicile de protecție a datelor oferite de www.traveldeal.ro.</p>
                <p><strong>Dreptul de a va opune prelucrarii datelor dumneavoastra in scopuri de marketing direct</strong> - Va puteti dezabona sau renunta la comunicarea noastra de marketing direct in orice moment. Este mai usor sa faceti acest lucru dand clic pe linkul "dezabonare" in orice e-mail sau comunicare pe care vi le trimitem.</p>
                <p><strong>Dreptul de a va opune prelucrarii datelor dumneavoastra de catre noi atunci cand desfasuram actiuni in interes public sau in interesele legitime proprii sau ale unui tert</strong> - Va puteti opune in orice moment prelucrarii datelor dumneavoastra atunci cand o astfel de prelucrare se bazeaza pe un interes legitim.</p>
                <p><strong>Dreptul de a dezactiva Cookies</strong> - aveti dreptul sa dezactivati modulele cookie. Setarile din browser-ele de Internet sunt de obicei programate in mod implicit pentru a accepta modulele cookie, dar puteti sa le reglati usor modificand setarile browser-ului. Multe module cookie sunt utilizate pentru a spori gradul de utilizare sau functionalitate a site-urilor web / aplicatiilor; prin urmare, dezactivarea modulelor cookie va poate impiedica sa utilizati anumite parti ale site-urilor sau aplicatiilor noastre, asa cum este detaliat in tabelul Cookie relevant.</p>
                <p>Daca doriti sa restrictionati sau sa blocati toate cookie-urile stabilite de site-urile web / aplicatiile noastre (care va pot impiedica sa utilizati anumite parti ale site-ului) sau orice alte site-uri / aplicatii, puteti face acest lucru prin setarile browserului. Functia Ajutor din browserul dumneavoastra va va spune cum.</p>
                <p>Pentru mai multe informatii, consultati urmatoarele linkuri: <a href="http://www.aboutcookies.org/" className="text-primary hover:underline">http://www.aboutcookies.org/</a>;</p>
                <p>Va puteti exercita oricare dintre aceste drepturi in ceea ce priveste datele personale pe care www.traveldeal.ro le prelucreaza prin adresarea unei simple cereri catre DPO-ul www.traveldeal.ro.</p>
                <p>Intr-o astfel de situatie este foarte posibil sa solicitam o dovada a identitatii dumneavoastra.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">SOLICITARI JURIDICE</h3>
                <p>Accesam, pastram si oferim informatiile dumneavoastra autoritatilor de reglementare, factorilor de aplicare a legii sau altor entitati:</p>
                <p>Ca raspuns la o solicitare de natura juridica, atunci cand consideram, cu buna-credinta, ca legea ne impune acest lucru.</p>
                <p>De asemenea, este posibil sa raspundem la solicitari de natura juridica atunci cand consideram, cu buna-credinta, ca raspunsul impus de legile din jurisdictia respectiva afecteaza utilizatorii din acea jurisdictie si este conform cu standardele recunoscute la nivel international.</p>
                <p>Atunci cand consideram, cu buna credinta, ca este necesar pentru: a detecta, a preveni si a raspunde la acte de frauda, utilizarea neautorizata a oricarui material care ne apartine, incalcari ale conditiilor sau politicilor noastre sau alte activitati daunatoare sau ilegale, pentru a ne proteja pe noi (inclusiv drepturile, bunurile sau materialele noastre), pe dumneavoastra si pe altii, inclusiv in cadrul investigatiilor sau al anchetelor autoritatilor de reglementare sau pentru a preveni decesul sau vatamarea corporala iminenta.</p>
                <p>De exemplu, daca este relevant, furnizam informatii catre si primim informatii de la terti parteneri despre fiabilitatea contului dumneavoastra, pentru a preveni frauda, abuzul si alte activitati daunatoare in cadrul si in afara materialelor noastre.</p>
                <p>Informatiile pe care le primim despre dumneavoastra pot fi accesate si stocate o perioada mai lunga de timp atunci cand fac obiectul unei solicitari de natura juridica sau unei obligatii legale, al unei anchete guvernamentale, sau al unor investigatii privind posibile incalcari ale conditiilor sau politicilor noastre, sau in alte cazuri pentru a preveni prejudiciile.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">RELATIILE CU ALTI OPERATORI</h3>
                <p>In functie de context, s-ar putea sa ne gasim in situatia necesitatii absolute de a oferi informatii la un nivel mai inalt, atat global, cat si intern sau extern, partenerilor nostri si celor cu care facem transfer de date cu respectarea GDPR, in virtutea asigurarii oferirii unor servicii cat mai profesionale cu putinta.</p>
                <p>Informatiile controlate de www.traveldeal.ro ar putea fi transferate, transmise sau stocate si prelucrate in UE sau in alte tari decat tara in care locuiti, in scopurile descrise in aceasta politica. Aceste transferuri de date sunt necesare pentru a putea furniza servicii la cel mai inalt nivel, precum si a continua sa va furnizam materialele noastre la cel mai bun nivel profesional.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">SECURITATEA PRELUCRARII</h3>
                <p>www.traveldeal.ro a adoptat masuri tehnice si organizatorice de prelucrare a datelor, actualizate in conformitate cu cerintele GDPR, cu scopul de a proteja datele dumneavoastra cu caracter personal impotriva oricaror actiuni de acces neautorizat, utilizare necorespunzatoare sau divulgare, modificare neautorizata, distrugere sau pierdere accidentala.</p>
                <p>Toti angajatii si colaboratorii www.traveldeal.ro, precum si orice terte parti care actioneaza in numele si pe seama www.traveldeal.ro sunt obligati sa respecte confidentialitatea informatiilor dumneavoastra si cerintele GDPR, in conformitate cu prevederile PPD.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">EXONERARE DE RASPUNDERE</h3>
                <p>Site-ul www.traveldeal.ro poate contine legaturi catre alte site-uri si/sau alte pagini web care nu sunt proprietatea www.traveldeal.ro.</p>
                <p>www.traveldeal.ro nu isi asuma nicio responsabilitate cu privire la continutul acestor site-uri si, prin urmare, nu va putea fi tinuta raspunzatoare pentru continutul, publicitatea, bunurile, serviciile, software-ul, informatiile sau alte materiale disponibile pe sau prin intermediul acestor site-uri.</p>
                <p>www.traveldeal.ro nu va fi responsabila de pierderea datelor cu caracter personal, de orice efecte negative asupra datelor personale ale vizitatorilor sau de alte daune morale si/ sau patrimoniale cauzate de accesul la respectivele site-uri.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">CONTACT</h3>
                <p>Va rugam sa aveti in vedere faptul ca prezenta Politica poate face obiectul unor modificari periodice de continut, prin actualizarea site-ului www.traveldeal.ro.</p>
                <p>Daca aveti întrebari sau preocupari cu privire la modul in care tratam si folosim datele dumneavoastra cu caracter personal sau doriti sa va exercitati oricare dintre drepturile dumneavoastra, va rugam sa ne contactati accesand datele de contact ale noastre din pagina de contact prezenta pe site.</p>
              </div>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Politica de utilizare cookie-uri</h2>
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mt-6 mb-3">1. Politica de utilizare cookie-uri si tehnologii similare</h3>
                <p>Aceasta politica se refera la cookie-urile si la tehnologiile similare folosite, dupa caz, in website-urile operate de Popa P. Sorin Petru ii cu sediul social in Bucuresti-www.traveldeal.ro</p>
                <p>Cookie-urile sunt folosite pentru urmatoarele scopuri:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>de functionare a site-ului,</li>
                  <li>de analiza a comportamentului vizitatorilor site-ului,</li>
                  <li>pentru publicitate.</li>
                </ul>
                <p>Aceasta politica se completeaza cu politica www.traveldeal.ro ii cu privire la protectia datelor personale in general si cu Termenii si Conditiile site-ului pe care le puteti gasi pe site, pe care va incurajam sa le cititi, acestea incluzand informatii suplimentare utile, inclusiv cu privire la responsabilul Popa P. Sorin Petru ii pentru protectia datelor personale, toate scopurile prelucrarilor de date de catre Popa P. Sorin Petru ii, drepturile dumneavoastra, precum si exceptiile si limitele acestora etc.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">2. Ce sunt cookie-urile?</h3>
                <p>Cookie-ul este un fisier de mici dimensiuni, format din litere si numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se acceseaza internetul. Cookie-ul este instalat prin solicitarea emisa de catre terminalul utilizatorului catre un server Popa P. Sorin Petru ii sau catre un server al unei terte parti.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">3. La ce sunt folosite cookie-urile?</h3>
                <p>Aceste fisiere fac posibila in principal recunoasterea terminalului utilizatorului si prezentarea continutului intr-un mod relevant, adaptat preferintelor utilizatorului.</p>
                <p>Cookie-urile asigura utilizatorilor o experienta placuta de navigare si sustin eforturile Popa P. Sorin Petru ii pentru a oferi servicii mai adaptate utilizatorilor, ex: – preferintele in materie de confidentialitate online, rezervarile sau publicitate relevanta. De asemenea, sunt utilizate in pregatirea unor statistici anonime agregate care ne ajuta sa intelegem cum un utilizator beneficiaza de paginile noastre de internet, permitandu-ne imbunatatirea structurii si continutului lor, fara a permite identificarea personala a utilizatorului.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">4. Ce cookie-uri folosim?</h3>
                <p>Folosim doua tipuri de cookie-uri: per sesiune si fixe. Cookie-urile per sesiune sunt fisiere temporare ce raman in terminalul utilizatorului pana la terminarea sesiunii sau inchiderea aplicatiei.</p>
                <p>Cookie-urile fixe raman pe terminalul utilizatorului pe o perioada determinata de parametrii cookie-ului sau pana sunt sterse manual de utilizator.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">5. Cum sunt folosite cookie-urile de catre acest site?</h3>
                <p>O vizita pe acest site poate plasa urmatoarele tipuri de cookie-uri:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>cookie-uri strict necesare pentru functionarea site-ului</li>
                  <li>cookie-uri de analiza</li>
                  <li>cookie-uri pentru publicitate</li>
                </ul>
                <p>Cookie-urile si/sau tehnologiile similare strict necesare sunt esentiale pentru buna functionare a site-ului, fiind setate pe dispozitivul dumneavoastra la accesarea site-ului sau in urma actiunilor efectuate in site, dupa caz. Puteti seta browser-ul dumneavoastra pentru a bloca cookie-urile, insa in acest caz anumite sectiuni ale site-ului nu vor functiona corect.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">6. Contin cookie-urile date personale?</h3>
                <p>Cookie-urile in sine nu solicita informatii cu caracter personal pentru a putea fi utilizate si, in multe cazuri, nici nu identifica personal utilizatorii de internet. Exista insa situatii cand datele personale pot fi colectate prin utilizarea cookie-urilor pentru a facilita anumite functionalitati pentru utilizator sau pentru a oferi utilizatorului o experienta mai adaptata preferintelor sale.</p>
                <p>Astfel de date sunt criptate intr-un mod care face imposibil accesul persoanelor neautorizate la ele.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">7. Blocare cookie-uri</h3>
                <p>In cazul in care doriti sa blocati cookie-urile, unele functionalitati ale site‑ului vor fi oprite, iar acest lucru poate genera anumite disfunctionalitati sau erori in folosirea site-ului nostru. De exemplu, blocarea cookie-urilor va poate impiedica sa:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>rezervati online</li>
                  <li>va autentificati in contul dumneavoastra</li>
                </ul>
                <p>In cazul in care esti de acord cu aceste limitari si doresti sa blochezi cookie-urile, urmeaza instructiunile de mai jos:</p>
                <p>Cele mai multe browsere sunt setate implicit sa accepte cookie-uri, dar aveti posibilitatea sa modificati setarile pentru a bloca unele sau toate cookie-urile.</p>
                <p>Alege browser-ul tau din lista de mai jos pentru a afisa instructiunile pe care trebuie sa le parcurgeti dupa deschiderea browser-ului.</p>
                <p>Link-urile de mai sus nu apartin unor site-uri Popa P. Sorin Petru ii nu este responsabil de continutul acestora.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">8. Administrarea preferintelor cu privire la plasarea de cookie-uri</h3>
                <p>In general, o aplicatie folosita pentru accesarea paginilor web permite salvarea cookie-urilor si/sau a tehnologiilor similare pe terminal in mod implicit.</p>
                <p>Acestea sunt stocate pe perioade descrise in tabelul de la sectiunea 11 de mai jos. Aceste setari pot fi schimbate in asa fel incat administrarea automata a cookie-urilor sa fie blocata de browser-ul web sau utilizatorul sa fie informat de fiecare data cand cookie-uri sunt trimise catre terminalul sau.</p>
                <p>Informatii detaliate despre posibilitatile si modurile de administrare a cookie-urilor pot fi gasite in zona de setari a aplicatiei (browser-ului web).</p>
                <p>Limitarea folosirii cookie-urilor poate afecta anumite functionalitati ale website-ului.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">9. De ce sunt cookie-urile si/sau tehnologiile similare importante pentru Internet?</h3>
                <p>Cookie-urile si/sau tehnologiile similare reprezinta un punct central al functionarii eficiente a Internetului, ajutand la generarea unei experiente de navigare prietenoase si adaptate preferintelor si intereselor fiecarui utilizator.</p>
                <p>Refuzarea sau dezactivarea cookie-urilor poate face unele site-uri sau parti ale site-urilor imposibil de folosit. Dezactivarea cookie-urilor nu inseamna ca nu veti mai primi, cu respectarea legislatiei, publicitate online – ci doar ca aceasta nu va mai putea tine cont de preferintele si interesele dvs., evidentiate prin comportamentul de navigare.</p>
                <p>Exemple de intrebuintari importante ale cookie-urilor (care nu necesita autentificarea unui utilizator prin intermediul unui cont):</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Continut si servicii adaptate preferintelor utilizatorului – categorii de produse si servicii.</li>
                  <li>Oferte adaptate intereselor utilizatorilor</li>
                  <li>Retinerea parolelor</li>
                  <li>Retinerea filtrelor de protectie a copiilor privind continutul pe Internet (optiuni family mode, functii de safe search).</li>
                  <li>Limitarea frecventei de difuzare a reclamelor – limitarea numarului de afisari a unei reclame pentru un anumit utilizator pe un site.</li>
                  <li>Furnizarea de publicitate relevanta pentru utilizator.</li>
                  <li>Masurarea, optimizarea si adaptarea caracteristicilor de analiza – cum ar fi confirmarea unui anumit nivel de trafic pe un website, ce tip de continut este vizualizat si modul cum un utilizator ajunge pe un website (ex: prin motoare de cautare, direct, din alte website-uri etc.).</li>
                </ul>
                <p>Website-urile deruleaza aceste analize privitoare la utilizarea lor pentru a-si imbunatati serviciile in beneficiul utilizatorilor.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">10. Securitate si aspecte legate de confidentialitate</h3>
                <p>In general browserele au integrate setari de confidentialitate care furnizeaza diferite niveluri de acceptare a cookie-urilor, perioada de valabilitate si stergere automata dupa ce utilizatorul a vizitat un anumit site. Alte aspecte de securitate legate de cookie-uri:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Particularizarea setarilor browserului in ceea ce priveste cookie-urile pentru a reflecta un nivel confortabil pentru dumneavoastra al securitatii utilizarii cookie-urilor.</li>
                  <li>Daca sunteti singura persoana care utilizeaza computerul, puteti seta, daca doriti, termene lungi de expirare pentru stocarea istoricului de navigare si a datelor personale de acces.</li>
                  <li>Daca impartiti accesul la calculator, puteti lua in considerare setarea browserului pentru a sterge datele individuale de navigare de fiecare data cand inchideti browserul.</li>
                  <li>Aceasta este o varianta de a accesa site-urile care plaseaza cookie-uri si de a sterge orice informatie de vizitare la inchiderea sesiunii de navigare.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-3">11. Linkuri si informatii suplimentare utile</h3>
                <p>Daca doriti sa aflati mai multe informatii despre cookie-uri si la ce sunt utilizate, recomandam urmatoarele linkuri:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cookiebot: <a href="https://www.cookiebot.com/" className="text-primary hover:underline">https://www.cookiebot.com/</a></li>
                  <li>Declaratie cookie-uri actualizata ultima oara in data de 12/2/24</li>
                  <li>Politica de confidentialitate Digital Ocean: <a href="https://www.digitalocean.com/legal/privacy-policy" className="text-primary hover:underline">https://www.digitalocean.com/legal/privacy-policy</a></li>
                  <li>Google: <a href="https://business.safety.google/privacy/" className="text-primary hover:underline">https://business.safety.google/privacy/</a></li>
                  <li>Microsoft Privacy Statement: <a href="https://www.microsoft.com/en-US/privacy/privacystatement" className="text-primary hover:underline">https://www.microsoft.com/en-US/privacy/privacystatement</a></li>
                  <li>Hotjar Privacy Policy: <a href="https://www.hotjar.com/legal/policies/privacy/" className="text-primary hover:underline">https://www.hotjar.com/legal/policies/privacy/</a></li>
                  <li>Tik Tok Privacy Policy: <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/en" className="text-primary hover:underline">https://www.tiktok.com/legal/page/eea/privacy-policy/en</a></li>
                  <li>Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" className="text-primary hover:underline">https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0</a></li>
                </ul>
                <p>Puteti, in orice moment, sa modificati sau sa va retrageti acordul din Declaratia privind modulele cookie de pe website-ul nostru.</p>
                <p>Nu vom utiliza aceste cookie-uri in alte moduri decat cele indicate in prezenta Politica de Utilizare Cookie-uri.</p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Politica Cookie-uri</h3>
                <p>Acest site utilizeaza cookie-uri pentru a va asigura cea mai buna experienta.</p>
                <p>Cookie-urile sunt mici fisiere de text ce pot fi utilizate de catre site-urile web pentru a face utilizarea lor mai eficienta.</p>
                <p>Legea stipuleaza ca putem stoca cookie-uri pe dispozitivul dvs., in cazul in care ele sunt strict necesare pentru operarea acestui site. Pentru toate celelalte tipuri de cookie-uri avem nevoie de permisiunea dvs.</p>
                <p>Acest site utilizeaza diferite tipuri de cookie-uri. Unele cookie-uri sunt plasate de catre servicii parti terte care apar pe paginile noastre.</p>
                <p>Puteti, in orice moment, sa modificati sau sa va retrageti acordul din Declaratia privind modulele cookie de pe website-ul nostru.</p>
                <p>Aflati mai multe despre cine suntem, cum ne puteți contacta si cum procesam datele personale in Politica noastra de confidentialitate prezenta pe site.</p>
                <p>Cand ne contactati in legatura cu consimtamantul dvs., va rugam sa precizati ID-ul si data consimtamantului dat.</p>
                <p>Consimţământul dvs. se aplică următoarelor domenii: www.traveldeal.ro</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Newsletter />
    </div>
  )
}

export default PoliciesPage
