import "reflect-metadata";
import config from "./config";
import express from "express";
import loaders from "./loaders";
import errorHandler from "./errors/error.handler";

const app = express();

async function startServer(): Promise<void> {
  await loaders(app);

  errorHandler(app);

  app
    .listen(config.port, () => {
      console.log(`server started @ port ${config.port}`);
    })
    .on("error", (err) => {
      console.error(err);
      process.exit(1);
    });
}
startServer();

export default app;
