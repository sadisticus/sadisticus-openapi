import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";
import { z } from "zod";

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

    // ⭐ THIS FIXES THE D1 datetime error
    transform(data: z.infer<typeof VoyageModel.schema>) {
        return {
            ...data,
            DueDate: data.DueDate.toISOString(),
            VesselETA: data.VesselETA.toISOString(),
            ArrivedDate: data.ArrivedDate ? data.ArrivedDate.toISOString() : null,
        };
    }
}