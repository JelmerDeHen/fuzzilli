function main() {
function v4(v5,v6,v7,v8,v9) {
    'use strict'
}
const v10 = v4.toLocaleString();
// v10 = .unknown
try {
    const v13 = eval(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
