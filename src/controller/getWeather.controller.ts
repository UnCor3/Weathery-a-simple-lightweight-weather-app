import { Request, Response } from "express";
import fetch from "isomorphic-fetch";

export default (req: Request, res: Response) => {
  const { country } = req.params;
  console.log(country);

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${country}&aqi=no`
  )
    .then(async (data) => {
      const response = await data.json();
      if (response.error) return res.render("404", { err: "no-page" });

      res.render("weather", { data: response });
    })
    .catch((err) => res.render("404", { err: "fetch-err", errMes: err }));
};
