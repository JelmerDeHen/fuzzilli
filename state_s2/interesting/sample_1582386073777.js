function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = [1337,1337,1337,1337,"d"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = new Uint8Array(1337);
// v9 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
const v11 = v9.slice(v5,65535);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteOffset", "constructor", "byteLength", "length", "__proto__"], withMethods: ["values", "fill", "forEach", "reduceRight", "lastIndexOf", "join", "every", "subarray", "reverse", "some", "keys", "copyWithin", "indexOf", "includes", "findIndex", "find", "sort", "map", "reduce", "filter", "slice", "entries", "set"])
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {b:v13};
// v14 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v15 = {d:v14,length:3253023065,valueOf:1337,a:13.37,e:3253023065,__proto__:v2};
// v15 = .object(ofGroup: Object, withProperties: ["e", "length", "a", "__proto__", "d", "valueOf"])
const v16 = v15.fill(v11,v11,Float32Array,v5);
// v16 = .unknown
const v17 = typeof Float32Array;
// v17 = .string
const v19 = v17 === "undefined";
// v19 = .boolean
}
%NeverOptimizeFunction(main);
main();
