/**
 * format string
 * @param {*string} v 
 * @param {*number} length 
 * @param {*string} symbol 
 */
export function numberFormat(v, length = 3, symbol = '.') {
    if (v.toString().length <= length) return v
    v = v.toString().split('')
    var r = ''
    for (var i = 0; i < v.length; i++) {
        if (i % length == (v.length % length)) {
            r += symbol + v[i];
        } else {
            r += v[i];
        }
    }
    if (r.substring(0, 1) == symbol) {
        r = r.substring(1)
    }
    return r
}

/**
 * sub string to product name
 * @param {*string} input 
 * @param {*integer} length 
 */
export function subProductName(input, length = 20) {
    return input.length > 20 ? input.substring(0, length) + '...' : input;
}