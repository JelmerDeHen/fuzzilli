function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,"function",v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {length:-4294967297,c:v4,valueOf:v4,b:WeakSet,e:13.37,a:-4294967297,toString:"function"};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "e", "toString", "c", "length", "a", "__proto__"])
const v9 = {a:v7,c:v6,__proto__:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a"])
let v10 = v8;
const v13 = new Float64Array(6992);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
let v15 = DataView;
let v16 = v13;
const v21 = [1337,1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v22(v23,v24,v25,v26) {
    'use strict'
    const v29 = Symbol.e;
    // v29 = .unknown
    const v30 = Symbol[v29];
    // v30 = .unknown
    const v31 = {__proto__:v30,get:v30};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v33 = new Proxy(Reflect,v31);
    // v33 = .unknown
    function v34(v35,v36) {
        const v37 = new Float64Array(v24);
        // v37 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "length", "buffer", "byteLength", "constructor", "__proto__"], withMethods: ["lastIndexOf", "forEach", "find", "indexOf", "copyWithin", "filter", "every", "some", "reduceRight", "join", "values", "reduce", "includes", "reverse", "entries", "slice", "map", "sort", "set", "keys", "subarray", "findIndex", "fill"])
        return Symbol;
    }
    let v40 = 0;
    while (v40 < 7) {
        const v41 = v40 + 1;
        // v41 = .primitive
        v40 = v41;
    }
    const v45 = new Int16Array(45655);
    // v45 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    Object.__proto__ = v33;
    return "function";
}
const v47 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,has:v15};
// v47 = .object(ofGroup: Object, withProperties: ["has", "setPrototypeOf", "__proto__"], withMethods: ["getPrototypeOf", "get", "set", "ownKeys", "preventExtensions", "isExtensible", "construct", "deleteProperty", "call"])
const v49 = new Proxy(v21,v47);
// v49 = .unknown
v49[1] = "MIN_VALUE";
const v50 = new Proxy(v16,Object);
// v50 = .unknown
for (const v51 in v50) {
}
}
%NeverOptimizeFunction(main);
main();
