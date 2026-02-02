import "./Home.css";
import logo from "../../assets/profilepicture.jpg";

function Home() {
  return (
    <>
      <img className="title__picture" src={logo} />
      <h1 className="title__home">Jurgen van Fraeijenhove</h1>
      <p className="title__semititle">Front-end Designer & Developer 🚀</p>
      <p className="title__description">
        Hallo! 👋 Ik ben een developer met een passie voor design en houd ervan
        om websites te maken en ontwerpen. Wanneer ik niet aan het coderen ben
        speel ik graag een spelletje 🎮
      </p>
    </>
  );
}

export default Home;
