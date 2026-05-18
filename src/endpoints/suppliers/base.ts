import { ref } from "process";
import { z } from "zod";

export const Supplier = z.object({
	id: z.number().int(),
	ref: z.string(),
	name: z.string(),
	description: z.string()
});

export const SupplierModel = {
	tableName: "Supplier",
	primaryKeys: ["id"],
	schema: Supplier,
	serializerObject: Supplier,
};