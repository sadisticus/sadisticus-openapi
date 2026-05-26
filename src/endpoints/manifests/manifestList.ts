import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel } from "./base";

export class ManifestList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
    };

    searchFields = ["ContainerNumber"];
    defaultOrderBy = "ContainerNumber DESC";
}
