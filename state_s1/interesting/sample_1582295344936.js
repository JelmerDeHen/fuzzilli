function main() {
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        v12[3] = v12;
    } catch(v13) {
        function v24(v25,v26,v27,v28,v29) {
            'use strict'
        }
        const v44 = v24.toLocaleString();
        // v44 = .unknown
        const v47 = eval(v44);
        // v47 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    }
    return v7;
}
const v68 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v68 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "get", "preventExtensions", "set", "ownKeys", "isExtensible", "getPrototypeOf", "setPrototypeOf", "has", "call"])
const v70 = new Proxy(v7,v68);
// v70 = .unknown
v70[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
