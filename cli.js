#!/usr/bin/env node
'use strict';
const meow = require('meow');
const got = require('got');

meow(`
	Usage
	  $ is-github-down
	  🦄  It's down. Play with your 😸/🐶! And stay home!
`);

(async () => {
	const {status} = await got('https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json', {
		timeout: 10000,
		retry: 2
	}).json();

	if (['major', 'critical'].includes(status.indicator)) {
		console.log('\n🦄  It\'s down. Play with your 😸/🐶! And stay home!\n');
		console.log('Status page: https://githubstatus.com');
		process.exitCode = 1;
		return;
	}

	if (status.indicator === 'minor') {
		console.log('\n🤔 There might be some issues. Probably better to play with your 😸/🐶 instead! Also stay at home!\n');
		console.log('Status page: https://githubstatus.com');
		process.exitCode = 1;
		return;
	}

	console.error('\n 🐈  It\'s up. Go back to work!');
	process.exitCode = 0;
})();
