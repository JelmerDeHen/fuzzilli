function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {c:13.37,e:Infinity,constructor:v4,length:1,__proto__:1337};
// v5 = .object(ofGroup: Object, withProperties: ["e", "constructor", "length", "c", "__proto__"])
const v9 = new Uint32Array(v5);
// v9 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
v9.constructor = Float32Array;
const v11 = v9.slice(Uint8Array,234126503);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "constructor", "buffer", "byteOffset", "length", "byteLength"], withMethods: ["forEach", "every", "reduce", "entries", "filter", "join", "lastIndexOf", "some", "findIndex", "values", "subarray", "map", "keys", "reverse", "reduceRight", "sort", "set", "copyWithin", "find", "includes", "slice", "indexOf", "fill"])
}
%NeverOptimizeFunction(main);
main();
