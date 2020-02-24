function main() {
let v3 = undefined;
const v5 = {__proto__:536870912};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v9 = 0;
const v16 = [Uint8ClampedArray,1000000000.0,-3012315156,1000000000.0];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v18 = 1337;
const v19 = v18[-2147483647];
// v19 = .unknown
const v20 = new Int16Array(v16);
// v20 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v21 = v20.sort(v19);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
