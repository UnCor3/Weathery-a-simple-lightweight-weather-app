import { NextFunction, Request, Response } from "express";

export default function middleware(
  _: Request,
  res: Response,
  next: NextFunction
) {
  const key = process.env.API_KEY!;

  if (key && key !== "API_KEY_HERE") next();
  else
    res.send(
      'You don\'t have set an API key in .env file,the API is free: <a href="https://www.weatherapi.com/">here</a>,if you set already please rerun the npm run dev command'
    );
}
