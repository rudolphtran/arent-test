
import { injectable, singleton } from '../../utils/module-container';
import  { ITestService, ITestServiceDef } from './../interfaces/test-service';

@injectable()
@singleton(ITestServiceDef)
export class TestService implements ITestService {
	public test(): string {
		return new Date().toDateString();
	}
}