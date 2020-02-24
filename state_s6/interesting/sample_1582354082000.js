function main() {
const v2 = arguments + 1;
// v2 = .primitive
const v4 = [1337,1337,"MIN_VALUE",1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v12 = 0;
        while (v12 <= 4) {
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
        }
        v9[3] = 0;
    } catch(v17) {
        let v18 = v2;
        const v19 = [];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v20 = {a:v19};
        // v20 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
        const v21 = {__proto__:v9,constructor:v20,length:v19};
        // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
        const v22 = v18 in v21;
        // v22 = .boolean
    }
    return v9;
}
const v23 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:1337,has:v5};
// v23 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__"], withMethods: ["preventExtensions", "deleteProperty", "get", "has", "construct", "isExtensible", "set", "getPrototypeOf", "ownKeys", "call"])
const v25 = new Proxy(v4,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
