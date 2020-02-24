function main() {
let v2 = 0;
let v5 = 0;
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v10(v11,v12,v13,v14) {
    'use strict'
    let v17 = 0;
    while (v17 < 1337) {
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
        const v19 = arguments[1337];
        // v19 = .unknown
        const v20 = arguments[1337];
        // v20 = .unknown
    }
}
const v21 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "preventExtensions", "deleteProperty", "setPrototypeOf", "construct", "get", "ownKeys", "isExtensible", "set", "has", "call"])
const v23 = new Proxy(v9,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
v23.b = v21;
const v24 = v5 + 1;
// v24 = .primitive
v5 = v24;
const v25 = v2 + 1;
// v25 = .primitive
v2 = v25;
}
%NeverOptimizeFunction(main);
main();
