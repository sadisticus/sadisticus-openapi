import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class TaskDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
	};
}
