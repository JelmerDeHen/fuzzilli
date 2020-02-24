function main() {
let v2 = WeakMap;
const v5 = v2[13.37];
// v5 = .unknown
const v6 = {construct:v5,set:v5,getPrototypeOf:v5,get:v5,preventExtensions:v5,ownKeys:v5,has:v5};
// v6 = .object(ofGroup: Object, withProperties: ["preventExtensions", "set", "__proto__", "construct", "ownKeys", "getPrototypeOf", "has", "get"])
const v7 = [-818856.343871029,-818856.343871029];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = [v6,13.37,"split",v7];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = new Uint8ClampedArray(v10);
// v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
const v14 = Uint16Array[Function];
// v14 = .unknown
const v15 = v12.sort(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
