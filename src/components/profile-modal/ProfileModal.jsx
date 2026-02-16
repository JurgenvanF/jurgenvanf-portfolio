import "./ProfileModal.scss";
import { useEffect, useState } from "react";
import profile2 from "../../assets/profilepicture2.jpg";
import { Cake, MapPin, Mail } from "lucide-react";

function ProfileModal({ isModalOpen, closeModal }) {
  const [isClosing, setIsClosing] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false); // ← track image

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModalOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
      setImgLoaded(false); // reset loader for next open
    }, 250);
  };

  if (!isModalOpen) return null;

  return (
    <div
      className={`modal__overlay ${isClosing ? "modal__overlay--hide" : "modal__overlay--show"}`}
      onClick={handleClose}
    >
      <div
        className={`modal ${isClosing ? "modal--hide" : "modal--show"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={handleClose}>
          ✕
        </button>

        <div className="modal__header">
          <div className="modal__picture-wrapper">
            {!imgLoaded && <div className="modal__picture-spinner"></div>}
            <img
              className="modal__picture"
              src={profile2}
              alt="Profile"
              onLoad={() => setImgLoaded(true)}
              style={{ display: imgLoaded ? "block" : "none" }}
            />
          </div>

          <h2>Jurgen van Fraeijenhove</h2>
          <p className="modal__info">
            <span>
              <Cake size={16} className="modal__icon" /> 2 januari 2002
            </span>
            <span>
              <MapPin size={16} className="modal__icon" /> Terneuzen, Zeeland
            </span>
            <span>
              <Mail size={16} className="modal__icon" /> jurgenvanf@gmail.com
            </span>
          </p>
        </div>

        <div className="modal__content">
          <p>
            Ik ben een afgestudeerde Media Design / ICT-student met een passie
            voor hoe design het gedrag en de ervaring van mensen beïnvloedt.
            Tijdens mijn studie heb ik veel geleerd over cognitieve psychologie
            en hoe visuele keuzes bepalen hoe mensen informatie verwerken en
            gebruiken.
          </p>
          <p>
            Mijn huidige kracht ligt vooral in front-end development, dankzij de
            praktische ervaring tijdens mijn bachelor. Daarentegen is mijn
            ambitie gericht op UX-design. Ik vind het belangrijk om zowel
            technisch als conceptueel te denken, zodat ideeën niet alleen mooi
            aanvoelen, maar ook goed functioneren. Deze combinatie helpt mij om
            de brug te slaan tussen design en uitvoering.
          </p>
          <p>
            Ik ben erg detailgericht en kan me volledig vastbijten in een
            project. Ik denk continu na over hoe iets logischer, duidelijker en
            visueel sterker kan. Structuur aanbrengen in chaos geeft mij veel
            voldoening: van een onoverzichtelijk Excel-bestand naar een helder
            systeem met een fijne flow en een fijne uitstraling. Overzicht, rust
            en gebruiksgemak vind ik heel belangrijk.
          </p>
          <p>
            In de toekomst zou ik graag willen doorgroeien tot UX-designer. Ik
            ben gemotiveerd om mijn vaardigheden in het ontwikkelen van een
            visuele stijl te verbeteren en mezelf creatief uit te dagen.
          </p>
          <p>
            Buiten design heb ik een grote fascinatie voor de ruimte. Als kind
            wilde ik astronaut worden (stiekem nog steeds) en ik zou later dan
            ook graag een professionele telescoop willen bezitten waarmee ik de
            planeten kan bekijken. Daarnaast heb ik een half jaar in Madrid
            gewoond tijdens mijn Minor, wat mijn zelfstandigheid en persoonlijke
            groei enorm heeft versterkt. Van nature ben ik rustig en werk ik
            graag geconcentreerd door, soms zó gefocust dat ik de tijd vergeet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
