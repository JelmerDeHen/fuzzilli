function main() {
function v4(v5,v6,v7,v8,v9) {
    'use strict'
}
const v10 = v4.toLocaleString();
// v10 = .unknown
try {
    const v13 = eval(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
