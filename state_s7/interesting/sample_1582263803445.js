function main() {
let v3 = 0;
let v6 = 0;
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        v23[3] = v23;
    } catch(v24) {
    }
    const v25 = [];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v26(v27,v28) {
        let v32 = 0;
        const v33 = v32 + 1;
        // v33 = .primitive
        v32 = v33;
    }
    const v35 = v26(1337,v25);
    // v35 = .unknown
}
const v36 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "isExtensible", "has", "get", "construct", "getPrototypeOf", "ownKeys", "call", "set", "setPrototypeOf"])
const v38 = new Proxy(v18,v36);
// v38 = .unknown
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
