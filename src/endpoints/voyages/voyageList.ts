import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
	};

	searchFields = ["PONumber", "vessel"];
	defaultOrderBy = "PONumber DESC";
}
