function main() {
let v2 = WeakMap;
const v5 = v2[13.37];
// v5 = .unknown
const v6 = {construct:v5,set:v5,getPrototypeOf:v5,get:v5,preventExtensions:v5,ownKeys:v5,has:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "ownKeys", "preventExtensions", "set", "getPrototypeOf", "get", "construct"])
const v7 = [-818856.343871029,-818856.343871029];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = [v6,13.37,"split",v7];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = new Uint32Array(v10);
// v12 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
const v14 = Uint16Array[Function];
// v14 = .unknown
const v15 = v12.sort(v14);
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
