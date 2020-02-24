function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "valueOf", "__proto__"])
const v8 = {get:gc};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v10 = Object.defineProperty(v4,"toString",v8);
// v10 = .undefined
}
%NeverOptimizeFunction(main);
main();
