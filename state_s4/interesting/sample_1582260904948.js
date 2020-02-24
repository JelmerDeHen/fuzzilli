function main() {
const v1 = typeof -4294967295;
// v1 = .string
const v3 = v1 === "boolean";
// v3 = .boolean
const v4 = "boolean" && v3;
// v4 = .boolean
const v6 = new Uint16Array(v1);
// v6 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
const v7 = typeof v6;
// v7 = .string
const v9 = v7 === "undefined";
// v9 = .boolean
const v12 = [13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = [1337,Promise];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = {e:13.37,valueOf:v12,__proto__:v14,toString:v14,a:v12,d:v12};
// v16 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "valueOf", "a", "d"])
let v17 = v15;
const v18 = {e:Promise,__proto__:1337,d:Uint16Array,...v4,...v12,...v17,...v6};
// v18 = .object(ofGroup: Object, withProperties: ["byteLength", "byteOffset", "length", "e", "__proto__", "d", "buffer", "constructor"], withMethods: ["pop", "filter", "copyWithin", "flatMap", "concat", "map", "keys", "includes", "find", "unshift", "forEach", "toString", "slice", "every", "toLocaleString", "push", "reduce", "reverse", "entries", "subarray", "fill", "findIndex", "join", "values", "some", "set", "splice", "shift", "reduceRight", "sort", "flat", "lastIndexOf", "indexOf"])
}
%NeverOptimizeFunction(main);
main();
