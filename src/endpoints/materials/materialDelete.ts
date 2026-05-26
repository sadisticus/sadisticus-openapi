import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialModel } from "./base";

export class MaterialDelete extends D1DeleteEndpoint<HandleArgs> {
	_meta = {
		model: MaterialModel,
	};
}
