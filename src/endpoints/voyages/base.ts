import { ref } from "process";
import { z } from "zod"; 

export const Voyage = z.object({
    id: z.number().int(),
    SupplierId: z.number().int(),
    MaterialId: z.number().int(),
    Vessel: z.string(),
    PONumber: z.string(),
    DueDate: z.date(),
    VesselETA: z.date().nullable(),
    ArrivedDate: z.date().nullable(),
});

export const VoyageModel = {
    tableName: "Voyage",
    primaryKeys: ["id"],
    schema: Voyage,
    serializerObject: Voyage,
};