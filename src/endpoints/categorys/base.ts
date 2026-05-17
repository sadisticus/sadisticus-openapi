import { z } from "zod";

export const Category = z.object({
	id: z.number().int(),
	MaterialTypeId: z.number().int(),
	name: z.string(),
	description: z.string()
});

export const CategoryModel = {
	tableName: "Category",
	primaryKeys: ["id"],
	schema: Category,
	serializer: (obj: Record<string, string | number | boolean>) => {
		return {
			...obj,
			completed: Boolean(obj.completed),
		};
	},
	serializerObject: Category,
};