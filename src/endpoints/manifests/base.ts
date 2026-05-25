import { ref } from "process"; 
import { z } from "zod";

export const Manifest = z.object({
    id: z.number().int(),
    VoyageId: z.number().int(),
    ContainerNumber: z.string(),
    ReceivedDate: z.coerce.date().nullable().openapi({ format: "date-time" }),
});

export const ManifestModel = {
    tableName: "Manifest",
    primaryKeys: ["id"],
    schema: Manifest,
    serializerObject: Manifest,
};
