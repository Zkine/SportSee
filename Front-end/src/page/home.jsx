import { useEffect } from "react";
import Blackbar from "../components/blackbar";
import Button from "../components/button";
import Logo from "../assets/logo_sportsee.svg";
import Meditation from "../assets/meditation.svg";
import Swimmer from "../assets/swimmer.svg";
import Bike from "../assets/bike.svg";
import Weight from "../assets/weight.svg";

export default function Home() {
  useEffect(() => {
    document.title = "SportSee";
  });

  const titre = [
    { id: "1ti", link: "Accueil" },
    { id: "2ti", link: "Profil" },
    { id: "3ti", link: "Réglage" },
    { id: "4ti", link: "Communauté" },
  ];

  const iconeLeftBar = [
    { id: "1ic", src: Meditation, alt: "icone d'une personne qui médite" },
    { id: "2ic", src: Swimmer, alt: "icone d'une personne qui nage" },
    { id: "3ic", src: Bike, alt: "icone d'un cycliste" },
    { id: "4ic", src: Weight, alt: "icone d'un poids de musculation" },
  ];

  return (
    <>
      <header>
        <Blackbar
          className="up_blackbar"
          classNameNav="up_blackbar__nav"
          classNameUl="up_blackbar__ul"
        >
          <img src={Logo} alt="logo SportSee" className="up_blackbar__logo" />
          {titre.map((el) => (
            <li key={el.id}>
              <a className="up_blackbar__link" href="#">
                {el.link}
              </a>
            </li>
          ))}
        </Blackbar>
      </header>
      <main>
        <Blackbar
          className="left_blackbar"
          classNameNav="left_blackbar__nav"
          classNameUl="left_blackbar__ul"
        >
          <p className="left_blackbar__text">Copyright, SportSee 2020</p>
          {iconeLeftBar.map((el) => (
            <li key={el.id}>
              <Button className="left_blackbar__btn">
                <img src={el.src} alt={el.alt} />
              </Button>
            </li>
          ))}
        </Blackbar>
      </main>
    </>
  );
}
