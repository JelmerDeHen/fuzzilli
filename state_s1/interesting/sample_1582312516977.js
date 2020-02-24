function main() {
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v8 = "function".includes(v7,v6);
        // v8 = .boolean
    } catch(v9) {
    }
}
const v10 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "set", "get", "ownKeys", "call", "getPrototypeOf", "setPrototypeOf", "deleteProperty", "construct", "preventExtensions"])
const v12 = new Proxy(RegExp,v10);
// v12 = .unknown
let v14 = 13.37;
const v17 = [13.37,13.37,-4294967297,-4294967297];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = [v17,5,v17];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = v19.push(v14);
// v20 = .integer
const v21 = v20 + 1;
// v21 = .primitive
let v22 = v19;
const v23 = RegExp("isConcatSpreadable");
// v23 = .object()
const v27 = v3(v21,2,v22,v23);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
