import { ref } from "process";
import { z } from "zod";

export const Material = z.object({
	id: z.number().int(),
	CategoryId: z.number().int(),
	SupplierId: z.number().int(),
	ref: z.string(),
	name: z.string(),
	decription: z.string(),
	balance: z.number(),
	MinBalance: z.number()
});

export const MaterialModel = {
	tableName: "Material",
	primaryKeys: ["id"],
	schema: Material,
	serializerObject: Material,
};