function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [Number,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {b:1337,__proto__:1337,c:1337,e:-4294967296,d:1337,a:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "a", "c", "b"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v4;
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v14(v15,v16) {
    function v19(v20,v21) {
        for (const v23 in "boolean") {
            let v26 = -128;
            while (v26 < 5) {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            }
        }
        return v20;
    }
    const v30 = gc(...arguments);
    // v30 = .undefined
    let v33 = DataView;
    const v36 = [1337,1337,1337,1337,1337];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v37(v38,v39,v40,v41) {
        'use strict'
        const v44 = Symbol.e;
        // v44 = .unknown
        const v45 = Symbol[v44];
        // v45 = .unknown
        const v46 = {__proto__:v45,get:v45};
        // v46 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
        const v48 = new Proxy(Reflect,v46);
        // v48 = .unknown
        Object.__proto__ = v48;
    }
    const v50 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:1337,has:v33};
    // v50 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "has", "__proto__"], withMethods: ["preventExtensions", "getPrototypeOf", "isExtensible", "construct", "set", "deleteProperty", "get", "ownKeys", "call"])
    const v52 = new Proxy(v36,v50);
    // v52 = .unknown
    v52[1] = "MIN_VALUE";
    const v53 = [1337];
    // v53 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v54 = v53;
    const v55 = v19(v54);
    // v55 = .unknown
    const v56 = gc(...arguments);
    // v56 = .undefined
    const v57 = arguments + 1;
    // v57 = .primitive
    let v60 = 0;
    while (v60 < 1337) {
        const v61 = v60 + 1;
        // v61 = .primitive
        v60 = v61;
    }
    return v9;
}
const v62 = v13.sort(v14);
// v62 = .undefined
const v63 = {};
// v63 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v64 = [v63,v63,v63,v63,v63];
// v64 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v65 = v9 < v13;
// v65 = .boolean
const v66 = gc();
// v66 = .undefined
}
%NeverOptimizeFunction(main);
main();
