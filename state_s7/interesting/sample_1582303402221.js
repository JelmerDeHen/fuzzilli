function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = RegExp;
    let v10 = v9;
    const v13 = new Proxy(v10,Object);
    // v13 = .unknown
    const v14 = Object.isSealed(v13);
    // v14 = .boolean
    try {
        v7[3] = v7;
    } catch(v15) {
        const v17 = {};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v20 = "species";
        const v21 = new Proxy(v17,Reflect);
        // v21 = .unknown
        const v23 = [1337];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v25 = 13.37;
    }
}
const v26 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "setPrototypeOf", "has", "getPrototypeOf", "set", "call", "get", "isExtensible", "construct", "preventExtensions"])
const v28 = new Proxy(v2,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
