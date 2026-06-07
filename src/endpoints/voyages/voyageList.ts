import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
	};

	searchFields = ["PONumber", "vessel"];
	defaultOrderBy = "PONumber DESC";
    filterFields = ["SupplierId", "MaterialId", "ArrivedDate"];
	filters = {
		
		fromdate: {
			column: "ArrivedDate",
			operator: ">=",
			valueMapper: (v: any) => `datetime('${v}T00:00:00Z')`
		},
		todate: {
			column: "ArrivedDate",
			operator: "<=",
			valueMapper: (v: any) => `datetime('${v}T23:59:59Z')`
		}
    };
}
