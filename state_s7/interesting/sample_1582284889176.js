function main() {
let v2 = WeakMap;
const v5 = v2[13.37];
// v5 = .unknown
const v6 = {construct:v5,set:v5,getPrototypeOf:v5,get:v5,preventExtensions:v5,ownKeys:v5,has:v5};
// v6 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "ownKeys", "construct", "preventExtensions", "__proto__", "set", "get", "has"])
const v7 = [-818856.343871029,-818856.343871029];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = [v6,13.37,"split",v7];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = new Uint8ClampedArray(v10);
// v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
const v14 = Uint16Array[Function];
// v14 = .unknown
const v15 = v12.sort(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
