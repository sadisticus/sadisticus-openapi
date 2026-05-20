import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel, Voyage } from "./base";
import type { z } from "zod";

// Infer the Zod input type
type VoyageInput = z.infer<typeof Voyage>;

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

    // ⭐ Correct hook — do NOT type "c"
    async beforeCreate(data: VoyageInput, c: any) {
        return {
            ...data,
            DueDate: data.DueDate.toISOString(),
            VesselETA: data.VesselETA.toISOString(),
            ArrivedDate: data.ArrivedDate
                ? data.ArrivedDate.toISOString()
                : null,
        };
    }
}

