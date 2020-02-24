function main() {
try {
    const v3 = [];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v4 = {length:1337,e:1337,c:v3,a:1337,toString:"symbol"};
    // v4 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__", "a", "e", "c"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        const v11 = -Infinity;
        // v11 = .float
        const v12 = [v11];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v14 = {constructor:1337,length:4294967297,__proto__:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
        const v16 = v12.toLocaleString(v14,1);
        // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    }
    const v17 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "deleteProperty", "construct", "setPrototypeOf", "ownKeys", "get", "has", "call", "getPrototypeOf", "set"])
    const v19 = new Proxy(v4,v17);
    // v19 = .unknown
    v19[1] = "MIN_VALUE";
} catch(v20) {
}
}
%NeverOptimizeFunction(main);
main();
