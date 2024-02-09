import axios from "axios";
import Modelisation from "../components/modelisation.jsx";

const urlApi = "http://localhost:3000";

export default async function getUser(userId) {
  if (userId) {
    try {
      const responseData = await axios.get(`${urlApi}/user/${userId}`);
      const responseActivity = await axios.get(
        `${urlApi}/user/${userId}/activity`
      );
      const responseAverageSessions = await axios.get(
        `${urlApi}/user/${userId}/average-sessions`
      );
      const responsePerformance = await axios.get(
        `${urlApi}/user/${userId}/performance`
      );
      const userData = [
        responseData.data.data,
        responseActivity.data.data,
        responseAverageSessions.data.data,
        responsePerformance.data.data,
      ];
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
    } catch (error) {
      throw new Error("Error fetching user data", error);
    }
  }
}
getUser();
