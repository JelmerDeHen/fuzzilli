function main() {
const v2 = new Proxy(Object,Object);
// v2 = .unknown
const v3 = Object.freeze(v2);
// v3 = .undefined
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v8 = v7;
const v11 = Reflect.set(v8,"name",NaN,Object);
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
