import { Hono } from "hono";
import { fromHono } from "chanfana";
import { MaterialList } from "./materialList";
import { MaterialCreate } from "./materialCreate";
import { MaterialRead } from "./materialRead";
import { MaterialUpdate } from "./materialUpdate";
import { MaterialDelete } from "./materialDelete";
import { Material } from "./base";

export const materialRouter = fromHono(new Hono());

materialRouter.get("/", MaterialList);
materialRouter.post("/", MaterialCreate);
materialRouter.get("/:id", MaterialRead);
materialRouter.put("/:id", MaterialUpdate);
materialRouter.delete("/:id", MaterialDelete);