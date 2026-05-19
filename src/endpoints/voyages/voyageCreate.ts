import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: VoyageModel,
        fields: VoyageModel.schema.pick({
            SupplierId: true,
            MaterialId: true,
            Vessel: true,
            PONumber: true,
            DueDate: true,
            VesselETA: true,
            ArrivedDate: true,
        }),
    };
}

