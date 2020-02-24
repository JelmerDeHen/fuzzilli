function main() {
const v2 = [-2210177596,-2210177596,-2210177596,-2210177596,-2210177596];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v9 = Object.values(v7);
        // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    } catch(v10) {
    }
}
const v11 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:1337,construct:v3,get:v3,d:v3,setPrototypeOf:v3,has:v3};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["set", "getPrototypeOf", "has", "preventExtensions", "construct", "get", "deleteProperty", "call", "setPrototypeOf", "d"])
const v13 = new Proxy(v2,v11);
// v13 = .unknown
function v14(v15,v16,v17,v18) {
    'use strict'
}
let v19 = v13;
const v22 = new Proxy(v19,Object);
// v22 = .unknown
const v24 = Boolean.asyncIterator;
// v24 = .unknown
v22[v24] = v14;
}
%NeverOptimizeFunction(main);
main();
