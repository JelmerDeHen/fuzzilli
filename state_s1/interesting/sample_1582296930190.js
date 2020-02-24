function main() {
function v1(v2,v3,v4,v5,v6) {
    'use strict'
}
const v7 = v1.toLocaleString();
// v7 = .unknown
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
let v20 = 10;
function v22(v23,v24) {
    const v26 = {__proto__:536870912};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
let v32 = 0;
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = eval(v7);
    // v37 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
}
%NeverOptimizeFunction(main);
main();
