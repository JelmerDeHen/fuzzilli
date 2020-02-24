function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = {valueOf:v4,__proto__:Array,b:v2,toString:v5,constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "b", "toString", "__proto__"], withMethods: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
