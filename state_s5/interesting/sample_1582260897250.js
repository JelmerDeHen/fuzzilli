function main() {
const v1 = typeof -4294967295;
// v1 = .string
const v3 = v1 === "boolean";
// v3 = .boolean
const v4 = "boolean" && v3;
// v4 = .boolean
const v6 = new Uint16Array(v1);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["buffer", "byteOffset", "length", "byteLength", "__proto__", "constructor"], withMethods: ["join", "slice", "sort", "reduceRight", "reverse", "forEach", "values", "some", "findIndex", "find", "keys", "map", "filter", "fill", "set", "includes", "subarray", "reduce", "indexOf", "entries", "every", "copyWithin", "lastIndexOf"])
const v7 = typeof v6;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = [1337,Promise];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = {e:13.37,valueOf:v12,__proto__:v14,toString:v14,a:v12,d:v12};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "a", "valueOf", "toString"])
let v17 = v15;
const v18 = {e:Promise,__proto__:1337,d:Uint16Array,...v4,...v12,...v17,...v6};
// v18 = .object(ofGroup: Object, withProperties: ["byteLength", "constructor", "byteOffset", "e", "__proto__", "length", "d", "buffer"], withMethods: ["flat", "reduceRight", "includes", "lastIndexOf", "every", "entries", "indexOf", "shift", "find", "toLocaleString", "reverse", "some", "map", "toString", "pop", "copyWithin", "fill", "push", "reduce", "unshift", "values", "splice", "concat", "filter", "slice", "sort", "set", "forEach", "keys", "join", "flatMap", "subarray", "findIndex"])
}
%NeverOptimizeFunction(main);
main();
