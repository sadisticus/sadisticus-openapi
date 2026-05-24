import { ref } from "process";
import { z } from "zod"; 

export const Voyage = z.object({
    id: z.number().int(),
    SupplierId: z.number().int(),
    MaterialId: z.number().int(),
    Vessel: z.string(),
    PONumber: z.string(),
    DueDate: z.coerce.date().openapi({format: "date-time"}),
    VesselETA: z.coerce.date().openapi({format: "date-time"}),
    ArrivedDate: z.coerce.date().nullable().openapi({format: "date-time"}),
});

export const VoyageModel = {
    tableName: "Voyage",
    primaryKeys: ["id"],
    schema: Voyage,
    serializerObject: Voyage,
};
