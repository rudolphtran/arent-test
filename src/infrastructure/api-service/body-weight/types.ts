export type BodyWeightData = {
	id: number;
	weight: number;
	date: string;
};

export type AchivementDataResponse = {
	goal: number;
	achieved: number;
}

export type BodyWeightDataResponse = Array<BodyWeightData>;