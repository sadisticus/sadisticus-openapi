import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageDelete extends D1DeleteEndpoint<HandleArgs> {
    _meta = {
        model: VoyageModel,
    };
}
