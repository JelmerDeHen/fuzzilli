function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = {valueOf:v1,__proto__:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v4 = 13.37;
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        v12[3] = v12;
        const v13 = v2();
        // v13 = .unknown
        const v14 = v13[-2900725722];
        // v14 = .unknown
        const v16 = [863175818];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v17 = v16;
        let v19 = undefined;
        let v22 = 0;
        const v24 = !v10;
        // v24 = .boolean
        let v25 = v4;
        for (const v26 in v14) {
            const v28 = Symbol.search;
            // v28 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        }
    } catch(v29) {
        const v31 = [13.37,13.37,13.37,13.37];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v32 = {construct:v29};
        // v32 = .object(ofGroup: Object, withProperties: ["__proto__", "construct"])
        const v34 = new Proxy(v29,v32);
        // v34 = .unknown
        v34[-1538058963] = 13.37;
    }
}
const v35 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "set", "deleteProperty", "ownKeys", "isExtensible", "get", "call", "preventExtensions", "construct", "has", "setPrototypeOf"])
const v37 = new Proxy(v7,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
