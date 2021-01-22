#!/usr/bin/env node
var followers = require('./App'),
chalk = require('chalk');
(async () => {
var follow = await followers(process.argv[2] || 'github')
console.log(chalk.cyanBright.bold(`${follow.uname} has ${follow.no} followers  `))
follow.followers.map(name => console.log(chalk.bold.yellowBright(` \n ${name.login} \n`)))
})();