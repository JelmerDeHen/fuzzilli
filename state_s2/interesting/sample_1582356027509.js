function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {e:Uint16Array,length:1000,valueOf:"Tf1a2HPzId",constructor:"Tf1a2HPzId",b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "b", "valueOf", "e"])
const v8 = new Uint8ClampedArray(v5);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
v8.constructor = Int32Array;
const v11 = v8.slice(-42667988,2117265137);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "length", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "reverse", "reduce", "lastIndexOf", "sort", "join", "map", "keys", "find", "entries", "copyWithin", "slice", "forEach", "includes", "indexOf", "every", "set", "some", "values", "reduceRight", "fill", "filter", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
