function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,-65536,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [v3,-65536,Int16Array,Int16Array];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {e:Int16Array,constructor:v5};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor"])
const v8 = {length:13.37,__proto__:1337,constructor:Int16Array,a:v3};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "length"])
let v9 = v7;
const v11 = [13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = [1337,1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v17(v18,v19,v20,v21) {
    'use strict'
    function v24(v25,v26,v27,v28,v29) {
    }
    const v31 = {get:v24};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v33 = Object.preventExtensions(this,"b",v31);
    // v33 = .object()
    const v34 = [13.37,13.37,13.37,13.37,13.37];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v36 = [1337,v34,13.37,1337];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v40 = Object.freeze(this,"d",v36);
    // v40 = .undefined
    let v41 = v40;
    const v42 = v3.every(v24);
    // v42 = .boolean
    const v43 = this[-65536];
    // v43 = .unknown
    const v44 = {set:v17};
    // v44 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v45 = v17 && "MIN_VALUE";
    // v45 = .boolean
    let v46 = v41;
    const v49 = new Proxy(v46,v13);
    // v49 = .unknown
    const v50 = Object.isSealed(v49);
    // v50 = .boolean
    try {
        v21[3] = v21;
    } catch(v51) {
        const v53 = {};
        // v53 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v56 = "species";
        const v57 = new Proxy(v53,Reflect);
        // v57 = .unknown
    }
}
const v58 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v58 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getPrototypeOf", "deleteProperty", "isExtensible", "has", "ownKeys", "set", "get", "preventExtensions", "call", "construct"])
const v60 = new Proxy(v16,v58);
// v60 = .unknown
v60[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
