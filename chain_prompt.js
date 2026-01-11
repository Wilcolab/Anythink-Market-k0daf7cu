function toKebabCase(str) {
    // Check if input is a valid string
    if (typeof str !== 'string') {
        return '';
    }

    // Replace separators (spaces, underscores, dots) with hyphens
    // Then convert to lowercase
    // Handle camelCase by inserting hyphen before uppercase letters
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase
        .replace(/[\s_\.]+/g, '-') // spaces, underscores, dots
        .toLowerCase()
        .replace(/-+/g, '-') // remove multiple consecutive hyphens
        .replace(/^-|-$/g, ''); // remove leading/trailing hyphens
}