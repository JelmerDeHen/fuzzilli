function main() {
try {
    const v3 = [1337,1337,1337,1337,1337];
    // v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v4(v5,v6,v7,v8) {
        'use strict'
        const v10 = {has:String,set:v4,getOwnPropertyDescriptor:String,preventExtensions:v8,defineProperty:v4,construct:String,isExtensible:v6,deleteProperty:v4,ownKeys:v7};
        // v10 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "preventExtensions", "ownKeys"], withMethods: ["has", "deleteProperty", "set", "defineProperty", "construct", "getOwnPropertyDescriptor"])
        let v12 = String;
        const v17 = [388895.60760907806,v12,388895.60760907806];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v18 = RegExp(v17,..."unscopable",v17,5);
        // v18 = .object()
    }
    const v19 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "set", "ownKeys", "deleteProperty", "preventExtensions", "has", "call", "construct", "isExtensible", "setPrototypeOf"])
    const v21 = new Proxy(v3,v19);
    // v21 = .unknown
    v21[1] = "MIN_VALUE";
} catch(v22) {
}
}
%NeverOptimizeFunction(main);
main();
