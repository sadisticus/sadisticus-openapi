import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CategoryModel } from "./base";

export class CategoryDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: CategoryModel,
	};
}
