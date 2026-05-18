import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialModel } from "./base";

export class MaterialRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: MaterialModel,
	};
}