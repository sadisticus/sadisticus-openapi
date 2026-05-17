import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CategoryModel } from "./base";

export class CategoryUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: CategoryModel,
		fields: CategoryModel.schema.pick({
            material_type_id: true,
			name: true,
			description: true,
		}),
	};
}
