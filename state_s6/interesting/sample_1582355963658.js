function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {e:Uint16Array,length:1000,valueOf:"Tf1a2HPzId",constructor:"Tf1a2HPzId",b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "constructor", "__proto__", "e", "b"])
const v8 = new Uint8ClampedArray(v5);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
v8.constructor = Int32Array;
const v11 = v8.slice(-42667988,2117265137);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["join", "reduce", "keys", "fill", "every", "set", "reduceRight", "values", "find", "reverse", "copyWithin", "filter", "sort", "subarray", "includes", "lastIndexOf", "findIndex", "some", "slice", "entries", "indexOf", "forEach", "map"])
}
%NeverOptimizeFunction(main);
main();
