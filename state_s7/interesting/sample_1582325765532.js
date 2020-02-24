function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {a:"MIN_SAFE_INTEGER",constructor:-931982090,e:arguments,b:v4,length:arguments,__proto__:arguments,valueOf:arguments};
// v5 = .object(ofGroup: Object, withProperties: ["b", "e", "a", "constructor", "length", "valueOf", "__proto__"])
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v9(v10,v11,v12,v13) {
    'use strict'
    let v16 = 0;
    while (v16 < 1337) {
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
        let v20 = 0;
        do {
            const v21 = arguments[1337];
            // v21 = .unknown
            const v22 = v20 + 1;
            // v22 = .primitive
            v20 = v22;
        } while (v20 < 7);
        const v23 = [13.37,...v5,0];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    }
}
const v24 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "get", "call", "has", "preventExtensions", "isExtensible", "ownKeys", "construct", "setPrototypeOf", "getPrototypeOf"])
const v26 = new Proxy(v8,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
v26.b = v24;
}
%NeverOptimizeFunction(main);
main();
