function main() {
const v3 = {defineProperty:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,set:gc,apply:gc,deleteProperty:gc,preventExtensions:gc,getPrototypeOf:gc,isExtensible:gc,has:gc,call:gc};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "isExtensible", "deleteProperty", "preventExtensions", "defineProperty", "has", "apply", "call", "set", "ownKeys", "getOwnPropertyDescriptor"])
const v5 = new Proxy(gc,v3);
// v5 = .unknown
const v6 = v3.__proto__;
// v6 = .object()
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v12 = {__proto__:v8,e:"nWUAzvJB8n",constructor:v10,a:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "constructor"])
const v13 = {c:13.37,toString:v8,e:v11,constructor:v10,length:v12,a:v10};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "a", "e", "c", "constructor", "__proto__", "length"])
let v14 = v6;
if (v5) {
    const v15 = new v5(v12);
    // v15 = .object()
    v14 = v15;
} else {
    const v17 = {set:gc,get:gc};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v19 = Object.defineProperty(v12,"valueOf",v17);
    // v19 = .undefined
    v14 = "valueOf";
}
v5.valueOf = v12;
const v20 = v5 >> v14;
// v20 = .integer
let v21 = gc;
const v25 = [13.37,13.37,13.37,13.37];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v26 = [Map,v25,13.37,"function"];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v29 = new Uint32Array(16123);
// v29 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
const v30 = v12[16123];
// v30 = .unknown
const v31 = 13.37 in v5;
// v31 = .boolean
const v32 = v13.__proto__;
// v32 = .object()
const v33 = v26[129];
// v33 = .unknown
const v34 = v29.sort(v33);
// v34 = .undefined
}
%NeverOptimizeFunction(main);
main();
