import { useEffect, useState } from "react";
import Api from "../api/api";
import Blackbar from "../components/blackbar";
import Button from "../components/button";
import Container from "../components/container";
import Activity from "../components/activity";
import Logo from "../assets/logo_sportsee.svg";
import Meditation from "../assets/meditation.svg";
import Swimmer from "../assets/swimmer.svg";
import Bike from "../assets/bike.svg";
import Weight from "../assets/weight.svg";
import { Link } from "react-router-dom";

export default function Profil() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const userId = 12;
    document.title = "SportSee";
    const value = Api(userId);
    return setUserData(value);
  }, []);

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
        <Blackbar className="up_blackbar">
          <img src={Logo} alt="logo SportSee" className="up_blackbar__logo" />
          {titre.map((el) => (
            <nav className="up_blackbar__nav" key={el.id}>
              <ul className="up_blackbar__ul">
                <li>
                  <Link className="up_blackbar__link" href="#">
                    {el.link}
                  </Link>
                </li>
              </ul>
            </nav>
          ))}
        </Blackbar>
      </header>
      <main>
        <aside>
          <Blackbar className="left_blackbar">
            <p className="left_blackbar__text">Copyright, SportSee 2020</p>
            <div className="left_blackbar__div">
              {iconeLeftBar.map((el) => (
                <div key={el.id}>
                  <Button className="left_blackbar__btn">
                    <img src={el.src} alt={el.alt} />
                  </Button>
                </div>
              ))}
            </div>
          </Blackbar>
        </aside>
        <section>
          <div className="title_container">
            <h1 className="title_container__h">Bonjour</h1>
            <p className="title_container__p">
              Félicitations ! Vous avez explosé vos objectifs hier &#128079;
            </p>
          </div>
          <>
            <div className="dashboard">
              <Container className="daily_activity">
                <Activity data={userData} />
              </Container>
              <Container className="session_duration"></Container>
              <Container className="radar_chart"></Container>
              <Container className="score"></Container>
              <div className="container_macronutrient">
                <Container className="container_macronutrient--item"></Container>
                <Container className="container_macronutrient--item"></Container>
                <Container className="container_macronutrient--item"></Container>
                <Container className="container_macronutrient--item"></Container>
              </div>
            </div>
          </>
        </section>
      </main>
    </>
  );
}
