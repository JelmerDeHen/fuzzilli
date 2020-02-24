function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37,v6,v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {toString:v6,e:v4,length:255,valueOf:1337,d:"undefined",constructor:255};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "__proto__", "d", "toString", "constructor"])
const v10 = {valueOf:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v13 = new Int8Array(536870912);
// v13 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v16 = v13.slice(1024,234126503);
// v16 = .object(ofGroup: Int8Array, withProperties: ["buffer", "constructor", "byteOffset", "length", "__proto__", "byteLength"], withMethods: ["indexOf", "reduce", "join", "map", "lastIndexOf", "every", "findIndex", "forEach", "entries", "values", "fill", "includes", "reverse", "slice", "filter", "sort", "find", "keys", "copyWithin", "set", "some", "subarray", "reduceRight"])
let v17 = 13.37;
const v21 = [1337,1337,1337,1337,"d"];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v25 = [-2887278826,1337,"FV.x+lA7RO"];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v27(v28,v29) {
    let v31 = 0;
    const v32 = "Nz76fg+VWn" + 1;
    // v32 = .primitive
    v31 = v32;
    const v33 = v25[v32];
    // v33 = .unknown
    this.valueOf = v31;
    const v36 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "defineProperty", "get", "preventExtensions", "construct", "isExtensible", "deleteProperty", "getOwnPropertyDescriptor", "getPrototypeOf", "ownKeys", "set"])
    const v38 = new ArrayBuffer(gc,v36);
    // v38 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v38.toString = valueOf;
}
for (let v43 = 0; v43 < 100; v43++) {
    const v44 = v27();
    // v44 = .unknown
}
const v47 = new Uint8Array(1337);
// v47 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
const v49 = v47.slice(v21,1000);
// v49 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "buffer", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "forEach", "set", "reduce", "reduceRight", "map", "subarray", "find", "every", "findIndex", "filter", "indexOf", "fill", "includes", "join", "entries", "some", "keys", "lastIndexOf", "values", "slice", "sort", "reverse"])
const v53 = new Int16Array(1337);
// v53 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
v53.constructor = Uint8Array;
const v55 = v53.slice(Uint8Array,234126503);
// v55 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "byteLength", "constructor", "length", "byteOffset"], withMethods: ["reduce", "fill", "subarray", "find", "keys", "filter", "some", "indexOf", "join", "findIndex", "entries", "slice", "reverse", "copyWithin", "sort", "includes", "map", "every", "lastIndexOf", "values", "reduceRight", "forEach", "set"])
}
%NeverOptimizeFunction(main);
main();
