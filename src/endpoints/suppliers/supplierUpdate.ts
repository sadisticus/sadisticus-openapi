import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { SupplierModel } from "./base";

export class SupplierUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: SupplierModel,
		fields: SupplierModel.schema.pick({
			ref: true,
			name: true,
			description: true,
		}),
	};
}
