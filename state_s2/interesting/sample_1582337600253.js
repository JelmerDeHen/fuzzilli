function main() {
try {
    const v3 = [1337,1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v4(v5,v6,v7,v8) {
        'use strict'
        const v10 = {has:String,set:v4,getOwnPropertyDescriptor:String,preventExtensions:v8,defineProperty:v4,construct:String,isExtensible:v6,deleteProperty:v4,ownKeys:v7};
        // v10 = .object(ofGroup: Object, withProperties: ["ownKeys", "preventExtensions", "__proto__", "isExtensible"], withMethods: ["defineProperty", "set", "getOwnPropertyDescriptor", "has", "deleteProperty", "construct"])
        let v12 = String;
        const v17 = [388895.60760907806,v12,388895.60760907806];
        // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v18 = RegExp(v17,..."unscopable",v17,5);
        // v18 = .object()
    }
    const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "set", "has", "construct", "ownKeys", "deleteProperty", "getPrototypeOf", "setPrototypeOf", "get", "call"])
    const v21 = new Proxy(v3,v19);
    // v21 = .unknown
    v21[1] = "MIN_VALUE";
} catch(v22) {
}
}
%NeverOptimizeFunction(main);
main();
