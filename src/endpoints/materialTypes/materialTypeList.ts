import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
	};

	searchFields = ["name", "slug", "description"];
	defaultOrderBy = "id DESC";
}
