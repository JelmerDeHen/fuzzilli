function main() {
const v1 = {set:Object,get:Object};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v5 = [1337,1337,1337,"object"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {d:gc,valueOf:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
}
%NeverOptimizeFunction(main);
main();
