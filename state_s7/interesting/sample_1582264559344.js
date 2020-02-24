function main() {
const v3 = new Int16Array(19873);
// v3 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = [v4,v4,v4,v4,v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = new Uint8Array(v3);
// v6 = .object(ofGroup: Uint8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["copyWithin", "includes", "reduceRight", "reverse", "indexOf", "fill", "findIndex", "set", "subarray", "sort", "forEach", "slice", "entries", "filter", "join", "every", "some", "keys", "lastIndexOf", "reduce", "values", "find", "map"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = typeof v5;
// v11 = .string
const v13 = v11 === "boolean";
// v13 = .boolean
}
%NeverOptimizeFunction(main);
main();
