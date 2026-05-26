import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel } from "./base";

export class ManifestDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
    };
}
