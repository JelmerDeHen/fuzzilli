function main() {
let v1 = RegExp;
let v2 = v1;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v8(v9,v10,v11,v12) {
    'use strict'
    const v15 = Symbol.e;
    // v15 = .unknown
    const v16 = Symbol[v15];
    // v16 = .unknown
    const v17 = {getPrototypeOf:v16,get:v16};
    // v17 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get"])
    const v19 = new Proxy(Reflect,v17);
    // v19 = .unknown
    Object.__proto__ = v19;
}
const v21 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:1337,has:v8};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["getPrototypeOf", "deleteProperty", "isExtensible", "ownKeys", "get", "construct", "call", "has", "set", "preventExtensions"])
const v23 = new Proxy(v7,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
const v24 = new Proxy(v2,Object);
// v24 = .unknown
for (const v26 in "boolean") {
    let v29 = 0;
    do {
        const v30 = v29 + 1;
        // v30 = .primitive
        v29 = v30;
    } while (v29 < 8);
}
const v32 = Symbol.species;
// v32 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v33 = v24[v32];
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
