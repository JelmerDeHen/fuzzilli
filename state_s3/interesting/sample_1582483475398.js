function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = Symbol.e;
    // v10 = .unknown
    const v11 = Symbol[v10];
    // v11 = .unknown
    let v13 = -1024;
    const v14 = {getPrototypeOf:v11,get:v11};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
    const v16 = new Proxy(Reflect,v14);
    // v16 = .unknown
    Object.__proto__ = v16;
}
const v18 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,constructor:1337,has:v3};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"], withMethods: ["preventExtensions", "set", "isExtensible", "call", "has", "getPrototypeOf", "construct", "deleteProperty", "get", "ownKeys"])
const v20 = new Proxy(v2,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
for (const v22 in "boolean") {
    let v25 = 0;
    do {
        const v27 = [1337,1337,1337,1337];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v30 = [1337,1337,1337,1337,1337];
        // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v31(v32,v33,v34,v35) {
            'use strict'
            try {
                const v37 = Object.apply(v35);
                // v37 = .unknown
            } catch(v38) {
            }
        }
        const v39 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v27,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
        // v39 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["preventExtensions", "has", "call", "setPrototypeOf", "set", "construct", "getPrototypeOf", "deleteProperty", "get", "ownKeys"])
        const v41 = new Proxy(v30,v39);
        // v41 = .unknown
        v41[1] = "MIN_VALUE";
        const v42 = v25 + 1;
        // v42 = .primitive
        v25 = v42;
    } while (v25 < 8);
}
}
%NeverOptimizeFunction(main);
main();
