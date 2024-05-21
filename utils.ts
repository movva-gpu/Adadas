/**
 * @description Coloring functions for `console.log` or other outputs. These functions apply ANSI color codes to text, enhancing readability or for aesthetic purposes in the console. Each method in this class takes a string as input and returns the string formatted with the corresponding ANSI color code.
 * 
 * Basic usage:
 * ```js
 * console.log(coloring.red('Hello World!')); // Displays text in red
 * ```
 * 
 * Using template literals to combine multiple colors:
 * ```js
 * console.log(`${coloring.blue("I'm blue dabedidabedai")}, ${coloring.green("And if I'm green I will die")}...`);
 * ```
 * 
 * @class coloring
 * This class contains static methods for text and background colors. Each method modifies the color of the input or background for the terminal.
 */
export class coloring {
    /**
     * @description Makes the input bright.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bright = (input: any) => '\x1b[1m' + input + '\x1b[0m';

    /**
     * @description Makes the input dim.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static dim = (input: any) => '\x1b[2m' + input + '\x1b[0m';

    /**
     * @description Underlines the input.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static underscore = (input: any) => '\x1b[4m' + input + '\x1b[0m';

    /**
     * @description Makes the input blink.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static blink = (input: any) => '\x1b[5m' + input + '\x1b[0m';

    /**
     * @description Reverses the input color and background.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static reverse = (input: any) => '\x1b[7m' + input + '\x1b[0m';

    /**
     * @description Makes the input hidden.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static hidden = (input: any) => '\x1b[8m' + input + '\x1b[0m';

    /**
     * @description Makes the input black.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static black = (input: any) => '\x1b[30m' + input + '\x1b[0m';

    /**
     * @description Makes the input red.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static red = (input: any) => '\x1b[31m' + input + '\x1b[0m';

    /**
     * @description Makes the input green.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static green = (input: any) => '\x1b[32m' + input + '\x1b[0m';

    /**
     * @description Makes the input yellow.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static yellow = (input: any) => '\x1b[33m' + input + '\x1b[0m';

    /**
     * @description Makes the input blue.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static blue = (input: any) => '\x1b[34m' + input + '\x1b[0m';

    /**
     * @description Makes the input magenta.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static magenta = (input: any) => '\x1b[35m' + input + '\x1b[0m';

    /**
     * @description Makes the input cyan.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static cyan = (input: any) => '\x1b[36m' + input + '\x1b[0m';

    /**
     * @description Makes the input white.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static white = (input: any) => '\x1b[37m' + input + '\x1b[0m';

    /**
     * @description Makes the input gray.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static gray = (input: any) => '\x1b[90m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background black.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgBlack = (input: any) => '\x1b[40m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background red.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgRed = (input: any) => '\x1b[41m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background green.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgGreen = (input: any) => '\x1b[42m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background yellow.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgYellow = (input: any) => '\x1b[43m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background blue.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgBlue = (input: any) => '\x1b[44m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background magenta.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgMagenta = (input: any) => '\x1b[45m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background cyan.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgCyan = (input: any) => '\x1b[46m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background white.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgWhite = (input: any) => '\x1b[47m' + input + '\x1b[0m';

    /**
     * @description Makes the input's background gray.
     * @param {any} input - The value to be formatted.
     * returns {string}  The formatted text.
     */
    static bgGray = (input: any) => '\x1b[100m' + input + '\x1b[0m';
}