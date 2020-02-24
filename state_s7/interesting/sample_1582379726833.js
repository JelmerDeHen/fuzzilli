function main() {
let v1 = undefined;
let v3 = this;
let v4 = v3;
const v7 = new Proxy(v4,Object);
// v7 = .unknown
const v8 = Object.freeze(v7);
// v8 = .undefined
function v10(v11,v12,v13,v14,v15) {
    'use strict'
}
const v16 = v10.toLocaleString();
// v16 = .unknown
const v18 = [];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v19 = {a:v18};
// v19 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v20 = {__proto__:eval,constructor:v19,length:v18};
// v20 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"], withMethods: ["__proto__"])
try {
    let v23 = 0;
    const v24 = v20.__proto__(v16,v23,19873,Symbol,eval);
    // v24 = .unknown
} catch(v25) {
    const v26 = eval(v16);
    // v26 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
}
%NeverOptimizeFunction(main);
main();
