function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v2(v3,v4,v5,v6) {
    'use strict'
    try {
        v6[3] = v6;
    } catch(v7) {
        let v11 = 1337;
        const v13 = [13.37,"b"];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v16 = [eval,13.37,v13];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v17 = v4;
        const v19 = {get:eval};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v21 = Object.freeze(v16,1337,v19);
        // v21 = .undefined
        const v23 = v16.indexOf(v11,v17,v16,"name","isConcatSpreadable");
        // v23 = .integer
    }
}
const v24 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "ownKeys", "set", "isExtensible", "deleteProperty", "construct", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "get", "has"])
const v26 = new Proxy(v1,v24);
// v26 = .unknown
v26[1] = v26;
}
%NeverOptimizeFunction(main);
main();
