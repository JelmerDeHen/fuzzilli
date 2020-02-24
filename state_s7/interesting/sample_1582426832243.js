function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1974158221];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [13.37,13.37,v4,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:1974158221,__proto__:v7,valueOf:1000,toString:"number",constructor:1974158221};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "c", "toString"])
const v9 = {c:1974158221,__proto__:v4,toString:13.37,constructor:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "c"])
let v10 = Function;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
const v17 = new Uint8Array(126575717);
// v17 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
v17.constructor = Uint16Array;
const v19 = v17.slice(v13,234126503);
// v19 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "length", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["sort", "filter", "set", "lastIndexOf", "entries", "some", "slice", "forEach", "reduce", "values", "findIndex", "copyWithin", "map", "includes", "reverse", "reduceRight", "join", "subarray", "fill", "keys", "every", "find", "indexOf"])
const v23 = [-2887278826,1337,"FV.x+lA7RO"];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v25(v26,v27) {
    let v29 = 0;
    const v30 = "Nz76fg+VWn" + 1;
    // v30 = .primitive
    v29 = v30;
    const v31 = v23[v30];
    // v31 = .unknown
    this.valueOf = v29;
    const v34 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "defineProperty", "get", "apply", "isExtensible", "preventExtensions", "ownKeys", "construct", "getPrototypeOf", "getOwnPropertyDescriptor"])
    const v36 = new ArrayBuffer(gc,v34);
    // v36 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v36.toString = valueOf;
}
for (let v41 = 0; v41 < 100; v41++) {
    const v42 = v25();
    // v42 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
