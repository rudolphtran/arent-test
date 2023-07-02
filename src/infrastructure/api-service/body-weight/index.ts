import { BodyWeightDataResponse, AchivementDataResponse } from "./types";
import { dataSample } from "./sample";
import {sleep} from '../../../utils';

export class BodyWeightApiService {
	static async getBodyWeightData(): Promise<BodyWeightDataResponse> {
		return dataSample;
	}

	static async getAchivement(): Promise<AchivementDataResponse>{
		await sleep(100);
		return {
			goal: 100,
			achieved: 50
		};
	}
}
