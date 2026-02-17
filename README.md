# Jurgen van Fraeijenhove | Portfolio Pagina

Welkom op mijn portfolio!

In plaats dat ik enkel mijn CV in PDF formaat stuur is het ook leuk (en nuttig) om middels een website gelijk te kunnen laten zien wat mijn vaardigheden zijn. Klik zeker rond op de pagina en kijk door de code!

> (Klik op mijn profielfoto op de homepagina😉)

Hieronder noem ik wat sterke punten van deze portfolio website. Ook benoem ik dingen die ik de volgende keer anders zou doen!

De pagina kan worden bekeken via: [jurgenvanfraeijenhove.nl](https://www.jurgenvanfraeijenhove.nl)

## Sterke punten

### Component-gebaseerde structuur

Ik importeer mijn studies, werkervaringen en projecten door `{data}.js` files te gebruiken. Deze files worden een voor een uitgelezen en vullen het component. Zo heb ik ervoor gezorgd dat de cards die te zien zijn op de opleiding en beroep pagina gebruik maken van hetzelfde component. Dit maakt de code makkelijker te onderhouden, maar ook zorgt het ervoor dat ik het aantal regels code minimaal houd.

- Herbruikbare componenten minimaliseren codeherhaling.
- Eenvoudig om aanpassingen te doen of nieuwe elementen toe te voegen.

**Voorbeelden:** pagina’s **Opleiding**, **Beroep** en **Projecten** zijn component-gebaseerd.

### Gebruik van variabelen

Door kleuren niet te hard-coden zorg ik ervoor dat kleuren in 1 centraal bestand beheerd worden en herbruikbaar zijn. Door bijvoorbeeld één kleur te veranderen bij `--color-text-primary` veranderen alle primaire teksten (zoals H1). Ook word voor elke kleur een `.dark` variant toegevoegd waarmee ook makkelijk support voor darkmode is toegevoegd.

- Kleuren, fonts en andere stijlen zijn opgeslagen in variabelen.
- Snelle aanpassingen mogelijk en overzicht in één centraal bestand.
- Verschil op basis van instellingen (darkmode).

### BEM-methode

De BEM-methode is naar mijn mening de beste manier om consistente naamgeving voor classes te waarborgen. Als een element de class `profession__container__timeline__marker__circle` heeft is het makkelijk om `&__marker` te veranderen naar `&__marker { &__circle {} }`. Dit zorgt ervoor dat alle elementen een unieke, toepasselijke naam hebben maar toch makkelijk te onderhouden blijven.

- SCSS met BEM-structuur voor naamgeving.
- Code blijft gestructureerd en overzichtelijk, ook bij complexere pagina’s.

### Responsive design

Tegenwoordig bezoeken we websites vanaf de hele wereld en alle denkbare apparaten. Het internet is overal. Daarom is het belangrijk dat op elk apparaat de pagina even goed te bereiken, te lezen en te gebruiken is. De website is getest door gebruik te maken van "Responsive Design Mode" dat via "Inspect Element" te gebruiken is, en is bruikbaar op alle apparaten die deze ondersteund.

- Werkt op mobiel, tablet en desktop.
- Consistente en prettige gebruikerservaring op alle apparaten.

### Overzichtelijke presentatie

Wat onderscheidt een front-end developer van een back-end developer? Niet heel moeilijk, een front-end developer houd ervan om informatie op een zo overzichtelijk en mooi mogelijke manier te presenteren. Daarom heb ik met behulp van Figma een mooi ontwerp kunnen maken (met inspiratie van Figma Make) en deze tot zekere hoogte nagemaakt.

- Ontwerp gemaakt en uitgewerkt met Figma.
- Projecten, werkervaring en opleiding worden duidelijk gepresenteerd.
- Kaarten, iconen en highlights maken de pagina scanbaar en aantrekkelijk.

## Verbeterpunten / Leerervaringen

### Vroeger beginnen met componenten
Toen ik begon aan de website wilde ik een snel ontwerp maken om mijn CV op een leuke manier te presenteren en tegelijk te kunnen laten zien wat ik kan. Tegen het einde hiervan werd ik herinnerd aan het concept van componenten. Voor een statische pagina die alleen ik soms zal aanpassen is dit niet per se nodig maar aangezien ik toch ook technische vaardigheden wil laten zien heb ik besloten toch de pagina's waar veel code repetition was om te zetten naar componenten. Dit is alleen een stuk lastiger om achteraf te doen. In de toekomst zou ik hier vooraf meer over nadenken om ervoor te zorgen dat het uiteindelijk een stuk makkelijker is om elementen toe te voegen.

### BEM eerder toepassen
Ditzelfde is het geval met de BEM-methode. Alhoewel de naamgeving overal terug te vinden was, was het me niet gelukt om dit daadwerkelijk toe te passen in de CSS. Weer aan het einde van het traject werd mij verteld dat dit via SCSS werkt. Ook voor technische demonstratie redenen heb ik uiteindelijk de pagina's met componenten omgezet naar SCSS. Nu ik dit weet zal ik dit toepassen in toekomstige projecten.

### Afbeeldingen optimaliseren
De afbeeldingen op de pagina doen er soms lang over om in te laden. Bij het toevoegen van afbeeldingen heb ik niet nagedacht over wat dit met de performance van de website doet.

Al deze verbeterpunten hoop ik in de loop van tijd op mijn portfolio pagina aan te pakken. De status van deze verbeteringen houd ik hieronder bij.

| Verbeterpunt     | Status     |
| ---------------- | ---------- |
| **Componenten**  | ⚠️ - Deels |
| **SCSS - BEM**   | ⚠️ - Deels |
| **Afbeeldingen** | ❌         |

## Installatie & Gebruik

1. Clone deze repository
   ```
   git clone https://github.com/JurgenvanF/jurgenvanf-portfolio.git
   ```
2. Installeer dependencies

   ```
   npm install
   npm install sass
   npm install react-router-dom
   npm install three @react-three/fiber @react-three/drei
   ```

3. Start de ontwikkelserver

   ```
   npm run dev
   ```

4. Open de portfolio pagina in je browser via localhost.
