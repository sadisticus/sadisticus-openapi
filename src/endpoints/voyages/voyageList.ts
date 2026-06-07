import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
	};

	searchFields = ["PONumber", "vessel"];
	defaultOrderBy = "PONumber DESC";
    //filterFields = ["SupplierId", "MaterialId"];
	filters = {
		SupplierId: {
			column: "SupplierId",
            operator: "="
		},
		MaterialId: {
			column: "MaterialId",
			operator: "="
        },
		fromdate: {
			column: "datetime(ArrivedDate)",
			operator: ">=",
			valueMapper: (v) => `datetime('${v}T00:00:00Z')`
		},
		todate: {
			column: "datetime(ArrivedDate)",
			operator: "<=",
			valueMapper: (v) => `datetime('${v}T23:59:59Z')`
		}
    };
}
