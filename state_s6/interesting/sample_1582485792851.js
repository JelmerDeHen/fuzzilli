function main() {
const v2 = new Proxy(Object,Object);
// v2 = .unknown
const v3 = Object.freeze(v2);
// v3 = .undefined
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = v7;
const v11 = Reflect.set(v8,"name",NaN,Object);
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
