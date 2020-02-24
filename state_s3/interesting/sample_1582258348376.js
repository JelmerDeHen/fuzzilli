function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = v1[1024];
// v3 = .unknown
const v6 = {get:v3};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v8 = Object.defineProperty(Object,-1243385935,v6);
// v8 = .undefined
Object[-4294967296] = 5;
}
%NeverOptimizeFunction(main);
main();
