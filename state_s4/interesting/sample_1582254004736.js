function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = {valueOf:v4,__proto__:Array,b:v2,toString:v5,constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "constructor", "b"], withMethods: ["__proto__"])
}
%NeverOptimizeFunction(main);
main();
