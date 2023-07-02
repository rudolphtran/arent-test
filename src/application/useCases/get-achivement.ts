import { IAchivementServiceDef } from "../../domain";
import {resolveModule} from "../../utils/module-container";
import {BodyWeightApiService} from "../../infrastructure/api-service"
import {getMMYY} from "../../utils/date-time";

export type Achivement = {
	date: string;
	percentile: number;
};

export async function  getAchivement(): Promise<Achivement>{
	const achivementService = resolveModule(IAchivementServiceDef);
	try{
		const achivement = achivementService.getAchivement();
		return {
			percentile: achivement.achieved / achivement.goal * 100,
			date: getMMYY(Date.now())
		}
	}
	catch(e){
		const achive = await BodyWeightApiService.getAchivement();
		achivementService.updateAchivement(achive);
		return {
			percentile: achive.achieved / achive.goal * 100,
			date: getMMYY(Date.now())
		}
	}
}