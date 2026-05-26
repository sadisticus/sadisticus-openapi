import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
	};
}