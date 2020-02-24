function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [v3];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {a:-889833439,valueOf:1337,length:v5,c:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "valueOf", "c"])
const v7 = {defineProperty:1337,getOwnPropertyDescriptor:Map,ownKeys:13.37,isExtensible:v3,preventExtensions:v3};
// v7 = .object(ofGroup: Object, withProperties: ["ownKeys", "isExtensible", "__proto__", "defineProperty", "getOwnPropertyDescriptor", "preventExtensions"])
const v9 = new Proxy(v6,v7);
// v9 = .unknown
const v12 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        let v18 = v16;
        const v19 = v18[1987691190];
        // v19 = .unknown
        const v20 = v18 instanceof v17;
        // v20 = .boolean
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "preventExtensions", "isExtensible", "setPrototypeOf", "getPrototypeOf", "set", "ownKeys", "get", "deleteProperty", "call", "construct"])
const v24 = new Proxy(v12,v22);
// v24 = .unknown
v24.__proto__ = "MIN_VALUE";
v24[1] = "MIN_VALUE";
let v27 = 0;
let v30 = 0;
const v32 = parseInt(v9);
// v32 = .integer
const v33 = v13(v32,Proxy,v22,parseInt);
// v33 = .unknown
const v34 = v30 + 1;
// v34 = .primitive
v30 = v34;
}
%NeverOptimizeFunction(main);
main();
