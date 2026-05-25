import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel } from "./base";

export class ManifestRead extends D1ReadEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
    };
}
