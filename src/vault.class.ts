import vault from 'node-vault';

export class Vault {
	private _client: vault.client;
	get client() {
		if (!this._client) {
			throw new Error('Cannot access client before initializate');
		}
		return this._client;
	}

	constructor(endpoint: string, token: string) {
		const options: vault.VaultOptions = {
			apiVersion: 'v1',
			endpoint,
			token,
		};
		this._client = vault(options);
	}

	auth = async (role_id: string, secret_id: string) => {
		return this.client.approleLogin({ role_id, secret_id});
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

}