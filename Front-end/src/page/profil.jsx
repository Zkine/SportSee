import { useEffect, useState, useRef } from "react";
import Mock from "../mock/mock";
import Api from "../api/api";
import Blackbar from "../components/blackbar";
import Option from "../components/option";
import Button from "../components/button";
import Article from "../components/article";
import Activity from "../components/activity";
import AverageLength from "../components/averagelength";
import Performance from "../components/performance";
import Score from "../components/score";
import Logo from "../assets/logo_sportsee.svg";
import Meditation from "../assets/meditation.svg";
import Swimmer from "../assets/swimmer.svg";
import Bike from "../assets/bike.svg";
import Weight from "../assets/weight.svg";
import Calories from "../assets/calories.svg";
import Proteines from "../assets/proteines.svg";
import Glucides from "../assets/glucides.svg";
import Lipides from "../assets/lipides.svg";
import { Link } from "react-router-dom";

export default function Profil() {
  const refProfil = useRef(null);
  const refReglage = useRef(null);
  const [userId, setUserId] = useState(12);
  const [userData, setUserData] = useState();
  const [optionData, setoptionData] = useState("");

  useEffect(() => {
    document.title = "SportSee";
    async function startFetching() {
      if (optionData === "" || optionData === "mock") {
        const value = Mock(userId);
        setUserData(value);
      } else {
        const value = await Api(userId);
        setUserData(value);
      }
    }
    startFetching();
  }, [optionData, userId]);

  const titre = [
    { id: "1ti", link: "Accueil" },
    { id: "2ti", link: "Profil" },
    { id: "3ti", link: "Réglage" },
    { id: "4ti", link: "Communauté" },
  ];

  const iconeAside = [
    { id: "1ic", src: Meditation, alt: "icône d'une personne qui médite" },
    { id: "2ic", src: Swimmer, alt: "icône d'une personne qui nage" },
    { id: "3ic", src: Bike, alt: "icône d'un cycliste" },
    { id: "4ic", src: Weight, alt: "icone d'un poids de musculation" },
  ];

  const iconeMain = [
    {
      id: "5ic",
      src: Calories,
      alt: "icône d'une flamme de couleur rouge",
      value: userData !== undefined && userData.calories + "kCal",
      categorie: "Calories",
    },
    {
      id: "6ic",
      src: Proteines,
      alt: "icône d'un morceau de viande de couleur bleue",
      value: userData !== undefined && userData.proteins + "g",
      categorie: "Protéines",
    },
    {
      id: "7ic",
      src: Glucides,
      alt: "icône d'une pomme de couleur jaune",
      value: userData !== undefined && userData.carbohydrates + "g",
      categorie: "Glucides",
    },
    {
      id: "8ic",
      src: Lipides,
      alt: "icône d'un hamburger de couleur rose",
      value: userData !== undefined && userData.lipids + "g",
      categorie: "Lipides",
    },
  ];

  function handleClick(e) {
    e.target.textContent === "Profil" &&
      refProfil.current.classList.remove("remove");
    e.target.textContent === "Réglage" &&
      refReglage.current.classList.remove("remove");
  }

  const handleSubmitProfil = (e) => {
    e.preventDefault();

    if (e.currentTarget[0].checked === true) {
      refProfil.current.classList.add("remove");
      refReglage.current.classList.add("remove");
      return setUserId(Number(e.currentTarget[0].getAttribute("value")));
    } else if (e.currentTarget[1].checked === true) {
      refProfil.current.classList.add("remove");
      refReglage.current.classList.add("remove");
      return setUserId(Number(e.currentTarget[1].getAttribute("value")));
    }
  };

  const handleSubmitReglage = (e) => {
    e.preventDefault();

    if (e.currentTarget[0].checked === true) {
      refProfil.current.classList.add("remove");
      refReglage.current.classList.add("remove");
      return setoptionData(e.currentTarget[0].getAttribute("value"));
    } else if (e.currentTarget[1].checked === true) {
      refProfil.current.classList.add("remove");
      refReglage.current.classList.add("remove");
      return setoptionData(e.currentTarget[1].getAttribute("value"));
    }
  };
  return (
    userData && (
      <>
        <header className="header">
          <Blackbar>
            <img src={Logo} alt="logo SportSee" className="header__logo" />
            <nav className="header__nav">
              <ul className="header__ul">
                {titre.map((el) => (
                  <li key={el.id} onClick={handleClick}>
                    <Link className="header__link" href="#">
                      {el.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Blackbar>

          <Option
            onSubmit={handleSubmitProfil}
            ref={refProfil}
            value1={"12"}
            value2={"18"}
          >
            {"Karl"}Cecilia
          </Option>
          <Option
            onSubmit={handleSubmitReglage}
            ref={refReglage}
            value1={"mock"}
            value2={"api"}
          >
            {"Données-Mockées"}requette Api
          </Option>
        </header>
        <main>
          <aside className="aside">
            <Blackbar>
              <p className="aside__text">
                <small className="aside__small">Copyright, SportSee 2020</small>
              </p>
              <div className="aside__div">
                {iconeAside.map((el) => (
                  <div key={el.id}>
                    <Button className="aside__btn">
                      <img src={el.src} alt={el.alt} />
                    </Button>
                  </div>
                ))}
              </div>
            </Blackbar>
          </aside>
          <section>
            <div className="title_container">
              <h1 className="title_container__h">
                Bonjour
                <span className="title_container__span">
                  {userData.firstName}
                </span>
              </h1>
              <p className="title_container__p">
                Félicitations ! Vous avez explosé vos objectifs hier &#128079;
              </p>
            </div>
            <>
              <div className="dashboard">
                <Article className="daily_activity">
                  <Activity data={userData.activity} />
                </Article>
                <Article className="session_duration">
                  <AverageLength data={userData.sessions} />
                </Article>
                <Article className="radar_chart">
                  <Performance data={userData.performace} />
                </Article>
                <Article className="score">
                  <Score data={userData.score} />
                </Article>
                <div className="container_macronutrient">
                  {iconeMain.map((el) => (
                    <Article
                      className="container_macronutrient__item"
                      key={el.id}
                    >
                      <Button className="container_macronutrient__btn">
                        <img src={el.src} alt={el.alt} />
                      </Button>
                      <div className="container_macronutrient__div">
                        <p className="container_macronutrient__p">{el.value}</p>
                        <h3 className="container_macronutrient__h3">
                          {el.categorie}
                        </h3>
                      </div>
                    </Article>
                  ))}
                </div>
              </div>
            </>
          </section>
        </main>
      </>
    )
  );
}
