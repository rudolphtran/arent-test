import { Descriptor, define } from "../../utils/module-container";

export interface ITestService {
	//return date string
	test(): string;
}

export const ITestServiceDef = define<ITestService>("ITestService");