function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [1337,1337,13.37,4294967297];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:Int8Array,toString:v6,d:1337,a:1337,b:v6,e:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "toString", "a", "e", "c"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v6;
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
    const v33 = Symbol.unscopables;
    // v33 = .unknown
    const v34 = v8[v33];
    // v34 = .unknown
    const v36 = new Proxy(Reflect,v31);
    // v36 = .unknown
    const v42 = {length:13.37,c:13.37,__proto__:Boolean};
    // v42 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c"], withMethods: ["__proto__"])
    const v45 = [1337,v42];
    // v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v46 = ["iterator","iterator"];
    // v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    try {
        const v47 = v45.toLocaleString(v46);
        // v47 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    } catch(v48) {
    }
    let v51 = 0;
    let v54 = 0;
    const v55 = v54 + 1;
    // v55 = .primitive
    v54 = v55;
    const v56 = v51 + 1;
    // v56 = .primitive
    v51 = v56;
    const v60 = [-171524.5743045921,65535,-0.0];
    // v60 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    v60[255] = 0;
    isFinite.__proto__ = v36;
    return v8;
}
const v61 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,toString:v15};
// v61 = .object(ofGroup: Object, withProperties: ["toString", "setPrototypeOf", "__proto__"], withMethods: ["ownKeys", "isExtensible", "preventExtensions", "deleteProperty", "call", "set", "getPrototypeOf", "construct", "get"])
const v63 = new Proxy(v21,v61);
// v63 = .unknown
v63[1] = "MIN_VALUE";
const v64 = new Proxy(v16,Object);
// v64 = .unknown
for (const v65 in v64) {
    const v66 = {};
    // v66 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v67 = [v66,v66,v66,v66,v66];
    // v67 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v68 = Proxy[13.37];
    // v68 = .unknown
    const v71 = new Uint8ClampedArray(64984);
    // v71 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
}
}
%NeverOptimizeFunction(main);
main();
