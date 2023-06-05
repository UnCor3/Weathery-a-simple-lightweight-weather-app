import { Request, Response } from "express";
import fetch from "isomorphic-fetch";

export default async (req: Request, res: Response) => {
  const featured = ["London", "Berlin", "New York", "Ankara"];

  const fetches = featured.map((item) => {
    return fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${item}&aqi=no`
    );
  });

  const responses = await Promise.all([...fetches]);
  const featuredPlaces = await Promise.all(
    responses.map(async (res) => await res.json())
  );
  res.render("index.ejs", { featuredPlaces });
};
