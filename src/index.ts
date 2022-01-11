import { Vault } from './vault.class';

const start = async () => {
	try {


		const vaultClient = new Vault('http://10.1.0.229:8200', 's.SgQYKH5mn3NhrcUQReRSpsS5');

		const auth = await vaultClient.auth('12ae2e7a-25a7-d2a5-f3d4-ea2ec263b2a4', '9eafbe6c-b7f3-71ab-2bf2-3f40d8ab5d6f');
		console.log(auth.auth.client_token);

		const vaultClient2 = new Vault('http://10.1.0.229:8200', auth.auth.client_token);
		const readPath = await vaultClient2.read('kv/data/erp/ms-0/development');
		console.log(readPath);

		/* 		const writePath = await vaultClient.write('kv/data/ms-0', { data: { mongo: 'mongouri', kafka: 'broker1' } });
				console.log(writePath); */

		/* 				const readPath = await vaultClient.read('kv/data/erp/ms-0/development');
						console.log(readPath); */

		/* 		const deletePath = await vaultClient.delete('kv/data/ms-0');
				console.log(deletePath); */

		/* 		const request = await vaultClient.request({
					path: '/kv/data/ms-0',
					method: 'PATCH',
					json: {
						data: {
							mongo: 'mongouri-update'
						}
					},
					headers: { 'Content-Type': 'application/merge-patch+json' }
				});
				console.log(request); */

	} catch (error: any) {
		console.log(error.response);
	}
};

start();