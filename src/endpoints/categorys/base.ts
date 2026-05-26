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
	serializerObject: Category,
};