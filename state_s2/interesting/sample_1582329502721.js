function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v7(v8,v9,v10,v11) {
    'use strict'
    function v14(v15,v16,v17,v18,v19) {
    }
    const v21 = {get:v14};
    // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v23 = Object.preventExtensions(this,"b",v21);
    // v23 = .object()
    const v24 = [13.37,13.37,13.37,13.37,13.37];
    // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v26 = [1337,v24,13.37,1337];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v30 = Object.freeze(this,"d",v26);
    // v30 = .undefined
    let v31 = v30;
    let v32 = v31;
    const v35 = new Proxy(v32,Object);
    // v35 = .unknown
    const v36 = Object.isSealed(v35);
    // v36 = .boolean
    try {
        v11[3] = v11;
    } catch(v37) {
        const v39 = {};
        // v39 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v42 = "species";
        const v43 = new Proxy(v39,Reflect);
        // v43 = .unknown
        const v45 = [1337];
        // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v47 = 13.37;
    }
}
const v48 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "construct", "call", "ownKeys", "preventExtensions", "has", "setPrototypeOf", "set", "isExtensible", "deleteProperty"])
const v50 = new Proxy(v6,v48);
// v50 = .unknown
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
