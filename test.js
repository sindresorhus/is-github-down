import test from 'ava';
import execa from 'execa';

test('main', async t => {
	let returnValue;

	try {
		returnValue = await execa('./cli.js');
	} catch (err) {
		returnValue = err.stderr;
	}

	t.true(/down|up/.test(returnValue));
});
