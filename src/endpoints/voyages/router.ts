import { Hono } from "hono";
import { fromHono } from "chanfana";
import { VoyageList } from "./voyageList";
import { VoyageCreate } from "./voyageCreate";
import { VoyageRead } from "./voyageRead"; 
import { VoyageUpdate } from "./voyageUpdate";
import { VoyageDelete } from "./voyageDelete";
import { materialRouter } from "../materials/router";

export const voyageRouter = fromHono(new Hono());

materialRouter.get("/", VoyageList);
voyageRouter.post("/", VoyageCreate);
voyageRouter.get("/:id", VoyageRead);
voyageRouter.put("/:id", VoyageUpdate);
voyageRouter.delete("/:id", VoyageDelete);
