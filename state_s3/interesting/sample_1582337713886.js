function main() {
try {
    const v3 = [1337,1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v4(v5,v6,v7,v8) {
        'use strict'
        const v10 = {has:String,set:v4,getOwnPropertyDescriptor:String,preventExtensions:v8,defineProperty:v4,construct:String,isExtensible:v6,deleteProperty:v4,ownKeys:v7};
        // v10 = .object(ofGroup: Object, withProperties: ["isExtensible", "ownKeys", "__proto__", "preventExtensions"], withMethods: ["defineProperty", "set", "construct", "getOwnPropertyDescriptor", "has", "deleteProperty"])
        let v12 = String;
        const v17 = [388895.60760907806,v12,388895.60760907806];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v18 = RegExp(v17,..."unscopable",v17,5);
        // v18 = .object()
    }
    const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "call", "preventExtensions", "get", "getPrototypeOf", "deleteProperty", "has", "construct", "set", "setPrototypeOf"])
    const v21 = new Proxy(v3,v19);
    // v21 = .unknown
    v21[1] = "MIN_VALUE";
} catch(v22) {
}
}
%NeverOptimizeFunction(main);
main();
