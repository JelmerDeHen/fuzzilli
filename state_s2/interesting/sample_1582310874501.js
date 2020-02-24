function main() {
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v10 = {call:v6};
        // v10 = .object(ofGroup: Object, withProperties: ["call", "__proto__"])
        const v12 = new Proxy(String,v10);
        // v12 = .unknown
        v12.__proto__ = v10;
        const v13 = "function".includes(v8,v7);
        // v13 = .boolean
    } catch(v14) {
    }
    return 0;
}
const v15 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "set", "construct", "ownKeys", "call", "isExtensible", "get", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "deleteProperty"])
const v17 = new Proxy(RegExp,v15);
// v17 = .unknown
let v20 = 13.37;
const v23 = [13.37,13.37,-4294967297,-4294967297];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v25 = [v23,5,v23];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v27 = 0;
const v28 = v25.push(v20);
// v28 = .integer
const v29 = v28 + 1;
// v29 = .primitive
v27 = v29;
v17[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();
