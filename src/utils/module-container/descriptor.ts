export type Descriptor<T> = {
	token: symbol;
	serviceIdentifier: string;
}
export function define<T>(serviceIdentifier: string): Descriptor<T> {
	return {
		token: Symbol(serviceIdentifier),
		serviceIdentifier
	}
}