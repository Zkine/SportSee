import { Data } from "../data_mock/data.js";
import Modelisation from "../components/modelisation.jsx";

export default function Api(userId) {
  const DataBase = [
    ...Data.USER_MAIN_DATA,
    ...Data.USER_ACTIVITY,
    ...Data.USER_AVERAGE_SESSIONS,
    ...Data.USER_PERFORMANCE,
  ];
  const userData = DataBase.filter(
    (el) => el.id === userId || el.userId === userId
  );
  const value = Modelisation.getmodel(userData);
  return value;
}
