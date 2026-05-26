import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialModel } from "./base";

export class MaterialList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: MaterialModel,
	};

	searchFields = ["ref, name", "decription"];
	defaultOrderBy = "name DESC";
}