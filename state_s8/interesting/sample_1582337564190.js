function main() {
try {
    const v3 = [1337,1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    function v4(v5,v6,v7,v8) {
        'use strict'
        const v10 = {has:String,set:v4,getOwnPropertyDescriptor:String,preventExtensions:v8,defineProperty:v4,construct:String,isExtensible:v6,deleteProperty:v4,ownKeys:v7};
        // v10 = .object(ofGroup: Object, withProperties: ["ownKeys", "isExtensible", "__proto__", "preventExtensions"], withMethods: ["defineProperty", "deleteProperty", "set", "construct", "getOwnPropertyDescriptor", "has"])
        let v12 = String;
        const v17 = [388895.60760907806,v12,388895.60760907806];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v18 = RegExp(v17,..."unscopable",v17,5);
        // v18 = .object()
    }
    const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "preventExtensions", "set", "has", "setPrototypeOf", "getPrototypeOf", "construct", "isExtensible", "ownKeys", "deleteProperty"])
    const v21 = new Proxy(v3,v19);
    // v21 = .unknown
    v21[1] = "MIN_VALUE";
} catch(v22) {
}
}
%NeverOptimizeFunction(main);
main();
