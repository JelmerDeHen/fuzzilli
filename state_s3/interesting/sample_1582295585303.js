function main() {
function v4(v5,v6,v7,v8,v9) {
    'use strict'
}
const v10 = v4.toLocaleString();
// v10 = .unknown
try {
    const v13 = eval(v10);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
