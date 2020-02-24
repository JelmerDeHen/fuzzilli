function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        this[v8] = v2;
        let v14 = 0;
        const v15 = v10.some(905951317,v9);
        // v15 = .unknown
        const v16 = v14 + 1;
        // v16 = .primitive
        v14 = v16;
        const v18 = Object.defineProperty(this,1337,v10);
        // v18 = .undefined
    } catch(v19) {
    }
    return v6;
}
const v20 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "ownKeys", "has", "construct", "call", "getPrototypeOf", "preventExtensions", "isExtensible", "deleteProperty", "get", "setPrototypeOf"])
const v22 = new Proxy(v5,v20);
// v22 = .unknown
v22.constructor = v2;
}
%NeverOptimizeFunction(main);
main();
