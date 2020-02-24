function main() {
const v1 = {e:-1501539808};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    let v13 = 0;
    while (v13 < 1337) {
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        let v16 = v1;
        do {
            const v17 = arguments[1337];
            // v17 = .unknown
        } while (v16 < 7);
    }
}
const v18 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "get", "getPrototypeOf", "set", "has", "call", "setPrototypeOf", "preventExtensions", "deleteProperty", "isExtensible", "construct"])
const v20 = new Proxy(v5,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
v20.b = v18;
}
%NeverOptimizeFunction(main);
main();
