import {define} from "../../utils/module-container";

export type Achivement = {
	goal: number;
	achieved: number;
}

export interface IAchivementService {
	getAchivement(): Achivement;
	updateAchivement(achivement: Achivement): void;
}

export const IAchivementServiceDef = define<IAchivementService>("IAchivementService");