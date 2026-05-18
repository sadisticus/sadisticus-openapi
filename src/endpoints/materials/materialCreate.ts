import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialModel } from "./base";

export class MaterialCreate extends D1CreateEndpoint<HandleArgs> {
	_meta = {
		model: MaterialModel,
		fields: MaterialModel.schema.pick({
			// this is purposely missing the id, because users shouldn't be able to define it
			ref: true,
			CategoryId: true,
            SupplierId: true,
			name: true,
			description: true,
			balance: true,
            MinBalance: true,
		}),
	};
}