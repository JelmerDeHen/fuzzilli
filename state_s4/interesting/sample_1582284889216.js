function main() {
let v2 = WeakMap;
const v5 = v2[13.37];
// v5 = .unknown
const v6 = {construct:v5,set:v5,getPrototypeOf:v5,get:v5,preventExtensions:v5,ownKeys:v5,has:v5};
// v6 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "get", "set", "preventExtensions", "has", "ownKeys", "construct"])
const v7 = [-818856.343871029,-818856.343871029];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = [v6,13.37,"split",v7];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = new Uint8ClampedArray(v10);
// v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
const v14 = Uint16Array[Function];
// v14 = .unknown
const v15 = v12.sort(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
