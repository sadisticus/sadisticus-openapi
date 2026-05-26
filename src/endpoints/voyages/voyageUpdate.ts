import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageUpdate extends D1UpdateEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
		fields: VoyageModel.schema.pick({
			SupplierId: true,
			MaterialId: true,
			PONumber: true,
			Vessel: true,
			DueDate: true,
			VesselETA: true,
            ArrivedDate: true,
		}),
	};
}
