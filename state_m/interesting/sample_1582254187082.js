function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "valueOf", "d"])
const v8 = {get:gc};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v10 = Object.defineProperty(v4,"toString",v8);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
