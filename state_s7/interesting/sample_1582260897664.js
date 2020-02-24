function main() {
const v1 = typeof -4294967295;
// v1 = .string
const v3 = v1 === "boolean";
// v3 = .boolean
const v4 = "boolean" && v3;
// v4 = .boolean
const v6 = new Uint16Array(v1);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
const v7 = typeof v6;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = [1337,Promise];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = {e:13.37,valueOf:v12,__proto__:v14,toString:v14,a:v12,d:v12};
// v16 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "d", "valueOf", "toString"])
let v17 = v15;
const v18 = {e:Promise,__proto__:1337,d:Uint16Array,...v4,...v12,...v17,...v6};
// v18 = .object(ofGroup: Object, withProperties: ["buffer", "length", "constructor", "__proto__", "byteLength", "d", "byteOffset", "e"], withMethods: ["findIndex", "toString", "includes", "copyWithin", "unshift", "concat", "pop", "values", "set", "keys", "some", "map", "sort", "slice", "find", "flatMap", "filter", "splice", "reduceRight", "flat", "reverse", "lastIndexOf", "join", "every", "forEach", "indexOf", "entries", "reduce", "toLocaleString", "push", "fill", "shift", "subarray"])
}
%NeverOptimizeFunction(main);
main();
