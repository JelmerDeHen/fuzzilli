function main() {
const v1 = typeof -4294967295;
// v1 = .string
const v3 = v1 === "boolean";
// v3 = .boolean
const v4 = "boolean" && v3;
// v4 = .boolean
const v6 = new Uint16Array(v1);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
const v7 = typeof v6;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [1337,Promise];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = {e:13.37,valueOf:v12,__proto__:v14,toString:v14,a:v12,d:v12};
// v16 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "toString", "a", "d", "__proto__"])
let v17 = v15;
const v18 = {e:Promise,__proto__:1337,d:Uint16Array,...v4,...v12,...v17,...v6};
// v18 = .object(ofGroup: Object, withProperties: ["byteLength", "byteOffset", "constructor", "d", "buffer", "length", "e", "__proto__"], withMethods: ["toLocaleString", "reverse", "flat", "indexOf", "flatMap", "slice", "reduceRight", "splice", "some", "find", "values", "forEach", "entries", "includes", "every", "findIndex", "lastIndexOf", "toString", "filter", "unshift", "subarray", "fill", "set", "map", "join", "push", "concat", "pop", "keys", "copyWithin", "sort", "reduce", "shift"])
}
%NeverOptimizeFunction(main);
main();
