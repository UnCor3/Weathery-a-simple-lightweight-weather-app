import { Request, Response } from "express";
import fetch from "isomorphic-fetch";

export default (req: Request, res: Response) => {
  const { searchTerm } = req.body;

  console.log(searchTerm);

  fetch(
    `http://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${searchTerm}`
  )
    .then(async (data) => res.json({ success: true, data: await data.json() }))
    .catch((err) => res.json({ success: false, error: err }));
};
