function main() {
const v2 = "object".charAt(-1024);
// v2 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v4 = "object";
const v8 = [-3046294325,-3046294325,-3046294325,-3046294325,-3046294325];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v9(v10,v11,v12,v13) {
    'use strict'
    const v16 = gc(...arguments);
    // v16 = .undefined
    let v19 = 0;
    while (v19 < 1337) {
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        const v21 = arguments[1337];
        // v21 = .unknown
    }
}
const v22 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "set", "construct", "get", "deleteProperty", "ownKeys", "setPrototypeOf", "has", "call", "getPrototypeOf", "preventExtensions"])
const v24 = new Proxy(v8,v22);
// v24 = .unknown
v24[1] = "MIN_VALUE";
v24.b = v22;
const v25 = v4.constructor;
// v25 = .function()
const v26 = v9(1337,v2,v25,v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
