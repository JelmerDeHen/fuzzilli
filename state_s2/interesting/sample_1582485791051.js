function main() {
const v2 = new Proxy(Object,Object);
// v2 = .unknown
const v3 = Object.freeze(v2);
// v3 = .undefined
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v8 = v7;
const v11 = Reflect.set(v8,"name",NaN,Object);
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
