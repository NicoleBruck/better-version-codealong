// Welcome
// Change 2

// Change 4

// Change 5

// Change 6

// another change

import { compareAsc, format } from 'date-fns';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Mon Jul 03 1995 00:00:00
// ]

console.log('These are the official dates:', dates);

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
