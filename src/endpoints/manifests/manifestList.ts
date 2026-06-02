import { z } from "zod";
import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { ManifestModel } from "./base";

export class ManifestList extends D1ListEndpoint<HandleArgs> {
    _meta = {
        model: ManifestModel,
    };

    // Override default pagination schema
    querySchema = z.object({
        page: z.number().default(1),
        per_page: z.number().max(500).default(100),
    });

    searchFields = ["ContainerNumber"];
    defaultOrderBy = "ContainerNumber DESC";

    filters = {
        voyageid: {
            column: "VoyageId",
            operator: "=",
        },
        containernumber: {
            column: "ContainerNumber",
            operator: "LIKE",
        },
        fromDate: {
            column: "ReceivedDate",
            operator: ">=",
        },
        toDate: {
            column: "ReceivedDate",
            operator: "<=",
        }
    };

}
