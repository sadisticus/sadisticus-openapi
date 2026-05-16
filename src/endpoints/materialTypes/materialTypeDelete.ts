import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
	};
}
