function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    const v11 = {a:isFinite};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    let v16 = 0;
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v21 = v16 + 1;
    // v21 = .primitive
    v16 = v21;
    const v23 = [1337,v11,1337,1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v24(v25,v26) {
        function v27(v28,v29) {
        }
        function v30(v31,v32,v33) {
        }
        const v36 = new Uint16Array(1000);
        // v36 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        try {
            const v39 = {get:v27,set:v30};
            // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v41 = Object.defineProperty(v36,4294967297,v39);
            // v41 = .undefined
        } catch(v42) {
            const v43 = {__proto__:v42,a:v27,...v36,...4294967296,...v42,...v36};
            // v43 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["find", "lastIndexOf", "a", "reduce", "every", "sort", "indexOf", "join", "forEach", "values", "includes", "subarray", "reduceRight", "slice", "copyWithin", "fill", "keys", "entries", "set", "findIndex", "some", "filter", "map", "reverse"])
        }
    }
    const v44 = v23.forEach(v24,1337);
    // v44 = .undefined
}
const v45 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:1337,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v45 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["deleteProperty", "isExtensible", "construct", "ownKeys", "has", "getPrototypeOf", "set", "setPrototypeOf", "call", "preventExtensions"])
const v47 = new Proxy(v4,v45);
// v47 = .unknown
v47[1] = "MIN_VALUE";
const v51 = [13.37];
// v51 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v53 = [1337,1337,1337,1337,1337];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v54 = [Int8Array,"HAgvbffXpy",6];
// v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v55 = {__proto__:"HAgvbffXpy",toString:Int8Array,valueOf:v54,b:v51};
// v55 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "valueOf"])
const v56 = v54.__proto__;
// v56 = .object()
const v58 = [Proxy,v45];
// v58 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v59(v60,v61) {
    v61.toString = v47;
    return v60;
}
const v62 = {d:Int8Array,__proto__:1337,toString:1337,valueOf:6,constructor:13.37};
// v62 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "toString", "__proto__", "constructor"])
let v63 = v62;
const v68 = [1337,1337,1337,1337,1337];
// v68 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v69 = 13.37 || v68;
// v69 = .boolean
const v70 = ["6eRBNoBZtm",129,13.37];
// v70 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v71 = {d:1337,c:"6eRBNoBZtm",valueOf:129};
// v71 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "c"])
let v72 = v70;
const v74 = [];
// v74 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v76 = new Uint8ClampedArray(6992);
// v76 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v77 = v74.__proto__;
// v77 = .object()
v77.__proto__ = v76;
v77[v72] = v71;
v74.a = v74;
const v78 = v5();
// v78 = .unknown
}
%NeverOptimizeFunction(main);
main();
