import vault from 'node-vault';

export class Vault {
	private _client: vault.client;
	get client() {
		if (!this._client) {
			throw new Error('Cannot access client before initializate');
		}
		return this._client;
	}
	constructor() {
		const options: vault.VaultOptions = {
			apiVersion: 'v1',
			endpoint: 'http://10.1.0.229:8200',
			token: 's.jtG9aWhEZ6fX6CGbppKtQqVQ',
		};
		this._client = vault(options);
	}

	status = async () => {
		console.log(this);
		return await this.client.status();
	}

	write = async (path: string, data: any) => {
		return await this.client.write(path, data);
	}

	read = async (path: string) => {
		return await this.client.read(path);
	}

	delete = async (path: string) => {
		return await this.client.delete(path);
	}

	request = async (requestOptions: vault.RequestOption) => {
		return await this.client.request(requestOptions);
	}

	auths = async () => {
		return await this.client.auths();
	}
}