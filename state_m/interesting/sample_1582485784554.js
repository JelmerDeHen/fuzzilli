function main() {
const v2 = new Proxy(Object,Object);
// v2 = .unknown
const v3 = Object.freeze(v2);
// v3 = .undefined
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v8 = v7;
const v11 = Reflect.set(v8,"name",NaN,Object);
// v11 = .boolean
}
%NeverOptimizeFunction(main);
main();
