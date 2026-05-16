import { Hono } from "hono";
import { fromHono } from "chanfana";
import { MaterialTypeList } from "./materialTypeList";
import { MaterialTypeCreate } from "./materialTypeCreate";
import { MaterialTypeRead } from "./materialTypeRead";
import { MaterialTypeUpdate } from "./materialTypeUpdate";
import { MaterialTypeDelete } from "./materialTypeDelete";

export const materialTypeRouter = fromHono(new Hono());

materialTypeRouter.get("/", MaterialTypeList);
materialTypeRouter.post("/", MaterialTypeCreate);
materialTypeRouter.get("/:id", MaterialTypeRead);
materialTypeRouter.put("/:id", MaterialTypeUpdate);
materialTypeRouter.delete("/:id", MaterialTypeDelete);