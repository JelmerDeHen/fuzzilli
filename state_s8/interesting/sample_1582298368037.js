function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        function v11(v12,v13,v14,v15,v16) {
            'use strict'
        }
        const v17 = v11.toLocaleString();
        // v17 = .unknown
        const v18 = eval(v17);
        // v18 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
    return v3;
}
const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "preventExtensions", "ownKeys", "deleteProperty", "call", "set", "isExtensible", "setPrototypeOf", "getPrototypeOf", "get"])
const v21 = new Proxy(v3,v19);
// v21 = .unknown
v21[-380524572] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
