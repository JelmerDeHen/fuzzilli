function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
