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
			column: "ArrivedDate",
			operator: ">="
		},
		todate: {
			column: "ArrivedDate",
			operator: "<="
		}
    };
}
