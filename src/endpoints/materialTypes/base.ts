import { z } from "zod";

export const task = z.object({
	id: z.number().int(),
	name: z.string(),
	description: z.string()
});

export const MaterialTypeModel = {
	tableName: "MaterialType",
	primaryKeys: ["id"],
	schema: MaterialType,
	serializer: (obj: Record<string, string | number | boolean>) => {
		return {
			...obj,
			completed: Boolean(obj.completed),
		};
	},
	serializerObject: MaterialType,
};
