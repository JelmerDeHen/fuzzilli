function main() {
try {
    const v3 = [];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v4 = {length:1337,e:1337,c:v3,a:1337,toString:"symbol"};
    // v4 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "e", "toString", "length"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        const v11 = -Infinity;
        // v11 = .float
        const v12 = [v11];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v14 = {constructor:1337,length:4294967297,__proto__:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
        const v16 = v12.toLocaleString(v14,1);
        // v16 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
    const v17 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "isExtensible", "has", "setPrototypeOf", "get", "preventExtensions", "deleteProperty", "construct", "set", "ownKeys", "getPrototypeOf"])
    const v19 = new Proxy(v4,v17);
    // v19 = .unknown
    v19[1] = "MIN_VALUE";
} catch(v20) {
}
}
%NeverOptimizeFunction(main);
main();
