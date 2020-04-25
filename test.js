import test from 'ava';
import execa from 'execa';

test('main', async t => {
	let returnValue;

	try {
		const {stdout, stderr} = await execa('./cli.js');
		returnValue = stdout || stderr;
	} catch (error) {
		const {stdout} = error;
		returnValue = stdout;
	}

	t.regex(returnValue, /down|up|issues/);
});
