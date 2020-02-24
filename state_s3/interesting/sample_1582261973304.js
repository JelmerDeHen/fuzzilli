function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {toString:Boolean};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["toString"])
const v6 = Object.defineProperty(v2,3582212648,v4);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
