import { z } from "zod";

export const MaterialType = z.object({
	id: z.number().int(),
	name: z.string(),
	description: z.string()
});

export const MaterialTypeModel = {
	tableName: "MaterialType",
	primaryKeys: ["id"],
	schema: MaterialType,
	
	serializerObject: MaterialType,
};
