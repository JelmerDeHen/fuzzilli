function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {e:Uint16Array,length:1000,valueOf:"Tf1a2HPzId",constructor:"Tf1a2HPzId",b:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "length", "valueOf", "constructor"])
const v8 = new Uint8ClampedArray(v5);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
v8.constructor = Int32Array;
const v11 = v8.slice(-42667988,2117265137);
// v11 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["some", "reverse", "find", "map", "keys", "findIndex", "filter", "every", "subarray", "indexOf", "join", "reduce", "values", "set", "entries", "forEach", "reduceRight", "slice", "lastIndexOf", "includes", "fill", "copyWithin", "sort"])
}
%NeverOptimizeFunction(main);
main();
