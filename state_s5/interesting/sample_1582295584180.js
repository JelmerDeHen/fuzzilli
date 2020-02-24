function main() {
function v4(v5,v6,v7,v8,v9) {
    'use strict'
}
const v10 = v4.toLocaleString();
// v10 = .unknown
try {
    const v13 = eval(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
