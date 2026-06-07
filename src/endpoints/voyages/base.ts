import { ref } from "process";
import { z } from "zod"; 
import { id } from "zod/v4/locales";

export const Voyage = z.object({
    id: z.number().int(),
    SupplierId: z.number().int(),
    MaterialId: z.number().int(),
    Vessel: z.string(),
    PONumber: z.number().int(),
    DueDate: z.string().datetime().openapi({ format: "date-time" }),
    VesselETA: z.string().nullable().openapi({ format: "date-time" }),
    ArrivedDate: z.string().nullable().openapi({ format: "date-time" }),
});

export const VoyageModel = {
    tableName: "Voyage",
    primaryKeys: ["id"],
    schema: Voyage,
    serializerObject: Voyage,
};
