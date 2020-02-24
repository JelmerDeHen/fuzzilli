function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [v3];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {a:-889833439,valueOf:1337,length:v5,c:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["c", "length", "valueOf", "a", "__proto__"])
const v7 = {defineProperty:1337,getOwnPropertyDescriptor:Map,ownKeys:13.37,isExtensible:v3,preventExtensions:v3};
// v7 = .object(ofGroup: Object, withProperties: ["ownKeys", "getOwnPropertyDescriptor", "defineProperty", "isExtensible", "__proto__", "preventExtensions"])
const v9 = new Proxy(v6,v7);
// v9 = .unknown
const v12 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "call", "has", "isExtensible", "construct", "get", "setPrototypeOf", "deleteProperty", "ownKeys", "getPrototypeOf"])
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
