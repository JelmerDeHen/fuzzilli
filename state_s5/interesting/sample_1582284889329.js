function main() {
let v2 = WeakMap;
const v5 = v2[13.37];
// v5 = .unknown
const v6 = {construct:v5,set:v5,getPrototypeOf:v5,get:v5,preventExtensions:v5,ownKeys:v5,has:v5};
// v6 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "ownKeys", "__proto__", "set", "construct", "preventExtensions", "has"])
const v7 = [-818856.343871029,-818856.343871029];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = [v6,13.37,"split",v7];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = new Uint8ClampedArray(v10);
// v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v14 = Uint16Array[Function];
// v14 = .unknown
const v15 = v12.sort(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
