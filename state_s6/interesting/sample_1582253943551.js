function main() {
const v10 = [-536870912];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v27 = {set:gc,get:gc};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v29 = Object.defineProperty(v10,5,v27);
// v29 = .undefined
const v34 = {set:Object,get:gc};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v36 = Object.defineProperty(Object,"b",v34);
// v36 = .undefined
}
%NeverOptimizeFunction(main);
main();
