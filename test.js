import test from 'ava';
import execa from 'execa';

test(async t => {
	let ret;

	try {
		ret = await execa('./cli.js');
	} catch (err) {
		ret = err.stderr;
	}

	t.true(/down|up/.test(ret));
});
