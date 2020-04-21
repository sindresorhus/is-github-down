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
	try {
		await got.head('https://github.com', {timeout: 10});
		console.error('\n 🐈  It\'s up. Go back to work!');
		process.exitCode = 1;
	} catch {
		console.log('\n🦄  It\'s down. Play with your 😸/🐶! And stay home!');
	}
})();
