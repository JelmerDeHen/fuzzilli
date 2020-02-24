function main() {
try {
    const v3 = [];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v4 = {length:1337,e:1337,c:v3,a:1337,toString:"symbol"};
    // v4 = .object(ofGroup: Object, withProperties: ["e", "c", "a", "toString", "__proto__", "length"])
    function v6(v7,v8,v9,v10) {
        'use strict'
        const v11 = -Infinity;
        // v11 = .float
        const v12 = [v11];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v14 = {constructor:1337,length:4294967297,__proto__:v12};
        // v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
        const v16 = v12.toLocaleString(v14,1);
        // v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    }
    const v17 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "construct", "deleteProperty", "call", "getPrototypeOf", "isExtensible", "setPrototypeOf", "preventExtensions", "set", "has", "get"])
    const v19 = new Proxy(v4,v17);
    // v19 = .unknown
    v19[1] = "MIN_VALUE";
} catch(v20) {
}
}
%NeverOptimizeFunction(main);
main();
