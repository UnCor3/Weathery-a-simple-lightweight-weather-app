import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

const app = express();

dotenv.config();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  routes(app);
});
