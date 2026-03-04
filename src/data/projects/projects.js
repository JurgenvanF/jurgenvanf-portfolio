import logoIsoaAdvies from "../../assets/projects/isoaadvies/logo.jpg";
import logoEmergis from "../../assets/projects/emergis/logo.jpg";
import logoGardenConnect from "../../assets/projects/gardenconnect/logo.jpg";
import logoMijnNedbase from "../../assets/projects/mijnnedbase/logo.jpg";
import logoKledingbank from "../../assets/projects/kledingbank/logo.jpg";
import logoPortfolio from "../../assets/projects/portfolio/logo.jpg";
import logoSKC from "../../assets/projects/SKC/logo.jpg";
import logoYourSurprise from "../../assets/projects/yoursurprise/logo.jpg";
import logoVinylVault from "../../assets/projects/vinylvault/logo.jpg";

const projects = [
  {
    type: "Website",
    image: logoVinylVault,
    alt: "Vinyl Vault",
    title: "Vinyl Vault",
    description:
      "Vinyl Vault is een platform voor gebruikers om hun vinylcollectie te beheren. Gebruikers kunnen albums toevoegen, bekijken en gedetailleerde informatie per album bekijken, zoals artiest, genre, tracklist en duur. Het platform biedt functionaliteiten zoals zoeken, filteren en het toevoegen van albums die nog niet in de database staan. Daarnaast kunnen gebruikers accounts aanmaken, inloggen, hun profiel en privacy-instellingen beheren, vrienden toevoegen en elkaars collecties bekijken. Ook is er een wishlist-functie om gewenste albums bij te houden. Vinyl Vault ondersteunt momenteel Nederlands en Engels en biedt zo een centrale plek voor het organiseren en delen van vinylcollecties.",

    highlights: [
      "Registratie- en loginfunctionaliteit met Firebase Authentication",
      "Centrale opslag van de vinylcollectie per gebruiker met Firestore",
      "Responsive ontwerp met TailwindCSS en SCSS",
      "Meertalige interface (Nederlands en Engels)",
      "Herbruikbare componenten",
    ],

    tech: ["React", "Next.js", "TypeScript", "Firebase", "SCSS", "TailwindCSS"],

    github: "https://github.com/JurgenvanF/vinyl-app",
    demo: "https://vinyl-app-sigma.vercel.app/",
  },
  {
    type: "Website",
    image: logoPortfolio,
    alt: "Portfolio Website",
    title: "Portfolio Pagina",
    description:
      "Mijn persoonlijke portfolio website, ontwikkeld met React. Hierin laat ik mijn projecten, werkervaring en vaardigheden zien. De website is modulair opgebouwd, responsive en geoptimaliseerd voor een consistente gebruikerservaring.",
    highlights: [
      "Volledige ontwikkeling met React",
      "Responsive design voor mobiel, tablet en desktop",
      "Gebruik van componentgebaseerde structuur en herbruikbare modules",
      "Experimenten met nieuwe technieken: 3D-modellen invoegen, animaties en interactieve elementen",
    ],
    tech: ["React", "JavaScript", "HTML / CSS", "Git"],
    github: "https://github.com/JurgenvanF/jurgenvanf-portfolio",
    demo: "https://jurgenvanfraeijenhove.nl",
  },
  {
    type: "Webapplicatie",
    image: logoMijnNedbase,
    alt: "MijnNedbase",
    title: "MijnNedbase",
    description:
      "Mijn afstudeerproject: een applicatie waarmee Nedbase klanten beter kan informeren over hun producten bij Nedbase. Via verschillende API’s wordt actuele informatie opgehaald en kunnen klanten hun domeinen bekijken en beheren, websites inzien (inclusief wireflows), financieën bijhouden, contactpersonen zien en meer. Tijdens mijn stage heb ik de mogelijkheden onderzocht, een groot deel van het ontwerp gemaakt en wireflows opgesteld. Het eindresultaat is exact volgens deze ontwerpen uitgevoerd in Angular, waarbij de BEM-methode en component-based structuur is toegepast voor overzichtelijkheid en herbruikbaarheid.",
    highlights: [
      "Wireflows en ontwerp volledig zelf uitgewerkt",
      "Implementatie in Angular met component-based structuur",
      "Gebruik van BEM-methodiek en variabelen voor stijlconsistentie",
      "Overzichtelijke en herbruikbare frontend",
      "Webapplicatie gebaseerd op de wireflow voor interne testing",
    ],
    tech: ["Angular", "TypeScript", "SCSS / BEM", "REST APIs", "Figma"],
    private: true,
  },
  {
    type: "Website",
    image: logoIsoaAdvies,
    alt: "IsoAadvies",
    title: "IsoAadvies",
    description:
      "Deze website heb ik als soloproject gemaakt voor het isolatiebedrijf van mijn oom. De website informeert over isolatie, de mogelijkheden en biedt een manier om afspraken in te plannen. Er is een verstopte adminomgeving waarmee afspraken beheerd kunnen worden, inclusief automatische e-mailnotificaties. Daarnaast is er veel aandacht besteed aan responsiveness, animaties en effecten om de site reactiever en gebruiksvriendelijk te maken. Het ontwerp is volledig door mijzelf ontworpen en uitgewerkt, met het logo als enige referentiepunt.",
    highlights: [
      "Volledig eigen ontwerp en uitwerking",
      "Responsive design voor mobiel en desktop",
      "Adminomgeving met automatische mailnotificaties",
      "Animaties en effecten voor meer interactiviteit",
      "Website praktisch identiek aan het originele ontwerp",
    ],
    tech: ["Laravel", "PHP", "HTML / CSS", "JavaScript", "Figma", "Git"],
    github: "https://github.com/JurgenvanF/isoaadvies",
    demo: "https://youtu.be/6Cv1jKSGRQo",
  },
  {
    type: "Webapplicatie",
    image: logoEmergis,
    alt: "Emergis",
    title: "Emergis",
    description:
      "Tijdens een groepsproject hebben we een website gemaakt voor Emergis. Ze zochten naar een nieuw systeem om projecten, financiën, documenten en andere gegevens te beheren, wat voorheen allemaal via Excel gebeurde. Wij hebben hiervoor een passende oplossing gerealiseerd. Ik heb bijgedragen aan het design, de layout en veel van de uitwerking van de website. Het project is gebouwd met het Laravel framework, waarmee ik ondertussen goed overweg kan.",
    highlights: [
      "Overzichtelijk systeem ter vervanging van Excel",
      "Bijdrage aan design en layout",
      "Geoptimaliseerd voor gebruiksvriendelijkheid en efficiënt beheer",
    ],
    tech: ["Laravel", "PHP", "HTML / CSS", "JavaScript", "Figma", "Git"],
    github: "https://github.com/RohanPhaff/Emergis",
    demo: "https://youtu.be/TMLRr-0Nt54",
  },
  {
    type: "Website",
    image: logoGardenConnect,
    alt: "Garden Connect Zeeland",
    title: "Garden Connect Zeeland",
    description:
      "De eerste website die ik maakte buiten de opleiding om tijdens het tweede jaar van mijn studie. Een student company vroeg om een platform waar tuineigenaren verschillende klussen konden aanbieden aan studenten. De website is gebouwd met het Laravel framework en biedt functies zoals het uploaden van foto's van tuinen, omschrijvingen van klussen, aantal verwachte uren en een chatfunctie tussen studenten en eigenaren.",
    highlights: [
      "Studenten kunnen reageren op klussen",
      "Tuineigenaren uploaden foto's en omschrijvingen",
      "Chatfunctie voor directe communicatie",
    ],
    tech: ["Laravel", "PHP", "HTML / CSS", "JavaScript", "Figma", "Git"],
    github: "https://github.com/JurgenvanF/gardenconnect",
    demo: "https://youtu.be/mnJeFQMaU7E",
  },
  {
    type: "Webapplicatie",
    image: logoYourSurprise,
    alt: "YourSurprise TIM",
    title: "YourSurprise - Theme Image Manager (TIM)",
    description:
      "Tijdens mijn stage bij YourSurprise heb ik gewerkt aan TIM, een systeem binnen hun Page Manager om thema-afbeeldingen voor producten te beheren. Het project omvatte het inventariseren van wensen van verschillende afdelingen, het ontwerpen van de interface, implementatie van upload- en koppelfunctionaliteiten met het digital asset platform, en het koppelen van combi-artikelen.",
    highlights: [
      "Interviews met afdelingen om wensen en workflows te inventariseren",
      "Frontend ontwerp en styling van TIM inclusief sidebar en datavakken",
      "Ophalen en koppelen van productinformatie via SQL",
      "Functionaliteiten voor toevoegen, wijzigen en verwijderen van afbeeldingen",
      "Tests geschreven voor nieuwe functionaliteiten en advies opgesteld voor toekomstig beheer",
    ],
    tech: ["PHP", "SQL", "HTML / CSS", "MockFlow", "Git"],
    private: true,
  },
  {
    type: "Data Science",
    image: logoSKC,
    alt: "Strategisch Kenniscentrum Prototype",
    title: "Strategisch Kenniscentrum",
    description:
      "Ontwikkeld als onderdeel van een multidisciplinair studententeam voor het Strategisch Kenniscentrum (SKC). Het doel was een eerste prototype van een applicatie voor verwerking van open bronnen, met een geografische component en geautomatiseerde analysemogelijkheden, gericht op internationale georganiseerde criminaliteit en de bedreigingen daarvan voor Nederland.",
    highlights: [
      "Prototype ontwikkeld op basis van beperkte open source data",
      "Regelmatig feedback gevraagd en verwerkt via gesprekken, mail en presentaties",
      "Project besproken met toenmalig minister van Justitie en Veiligheid, Ferdinand Grapperhaus",
      "Voorzieningen getroffen voor toekomstige doorontwikkeling",
      "Demonstratie opgezet met Elastic en CSV-bestanden om trends in misdaad te analyseren",
      "Promotiefilmpje gemaakt als mogelijke basis voor SKC promotie",
    ],
    tech: ["Elastic", "Open Source Data"],
    private: true,
  },
  {
    type: "Data Science",
    image: logoYourSurprise,
    alt: "YourSurprise Data Science Project",
    title: "YourSurprise - Data Science",
    description:
      "Voor YourSurprise heb ik met een team een voorspellend model ontwikkeld om te voorspellen of klanten terugkomen voor een tweede bestelling. Terugkerende klanten zijn kostenefficiënter dan nieuwe klanten, waardoor dit project waardevol is voor YourSurprise. Het project volgde het CRISP-DM proces voor data science, inclusief data verzameling, opschoning, modellering en evaluatie.",
    highlights: [
      "Data opgeschoond en aangevuld met externe feestdagen-data",
      "Regression model als oefening, daarna Logistic Regression model voor classification",
      "Dataset opgesplitst in 80% training en 20% test, zonder shuffelen om seizoenseffecten te behouden",
      "Recall van het model: 0,644, voldoet aan succescriteria ≥0,6",
      "Adviezen voor verbetering: extra features, andere modellen testen en data cleaning verder optimaliseren",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebook",
      "Matplotlib / Seaborn",
    ],
    private: true,
  },
  {
    type: "Webapplicatie",
    image: logoKledingbank,
    alt: "Kledingbank Zeeland",
    title: "Kledingbank Zeeland",
    description:
      "Het bestaande proces van klantregistratie bij Kledingbank Zeeland gebeurde volledig telefonisch en werd bijgehouden in Excel. Voor dit project heb ik met een team een website ontwikkeld waarmee medewerkers klantengegevens kunnen toevoegen, opzoeken, wijzigen, inzien en verwijderen. Het Excel-systeem is hierdoor vervangen. Hoewel de mogelijkheden voor klanttoegang en zelfregistratie zijn onderzocht, zijn deze vanwege onze beperkte ervaring met inlogsysteem nog niet geïmplementeerd.",
    highlights: [
      "Klantgegevens toevoegen, opzoeken, wijzigen, inzien en verwijderen",
      "Excel-administratie volledig vervangen door de website",
      "Onderzoek gedaan naar klanttoegang voor zelfregistratie",
    ],
    tech: ["HTML / CSS", "JavaScript", "Laravel", "Figma", "Git"],
    github: "https://github.com/JurgenvanF/groep-6-project",
    demo: null,
  },
];

export default projects;
