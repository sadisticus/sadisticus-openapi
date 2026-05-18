import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialModel } from "./base";

export class MaterialUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: MaterialModel,
		fields: MaterialModel.schema.pick({
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
