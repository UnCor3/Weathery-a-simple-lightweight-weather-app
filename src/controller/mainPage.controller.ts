import { Request, Response } from "express";
import fetch from "isomorphic-fetch";

export default async (_: Request, res: Response) => {
  const featured = ["London", "Berlin", "New York", "Ankara"];

  const fetches = featured.map((item) => {
    return fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${item}&aqi=no`
    ).then((res) => res.json());
  });

  const featuredPlaces = await Promise.all(fetches);
  res.render("index.ejs", { featuredPlaces });
};
