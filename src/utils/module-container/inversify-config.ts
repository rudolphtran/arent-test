import 'reflect-metadata';
import { Container } from 'inversify';
import * as DI from 'inversify';
import {Descriptor} from './descriptor';

type Constructor<T> = new (...args: never[]) => T

class ModuleContainer{
	private myContainer: DI.Container
	constructor() {
		this.myContainer = new Container();
	}

	public resolve<T>(descriptor: Descriptor<T>): T {
		return this.myContainer.get(descriptor.token);
	}

	public registerSingleton<T>(descriptor: Descriptor<T>, constructor: Constructor<T>): void {
		this.myContainer.bind(descriptor.token).to(constructor).inSingletonScope();
	}
}

const _container = new ModuleContainer();


export const injectable = DI.injectable;
export const inject = (descriptor: Descriptor<any>) => DI.inject(descriptor.token);

export function singleton<T>(descriptor: Descriptor<T>) {
	return function (target: Constructor<T>) {
		_container.registerSingleton(descriptor, target);
	};
}

export function resolveModule<T>(descriptor: Descriptor<T>): T {
	return _container.resolve(descriptor);
} 

if (process.env.NODE_ENV === 'development') {
	// @ts-ignore
	window._container = _container;
}
export default _container;
