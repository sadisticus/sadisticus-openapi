import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel } from "./base";

export class ManifestUpdate extends D1UpdateEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
        fields: ManifestModel.schema.pick({
            VoyageId: true,
            ContainerNumber: true,
            ReceivedDate: true,
        }),
    };
}
