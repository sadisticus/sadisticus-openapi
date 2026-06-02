import { Hono } from "hono";
import { fromHono } from "chanfana";
import { ManifestList } from "./manifestList";
import { ManifestCreate } from "./manifestCreate";
import { ManifestRead } from "./manifestRead";
import { ManifestUpdate } from "./manifestUpdate";
import { ManifestDelete } from "./manifestDelete";

export const manifestRouter = fromHono(new Hono());

manifestRouter.get("/",(c) => new ManifestList(c));
manifestRouter.post("/", (c) => new ManifestCreate(c));
manifestRouter.get("/:id", (c) => new ManifestRead(c));
manifestRouter.put("/:id", (c) => new ManifestUpdate(c));
manifestRouter.delete("/:id", (c) => new ManifestDelete(c));

