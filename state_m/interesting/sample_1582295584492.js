function main() {
function v4(v5,v6,v7,v8,v9) {
    'use strict'
}
const v10 = v4.toLocaleString();
// v10 = .unknown
try {
    const v13 = eval(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
