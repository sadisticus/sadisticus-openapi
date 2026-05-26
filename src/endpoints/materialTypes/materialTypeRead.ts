import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MaterialTypeModel } from "./base";

export class MaterialTypeRead extends D1ReadEndpoint<HandleArgs> {
	_meta = {
		model: MaterialTypeModel,
	};
}