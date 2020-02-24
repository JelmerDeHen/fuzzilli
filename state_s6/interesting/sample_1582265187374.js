function main() {
const v1 = typeof 13.37;
// v1 = .string
const v3 = v1 === "object";
// v3 = .boolean
const v12 = [-536870912];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {set:gc,get:gc};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v17 = Object.defineProperty(v12,5,v15);
// v17 = .undefined
const v18 = (1337)[v17];
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
