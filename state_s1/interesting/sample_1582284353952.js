function main() {
const v2 = {d:1337};
// v2 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v5 = [1337,1337,v2,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = "function".includes(v10,v9);
        // v11 = .boolean
    } catch(v12) {
    }
    return v7;
}
const v13 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "deleteProperty", "preventExtensions", "isExtensible", "ownKeys", "get", "setPrototypeOf", "getPrototypeOf", "set", "call"])
const v15 = new Proxy(v5,v13);
// v15 = .unknown
v15[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();
