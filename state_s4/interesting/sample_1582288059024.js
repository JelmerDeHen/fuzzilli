function main() {
const v3 = {defineProperty:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,set:gc,apply:gc,deleteProperty:gc,preventExtensions:gc,getPrototypeOf:gc,isExtensible:gc,has:gc,call:gc};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "isExtensible", "ownKeys", "call", "set", "preventExtensions", "defineProperty", "getOwnPropertyDescriptor", "deleteProperty", "has", "getPrototypeOf"])
const v5 = new Proxy(gc,v3);
// v5 = .unknown
const v6 = v3.__proto__;
// v6 = .object()
const v8 = [13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = {__proto__:v8,e:"nWUAzvJB8n",constructor:v10,a:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "e"])
const v13 = {c:13.37,toString:v8,e:v11,constructor:v10,length:v12,a:v10};
// v13 = .object(ofGroup: Object, withProperties: ["a", "constructor", "c", "__proto__", "e", "toString", "length"])
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
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v26 = [Map,v25,13.37,"function"];
// v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v29 = new Uint32Array(16123);
// v29 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
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
