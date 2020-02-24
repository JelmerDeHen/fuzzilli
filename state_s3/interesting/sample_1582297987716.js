function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:13.37,length:v6,b:v4,c:Uint32Array,constructor:-571380215,e:v6,d:"undefined"};
// v8 = .object(ofGroup: Object, withProperties: ["b", "toString", "constructor", "__proto__", "c", "e", "length", "d"])
const v9 = {length:v8,__proto__:v7,e:v6,toString:v6,b:v7,constructor:v4};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "length", "b", "e"])
let v10 = v7;
const v13 = new Float64Array(6992);
// v13 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
let v15 = DataView;
let v16 = v13;
const v21 = [1337,1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v22(v23,v24,v25,v26) {
    'use strict'
    const v29 = Symbol.e;
    // v29 = .unknown
    const v30 = Symbol[v29];
    // v30 = .unknown
    const v31 = {__proto__:v30,get:v30};
    // v31 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v33 = new Proxy(Reflect,v31);
    // v33 = .unknown
    Object.__proto__ = v33;
    return v13;
}
const v35 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:1337,has:v15};
// v35 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "setPrototypeOf"], withMethods: ["isExtensible", "ownKeys", "get", "deleteProperty", "construct", "getPrototypeOf", "call", "set", "preventExtensions"])
const v37 = new Proxy(v21,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
const v38 = new Proxy(v16,Object);
// v38 = .unknown
for (const v39 in v38) {
}
let v42 = 0;
while (v42 < 1) {
    const v43 = v42 + 1;
    // v43 = .primitive
    v42 = v43;
}
const v44 = v22(1337,Proxy,0,Uint32Array);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
