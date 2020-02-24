function main() {
let v1 = 0;
const v6 = new Uint8ClampedArray(16);
// v6 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
const v7 = new Uint16Array(v6);
// v7 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
const v8 = new Uint8Array(v7);
// v8 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
const v10 = [13.37];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v11 = v10;
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
const v19 = v8.set(v11,v1);
// v19 = .undefined
}
%NeverOptimizeFunction(main);
main();
