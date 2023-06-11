import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import createError from "http-errors";
import main from "./routes";

const app: Express = express();
const port = 5555 as number;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
  })
);

app.use(helmet());
app.use("/api/v1", main);
app.use("/tmp", express.static("/tmp"));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(createError());
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const Error = err as any;
  if (res.status(Error.status)) {
    res.send({ message: "500: Error something when wrong" });
    // res.send(createError(Error, err));
  }
  next();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
