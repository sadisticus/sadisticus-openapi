import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class TaskUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
		fields: MaterialTypeModel.schema.pick({
			name: true,
			description: true,
		}),
	};
}
