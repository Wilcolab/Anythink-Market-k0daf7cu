/**
 * Converts a string or multiple strings into camelCase format.
 * 
 * @function camelCase
 * @param {...string} args - One or more strings to be converted to camelCase.
 *                           Strings can be separated by spaces, hyphens, underscores, or forward slashes.
 * @returns {string} The converted camelCase string where the first word is lowercase
 *                   and subsequent words have their first letter capitalized.
 * @throws {Error} If no arguments are provided.
 * @throws {Error} If any argument is not a string.
 * @throws {Error} If the input contains no valid words after splitting.
 * 
 * @example
 * camelCase('she/is/GOOD'); // Returns: 'sheIsGood'
 * @example
 * camelCase('hello-world test'); // Returns: 'helloWorldTest'
 */

/**
 * Converts a string or multiple strings into dot.case format.
 * 
 * @function dotCase
 * @param {...string} args - One or more strings to be converted to dot.case.
 *                           Strings can be separated by spaces, hyphens, underscores, or forward slashes.
 * @returns {string} The converted dot.case string where all words are lowercase
 *                   and joined with dots as separators.
 * @throws {Error} If no arguments are provided.
 * @throws {Error} If any argument is not a string.
 * @throws {Error} If the input contains no valid words after splitting.
 * 
 * @example
 * dotCase('she/is/GOOD'); // Returns: 'she.is.good'
 * @example
 * dotCase('hello-world test'); // Returns: 'hello.world.test'
 */
function camelCase(...args) {
    // Error handling for no arguments
    if (args.length === 0) {
        throw new Error('At least one argument is required');
    }

    // Error handling for non-string inputs
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'string') {
            throw new Error(`Argument at index ${i} must be a string, received ${typeof args[i]}`);
        }
    }

    // Join all arguments and split by common separators
    const combined = args.join(' ');
    const words = combined.split(/[\s\-_/]+/).filter(word => word.length > 0);

    // Error handling for empty input
    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, others are capitalized
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Example usage:
console.log(camelCase('she/is/GOOD')); // sheIsGood
console.log(camelCase('hello-world test')); // helloWorldTest

function dotCase(...args) {
    // Error handling for no arguments
    if (args.length === 0) {
        throw new Error('At least one argument is required');
    }

    // Error handling for non-string inputs
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'string') {
            throw new Error(`Argument at index ${i} must be a string, received ${typeof args[i]}`);
        }
    }

    // Join all arguments and split by common separators
    const combined = args.join(' ');
    const words = combined.split(/[\s\-_/]+/).filter(word => word.length > 0);

    // Error handling for empty input
    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to dot.case
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
console.log(dotCase('she/is/GOOD')); // she.is.good
console.log(dotCase('hello-world test')); // hello.world.test
