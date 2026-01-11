function toCamelCase(str) {
    return str
        .split(/[-_\s]+/) // Split on hyphens, underscores, or spaces
        .map((word, index) => {
            // Lowercase the first word, capitalize first letter of subsequent words
            return index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber