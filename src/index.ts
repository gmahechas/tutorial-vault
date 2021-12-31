import { Vault } from './vault.class';

const start = async () => {
	try {
		const vaultClient = new Vault();

		/* 		const writePath = await vaultClient.write('kv/data/ms-0', { data: { mongo: 'mongouri', kafka: 'broker1' } });
				console.log(writePath); */

		/* 		const readPath = await vaultClient.read('kv/data/ms-0');
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