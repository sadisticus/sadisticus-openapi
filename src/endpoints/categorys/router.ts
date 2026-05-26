import { Hono } from "hono";
import { fromHono } from "chanfana";
import { CategoryList } from "./categoryList";
import { CategoryCreate } from "./categoryCreate";
import { CategoryRead } from "./categoryRead";
import { CategoryUpdate } from "./categoryUpdate";
import { CategoryDelete } from "./categoryDelete";

export const categoryRouter = fromHono(new Hono());

categoryRouter.get("/", CategoryList);
categoryRouter.post("/", CategoryCreate);
categoryRouter.get("/:id", CategoryRead);
categoryRouter.put("/:id", CategoryUpdate);
categoryRouter.delete("/:id", CategoryDelete);