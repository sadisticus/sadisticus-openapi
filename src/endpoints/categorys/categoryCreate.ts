import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { Category, CategoryModel } from "./base";

export class CategoryCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: Category,
		fields: Category.pick({
			// this is purposely missing the id, because users shouldn't be able to define it
            material_type_id: true,
			name: true,
			description: true,
		}),
	};
}