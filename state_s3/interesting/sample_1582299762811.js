function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v13 = [1337,1337,1337,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        function v14(v15,v16,v17,v18) {
            'use strict'
            const v22 = JSON.stringify(v18,Reflect,"name");
            // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            return 1337;
        }
        const v23 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "setPrototypeOf", "preventExtensions", "get", "ownKeys", "set", "isExtensible", "call", "deleteProperty", "construct", "getPrototypeOf"])
        const v25 = new Proxy(v13,v23);
        // v25 = .unknown
        v25[1] = "MIN_VALUE";
    }
    return v3;
}
const v26 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "construct", "call", "getPrototypeOf", "setPrototypeOf", "has", "set", "deleteProperty", "preventExtensions", "isExtensible", "ownKeys"])
const v28 = new Proxy(v3,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
