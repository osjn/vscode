/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable, } from 'vs/base/common/lifecycle';
import { IUserData, IUserDataSyncStoreService } from 'vs/platform/userDataSync/common/userDataSync';
import { IProductService } from 'vs/platform/product/common/productService';
import { Emitter, Event } from 'vs/base/common/event';

export class UserDataSyncStoreService extends Disposable implements IUserDataSyncStoreService {

	_serviceBrand: any;

	get enabled(): boolean { return !!this.productService.settingsSyncStoreUrl; }

	private _loggedIn: boolean = false;
	get loggedIn(): boolean { return this._loggedIn; }
	private readonly _onDidChangeLoggedIn: Emitter<boolean> = this._register(new Emitter<boolean>());
	readonly onDidChangeLoggedIn: Event<boolean> = this._onDidChangeLoggedIn.event;

	constructor(
		@IProductService private readonly productService: IProductService,
	) {
		super();
	}

	async login(): Promise<void> {
	}

	async logout(): Promise<void> {
	}

	async read(key: string): Promise<IUserData | null> {
		if (!this.enabled) {
			return Promise.reject(new Error('No settings sync store url configured.'));
		}
		return null;
	}

	async write(key: string, content: string, ref: string | null): Promise<string> {
		if (!this.enabled) {
			return Promise.reject(new Error('No settings sync store url configured.'));
		}
		return '';
	}

}
