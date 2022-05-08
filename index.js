import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];

const color = randomColor({ hue: hue, luminosity: luminosity });

/*let color = randomColor();

if (!hue) {
  color = randomColor();
} else if (hue && !luminosity) {
  color = randomColor({ hue: hue });
} else {
}
color = randomColor({ hue: hue luminosity:luminosity});
}*/

console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold(`#####     ${color}         #####`));
console.log(chalk.hex(color).bold('#####                     #####'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
