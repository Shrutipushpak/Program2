/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (mapping[char]) {
            stack.push(mapping[char]);
        } else {
            if (stack.length === 0 || stack.pop() !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
}

module.exports = { isValid };
