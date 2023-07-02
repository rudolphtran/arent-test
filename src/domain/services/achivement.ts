import { Achivement, IAchivementService, IAchivementServiceDef } from "../entities/achivement";
import { injectable, singleton } from "../../utils/module-container";
import {ErrorCode, CustomError} from "../../utils/error";

@injectable()
@singleton(IAchivementServiceDef)
export class AchivementService implements IAchivementService {
	private achivement: Achivement|null = null;
	
	public getAchivement(): Achivement {
		if(this.achivement === null){
			throw new CustomError(ErrorCode.NOT_INITIALIZED, "Achivement not initialized")
		}
		return this.achivement;
	}

	public updateAchivement(achivement: Achivement): void {
		this.achivement = achivement;
		console.log("Achivement updated");
	}
}