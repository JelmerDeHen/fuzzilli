function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337,1337,"d"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
const v11 = v9.slice(v5,65535);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteOffset", "constructor", "byteLength", "buffer"], withMethods: ["values", "findIndex", "copyWithin", "fill", "every", "some", "keys", "forEach", "find", "reduceRight", "reverse", "entries", "indexOf", "filter", "includes", "map", "reduce", "lastIndexOf", "sort", "join", "subarray", "slice", "set"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = {b:v13};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v15 = {d:v14,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
// v15 = .object(ofGroup: Object, withProperties: ["e", "length", "valueOf", "__proto__", "d", "a"])
const v16 = v15.fill(v11,v11,Float32Array,v5);
// v16 = .unknown
const v17 = typeof Float32Array;
// v17 = .string
const v19 = v17 === "undefined";
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
