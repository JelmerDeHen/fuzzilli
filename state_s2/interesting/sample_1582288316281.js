function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
    } catch(v10) {
        try {
            const v13 = eval("function");
            // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        } catch(v14) {
        }
    }
    return v1;
}
const v15 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,constructor:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "setPrototypeOf", "getPrototypeOf", "get", "call", "constructor", "deleteProperty", "has", "set", "ownKeys", "construct"])
const v17 = new Proxy(v4,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
