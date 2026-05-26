import { Hono } from "hono";
import { fromHono } from "chanfana";
import { SupplierList } from "./supplierList";
import { SupplierCreate } from "./supplierCreate";
import { SupplierRead } from "./supplierRead";
import { SupplierUpdate } from "./supplierUpdate";
import { SupplierDelete } from "./supplierDelete";
import { Supplier } from "./base";

export const supplierRouter = fromHono(new Hono());

supplierRouter.get("/", SupplierList);
supplierRouter.post("/", SupplierCreate);
supplierRouter.get("/:id", SupplierRead);
supplierRouter.put("/:id", SupplierUpdate);
supplierRouter.delete("/:id", SupplierDelete);