function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = Symbol.e;
    // v10 = .unknown
    const v11 = Symbol[v10];
    // v11 = .unknown
    const v12 = {getPrototypeOf:v11,get:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
    const v14 = new Proxy(Reflect,v12);
    // v14 = .unknown
    Object.__proto__ = v14;
}
const v16 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,constructor:1337,has:v3};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"], withMethods: ["set", "call", "construct", "isExtensible", "preventExtensions", "getPrototypeOf", "ownKeys", "get", "deleteProperty", "has"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
for (const v20 in "boolean") {
    let v23 = 0;
    do {
        const v25 = [1337,1337,1337,1337];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v28 = [1337,1337,1337,1337,1337];
        // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v29(v30,v31,v32,v33) {
            'use strict'
            try {
                const v35 = Object.construct(v33);
                // v35 = .unknown
            } catch(v36) {
            }
        }
        const v37 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v25,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
        // v37 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "preventExtensions", "call", "set", "ownKeys", "getPrototypeOf", "construct", "get", "has"])
        const v39 = new Proxy(v28,v37);
        // v39 = .unknown
        v39[1] = "MIN_VALUE";
        const v40 = v23 + 1;
        // v40 = .primitive
        v23 = v40;
    } while (v23 < 8);
}
}
%NeverOptimizeFunction(main);
main();
