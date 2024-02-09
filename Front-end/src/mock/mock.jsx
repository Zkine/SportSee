import { Data } from "../data_mock/data.js";
import Modelisation from "../components/modelisation.jsx";

export default function Mock(userId) {
  const DataBase = [
    ...Data.USER_MAIN_DATA,
    ...Data.USER_ACTIVITY,
    ...Data.USER_AVERAGE_SESSIONS,
    ...Data.USER_PERFORMANCE,
  ];
  const userData = DataBase.filter(
    (el) => el.id === userId || el.userId === userId
  );
  const value = new Modelisation(userData);

  return {
    firstName: value._firstName,
    activity: value._activity,
    sessions: value._sessionData,
    performace: value._perfData,
    score: value._score,
    calories: value._calories,
    proteins: value._proteins,
    carbohydrates: value._carbohydrates,
    lipids: value._lipids,
  };
}
