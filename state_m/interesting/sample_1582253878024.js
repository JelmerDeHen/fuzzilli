function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v18 = "object".constructor;
// v18 = .function()
"object"[Reflect] = v12;
const v20 = v18(v11,v5,"symbol",Reflect);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
