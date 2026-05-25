import { Hono } from "hono";
import { fromHono } from "chanfana";
import { ManifestList } from "./manifestList";
import { ManifestCreate } from "./manifestCreate";
import { ManifestRead } from "./manifestRead";
import { ManifestUpdate } from "./manifestUpdate";
import { ManifestDelete } from "./manifestDelete";
import { Manifest } from "./base";

export const manifestRouter = fromHono(new Hono());

manifestRouter.get("/", ManifestList);
manifestRouter.post("/", ManifestCreate);
manifestRouter.get("/:id", ManifestRead);
manifestRouter.put("/:id", ManifestUpdate);
manifestRouter.delete("/:id", ManifestDelete);

