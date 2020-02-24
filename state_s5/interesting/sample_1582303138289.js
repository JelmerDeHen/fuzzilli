function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = Object.getOwnPropertyDescriptors(v7);
        // v9 = .object()
    } catch(v10) {
    }
}
const v11 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:8,construct:v3,get:v3,d:v3,setPrototypeOf:v3,has:v3};
// v11 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["deleteProperty", "get", "call", "has", "set", "construct", "setPrototypeOf", "getPrototypeOf", "preventExtensions", "d"])
const v13 = new Proxy(v2,v11);
// v13 = .unknown
function v14(v15,v16,v17,v18) {
    'use strict'
}
let v19 = v13;
const v22 = new Proxy(v19,Object);
// v22 = .unknown
const v24 = Boolean.species;
// v24 = .unknown
v22[v24] = v14;
}
%NeverOptimizeFunction(main);
main();
