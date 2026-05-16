import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
		fields: MaterialTypeModel.schema.pick({
			// this is purposely missing the id, because users shouldn't be able to define it
			name: true,
			description: true,
		}),
	};
}