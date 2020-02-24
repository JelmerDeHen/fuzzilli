function main() {
const v1 = typeof -4294967295;
// v1 = .string
const v3 = v1 === "boolean";
// v3 = .boolean
const v4 = "boolean" && v3;
// v4 = .boolean
const v6 = new Uint16Array(v1);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "constructor", "byteOffset"], withMethods: ["findIndex", "sort", "set", "entries", "lastIndexOf", "filter", "slice", "map", "forEach", "values", "indexOf", "reduceRight", "keys", "find", "subarray", "join", "reverse", "includes", "every", "some", "reduce", "copyWithin", "fill"])
const v7 = typeof v6;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v15 = [1337,Promise];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v16 = {e:13.37,valueOf:v12,__proto__:v14,toString:v14,a:v12,d:v12};
// v16 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "a", "e", "d", "__proto__"])
let v17 = v15;
const v18 = {e:Promise,__proto__:1337,d:Uint16Array,...v4,...v12,...v17,...v6};
// v18 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "byteLength", "d", "byteOffset", "buffer", "e", "constructor"], withMethods: ["join", "every", "indexOf", "splice", "values", "toLocaleString", "pop", "subarray", "keys", "toString", "copyWithin", "slice", "shift", "entries", "unshift", "map", "set", "filter", "push", "flat", "reverse", "concat", "flatMap", "reduceRight", "findIndex", "find", "fill", "forEach", "some", "reduce", "includes", "lastIndexOf", "sort"])
}
%NeverOptimizeFunction(main);
main();
