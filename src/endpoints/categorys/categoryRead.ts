import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { CategoryModel } from "./base";

export class CategoryRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: CategoryModel,
	};
}