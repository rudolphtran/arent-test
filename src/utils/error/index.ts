export const ErrorCode = {
	NOT_INITIALIZED: 1,
	NOT_FOUND: 2,
	NOT_AUTHORIZED: 3,
}


export class CustomError extends Error {
	private errCode: number;
	constructor(errorCode: number, message: string) {
		super(message);
		this.errCode = errorCode;
	}

	public get errorCode(): number {
		return this.errCode;
	}

}