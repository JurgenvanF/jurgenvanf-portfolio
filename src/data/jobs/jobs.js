const jobs = [
  {
    id: "first-challenge",
    status: "active",
    profile: true,
    title: "Op zoek naar een eerste uitdaging",
    subtitle: "Gezellig bedrijf",
    location: "Zeeland, Nederland",
    date: "Nu beschikbaar",
    tag: "Actief op zoek",
    description:
      "Na mijn studies in ICT en Media Design ben ik op zoek naar een eerste uitdaging als frontend developer, met de ambitie om door te groeien richting UX-design. Ik werk graag aan digitale producten die visueel sterk zijn en logisch aanvoelen voor de gebruiker. Ik zoek een team waar ik kan blijven leren, meedenken over gebruiksvriendelijkheid en mijn oog voor detail kan inzetten om van idee tot eindproduct kwaliteit te leveren.",
    focus: null,
    responsibilities: [],
    achievements: [],
    tech: [],
    active: true,
  },
  {
    id: "nedbase",
    status: "inactive",
    profile: false,
    title: "Frontend Developer",
    subtitle: "Nedbase",
    location: "Middelburg, Nederland",
    date: "Februari 2024 - Juni 2024",
    tag: "Stage",
    description:
      "Tijdens mijn stage bij Nedbase heb ik de basis gelegd voor MijnNedbase, een interne tool waarmee klanten een overzichtelijk dashboard krijgen van hun projecten, resultaten, financiën, contactpersonen en nog veel meer. Ik heb interviews gehouden met alle afdelingen, relevante informatie geanalyseerd, feedback van klanten verwerkt en het ontwerp samen met het UX-team verfijnd. Vervolgens heb ik de frontend gebouwd in Angular, gebruikmakend van componenten en gestructureerde CSS voor een consistente en efficiënte gebruikerservaring.",
    focus: "Maatwerk",
    responsibilities: [
      "Interviews afnemen bij alle afdelingen om te bepalen welke informatie relevant is voor de klant",
      "Analyse van klantbehoeften en haalbaarheid van de implementatie",
      "Ontwerpen van de frontend in samenwerking met het UX-team",
      "Implementatie van de frontend van MijnNedbase in Angular, componentgebaseerd",
      "Gebruik van BEM-methodiek voor consistente en onderhoudbare CSS",
    ],
    achievements: [
      "Eerste concept en basis van MijnNedbase zelfstandig opgezet en geïmplementeerd",
      "Feedback van klanten verwerkt om dashboard relevant en overzichtelijk te maken",
      "Nieuwe technieken in Angular en BEM-methodiek toegepast om herbruikbare componenten te creëren",
    ],
    tech: ["Angular", "TypeScript", "SCSS / BEM", "REST APIs", "Figma", "Git"],
  },
  {
    id: "yoursurprise",
    status: "inactive",
    profile: false,
    title: "Software Engineer",
    subtitle: "YourSurprise",
    location: "Zierikzee, Nederland",
    date: "September 2022 - Januari 2023",
    tag: "Stage",
    description:
      "Tijdens mijn stage bij YourSurprise heb ik gewerkt aan TIM (Theme Image Manager) binnen hun Page Manager, een systeem om thema-afbeeldingen voor producten te beheren. Ik heb de wensen van verschillende afdelingen geïnventariseerd, de interface ontworpen, het uploaden en koppelen van afbeeldingen via Bynder geïmplementeerd, combi-artikelen gekoppeld en tests geschreven om de functionaliteit te waarborgen. Tot slot heb ik een advies met wireflow opgesteld voor toekomstige uitbreidingen zoals een afbeeldingplanner en gestructureerde opslag.",
    focus: "Webshop Development",
    responsibilities: [
      "Interviews houden met afdelingen om wensen en huidige workflow te inventariseren",
      "Ontwerpen en stylen van de frontend van TIM, inclusief sidebar en datavakken",
      "Ophalen en koppelen van productinformatie via SQL en integratie voor afbeeldingen",
      "Implementatie van functionaliteiten voor toevoegen, wijzigen en verwijderen van afbeeldingen",
      "Schrijven van tests voor alle nieuwe functionaliteit (happy en unhappy paths)",
    ],
    achievements: [
      "TIM systeem opgezet om thema-afbeeldingen per product te beheren",
      "Integratie gerealiseerd met Bynder en bestaande productinformatie voor juiste afbeeldingskoppelingen",
      "Combi-artikelen succesvol gekoppeld zodat meerdere producten dezelfde afbeelding delen",
      "Testen uitgevoerd en advies opgesteld voor toekomstig beheer en planning van afbeeldingen",
    ],
    tech: ["PHP", "SQL", "HTML / CSS", "MockFlow", "Git"],
  },
];

export default jobs;
