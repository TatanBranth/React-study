/* The goal of this exercise is to convert a string to a new string where each character in the new string is "("
if that character appears only once in the original string, or ")" if that character appears more than once in the
 original string. Ignore capitalization when determining if a character is a duplicate.

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("



 */

/* my solution */
function duplicateEncode(word) {
    let result = '';
    const chars = word.toLowerCase();
    for (const index in chars) {
        if (chars.split(chars[index]).length > 2) {
        result = result.concat(')');
        } else {
        result = result.concat('(');
        }
    }
    return result;
}

/* better solution */
function duplicateEncode2(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}
console.log(duplicateEncode('Success'));
console.log(duplicateEncode2('Success'));

