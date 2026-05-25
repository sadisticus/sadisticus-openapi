import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel, Manifest } from "./base";
import type { z } from "zod";

type ManifestInput = z.infer<typeof Manifest>;
export class ManifestCreate extends D1CreateEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
        fields: ManifestModel.schema.pick({
            VoyageId: true,
            ContainerNumber: true,
            ReceivedDate: true,
        }),
    };

    async beforeCreate(data: ManifestInput, c: any) {
        return {
            ...data,
            ReceivedDate: data.ReceivedDate
                ? data.ReceivedDate.toISOString()
                : null,
        };
    }
}
