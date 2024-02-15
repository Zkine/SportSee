import { useEffect, useState, useRef } from "react";
import Blackbar from "../components/blackbar";
import Option from "../components/option";
import Button from "../components/button";
import Article from "../components/article";
import Activity from "../components/activity";
import AverageLength from "../components/averagelength";
import Performance from "../components/performance";
import Score from "../components/score";
import Logo from "../assets/logo_sportsee.svg";
import { titre, iconeAside, iconeMain } from "./data-profil";
import { Link } from "react-router-dom";
import Mock from "../mock/mock";
import Api from "../api/api";

export default function Profil() {
  const refProfil = useRef(null);
  const refReglage = useRef(null);
  const refError = useRef(null);
  const [userId, setUserId] = useState(12);
  const [userData, setUserData] = useState(0);
  const [optionData, setoptionData] = useState("");

  if (userData) {
    iconeMain[0].value = userData.calories + "kCal";
    iconeMain[1].value = userData.proteins + "g";
    iconeMain[2].value = userData.carbohydrates + "g";
    iconeMain[3].value = userData.lipids + "g";
  }

  function errorApi() {
    refError.current.classList.remove("remove");
    setTimeout(function () {
      return refError.current.classList.add("remove");
    }, 4000);
  }

  useEffect(() => {
    document.title = "SportSee";
    async function startFetching() {
      if (optionData === "" || optionData === "mock") {
        const value = Mock(userId);
        return setUserData(value);
      } else {
        const value = await Api(userId);
        if (value) {
          return setUserData(value);
        } else {
          errorApi();
        }
      }
    }
    startFetching();
  }, [optionData, userId]);

  function handleClick(e) {
    return e.target.textContent === "Profil"
      ? refProfil.current.classList.remove("remove")
      : e.target.textContent === "Réglage" &&
          refReglage.current.classList.remove("remove");
  }

  const handleSubmitProfil = (e) => {
    e.preventDefault();
    if (e.currentTarget[0].checked === true) {
      return (
        refProfil.current.classList.add("remove"),
        refReglage.current.classList.add("remove"),
        setUserId(Number(e.currentTarget[0].getAttribute("value")))
      );
    } else if (e.currentTarget[1].checked === true) {
      return (
        refProfil.current.classList.add("remove"),
        refReglage.current.classList.add("remove"),
        setUserId(Number(e.currentTarget[1].getAttribute("value")))
      );
    }
  };

  const handleSubmitReglage = (e) => {
    e.preventDefault();
    if (e.currentTarget[0].checked === true) {
      return (
        refProfil.current.classList.add("remove"),
        refReglage.current.classList.add("remove"),
        setoptionData(e.currentTarget[0].getAttribute("value"))
      );
    } else if (e.currentTarget[1].checked === true) {
      return (
        refProfil.current.classList.add("remove"),
        refReglage.current.classList.add("remove"),
        setoptionData(e.currentTarget[1].getAttribute("value"))
      );
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
            name1={"profil"}
            name2={"profil"}
            value1={"12"}
            value2={"18"}
          >
            {"Karl"}Cecilia
          </Option>
          <Option
            onSubmit={handleSubmitReglage}
            ref={refReglage}
            name1={"reglage"}
            name2={"reglage"}
            value1={"mock"}
            value2={"api"}
          >
            {"Mock"}Api
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
                <div ref={refError} className="data_erreur remove">
                  <p>Le serveur ne répond pas !!!</p>
                </div>
              </div>
            </>
          </section>
        </main>
      </>
    )
  );
}
