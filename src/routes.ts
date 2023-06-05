import { Express } from "express";
import getWeather from "./controller/getWeather.controller";
import autoComplete from "./controller/autoComplete.controller";
import mainPage from "./controller/mainPage.controller";

export default (app: Express) => {
  app.get("/", mainPage);
  app.get("/w/:country", getWeather);
  app.post("/auto-complete", autoComplete);
};
