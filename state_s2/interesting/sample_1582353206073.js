function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [v5,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {e:1337,valueOf:v5,toString:"function",__proto__:v6,length:v3};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "toString", "length"])
const v8 = {b:v7,e:v5,a:Set,constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["e", "constructor", "a", "__proto__", "b"])
const v11 = new Uint32Array(v3);
// v11 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
v11.constructor = Uint8Array;
const v13 = v11.slice(v8,1337);
// v13 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "constructor", "buffer", "byteOffset", "length", "byteLength"], withMethods: ["forEach", "every", "reduce", "entries", "filter", "join", "lastIndexOf", "some", "findIndex", "values", "subarray", "map", "keys", "reverse", "reduceRight", "sort", "set", "copyWithin", "find", "includes", "slice", "indexOf", "fill"])
}
%NeverOptimizeFunction(main);
main();
